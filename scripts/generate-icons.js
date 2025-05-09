const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create a simple blue circle icon
const svgContent = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#3B82F6"/>
  <circle cx="256" cy="256" r="192" fill="white"/>
  <circle cx="256" cy="256" r="128" fill="#3B82F6"/>
</svg>
`;

const sizes = {
  'favicon.ico': [16, 32, 48],
  'icon-192x192.png': [192],
  'icon-512x512.png': [512]
};

async function generateIcons() {
  // Ensure the icons directory exists
  const iconsDir = path.join(__dirname, '../public/icons');
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  // Write the SVG file
  fs.writeFileSync(path.join(iconsDir, 'icon.svg'), svgContent);
  
  for (const [filename, sizeList] of Object.entries(sizes)) {
    const outputPath = path.join(iconsDir, filename);
    
    if (filename.endsWith('.ico')) {
      // For ICO, we'll create a PNG first and then convert it
      const pngBuffer = await sharp(Buffer.from(svgContent))
        .resize(32, 32)
        .png()
        .toBuffer();
      
      fs.writeFileSync(outputPath, pngBuffer);
    } else {
      // For PNG files
      await sharp(Buffer.from(svgContent))
        .resize(sizeList[0], sizeList[0])
        .png()
        .toFile(outputPath);
    }
  }
}

generateIcons().catch(console.error); 