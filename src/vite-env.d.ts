/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string       // 你的自定义环境变量
  readonly VITE_APP_TITLE: string          // 更多变量...
  // 其他环境变量...
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
declare module '@/views/*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 扩展全局模块声明
declare module '*.css' {
  const styles: { [className: string]: string }
  export default styles
}

declare module '*.scss' {
  const styles: { [key: string]: string }
  export = styles
}
