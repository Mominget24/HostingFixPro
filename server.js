import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = '0.0.0.0';

// Aggressive cache-busting headers so preview and iframe reload immediately
app.use((req, res, next) => {
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate, proxy-revalidate, max-age=0',
    'Pragma': 'no-cache',
    'Expires': '0',
    'Surrogate-Control': 'no-store'
  });
  next();
});

// Serve static directory with .html extension support and zero cache
app.use(express.static(__dirname, {
  extensions: ['html'],
  etag: false,
  lastModified: false,
  maxAge: 0
}));

// Route fallback for direct clean URLs
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`HostMarc platform active on http://${HOST}:${PORT}`);
});
