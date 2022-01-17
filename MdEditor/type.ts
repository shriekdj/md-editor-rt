import { CSSProperties, ReactElement } from 'react';

declare global {
  interface Window {
    hljs: any;
    prettier: any;
    prettierPlugins: any;
    Cropper: any;
    screenfull: any;
    mermaid: any;
    katex: any;
  }
}

export interface ToolbarTips {
  bold?: string;
  underline?: string;
  italic?: string;
  strikeThrough?: string;
  title?: string;
  sub?: string;
  sup?: string;
  quote?: string;
  unorderedList?: string;
  orderedList?: string;
  codeRow?: string;
  code?: string;
  link?: string;
  image?: string;
  table?: string;
  mermaid?: string;
  katex?: string;
  revoke?: string;
  next?: string;
  save?: string;
  prettier?: string;
  pageFullscreen?: string;
  fullscreen?: string;
  catalog?: string;
  preview?: string;
  htmlPreview?: string;
  github?: string;
  '-'?: string;
  '='?: string;
}

export interface StaticTextDefaultValue {
  toolbarTips?: ToolbarTips;
  titleItem?: {
    h1?: string;
    h2?: string;
    h3?: string;
    h4?: string;
    h5?: string;
    h6?: string;
  };
  imgTitleItem?: {
    link: string;
    upload: string;
    clip2upload: string;
  };
  linkModalTips?: {
    title?: string;
    descLable?: string;
    descLablePlaceHolder?: string;
    urlLable?: string;
    UrlLablePlaceHolder?: string;
    buttonOK?: string;
  };
  clipModalTips?: {
    title?: string;
    buttonUpload?: string;
  };
  copyCode?: {
    text?: string;
    tips?: string;
  };
  mermaid?: {
    // 流程图
    flow?: string;
    // 时序图
    sequence?: string;
    // 甘特图
    gantt?: string;
    // 类图
    class?: string;
    // 状态图
    state?: string;
    // 饼图
    pie?: string;
    // 关系图
    relationship?: string;
    // 旅程图
    journey?: string;
  };
  katex?: {
    inline: string;
    block: string;
  };
}

export interface StaticTextDefault {
  'zh-CN': StaticTextDefaultValue;
  'en-US': StaticTextDefaultValue;
}

export type StaticTextDefaultKey = keyof StaticTextDefault;

export type ToolbarNames = keyof ToolbarTips;

export interface SettingType {
  pageFullScreen: boolean;
  fullscreen: boolean;
  preview: boolean;
  htmlPreview: boolean;
}

export interface HeadList {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export type PreviewThemes = 'default' | 'github' | 'vuepress';

// marked heading方法
export type MarkedHeading = (
  text: string,
  level: 1 | 2 | 3 | 4 | 5 | 6,
  raw: string,
  // marked@2.1.3
  slugger: {
    seen: { [slugValue: string]: number };
    slug(
      value: string,
      options?: {
        dryrun: boolean;
      }
    ): string;
  }
) => string;

export type MarkedHeadingId = (text: string, level: number) => string;

export interface EditorProp {
  modelValue: string;
  // 主题，默认light
  theme: 'light' | 'dark';
  // 外层扩展类名
  editorClass: string;
  // 如果项目中有使用highlight.js或者没有外网访问权限，可以直接传递实例hljs并且手动导入css
  hljs?: any;
  // 可以手动提供highlight.js的cdn链接
  highlightJs: string;
  highlightCss: string;
  // 历史记录最长条数，默认10
  historyLength: number;
  // input回调事件
  onChange: (v: string) => void;
  // 保存事件
  onSave?: (v: string) => void;
  // 上传图片事件
  onUploadImg?: (files: FileList, callBack: (urls: string[]) => void) => void;
  // 是否页面内全屏，默认false
  pageFullScreen: boolean;
  // 是否展开预览，默认true
  preview: boolean;
  // 是否展开html预览，默认false
  htmlPreview: boolean;
  // 仅预览模式，不显示toolbar和编辑框，默认false
  previewOnly: boolean;
  // 预设语言名称
  language: StaticTextDefaultKey | string;
  // 语言扩展，以标准的形式定义内容，设置language为key值即可替换
  languageUserDefined?: { [key: string]: StaticTextDefaultValue };
  // 工具栏选择显示
  toolbars: Array<ToolbarNames>;
  // 工具栏选择不显示
  toolbarsExclude: Array<ToolbarNames>;
  // 格式化md，默认true
  prettier: boolean;
  prettierCDN: string;
  prettierMDCDN: string;
  // html变化事件
  onHtmlChanged?: (h: string) => void;
  // 图片裁剪对象
  Cropper?: any;
  // 图片裁剪
  cropperCss: string;
  cropperJs: string;
  // 图标
  iconfontJs: string;
  // 获取目录结构
  onGetCatalog?: (list: HeadList[]) => void;
  // 编辑器唯一标识
  editorId: string;
  tabWidth: number;
  // 预览中代码是否显示行号
  showCodeRowNumber: boolean;
  screenfull?: any;
  screenfullJs: string;
  // 预览内容样式
  previewTheme: PreviewThemes;
  markedHeading: MarkedHeading;
  markedHeadingId: MarkedHeadingId;
  // 编辑器样式
  style: CSSProperties;
  // 表格预设格子数
  tableShape: [number, number];
  // mermaid实例
  mermaid?: any;
  // mermaid script链接
  mermaidJs: string;
  // 不使用该功能
  noMermaid?: boolean;
  // 不能保证文本正确的情况，在marked编译md文本后通过该方法处理
  // 推荐DOMPurify、sanitize-html
  sanitize: (html: string) => string;
  placeholder: string;
  // katex实例
  katex?: any;
  // katex script链接
  katexJs: string;
  katexCss: string;
  noKatex?: boolean;
  // 自定义的工具栏列表
  defToolbars?: Array<DefiendToolbar>;
}

export interface ContentType {
  editorId: string;
  tabWidth: number;
  historyLength: number;
  previewOnly: boolean;
  showCodeRowNumber: boolean;
  usedLanguageText: StaticTextDefaultValue;
  Cropper: any;
  theme: 'light' | 'dark';
  previewTheme: PreviewThemes;
}

export interface NormalToolbar {
  type: 'normal';
  name: string;
  title?: string;
  // 工具栏显示内容，这通常是个图标
  trigger: ReactElement;
  // 点击事件
  onClick: () => void;
}

export interface DropdownToolbar {
  // 工具栏类型，dropdown类型会要求提供控制下拉内容的显示状态
  type: 'dropdown';
  // 必须提供名称，并在toolbar中包含该名称才能正确展示
  name: string;
  // hover提示，可以不设置
  title?: string;
  visible: boolean;
  // 工具栏显示内容，这通常是个图标
  trigger: ReactElement;
  onChange: (visible: boolean) => void;
  // 下拉列表
  overlay: ReactElement;
}

export type DefiendToolbar = NormalToolbar | DropdownToolbar;

// 自定义的工具栏
export type DefinedToolBar = Array<string>;