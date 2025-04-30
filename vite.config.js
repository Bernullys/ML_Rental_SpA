import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
})


// vite.config.js
// import { defineConfig } from 'vite';

// export default defineConfig({
//   // Otras configuraciones de Vite aquí...

//   build: {
//     // Configuración específica para la construcción (build)
//     assetsInlineLimit: 0, // Desactivar límite de tamaño para inlining assets

//     rollupOptions: {
//       output: {
//         // Configuración de la salida (output)
//         assetFileNames: 'assets/[name]-[hash][extname]', // Ruta y nombre de los assets
//       },
//     },
//   },
// });
