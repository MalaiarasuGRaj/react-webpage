import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// PUBLIC_INTERFACE
export default defineConfig(({ mode }) => {
  /** This Vite config sets host to 0.0.0.0 and uses PORT env if available. */
  const env = loadEnv(mode, process.cwd(), '');
  const port = Number(env.PORT) || 3000;

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port
    },
    preview: {
      host: '0.0.0.0',
      port
    }
  };
});
