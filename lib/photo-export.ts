export type ExportPhoto = {
  src: string;
  label?: string;
};

export type ExportOptions = {
  width?: number;
  height?: number;
  background?: string;
  gap?: number;
  radius?: number;
  padding?: number;
  quality?: number;
};

/**
 * Export the four Photo Booth frames as one finished composite.
 * The selected background is painted first, then the four photos are placed
 * in a 2x2 grid. This keeps the background behind the complete result.
 */
export async function exportFourPhotoComposite(
  photos: ExportPhoto[],
  options: ExportOptions = {}
): Promise<Blob> {
  if (photos.length !== 4) {
    throw new Error("Photo Booth export requires exactly 4 photos.");
  }

  const width = options.width ?? 1600;
  const height = options.height ?? 1200;
  const gap = options.gap ?? 28;
  const padding = options.padding ?? 56;
  const radius = options.radius ?? 34;
  const background = options.background ?? "#f7d9ed";

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not available.");

  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  const cellW = (width - padding * 2 - gap) / 2;
  const cellH = (height - padding * 2 - gap) / 2;

  const images = await Promise.all(
    photos.map(
      (photo) =>
        new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error(`Unable to load ${photo.src}`));
          img.src = photo.src;
        })
    )
  );

  const positions = [
    [padding, padding],
    [padding + cellW + gap, padding],
    [padding, padding + cellH + gap],
    [padding + cellW + gap, padding + cellH + gap],
  ];

  images.forEach((img, i) => {
    const [x, y] = positions[i];
    ctx.save();
    roundRect(ctx, x, y, cellW, cellH, radius);
    ctx.clip();

    const scale = Math.max(cellW / img.width, cellH / img.height);
    const drawW = img.width * scale;
    const drawH = img.height * scale;
    const dx = x + (cellW - drawW) / 2;
    const dy = y + (cellH - drawH) / 2;
    ctx.drawImage(img, dx, dy, drawW, drawH);
    ctx.restore();
  });

  return canvasToBlob(canvas, options.quality ?? 0.94);
}

/**
 * Export each of the four frames independently.
 */
export async function exportIndividualPhotos(
  photos: ExportPhoto[],
  quality = 0.94
): Promise<Blob[]> {
  if (photos.length !== 4) {
    throw new Error("Photo Booth export requires exactly 4 photos.");
  }

  return Promise.all(
    photos.map(
      (photo) =>
        new Promise<Blob>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth || img.width;
            canvas.height = img.naturalHeight || img.height;
            const ctx = canvas.getContext("2d");
            if (!ctx) return reject(new Error("Canvas is not available."));
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(
              (blob) => (blob ? resolve(blob) : reject(new Error("Export failed."))),
              "image/png",
              quality
            );
          };
          img.onerror = () => reject(new Error(`Unable to load ${photo.src}`));
          img.src = photo.src;
        })
    )
  );
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function canvasToBlob(canvas: HTMLCanvasElement, quality: number) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("Export failed."))),
      "image/png",
      quality
    );
  });
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
