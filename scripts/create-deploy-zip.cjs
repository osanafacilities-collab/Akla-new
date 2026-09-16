const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

function zipDirectory(sourceDir, outPath) {
  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = fs.createWriteStream(outPath);

  return new Promise((resolve, reject) => {
    archive
      .directory(sourceDir, false)
      .on('error', err => reject(err))
      .pipe(stream);

    stream.on('close', () => {
      const stats = fs.statSync(outPath);
      console.log(`Successfully packed ${outPath} (${(stats.size / 1024).toFixed(1)} KB)`);
      resolve();
    });
    archive.finalize();
  });
}

const distDir = path.join(__dirname, 'dist');
const publicDir = path.join(__dirname, 'public');

// Copy .htaccess into public as well so future builds preserve it
if (fs.existsSync(path.join(distDir, '.htaccess'))) {
  fs.copyFileSync(path.join(distDir, '.htaccess'), path.join(publicDir, '.htaccess'));
}

const outZipPublic = path.join(publicDir, 'akla-foodstuff-hostinger-deploy.zip');
const outZipRoot = path.join(__dirname, 'akla-foodstuff-hostinger-deploy.zip');

zipDirectory(distDir, outZipPublic)
  .then(() => {
    fs.copyFileSync(outZipPublic, outZipRoot);
    console.log('Zip generated in both public/ and project root.');
  })
  .catch(err => {
    console.error('Error creating zip:', err);
    process.exit(1);
  });
