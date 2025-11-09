// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig(({ mode }) => ({
// 사용자 저장소명이 my-todo 라면:
base: '/my-todo/',
plugins: [react()],
}))