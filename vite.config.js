import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: "/src",
            views: "/src/views",
            components: "/src/components",
            assets: "/src/assets",
            utils: "/src/utils",
        },
    },
});