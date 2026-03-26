// Central API base URL - reads from .env file (VITE_API_URL)
// For local dev: set VITE_API_URL=http://localhost:5000 in frontend/.env
// For production: set VITE_API_URL=https://your-backend.up.railway.app in your hosting env vars
export const API_BASE = import.meta.env.VITE_API_URL || "https://steelblue-goat-719113.hostingersite.com";
