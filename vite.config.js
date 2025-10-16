import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// PUBLIC_INTERFACE
export default defineConfig(({ mode }) => {
  /**
   * Vite config
   * - Binds to all interfaces for containerized environments
   * - Fixes dev server host blocking by allowing the preview host
   * - Uses PORT env if available, otherwise defaults to 3000
   */
  const env = loadEnv(mode, process.cwd(), '');
  const envPort = Number(env.PORT);
  const port = Number.isFinite(envPort) && envPort > 0 ? envPort : 3000;

  // Host that needs to be allowed for preview/resume environments
  const previewHost = 'vscode-internal-16360-beta.beta01.cloud.kavia.ai';

  return {
    plugins: [react()],
    server: {
      // Listen on all interfaces; 'true' is also acceptable, but '0.0.0.0' is explicit.
      host: true,
      port: 3000, // enforce port 3000 as requested
      strictPort: true,
      // Ensure the host is permitted to avoid "host not allowed" errors
      allowedHosts: [previewHost]
    },
    preview: {
      host: '0.0.0.0',
      port: port
    }
  };
});
