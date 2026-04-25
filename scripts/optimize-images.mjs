// One-shot image optimizer.
// Backs up the original public/* image to _image-backups/* (outside public/,
// gitignored, NOT deployed) before writing the optimized version.
// Re-running is safe — the backup is only created once per file.
//
// Usage: node scripts/optimize-images.mjs

import sharp from 'sharp';
import { mkdir, copyFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = resolve(__dirname, '..', 'public');
const BACKUP_DIR = resolve(__dirname, '..', '_image-backups');

await mkdir(BACKUP_DIR, { recursive: true });

const TARGETS = [
  // Hero photo: small, square, multiple sizes for responsive srcset.
  // Astro <Image> will pick the right one — but we also write a single
  // baseline file so the public/ reference remains valid.
  {
    input: 'tshirtw.png',
    outputs: [
      // Source is already square (5400x5400) so use 'inside' to avoid cropping.
      // High quality + lossless alpha for clean transparent edges in the circular crop.
      { name: 'tshirtw.webp', resize: { width: 800, height: 800, fit: 'inside' }, format: 'webp', quality: 92 },
      // JPG fallback (flattened on dark bg) for browsers without WebP or when the webp fails to load.
      { name: 'tshirtw.jpg',  resize: { width: 800, height: 800, fit: 'inside' }, format: 'jpeg', quality: 88, flatten: '#0a0a0a' },
    ],
  },
  // OG image: must be 1200x630 per Open Graph spec.
  {
    input: 'og-image.png',
    outputs: [
      { name: 'og-image.jpg', resize: { width: 1200, height: 630, fit: 'cover' }, format: 'jpeg', quality: 85 },
    ],
  },
  // Twitter card: 1200x630 also (summary_large_image).
  {
    input: 'twitter-card.png',
    outputs: [
      { name: 'twitter-card.jpg', resize: { width: 1200, height: 630, fit: 'cover' }, format: 'jpeg', quality: 85 },
    ],
  },
];

function fmt(bytes) {
  if (bytes > 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  if (bytes > 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${bytes} B`;
}

let totalSaved = 0;

for (const target of TARGETS) {
  // Prefer the original from the backup dir if it exists (re-runs after the
  // public/ copy was already replaced/deleted). Otherwise, take it from
  // public/ and back it up.
  const backupPath = join(BACKUP_DIR, target.input);
  const publicPath = join(PUBLIC_DIR, target.input);
  let inputPath;

  if (existsSync(backupPath)) {
    inputPath = backupPath;
  } else if (existsSync(publicPath)) {
    await copyFile(publicPath, backupPath);
    console.log(`  ✓ Backed up ${target.input} → _image-backups/`);
    inputPath = publicPath;
  } else {
    console.warn(`⚠  Skipping ${target.input} — not found in public/ or _image-backups/`);
    continue;
  }

  const beforeBytes = (await stat(inputPath)).size;

  for (const out of target.outputs) {
    const outputPath = join(PUBLIC_DIR, out.name);
    let pipeline = sharp(inputPath).resize(out.resize);

    // Optional flatten onto a solid background (kills alpha — used for JPG)
    if (out.flatten) {
      pipeline = pipeline.flatten({ background: out.flatten });
    }

    if (out.format === 'webp') {
      await pipeline.webp({ quality: out.quality }).toFile(outputPath);
    } else if (out.format === 'jpeg') {
      await pipeline.jpeg({ quality: out.quality, mozjpeg: true }).toFile(outputPath);
    } else if (out.format === 'avif') {
      await pipeline.avif({ quality: out.quality }).toFile(outputPath);
    }

    const afterBytes = (await stat(outputPath)).size;
    const saved = beforeBytes - afterBytes;
    totalSaved += saved;

    console.log(
      `  ✓ ${target.input} → ${out.name}  ${fmt(beforeBytes)} → ${fmt(afterBytes)}  (saved ${fmt(saved)})`,
    );
  }
}

console.log(`\nTotal saved: ${fmt(totalSaved)}`);
console.log('Originals are in _image-backups/ (gitignored, not deployed).');
