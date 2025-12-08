import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
    plugins: [react(), tailwindcss()],

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },

    // In dev lascia base a '/'!
    base: process.env.NODE_ENV === "production" ? "/build/" : "/",

    build: {
        outDir: "../public/build",
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: "./src/main.jsx",
        },
    },

    server: {
        host: true, // ascolta tutte le interfacce
        port: 5173,
        cors: true,
        strictPort: true,
        origin: "http://localhost:5173",
    },
});
