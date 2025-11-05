// Copy GIF files from src/assets/gifs to public/gifs (cross-platform Node.js script)
import { copyFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = join(__dirname, '..', 'src', 'assets', 'gifs');
const destDir = join(__dirname, '..', 'public', 'gifs');

if (!existsSync(srcDir)) {
  console.error(`Source folder not found: ${srcDir}`);
  process.exit(1);
}

// Create destination directory if it doesn't exist
if (!existsSync(destDir)) {
  mkdirSync(destDir, { recursive: true });
}

// Copy all .gif files
const files = readdirSync(srcDir).filter(file => file.endsWith('.gif'));

files.forEach(file => {
  const srcPath = join(srcDir, file);
  const destPath = join(destDir, file);
  copyFileSync(srcPath, destPath);
  console.log(`Copied: ${file}`);
});

console.log(`\nCopied ${files.length} GIF file(s) from src/assets/gifs to public/gifs`);
