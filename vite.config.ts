import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Serve photos_data from project root at /photos_data (dev + production)
    {
      name: 'serve-photos-data',
      configureServer(server) {
        server.middlewares.use('/photos_data', (req, res, next) => {
          const url = req.url?.split('?')[0] || '/';
          const filePath = path.join(process.cwd(), 'photos_data', path.basename(url));
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            res.setHeader('Content-Type', 'image/png');
            fs.createReadStream(filePath).pipe(res);
          } else {
            next();
          }
        });
      },
      // Copy photos_data into dist at build so images work in production
      closeBundle() {
        const outDir = path.join(process.cwd(), 'dist');
        const dest = path.join(outDir, 'photos_data');
        const src = path.join(process.cwd(), 'photos_data');
        if (fs.existsSync(src)) {
          fs.mkdirSync(dest, { recursive: true });
          for (const name of fs.readdirSync(src)) {
            const srcFile = path.join(src, name);
            if (fs.statSync(srcFile).isFile()) {
              fs.copyFileSync(srcFile, path.join(dest, name));
            }
          }
        }
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
