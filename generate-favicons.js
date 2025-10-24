const sharp = require('sharp');
const fs = require('fs');

// Read the SVG file
const svg = fs.readFileSync('favicon.svg', 'utf8');

// Generate different sized PNG favicons
async function generateFavicons() {
  try {
    // 16x16 favicon
    await sharp(Buffer.from(svg))
      .resize(16, 16)
      .png()
      .toFile('favicon-16x16.png');
    console.log('Generated favicon-16x16.png');

    // 32x32 favicon
    await sharp(Buffer.from(svg))
      .resize(32, 32)
      .png()
      .toFile('favicon-32x32.png');
    console.log('Generated favicon-32x32.png');

    // 180x180 Apple touch icon
    await sharp(Buffer.from(svg))
      .resize(180, 180)
      .png()
      .toFile('apple-touch-icon.png');
    console.log('Generated apple-touch-icon.png');

    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
