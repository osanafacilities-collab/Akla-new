import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { exec } from 'child_process';
import {defineConfig, Plugin} from 'vite';

function imageUploadPlugin(): Plugin {
  return {
    name: 'image-upload-handler',
    configureServer(server) {
      server.middlewares.use('/api/save-site-content', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => body += chunk);
          req.on('end', () => {
            try {
              const publicDir = path.resolve(__dirname, 'public');
              const srcDataDir = path.resolve(__dirname, 'src/data');
              const distDir = path.resolve(__dirname, 'dist');

              if (!fs.existsSync(publicDir)) {
                fs.mkdirSync(publicDir, { recursive: true });
              }
              if (!fs.existsSync(srcDataDir)) {
                fs.mkdirSync(srcDataDir, { recursive: true });
              }

              // 1. Write to public/site-content.json
              fs.writeFileSync(path.join(publicDir, 'site-content.json'), body, 'utf-8');

              // 2. Write to src/data/siteContent.json
              fs.writeFileSync(path.join(srcDataDir, 'siteContent.json'), body, 'utf-8');

              // 3. Write to dist/site-content.json if dist exists
              if (fs.existsSync(distDir)) {
                fs.writeFileSync(path.join(distDir, 'site-content.json'), body, 'utf-8');
              }

              // 4. Update the deploy zip with the new content
              exec('python3 scripts/make_zip.py', (err) => {
                if (err) {
                  console.warn('Zip rebuild warning:', err);
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, timestamp: Date.now() }));
              });
            } catch (e: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: e?.message || 'Failed to save site content' }));
            }
          });
        } else {
          res.writeHead(405);
          res.end();
        }
      });

      server.middlewares.use('/api/upload-category-image', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => body += chunk);
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const filename = data.filename || '1789572800511.png';
              const base64Data = data.base64.replace(/^data:image\/\w+;base64,/, '');
              const buffer = Buffer.from(base64Data, 'base64');
              const publicDir = path.resolve(__dirname, 'public');
              if (!fs.existsSync(publicDir)) {
                fs.mkdirSync(publicDir, { recursive: true });
              }
              const targetPath = path.join(publicDir, filename);
              fs.writeFileSync(targetPath, buffer);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, path: '/' + filename }));
            } catch (e: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: e?.message || 'Failed to save image' }));
            }
          });
        } else {
          res.writeHead(405);
          res.end();
        }
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), imageUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
