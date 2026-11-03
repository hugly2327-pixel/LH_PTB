export type StoredPhoto = { id:string; src:string; createdAt:number; expiresAt:number; name?:string };

const DB_NAME = 'ptb-photo-studio-v3';
const STORE = 'photos';
const TTL = 30 * 60 * 1000;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve,reject)=>{
    const req = indexedDB.open(DB_NAME,1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE,{keyPath:'id'});
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function purgeExpiredPhotos(now=Date.now()): Promise<void> {
  const db = await openDB();
  await new Promise<void>((resolve,reject)=>{
    const tx=db.transaction(STORE,'readwrite'); const store=tx.objectStore(STORE); const req=store.openCursor();
    req.onsuccess=()=>{const c=req.result as IDBCursorWithValue|null; if(!c){return;} if((c.value as StoredPhoto).expiresAt<=now)c.delete(); c.continue();};
    tx.oncomplete=()=>resolve(); tx.onerror=()=>reject(tx.error);
  }); db.close();
}

export async function getPhotos(): Promise<StoredPhoto[]> {
  await purgeExpiredPhotos(); const db=await openDB();
  return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly'); const req=tx.objectStore(STORE).getAll(); req.onsuccess=()=>{db.close(); resolve((req.result as StoredPhoto[]).sort((a,b)=>b.createdAt-a.createdAt));}; req.onerror=()=>{db.close(); reject(req.error)};});
}

export async function savePhoto(photo: Omit<StoredPhoto,'expiresAt'>): Promise<StoredPhoto> {
  const item={...photo,expiresAt:photo.createdAt+TTL}; const db=await openDB();
  return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite'); tx.objectStore(STORE).put(item); tx.oncomplete=()=>{db.close();resolve(item)}; tx.onerror=()=>{db.close();reject(tx.error)}});
}
export async function deletePhoto(id:string){const db=await openDB(); return new Promise<void>((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).delete(id);tx.oncomplete=()=>{db.close();resolve()};tx.onerror=()=>{db.close();reject(tx.error)}})}
export async function clearPhotos(){const db=await openDB(); return new Promise<void>((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).clear();tx.oncomplete=()=>{db.close();resolve()};tx.onerror=()=>{db.close();reject(tx.error)}})}
export const PHOTO_TTL_MS=TTL;
