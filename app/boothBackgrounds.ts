export type BoothBackground = {
  id: string;
  name: string;
  css: string;
  colors: string[];
  kind: "linear" | "radial" | "solid";
  angle?: number;
  pattern?: "dots" | "grid" | "sparkle" | "stripes" | "hearts" | "confetti" | "kawaii" | "bows" | "flowers" | "clouds" | "cats" | "none";
};

export const BOOTH_BACKGROUNDS: BoothBackground[] = [
  { id:"white-studio", name:"Studio trắng", css:"linear-gradient(135deg,#ffffff,#f2f2f2)", colors:["#ffffff","#f2f2f2"], kind:"linear", angle:135 },
  { id:"soft-beige", name:"Beige nhẹ", css:"linear-gradient(135deg,#fff8ed,#e8d7c2)", colors:["#fff8ed","#e8d7c2"], kind:"linear", angle:135 },
  { id:"blush", name:"Blush hồng", css:"linear-gradient(135deg,#fff0f5,#f7a9c4)", colors:["#fff0f5","#f7a9c4"], kind:"linear", angle:135 },
  { id:"sakura", name:"Sakura", css:"radial-gradient(circle at 20% 20%,#fff 0 8%,transparent 9%),linear-gradient(135deg,#ffd8e8,#f49bbb)", colors:["#ffd8e8","#f49bbb"], kind:"linear", angle:135, pattern:"dots" },
  { id:"lavender", name:"Lavender", css:"linear-gradient(135deg,#f4efff,#bda8ee)", colors:["#f4efff","#bda8ee"], kind:"linear", angle:135 },
  { id:"mint", name:"Mint", css:"linear-gradient(135deg,#effff9,#9bd9c7)", colors:["#effff9","#9bd9c7"], kind:"linear", angle:135 },
  { id:"sky", name:"Bầu trời", css:"linear-gradient(135deg,#dff5ff,#83c8f4)", colors:["#dff5ff","#83c8f4"], kind:"linear", angle:135 },
  { id:"peach", name:"Peach", css:"linear-gradient(135deg,#fff1dc,#ffad8a)", colors:["#fff1dc","#ffad8a"], kind:"linear", angle:135 },
  { id:"lemon", name:"Lemon", css:"linear-gradient(135deg,#fffbd8,#f6dc65)", colors:["#fffbd8","#f6dc65"], kind:"linear", angle:135 },
  { id:"retro", name:"Retro 70s", css:"linear-gradient(135deg,#f6d4a8,#b86c5b,#5d6b57)", colors:["#f6d4a8","#b86c5b","#5d6b57"], kind:"linear", angle:135 },
  { id:"polaroid", name:"Polaroid", css:"linear-gradient(135deg,#f7f2e7,#d9d0c1)", colors:["#f7f2e7","#d9d0c1"], kind:"linear", angle:135, pattern:"dots" },
  { id:"checker", name:"Caro pastel", css:"linear-gradient(90deg,#ffffff 50%,#dcecff 50%),linear-gradient(#ffffff 50%,#dcecff 50%)", colors:["#ffffff","#dcecff"], kind:"linear", angle:0, pattern:"grid" },
  { id:"rainbow", name:"Rainbow", css:"linear-gradient(135deg,#ffb5c8,#ffd98a,#b9efc3,#a8ddff,#c9b7ff)", colors:["#ffb5c8","#ffd98a","#b9efc3","#a8ddff","#c9b7ff"], kind:"linear", angle:135 },
  { id:"midnight", name:"Midnight", css:"linear-gradient(135deg,#10152f,#3c286b)", colors:["#10152f","#3c286b"], kind:"linear", angle:135, pattern:"sparkle" },
  { id:"neon", name:"Neon", css:"linear-gradient(135deg,#111827,#7c3aed,#ec4899)", colors:["#111827","#7c3aed","#ec4899"], kind:"linear", angle:135, pattern:"sparkle" },
  { id:"disco", name:"Disco", css:"radial-gradient(circle at 20% 20%,#fff 0 2%,transparent 3%),linear-gradient(135deg,#24204b,#d22b8b)", colors:["#24204b","#d22b8b"], kind:"linear", angle:135, pattern:"sparkle" },
  { id:"wedding", name:"Wedding", css:"linear-gradient(135deg,#fff,#f2d9e3,#e7c99e)", colors:["#ffffff","#f2d9e3","#e7c99e"], kind:"linear", angle:135, pattern:"sparkle" },
  { id:"birthday", name:"Sinh nhật", css:"linear-gradient(135deg,#fff1a8,#ffb4d8,#9fdcff)", colors:["#fff1a8","#ffb4d8","#9fdcff"], kind:"linear", angle:135, pattern:"confetti" },
  { id:"coffee", name:"Coffee", css:"linear-gradient(135deg,#f1dfcf,#8c6656)", colors:["#f1dfcf","#8c6656"], kind:"linear", angle:135 },
  { id:"kraft", name:"Kraft", css:"linear-gradient(135deg,#d7b58c,#9d704d)", colors:["#d7b58c","#9d704d"], kind:"linear", angle:135, pattern:"dots" },
  { id:"tet", name:"Tết", css:"linear-gradient(135deg,#b90f2f,#e94432,#ffd45c)", colors:["#b90f2f","#e94432","#ffd45c"], kind:"linear", angle:135, pattern:"sparkle" },
  { id:"christmas", name:"Giáng sinh", css:"linear-gradient(135deg,#b51e32,#0d7548,#f0c84b)", colors:["#b51e32","#0d7548","#f0c84b"], kind:"linear", angle:135, pattern:"sparkle" },
  { id:"halloween", name:"Halloween", css:"linear-gradient(135deg,#24102d,#7c2d12,#f97316)", colors:["#24102d","#7c2d12","#f97316"], kind:"linear", angle:135, pattern:"dots" },
  { id:"valentine", name:"Valentine", css:"linear-gradient(135deg,#fff0f6,#fb7185,#be185d)", colors:["#fff0f6","#fb7185","#be185d"], kind:"linear", angle:135, pattern:"hearts" },
  { id:"summer", name:"Summer", css:"linear-gradient(135deg,#a7f3d0,#67e8f9,#fde68a)", colors:["#a7f3d0","#67e8f9","#fde68a"], kind:"linear", angle:135 },
  { id:"ocean", name:"Ocean", css:"linear-gradient(135deg,#d9f7ff,#0ea5e9,#164e63)", colors:["#d9f7ff","#0ea5e9","#164e63"], kind:"linear", angle:135, pattern:"dots" },
  { id:"forest", name:"Forest", css:"linear-gradient(135deg,#d9f99d,#166534,#052e16)", colors:["#d9f99d","#166534","#052e16"], kind:"linear", angle:135, pattern:"dots" },
  { id:"black-gold", name:"Đen vàng sang trọng", css:"linear-gradient(135deg,#090909,#252525,#d4af37)", colors:["#090909","#252525","#d4af37"], kind:"linear", angle:135, pattern:"sparkle" },

  // Cute original character-inspired backgrounds (not branded characters)
  { id:"kawaii-pink", name:"Kawaii hồng", css:"linear-gradient(135deg,#fff7fb,#ffc4dd)", colors:["#fff7fb","#ffc4dd"], kind:"linear", angle:135, pattern:"kawaii" },
  { id:"cute-cat", name:"Mèo trắng đáng yêu", css:"linear-gradient(135deg,#fffdfd,#f7d9e8)", colors:["#fffdfd","#f7d9e8"], kind:"linear", angle:135, pattern:"cats" },
  { id:"pink-bow", name:"Nơ hồng", css:"linear-gradient(135deg,#fff0f7,#f7a6c8)", colors:["#fff0f7","#f7a6c8"], kind:"linear", angle:135, pattern:"bows" },
  { id:"strawberry-milk", name:"Dâu sữa", css:"linear-gradient(135deg,#fffafa,#ffd1dc)", colors:["#fffafa","#ffd1dc"], kind:"linear", angle:135, pattern:"hearts" },
  { id:"cotton-candy", name:"Kẹo bông", css:"linear-gradient(135deg,#ffd9ec,#d8e8ff,#fff0bd)", colors:["#ffd9ec","#d8e8ff","#fff0bd"], kind:"linear", angle:135, pattern:"sparkle" },
  { id:"baby-blue", name:"Baby xanh", css:"linear-gradient(135deg,#f2fbff,#a9ddf5)", colors:["#f2fbff","#a9ddf5"], kind:"linear", angle:135, pattern:"clouds" },
  { id:"peach-bow", name:"Đào pastel", css:"linear-gradient(135deg,#fff5ee,#ffc4a9)", colors:["#fff5ee","#ffc4a9"], kind:"linear", angle:135, pattern:"bows" },
  { id:"lavender-bunny", name:"Thỏ tím pastel", css:"linear-gradient(135deg,#fbf8ff,#d9c8ff)", colors:["#fbf8ff","#d9c8ff"], kind:"linear", angle:135, pattern:"kawaii" },
  { id:"cherry-cute", name:"Cherry cute", css:"linear-gradient(135deg,#fff7f8,#ffb4c4)", colors:["#fff7f8","#ffb4c4"], kind:"linear", angle:135, pattern:"flowers" },
  { id:"milk-tea", name:"Milk tea cute", css:"linear-gradient(135deg,#fffaf2,#e9c9a9)", colors:["#fffaf2","#e9c9a9"], kind:"linear", angle:135, pattern:"dots" },
  { id:"rainbow-cloud", name:"Cầu vồng mây", css:"linear-gradient(135deg,#e9f7ff,#f7eaff,#fff5d8)", colors:["#e9f7ff","#f7eaff","#fff5d8"], kind:"linear", angle:135, pattern:"clouds" },
  { id:"flower-garden", name:"Vườn hoa", css:"linear-gradient(135deg,#fff9fb,#d9f5d0)", colors:["#fff9fb","#d9f5d0"], kind:"linear", angle:135, pattern:"flowers" },
];

