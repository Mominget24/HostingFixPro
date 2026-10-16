import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = '0.0.0.0';

// Serve static directory with .html extension support
app.use(express.static(__dirname, {
  extensions: ['html'],
  maxAge: '1h'
}));

// Route fallback for direct clean URLs
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`HostVerdict static authority platform running on http://${HOST}:${PORT}`);
});
