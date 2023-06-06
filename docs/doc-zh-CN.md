> 在线尝试示例：[传送门](https://codesandbox.io/s/elated-khorana-65jmr)。

## 🔖 MdPreview Props

这是预览组件`MdPreview`的`Props`，它们同样也是`MdEditor`的：

### 📃 modelValue

- **类型**：`string`
- **默认值**：`''`

  编辑的内容。

  ```jsx
  <MdEditor modelValue="xxx" />
  ```

---

### 🛍 theme

- **类型**：`'light' | 'dark'`
- **默认值**：`'light'`

  编辑器主题。

  ```jsx
  <MdEditor theme="dark" />
  ```

---

### 🎀 className

- **类型**：`string`
- **默认值**：`''`

  ...

---

### 🔤 language

- **类型**：`string`
- **默认值**：`'zh-CN'`

  内置中英文(`'zh-CN'`, `'en-US'`)，可自行扩展其他语言，同时可覆盖内置的中英文。

  你也可以使用现成的扩展语言：[md-editor-extension](https://github.com/imzbf/md-editor-extension)。使用及贡献方式见扩展库文档~

---

### 🎲 editorId

- **类型**：`string`
- **默认值**：`'md-editor-rt'`

  编辑器唯一标识，非必须项，服务端渲染时，防止产生服务端与客户端渲染内容不一致错误提示，以及单页面多编辑器时做区别。

---

### 🔢 showCodeRowNumber

- **类型**：`boolean`
- **默认值**：`false`

  代码块是否显示行号。

---

### 🔦 previewTheme

- **类型**：`'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'`
- **默认值**：`'default'`

  预览内容主题，支持自定义。

  主题自定义方式：

  1. 编辑 css

  ```css
  .xxx-theme {
    color: red;
  }
  ```

  2. 设置`previewTheme`

  ```jsx
  <MdEditor previewTheme="xxx" />
  ```

  参考[markdown-theme](https://github.com/imzbf/markdown-theme)项目。

---

### 🎅🏻 style

- **类型**：`CSSProperties`
- **默认值**：`{}`

  编辑器内联样式。

---

### ☝️ noMermaid

- **类型**：`boolean`
- **默认值**：`false`

  如果你不希望使用图表展示内容，可以设置关闭。

```jsx
<MdEditor noMermaid />
```

---

### ❌ noKatex

- **类型**：`boolean`
- **默认值**：`false`

  如果你不希望使用数学公式展示内容，可以设置关闭。

```jsx
<MdEditor noKatex />
```

---

### 🦉 codeTheme

- **类型**：`'atom'|'a11y'|'github'|'gradient'|'kimbie'|'paraiso'|'qtcreator'|'stackoverflow'`
- **默认值**：`'atom'`

  代码块高亮样式名称。

  你可以添加自己的样式，把该属性设置为你想要的即可，方式如下：

  1. 配置样式链接

  ```js
  import { config } from 'md-editor-rt';

  config({
    editorExtensions: {
      highlight: {
        css: {
          atom: {
            light:
              'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/atom-one-light.min.css',
            dark: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/atom-one-dark.min.css'
          },
          xxx: {
            light:
              'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/xxx-light.css',
            dark: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/xxx-dark.css'
          }
        }
      }
    }
  });
  ```

  2. 设置`codeTheme`

  ```jsx
  <MdEditor codeTheme="xxx" />
  ```

---

### 🎱 mdHeadingId

- **类型**：`(text: string, level: number, index: number) => string`
- **默认值**：`(text) => text`

  构造标题`ID`的生成方式。

  ```jsx
  import { MdEditor } from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  const mdHeadingId = (_text, _level, index) => `heading-${index}`;

  export default () => {
    return <MdEditor mdHeadingId={mdHeadingId} />;
  };
  ```

---

### 🐣 sanitize

- **类型**：`(html: string) => string`
- **默认值**：`(html) => html`

  在每次生成 html 后，通过该方法移除危险内容，比如 xss 相关，当你很确定你的内容不会出现类似情况时，不必设置它。

  使用`sanitize-html`演示

  ```jsx
  import sanitizeHtml from 'sanitize-html';
  import { MdEditor } from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  const sanitize = (html) => sanitizeHtml(html);

  export default () => {
    return <MdEditor sanitize={sanitize} />;
  };
  ```

  > 为什么不内置到编辑器：由于类似编辑器大多属于自行处理文本，自身即可确认内容是否安全，并不需要该功能。

---

### 🤞🏼 noIconfont

- **类型**：`boolean`
- **默认值**：`true`

  不插入 iconfont 链接，你可以[下载](https://at.alicdn.com/t/c/font_2605852_u82y61ve02.js)到本地自行引入。

  ```jsx
  import { MdEditor } from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  import '/assets/iconfont.js';

  export default () => {
    return <MdEditor noIconfont />;
  };
  ```

---

### 💅 formatCopiedText

- **类型**：`(text: string) => string`
- **默认值**：`(text) => text`

  格式化复制代码

  ```jsx
  import { MdEditor } from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  const formatCopiedText = (text: string) => {
    return `${text}  - from md-editor-rt`;
  };

  export default () => {
    return <MdEditor formatCopiedText={formatCopiedText} />;
  };
  ```

---

### 🛁 codeStyleReverse

- **类型**：`boolean`
- **默认值**：`true`

  某些预览主题的代码模块背景是暗色系，将这个属性设置为 true，会自动在该主题下的 light 模式下使用暗色系的代码风格。

---

### 🧼 codeStyleReverseList

- **类型**：`Array`
- **默认值**：`['default', 'mk-cute']`

  需要自动调整的预览主题，已默认包含 default、mk-cute。

---

### 🕊 noHighlight

- **类型**：`boolean`
- **默认值**：`false`

  不高亮代码，也不会加载相应的扩展库

---

## 🔩 MdEditor Props

除去和`MdPreivew`相同的以外：

### 💻 pageFullscreen

- **类型**：`boolean`
- **默认值**：`false`

  页面内全屏。

---

### 📱 preview

- **类型**：`boolean`
- **默认值**：`true`

  是否显示预览。

---

### 📀 htmlPreview

- **类型**：`boolean`
- **默认值**：`false`

  是否显示 html 预览。当设置为`true`时，需要将`preview`设置为`false`

  ```jsx
  <MdEditor htmlPreview preview={false} />
  ```

---

### 🧱 toolbars

- **类型**：`Array`
- **默认值**：`[all]`

  选择性展示工具栏，可选内容见下方。

  你可以随意排序工具栏，通过`'-'`分割两个工具，通过`'='`实现左右放置！

  _[all]_

  ```js
  [
    'bold',
    'underline',
    'italic',
    '-',
    'strikeThrough',
    'sub',
    'sup',
    'quote',
    'unorderedList',
    'orderedList',
    'task',
    '-',
    'codeRow',
    'code',
    'link',
    'image',
    'table',
    'mermaid',
    'katex',
    '-',
    'revoke',
    'next',
    'save',
    '=',
    'pageFullscreen',
    'fullscreen',
    'preview',
    'htmlPreview',
    'catalog',
    'github'
  ];

  // 对应功能名称
  [
    '加粗',
    '下划线',
    '斜体',
    '删除线',
    '下标',
    '上标',
    '引用',
    '无序列表',
    '有序列表',
    '任务',
    '行内代码',
    '块级代码',
    '链接',
    '图片',
    '表格',
    '图表',
    '公式',
    '后退一步',
    '前进一步',
    '保存',
    '页面内全屏',
    '屏幕全屏',
    '内容预览',
    'html代码预览',
    '目录',
    '源码地址'
  ];
  ```

---

### 🧱 toolbarsExclude

- **类型**：`Array`
- **默认值**：`[]`

  选择性不展示工具栏，内容同上。

---

### 💪 defToolbars

- **类型**：`Array<ReactElement>`
- **默认值**：`[]`

  自定义工具栏插槽，通过使用内置的`NormalToolbar`普通点击触发事件组件，`DropdownToolbar`下拉点击触发事件组件，和`ModalToolbar`弹窗组件进行扩展。将`defToolbars`插槽中的组件下标穿插在`toolbars`实现展示（这并不规范）

  ```jsx
  import { MdEditor, NormalToolbar } from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  const handler = () => {
    console.log('NormalToolbar clicked!');
  };

  export default () => {
    return (
      <MdEditor
        modelValue=""
        toolbars={['github', '=', 0]}
        defToolbars={[
          <NormalToolbar
            title="mark"
            onClick={handler}
            trigger={
              <svg className="md-editor-icon" aria-hidden="true">
                <use xlinkHref="#icon-mark"></use>
              </svg>
            }
          />
        ]}
      />
    );
  };
  ```

  ![普通扩展工具栏](https://imzbf.github.io/md-editor-rt/imgs/normal-toolbar.gif)

  ![下拉扩展工具栏](https://imzbf.github.io/md-editor-rt/imgs/dropdown-toolbar.gif)

  扩展组件属性参考**内置组件**，使用示例参见[文档分支](https://github.com/imzbf/md-editor-rt/tree/docs/src/components)，提供**标记**、**表情**和**弹窗预览**扩展组件。

---

### 🪒 noPrettier

- **类型**：`boolean`
- **默认值**：`false`

  是否启用 prettier 优化 md 内容。

---

### 🤏 tabWidth

- **类型**：`number`
- **默认值**：`2`

  编辑器一个 TAB 键等于空格数。

---

### 📅 tableShape

- **类型**：`[number, number]`
- **默认值**：`[6, 4]`

  标题栏添加表格时，预设待选表格大小，第一个代表最大列数，第二个代表最大行数。

```jsx
<MdEditor tableShape={[8, 4]}>
```

![表格预设大小预览](https://imzbf.github.io/md-editor-rt/imgs/20211216165424.png)

---

### 🪧 placeholder

- **类型**：`string`
- **默认值**：`''`

  啊这-\_-！

---

### 🦶 footers

- **类型**：`Array<'markdownTotal' | '=' | 'scrollSwitch' | number>`
- **默认值**：`['markdownTotal', '=', 'scrollSwitch']`

  页脚显示内容，`'='`左右分割，设置为`[]`不显示页脚。

---

### 🦿 defFooters

- **类型**：`Array<string \| ReactElement>`
- **默认值**：`[]`

  自定义扩展页脚。

  示例代码见[文档页源码](https://github.com/imzbf/md-editor-rt/blob/docs/src/pages/Preview/index.tsx)。

---

### ⛵️ scrollAuto

- **类型**：`boolean`
- **默认值**：`true`

  默认左右同步滚动状态。

---

### 🥹 noUploadImg

- **type**: `boolean`
- **default**: `false`

  工具栏不显示上传图片入口。

  ```jsx
  <MdEditor noUploadImg />
  ```

---

### 🔬 autoFocus

- **类型**：`boolean`
- **默认值**：`false`

  原生属性，文本区域自动获得焦点。

---

### 🔩 disabled

- **类型**：`boolean`
- **默认值**：`false`

  原生属性，禁用文本区域。

---

### 🔒 readOnly

- **类型**：`boolean`
- **默认值**：`false`

  原生属性，文本区域为只读。

---

### 📏 maxLength

- **类型**：`number`
- **默认值**：``

  原生属性，文本区域允许的最大字符数。

---

### 📥 autoDetectCode

- **类型**：`boolean`
- **默认值**：`false`

  是否启用自动识别粘贴代码类别，目前仅支持从`vscode`复制的内容。

---

## 🧵 MdPreview 绑定事件

### 🚁 onHtmlChanged

- **类型**：`(h: string) => void`

  html 变化回调事件，用于获取预览 html 代码。

---

### 🗒 onGetCatalog

- **类型**：`(list: HeadList[]) => void`

  动态获取`markdown`目录。

---

## 🪢 MdEditor 绑定事件

除去和`MdPreivew`相同的以外：

### 📞 onChange

- **类型**：`(v: string) => void`

  内容变化事件（当前与`textare`的`oninput`事件绑定，每输入一个单字即会触发）。

---

### 💾 onSave

- **类型**：`(v: string, h: Promise<string>) => void`

  保存事件，快捷键与保存按钮均会触发。

  ```jsx
  import { MdEditor } from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  export default () => {
    return (
      <MdEditor
        onSave={(v, h) => {
          console.log(v);

          h.then((html) => {
            console.log(html);
          });
        }}
      />
    );
  };
  ```

---

### 📸 onUploadImg

- **类型**：`(files: Array<File>, callback: (urls: Array<string>) => void) => void`

  上传图片事件，弹窗会等待上传结果，务必将上传后的 urls 作为 callback 入参回传。

```jsx
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import axios from 'axios';

const onUploadImg = async (files, callback) => {
  const res = await Promise.all(
    files.map((file) => {
      return new Promise((rev, rej) => {
        const form = new FormData();
        form.append('file', file);

        axios
          .post('/api/img/upload', form, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res) => rev(res))
          .catch((error) => rej(error));
      });
    })
  );

  callback(res.map((item) => item.data.url));
};

export default () => {
  return <MdEditor onUploadImg={onUploadImg} />;
};
```

---

### 💀 onError

- **类型**：`(err: { name: string; message: string;}) => void`

  捕获执行错误事件，目前支持`Cropper`、`fullscreen`、`prettier`实例未加载完成操作错误。

  ```jsx
  const onError = (err) => {
    alert(err.message);
  };

  export default () => <MdEditor onError={onError} />;
  ```

---

### 🐾 onBlur

- **类型**：`(event: FocusEvent) => void`

  输入框失去焦点时触发事件。

  ```jsx
  const onBlur = (err) => {
    console.log('onBlur', e);
  };

  export default () => <MdEditor onBlur={onBlur} />;
  ```

---

### 🔖 onFocus

- **类型**：`(event: FocusEvent) => void`

  输入框获得焦点时触发事件。

---

## 🤱🏼 实例暴露

2.5.0 版本之后，编辑器暴露了若干方法在组件实例上，用来快捷监听编辑器内部状态或对调整内部状态。

```jsx
import React, { useState, useEffect, useRef } from 'react';
import { MdEditor, ExposeParam } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('#Hello Editor');

  const editorRef = useRef<ExposeParam>();

  useEffect(() => {
    editorRef.current?.on('catalog', console.log);
  }, []);

  return <MdEditor ref={editorRef} modelValue={text} onChange={setText} />;
};
```

### 👂🏼 on

监听编辑器内部状态，包括：屏幕全屏、浏览器全屏、预览文本、预览 html、目录等。

- pageFullscreen

  ```js
  editorRef.value?.on('pageFullscreen', (status) => console.log(status));
  ```

- fullscreen
  ```js
  editorRef.value?.on('fullscreen', (status) => console.log(status));
  ```
- preview
  ```js
  editorRef.value?.on('preview', (status) => console.log(status));
  ```
- htmlPreview
  ```js
  editorRef.value?.on('htmlPreview', (status) => console.log(status));
  ```
- catalog
  ```js
  editorRef.value?.on('catalog', (status) => console.log(status));
  ```

---

### 💻 togglePageFullscreen

切换页面内全屏。

```js
editorRef.value?.togglePageFullscreen(true);
```

> 不设置入参切换为相反状态

---

### 🖥 toggleFullscreen

切换屏幕全屏。

```js
editorRef.value?.toggleFullscreen(true);
```

> 不设置入参切换为相反状态

---

### 📖 togglePreview

切换是否显示预览。

```js
editorRef.value?.togglePreview(true);
```

> 不设置入参切换为相反状态

---

### 📼 toggleHtmlPreview

切换是否显示 html 预览。

```js
editorRef.value?.toggleHtmlPreview(true);
```

> 不设置入参切换为相反状态

---

### 🧬 toggleCatalog

切换是否显示目录。

```js
editorRef.value?.toggleCatalog(true);
```

> 不设置入参切换为相反状态

---

### 💾 triggerSave

触发保存。

```js
editorRef.value?.triggerSave();
```

---

### 💉 insert

手动向文本框插入内容。

```js
/**
 * @params selectedText 选中的内容
 */
editorRef.value?.insert((selectedText) => {
  /**
   * @return targetValue    待插入内容
   * @return select         插入后是否自动选中内容
   * @return deviationStart 插入后选中内容鼠标开始位置
   * @return deviationEnd   插入后选中内容鼠标结束位置
   */
  return {
    targetValue: `${selectedText}`,
    select: true,
    deviationStart: 0,
    deviationEnd: 0
  };
});
```

---

### 🎯 focus

手动聚焦输入框。

```js
editorRef.current?.focus();
```

---

## 💴 配置编辑器

使用`config(option: ConfigOption)`方法，可以对构建实例进行定制。

- codeMirrorExtensions: 根据主题和内部默认的 codeMirror 扩展自定义新的扩展。

  使用示例：编辑器默认不显示输入框的行号，需要手动添加扩展

  ```js
  import { config } from 'md-editor-rt';
  import { lineNumbers } from '@codemirror/view';

  config({
    codeMirrorExtensions(_theme, extensions) {
      return [...extensions, lineNumbers()];
    }
  });
  ```

- markdownItConfig: 自定义 markdown-it 核心库扩展、属性等。

  使用示例：配置使用`markdown-it-anchor`并在标题右侧显示一个超链接符号

  ```js
  import { config } from 'md-editor-rt';
  import ancher from 'markdown-it-anchor';

  config({
    markdownItConfig(mdit) {
      mdit.use(ancher, {
        permalink: true
      });
    }
  });
  ```

- editorConfig: 编辑器常规配置，语言、`mermaid`默认模板、渲染延迟：

  ```js
  import { config } from 'md-editor-rt';

  config({
    editorConfig: {
      // 语言
      languageUserDefined: {
        'my-lang': {
          toolbarTips: {
            bold: '加粗',
            underline: '下划线',
            italic: '斜体',
            strikeThrough: '删除线',
            title: '标题',
            sub: '下标',
            sup: '上标',
            quote: '引用',
            unorderedList: '无序列表',
            orderedList: '有序列表',
            codeRow: '行内代码',
            code: '块级代码',
            link: '链接',
            image: '图片',
            table: '表格',
            mermaid: 'mermaid图',
            katex: '公式',
            revoke: '后退',
            next: '前进',
            save: '保存',
            prettier: '美化',
            pageFullscreen: '浏览器全屏',
            fullscreen: '屏幕全屏',
            preview: '预览',
            htmlPreview: 'html代码预览',
            catalog: '目录',
            github: '源码地址'
          },
          titleItem: {
            h1: '一级标题',
            h2: '二级标题',
            h3: '三级标题',
            h4: '四级标题',
            h5: '五级标题',
            h6: '六级标题'
          },
          imgTitleItem: {
            link: '添加链接',
            upload: '上传图片',
            clip2upload: '裁剪上传'
          },
          linkModalTips: {
            linkTitle: '添加链接',
            imageTitle: '添加图片',
            descLabel: '链接描述：',
            descLabelPlaceHolder: '请输入描述...',
            urlLabel: '链接地址：',
            urlLabelPlaceHolder: '请输入链接...',
            buttonOK: '确定'
          },
          clipModalTips: {
            title: '裁剪图片上传',
            buttonUpload: '上传'
          },
          copyCode: {
            text: '复制代码',
            successTips: '已复制！',
            failTips: '复制失败！'
          },
          mermaid: {
            flow: '流程图',
            sequence: '时序图',
            gantt: '甘特图',
            class: '类图',
            state: '状态图',
            pie: '饼图',
            relationship: '关系图',
            journey: '旅程图'
          },
          katex: {
            inline: '行内公式',
            block: '块级公式'
          },
          footer: {
            markdownTotal: '字数',
            scrollAuto: '同步滚动'
          }
        },
        // mermaid模板
        mermaidTemplate: {
          // 流程图
          flow: `flow tempalte`,
          // 时序图
          sequence: `sequence template`,
          // 甘特图
          gantt: `gantt template`,
          // 类图
          class: `class template`,
          // 状态图
          state: `state template`,
          // 饼图
          pie: `pie template`,
          // 关系图
          relationship: `relationship template`,
          // 旅程图
          journey: `journey template`
        },
        // 输入渲染延迟（ms）
        renderDelay: 0
      }
    }
  });
  ```

- editorExtensions: 类型如下，用于配置编辑器内部的扩展

  ```js
  import { config } from 'md-editor-rt';

  config({
    editorExtensions: { iconfont: 'https://xxx.cc' }
  });
  ```

  <details>
    <summary>[EditorExtensions]</summary>

  ```ts
  export interface EditorExtensions {
    highlight?: {
      instance?: any;
      js?: string;
      css?: {
        [key: string]: {
          light: string;
          dark: string;
        };
      };
    };
    prettier?: {
      // >= 2.2.0
      prettierInstance?: any;
      parserMarkdownInstance?: any;

      standaloneJs?: string;
      parserMarkdownJs?: string;
    };
    cropper?: {
      instance?: any;
      js?: string;
      css?: string;
    };
    iconfont?: string;
    screenfull?: {
      instance?: any;
      js?: string;
    };
    mermaid?: {
      instance?: any;
      js?: string;
    };
    katex?: {
      instance?: any;
      js?: string;
      css?: string;
    };
  }
  ```

  </details>

## 🪡 快捷键

主要以`CTRL`搭配对应功能英文单词首字母，冲突项添加`SHIFT`，再冲突替换为`ALT`。

!!! warning 注意事项

快捷键仅在输入框获取到焦点时可用！

!!!

| 键位 | 功能 | 说明 |
| --- | --- | --- |
| TAB | 空格 | 通过`tabWidth`属性预设 TAB 键位新增空格长度，默认 2，支持多行 |
| SHIFT + TAB | 取消空格 | 同上，一次取消两个空格，支持多行 |
| CTRL + C | 复制 | 选中时复制选中内容，未选中时复制当前行内容 |
| CTRL + X | 剪切 | 选中时剪切选中内容，未选中时剪切当前行 |
| CTRL + D | 删除 | 选中时删除选中内容，未选中时删除当前行 |
| CTRL + S | 保存 | 触发编辑器的`onSave`回调 |
| CTRL + B | 加粗 | `**加粗**` |
| CTRL + U | 下划线 | `<u>下划线</u>` |
| CTRL + I | 斜体 | `*斜体*` |
| CTRL + 1-6 | 1-6 级标题 | `# 标题` |
| CTRL + ↑ | 上角标 | `<sup>上角标</sup>` |
| CTRL + ↓ | 下角标 | `<sub>下角标</sub>` |
| CTRL + O | 有序列表 | `1. 有序列表` |
| CTRL + L | 链接 | `[链接](https://imzbf.cc)` |
| CTRL + Z | 撤回 | 触发编辑器内内容撤回，与系统无关 |
| CTRL + SHIFT + S | 删除线 | `~删除线~` |
| CTRL + SHIFT + U | 无序列表 | `- 无序列表` |
| CTRL + SHIFT + C | 块级代码 | 多行代码块 |
| CTRL + SHIFT + I | 图片链接 | `![图片](https://imzbf.cc)` |
| CTRL + SHIFT + Z | 前进一步 | 触发编辑器内内容前进，与系统无关 |
| CTRL + SHIFT + F | 美化内容 |  |
| CTRL + ALT + C | 行内代码 | 行内代码块 |
| CTRL + SHIFT + ALT + T | 表格 | `\|表格\|` |

## 🪤 内置组件

按需引用编辑器的扩展组件，例如：`import { DropdownToolbar } from 'md-editor-rt'`。

### 🐣 NormalToolbar

- **props**

  - `title`: `string`，非必须，作为工具栏上的 hover 提示。

- **events**

  - `onClick`: `(e: MouseEvent) => void`，必须，点击事件。

- **slots**

  - `trigger`: `string | ReactElement`，必须，通常是个图标，用来展示在工具栏上。

```jsx
import { useCallback, useRef, useState } from 'react';
import { MdEditor, DropdownToolbar, ExposeParam } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const editorRef = useRef<ExposeParam>();

  const insert = useCallback(() => {
    editorRef.current?.insert((selectedText) => {
      /**
       * @return targetValue    待插入内容
       * @return select         插入后是否自动选中内容
       * @return deviationStart 插入后选中内容鼠标开始位置
       * @return deviationEnd   插入后选中内容鼠标结束位置
       */
      return {
        targetValue: `==${selectedText}==`,
        select: true,
        deviationStart: 0,
        deviationEnd: 0
      };
    });
  }, []);

  return (
    <MdEditor
      ref={editorRef}
      modelValue={value}
      editorId="md-prev"
      toolbars={['bold', 0, '=', 'github']}
      defToolbars={[
        <DropdownToolbar
          visible={visible}
          onChange={setVisible}
          overlay={
            <ul>
              <li onClick={insert}>option 1</li>
              <li>option 2</li>
            </ul>
          }
          trigger={
            <svg className="md-editor-icon" aria-hidden="true">
              <use xlinkHref="#icon-emoji"></use>
            </svg>
          }
          key="emoji-toolbar"
        />
      ]}
      onChange={setValue}
    />
  );
};
```

[获取使用源码](https://github.com/imzbf/md-editor-rt/blob/docs/src/components/MarkExtension/index.tsx)

---

### 🐼 DropdownToolbar

- **props**

  - `title`: `string`，非必须，作为工具栏上的 hover 提示。
  - `visible`: `boolean`，必须，下拉状态。

- **events**

  - `onChange`: `(visible: boolean) => void`，必须，状态变化事件。

- **slots**

  - `trigger`: `string | ReactElement`，必须，通常是个图标，用来展示在工具栏上。
  - `overlay`: `string | ReactElement`，必须，下拉框中的内容。

```jsx
import { useCallback, useRef, useState } from 'react';
import { MdEditor, DropdownToolbar, ExposeParam } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const editorRef = useRef<ExposeParam>();

  const insert = useCallback(() => {
    editorRef.current?.insert((selectedText) => {
      /**
       * @return targetValue    待插入内容
       * @return select         插入后是否自动选中内容
       * @return deviationStart 插入后选中内容鼠标开始位置
       * @return deviationEnd   插入后选中内容鼠标结束位置
       */
      return {
        targetValue: `==${selectedText}==`,
        select: true,
        deviationStart: 0,
        deviationEnd: 0
      };
    });
  }, []);

  return (
    <MdEditor
      ref={editorRef}
      modelValue={value}
      editorId="md-prev"
      toolbars={['bold', 0, '=', 'github']}
      defToolbars={[
        <DropdownToolbar
          visible={visible}
          onChange={setVisible}
          overlay={
            <ul>
              <li onClick={insert}>选项 1</li>
              <li>选项 2</li>
            </ul>
          }
          trigger={
            <svg className="md-editor-icon" aria-hidden="true">
              <use xlinkHref="#icon-emoji"></use>
            </svg>
          }
          key="emoji-toolbar"
        />
      ]}
      onChange={setValue}
    />
  );
};
```

[获取使用源码](https://github.com/imzbf/md-editor-rt/blob/docs/src/components/EmojiExtension/index.tsx)

---

### 🦉 ModalToolbar

- **props**

  - `title`: `string`，非必须，作为工具栏上的 hover 提示。
  - `modalTitle`: `string`，非必须，弹窗的标题。
  - `visible`: `boolean`，必须，弹窗显示状态。
  - `width`: `string`，非必须，弹窗宽度，默认`auto`。
  - `height`：`string`，同`width`。
  - `showAdjust`: `boolean`，非必须，是否显示弹窗全屏按钮。
  - `isFullscreen`: `boolean`，显示全屏按钮时必须，弹窗全屏状态。

- **events**

  - `onClick`: `() => void`，必须，工具栏点击事件。
  - `onClose`：`() => void`，必须，弹窗点击关闭事件。
  - `onAdjust`：`(val: boolean) => void`，弹窗全屏按钮点击事件。

- **slots**

  - `trigger`: `string | ReactElement`，必须，通常是个图标，用来展示在工具栏上。
  - `overlay`: `string | ReactElement`，必须，下拉框中的内容。

```jsx
import { useCallback, useRef, useState } from 'react';
import { MdEditor, ModalToolbar, ExposeParam } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [visible, setVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [value, setValue] = useState('');
  const editorRef = useRef<ExposeParam>();

  const insert = useCallback(() => {
    editorRef.current?.insert((selectedText) => {
      /**
       * @return targetValue    待插入内容
       * @return select         插入后是否自动选中内容
       * @return deviationStart 插入后选中内容鼠标开始位置
       * @return deviationEnd   插入后选中内容鼠标结束位置
       */
      return {
        targetValue: `==${selectedText}==`,
        select: true,
        deviationStart: 0,
        deviationEnd: 0
      };
    });
  }, []);
  return (
    <MdEditor
      ref={editorRef}
      modelValue={value}
      editorId="md-prev"
      toolbars={['bold', 0, '=', 'github']}
      defToolbars={[
        <ModalToolbar
          visible={visible}
          isFullscreen={isFullscreen}
          showAdjust
          title="hover-title"
          modalTitle="modalTitle"
          width="870px"
          height="600px"
          onClick={() => {
            setVisible(true);
          }}
          onClose={() => {
            setVisible(false);
          }}
          onAdjust={() => {
            setIsFullscreen((i) => !i);
          }}
          trigger={
            <svg className="md-editor-icon" aria-hidden="true">
              <use xlinkHref="#icon-read"></use>
            </svg>
          }
        >
          <div
            style={{
              height: '100%',
              padding: '20px',
              overflow: 'auto'
            }}
          >
            <button onClick={insert}>点击</button>
          </div>
        </ModalToolbar>
      ]}
      onChange={setValue}
    />
  );
};
```

[获取使用源码](https://github.com/imzbf/md-editor-rt/blob/docs/src/components/ReadExtension/index.tsx)

---

### 🐻 MdCatalog

- **props**

  - `editorId`: `string`，必须，对应编辑器的`editorId`，在内部注册目录变化监听事件。
  - `className`: `string`，非必须，目录组件最外层类名。
  - `mdHeadingId`: `mdHeadingId`，非必须，特殊化编辑器标题的算法，与编辑器相同。
  - `scrollElement`: `string | HTMLElement`，非必须，为字符时应是一个元素选择器。仅预览模式中，整页滚动时，设置为`document.documentElement`。
  - `theme`: `'light' | 'dark'`，非必须，当需要切换主题时提供，同编辑器的`theme`。
  - `offsetTop`: `number`，非必须，标题距离顶部该像素时高亮当前目录项，默认 20 像素。
  - `scrollElementOffsetTop`: `number`，非必须，滚动区域的固定顶部高度，默认 0。

- **events**

  - `onClick`: `(e: MouseEvent, t: TocItem) => void`，非必须，导航点击事件。

> `scrollElement`说明：仅预览下，该元素必须已定位的并且支持滚动。

```jsx
import { MdPreview, MdCatalog } from 'md-editor-rt';
import 'md-editor-rt/lib/preview.css';

const editorId = 'my-editor';

export default () => {
  const [state] = useState({
    text: '# 标题',
    scrollElement: document.documentElement
  });

  return (
    <>
      {/* 保证editorId是相同的 */}
      <MdPreview editorId={editorId} modelValue={state.text} />
      <MdCatalog editorId={editorId} scrollElement={state.scrollElement} />
    </>
  );
};
```

## ✍️ 编辑此页面

[doc-zh-CN](https://github.com/imzbf/md-editor-rt/blob/dev-docs/public/doc-zh-CN.md)
