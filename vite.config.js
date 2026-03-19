// Copyright 2024 CanvaResume Authors
// Licensed under the Apache License, Version 2.0
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/ReumeBulider/',
    plugins: [react()],
    server: { port: 5173 }
});