export const DEFAULT_BACKGROUND = BOOTH_BACKGROUNDS[0];

export function getBoothBackground(id: string) {
  return BOOTH_BACKGROUNDS.find((b) => b.id === id) ?? DEFAULT_BACKGROUND;
}

export function paintBoothBackground(ctx: CanvasRenderingContext2D, width: number, height: number, bg: BoothBackground) {
  if (bg.kind === "solid") {
    ctx.fillStyle = bg.colors[0];
    ctx.fillRect(0, 0, width, height);
  } else {
    const angle = ((bg.angle ?? 135) - 90) * Math.PI / 180;
    const length = Math.sqrt(width * width + height * height);
    const cx = width / 2, cy = height / 2;
    const dx = Math.cos(angle) * length / 2;
    const dy = Math.sin(angle) * length / 2;
    const g = ctx.createLinearGradient(cx - dx, cy - dy, cx + dx, cy + dy);
    bg.colors.forEach((color, i) => g.addColorStop(i / Math.max(1, bg.colors.length - 1), color));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);
  }

  ctx.save();
  ctx.globalAlpha = 0.18;
  if (bg.pattern === "dots") {
    ctx.fillStyle = "#ffffff";
    for (let y = 12; y < height; y += 30) for (let x = 12; x < width; x += 30) {
      ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
    }
  } else if (bg.pattern === "grid") {
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 3;
    for (let x = 0; x < width; x += 42) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
    for (let y = 0; y < height; y += 42) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }
  } else if (bg.pattern === "sparkle") {
    ctx.fillStyle = "#fff";
    for (let y = 24; y < height; y += 80) for (let x = 20; x < width; x += 90) {
      ctx.beginPath(); ctx.moveTo(x, y - 8); ctx.lineTo(x + 3, y - 2); ctx.lineTo(x + 10, y); ctx.lineTo(x + 3, y + 3); ctx.lineTo(x, y + 10); ctx.lineTo(x - 3, y + 3); ctx.lineTo(x - 10, y); ctx.lineTo(x - 3, y - 2); ctx.closePath(); ctx.fill();
    }
  } else if (bg.pattern === "confetti") {
    const pieces = ["#fff", "#111", "#ffef6c", "#ff7aa8"];
    pieces.forEach((color, index) => {
      ctx.fillStyle = color;
      for (let i = index; i < 45; i += pieces.length) {
        const x = (i * 137) % width, y = (i * 83) % height;
        ctx.save(); ctx.translate(x, y); ctx.rotate((i % 7) * .35); ctx.fillRect(0, 0, 8, 22); ctx.restore();
      }
    });
  } else if (bg.pattern === "hearts") {
    ctx.fillStyle = "#fff";
    for (let i = 0; i < 24; i++) {
      const x = (i * 113) % width, y = (i * 71) % height;
      const s = 9;
      ctx.beginPath(); ctx.moveTo(x, y + s); ctx.bezierCurveTo(x - s * 1.5, y, x - s, y - s, x, y - s * .2); ctx.bezierCurveTo(x + s, y - s, x + s * 1.5, y, x, y + s); ctx.fill();
    }
  } else if (bg.pattern === "kawaii" || bg.pattern === "cats") {
    const cat = (x:number, y:number, s:number) => {
      ctx.save(); ctx.translate(x,y); ctx.scale(s,s);
      ctx.fillStyle = "#fff"; ctx.strokeStyle = "#7f6673"; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(-14,-8); ctx.lineTo(-11,-20); ctx.lineTo(-3,-14); ctx.quadraticCurveTo(0,-16,3,-14); ctx.lineTo(11,-20); ctx.lineTo(14,-8); ctx.quadraticCurveTo(18,5,0,12); ctx.quadraticCurveTo(-18,5,-14,-8); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#7f6673";
      ctx.beginPath(); ctx.arc(-6,-3,1.5,0,Math.PI*2); ctx.arc(6,-3,1.5,0,Math.PI*2); ctx.fill();
      ctx.strokeStyle = "#e38da8"; ctx.beginPath(); ctx.arc(0,2,3,0,Math.PI); ctx.stroke();
      ctx.restore();
    };
    for(let i=0;i<18;i++) cat(24+(i*89)%width, 28+(i*61)%height, 0.55);
    if(bg.pattern==="kawaii"){
      ctx.fillStyle="#fff"; ctx.globalAlpha=.8;
      for(let i=0;i<18;i++){const x=(i*137)%width,y=(i*83)%height;ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);ctx.fill();}
    }
  } else if (bg.pattern === "bows") {
    for(let i=0;i<20;i++){
      const x=(i*127)%width,y=(i*71)%height,s=9;
      ctx.fillStyle=i%2?"#fff":"#ffd8e7";
      ctx.beginPath();ctx.ellipse(x-s,y,s,s*.72,0,0,Math.PI*2);ctx.ellipse(x+s,y,s,s*.72,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle="#e88bab";ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);ctx.fill();
    }
  } else if (bg.pattern === "flowers") {
    for(let i=0;i<28;i++){
      const x=(i*107)%width,y=(i*73)%height,s=5;
      ctx.fillStyle=i%2?"#fff":"#ffd2e1";
      for(let k=0;k<5;k++){const a=k*Math.PI*2/5;ctx.beginPath();ctx.arc(x+Math.cos(a)*s,y+Math.sin(a)*s,s*.9,0,Math.PI*2);ctx.fill();}
      ctx.fillStyle="#f5c84c";ctx.beginPath();ctx.arc(x,y,2.5,0,Math.PI*2);ctx.fill();
    }
  } else if (bg.pattern === "clouds") {
    ctx.fillStyle="#fff";
    for(let i=0;i<15;i++){
      const x=(i*151)%width,y=22+(i*79)%height;
      ctx.beginPath();ctx.arc(x,y,10,0,Math.PI*2);ctx.arc(x+11,y+2,8,0,Math.PI*2);ctx.arc(x-10,y+3,7,0,Math.PI*2);ctx.fill();
    }
  }
  ctx.restore();
}
