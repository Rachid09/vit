import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

import vitApp from '../packages/vit/src';
import routes from './config/routes';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), vitApp({ debug: true, routes, exportStatic: {} })],
});
