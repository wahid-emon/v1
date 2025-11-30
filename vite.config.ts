import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Allows usage of process.env.API_KEY in client-side code
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});