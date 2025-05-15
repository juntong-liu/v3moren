// src/env.d.ts
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
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