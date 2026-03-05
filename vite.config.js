import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Sikh History",
        short_name: "SikhHistory",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#2563eb",
        icons: [
          {
            src: "/webLogo.jpg",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/webLogo.jpg",
            sizes: "512x512",
            type: "image/jpg"
          }
        ]
      }
    })
  ]
});