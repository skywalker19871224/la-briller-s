import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const MAX_DIMENSION = 1600;
const QUALITY = 80;

const directories = [
  'public/images/cases',
  'public/assets/images',
  'public/assets/ig',
  'public/assets/ig/before-after',
];

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        await convertAndResize(fullPath, ext);
      }
    }
  }
}

async function convertAndResize(filePath, ext) {
  const parsedPath = path.parse(filePath);
  const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Skip if already webp (e.g., if we run this twice)
    if (metadata.format === 'webp') return;

    let pipeline = image;

    // Resize if larger than MAX_DIMENSION
    if (metadata.width > MAX_DIMENSION || metadata.height > MAX_DIMENSION) {
      if (metadata.width > metadata.height) {
        pipeline = pipeline.resize({ width: MAX_DIMENSION, withoutEnlargement: true });
      } else {
        pipeline = pipeline.resize({ height: MAX_DIMENSION, withoutEnlargement: true });
      }
    }

    await pipeline.webp({ quality: QUALITY }).toFile(webpPath);
    console.log(`Converted: ${filePath} -> ${webpPath}`);

    // Optionally delete original to save space. We will not delete for safety unless necessary,
    // but the prompt suggests WebP/AVIF is the goal and we will use webp.
    // fs.unlinkSync(filePath); // Leave original for now
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function main() {
  console.log('Starting image optimization...');
  for (const dir of directories) {
    await processDirectory(dir);
  }
  console.log('Image optimization complete.');
}

main();
