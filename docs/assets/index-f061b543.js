import{u as l,r as t,j as n,I as c,a as p}from"./index-6f33acd2.js";import{I as u}from"./index-f0d109a4.js";const r=`## 😁 Basic Usage

It has been developing iteratively, so update the latest version please. Publish logs: [releases](https://github.com/imzbf/md-editor-rt/releases)

### 🤓 CDN

Use production version in html directly:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link
      href="https://unpkg.com/md-editor-rt@\${EDITOR_VERSION}/lib/style.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"><\/script>
    <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"><\/script>
    <script src="https://unpkg.com/md-editor-rt@\${EDITOR_VERSION}/lib/md-editor-rt.umd.js"><\/script>
    <script>
      ReactDOM.createRoot(document.getElementById('root')).render(
        React.createElement(MdEditorRT, {
          modelValue: 'Hello Editor!!'
        })
      );
    <\/script>
  </body>
</html>
\`\`\`

### 🤖 Npm Install

\`\`\`shell [install:yarn]
yarn add md-editor-rt
\`\`\`

\`\`\`shell [install:npm]
npm install md-editor-rt
\`\`\`

### 🤓 Jsx Template

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('hello md-editor-rt!');
  return <MdEditor modelValue={text} onChange={setText} />;
};
\`\`\`

## 🥂 Api usage

Usages of some APIs.

### 🥶 Customize Shortcut Key

Source code for built-in shortcut key configuration: [commands.ts](https://github.com/imzbf/md-editor-rt/blob/develop/MdEditor/layouts/Content/codemirror/commands.ts). They have been added as extensions to \`codemirror\`.

The basic principle of replacing or deleting shortcut keys is to find the corresponding extension, and handle it.

In fact, The Second input parameter \`extensions\` of \`codeMirrorExtensions\` is an array, The first item in the array is the shortcut key extension. The third input parameter is the default shortcut key configuration.

#### 💅 Modify Shortcut Key

Change \`Ctrl-b\` to \`Ctrl-m\`

\`\`\`js
import MdEditor from 'md-editor-rt';
import { keymap } from '@codemirror/view';

MdEditor.config({
  // [keymap, minimalSetup, markdown, EditorView.lineWrapping, EditorView.updateListener, EditorView.domEventHandlers, oneDark??oneLight]
  codeMirrorExtensions(theme, extensions, mdEditorCommands) {
    const newExtensions = [...extensions];
    // 1. Remove the default shortcut key extension first
    newExtensions.shift();

    // 2. Reference the source code for shortcut key configuration
    // Find the location of the configuration item for CtrlB in mdEditorCommands
    const CtrlB = mdEditorCommands[0];

    // 3. Document for configuring shortcut keys of codemirror
    // https://codemirror.net/docs/ref/#commands
    const CtrlM = {
      // We need the run method in CtrlB here
      ...CtrlB,
      key: 'Ctrl-m',
      mac: 'Cmd-m'
    };

    // 4. Add the modified shortcut key to the array
    const newMdEditorCommands = [
      CtrlM,
      ...mdEditorCommands.filter((i) => i.key !== 'Ctrl-b')
    ];

    newExtensions.push(keymap.of(newMdEditorCommands));

    return newExtensions;
  }
});
\`\`\`

#### ✂️ Delete Shortcut Key

Disable all shortcut keys

\`\`\`js
import MdEditor from 'md-editor-rt';

MdEditor.config({
  // [keymap, minimalSetup, markdown, EditorView.lineWrapping, EditorView.updateListener, EditorView.domEventHandlers, oneDark??oneLight]
  codeMirrorExtensions(theme, extensions) {
    const newExtensions = [...extensions];
    // 1. Remove default shortcut key extensions
    newExtensions.shift();

    // 2. Return extension list
    return newExtensions;
  }
});
\`\`\`

#### 💉 Add Shortcut Key

If you want to insert content into the edit box, you need to use the \`insert\` method bound on the instance of editor, reference: [Insert content into the edit box](/md-editor-rt/ed-US/docs#%F0%9F%92%89%20insert).

If you are not using \`MdEditor.config\` in the component where the editor is located, you are unable to obtain instance of editor at this time. You may need to use \`EventBus\`.

Add shortcut key \`Ctrl+m\`, to insert a marking module into the editing box(\`==mark==\`)

\`index.ts\`

\`\`\`js
import MdEditor from 'md-editor-rt';
import { keymap, KeyBinding } from '@codemirror/view';
// If you used EventBus
import bus from '@/utils/event-bus';

MdEditor.config({
  // [keymap, minimalSetup, markdown, EditorView.lineWrapping, EditorView.updateListener, EditorView.domEventHandlers, oneDark??oneLight]
  codeMirrorExtensions(theme, extensions, mdEditorCommands) {
    const newExtensions = [...extensions];
    // 1. Remove the default shortcut key extension first
    newExtensions.shift();

    // 2. Create a new shortcut key configuration, reference: https://codemirror.net/docs/ref/#commands
    const CtrlM: KeyBinding = {
      key: 'Ctrl-m',
      mac: 'Cmd-m',
      run: () => {
        bus.emit('insertMarkBlock');
        return true;
      }
    };

    // 4. Add a new shortcut key to the array
    const newMdEditorCommands = [...mdEditorCommands, CtrlM];

    newExtensions.push(keymap.of(newMdEditorCommands));

    return newExtensions;
  }
});
\`\`\`

Next, listening 'insertMarkBlock' in the component where the editor is located

\`App.tsx\`

\`\`\`tsx
import React, { useState, useRef, useEffect } from 'react';
import MdEditor from 'md-editor-rt';
import type { ExposeParam } from 'md-editor-rt';
// If you used EventBus
import bus from '@/utils/event-bus';

const App = () => {
  const [text] = useState('## md-editor-rt\\n\\n');
  const mdEditorRef = useRef<ExposeParam>();

  useEffect(() => {
    bus.on('insertMarkBlock', () => {
      mdEditorRef.current?.insert((selectedText) => {
        return {
          targetValue: \`==\${selectedText}==\`,
          select: true,
          deviationStart: 2,
          deviationEnd: -2
        };
      });
    });
  }, []);

  return <MdEditor modelValue={text} ref={mdEditorRef} />;
};
\`\`\`

Attach: Simple version of \`EventBus\`

\`\`\`ts
/* eslint-disable @typescript-eslint/ban-types */
class EventBus {
  private events: Map<string, Function[]>;

  constructor() {
    this.events = new Map();
  }

  on(eventName: string, fn: Function) {
    if (!eventName) {
      console.error('Get a wrong eventName');
      return false;
    }

    if (!(fn instanceof Function)) {
      console.error('Get a wrong callback');
      return false;
    }

    const fns = this.events.get(eventName) || [];
    fns.push(fn);
    this.events.set(eventName, fns);
  }

  emit(eventName: string, ...args: any[]) {
    this.events.get(eventName)?.forEach((fn) => {
      fn(args);
    });
  }
}

export default new EventBus();
\`\`\`

### 🍦 Change Theme

Themes are divided into editor theme(\`theme\`), article preview theme(\`previewTheme\`) and code theme(\`codeTheme\`).

#### 🍧 Editor Theme

Support \`light\` and \`dark\` default.

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('hello md-editor-rt!');
  const [theme] = useState('dark');
  return <MdEditor modelValue={text} onChange={setText} theme={theme} />;
};
\`\`\`

#### 🍡 Preview Theme

There are 6 kinds of themes: \`default\`, \`github\`, \`vuepress\`, \`mk-cute\`, \`smart-blue\` and \`cyanosis\`. It is useful When you want to show your article directly. Modify \`previewTheme\`.

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('hello md-editor-rt!');
  const [previewTheme] = useState('github');
  return <MdEditor modelValue={text} onChange={setText} previewTheme={previewTheme} />;
};
\`\`\`

- Custom

  1. Write \`css\` under the \`xxx-theme\` claa. \`xxx\` is the name of your theme, for more examples, refer to [markdown-theme](https://github.com/imzbf/markdown-theme).

  _xxx.css_

  \`\`\`css
  .xxx-theme code {
    color: red;
  }
  \`\`\`

  2. Import

  \`\`\`js
  import 'xxx.css';
  \`\`\`

  3. Set \`previewTheme\`

  \`\`\`jsx
  <MdEditor previewTheme="xxx" />
  \`\`\`

#### 🎄 Code Theme

There are 8 kinds of themes: \`atom\`, \`a11y\`, \`github\`, \`gradient\`, \`kimbie\`, \`paraiso\`,\`qtcreator\` and \`stackoverflow\`, they are all from [highlight.js](https://highlightjs.org/).

- Usage

  \`\`\`jsx
  import React, { useState } from 'react';
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  export default () => {
    const [text, setText] = useState('hello md-editor-rt!');
    const [codeTheme] = useState('atom');
    return <MdEditor modelValue={text} onChange={setText} codeTheme={codeTheme} />;
  };
  \`\`\`

- Custom

  1. Find or Write your favorite theme, then config them:

  \`\`\`js
  import MdEditor from 'md-editor-rt';

  MdEditor.config({
    editorExtensions: {
      highlight: {
        css: {
          xxxxx: {
            light: 'https://unpkg.com/highlight.js@11.2.0/styles/xxxxx-light.css',
            dark: 'https://unpkg.com/highlight.js@11.2.0/styles/xxxxx-dark.css'
          },
          yyyyy: {
            light: 'https://unpkg.com/highlight.js@11.2.0/styles/xxxxx-light.css',
            dark: 'https://unpkg.com/highlight.js@11.2.0/styles/xxxxx-dark.css'
          }
        }
      }
    }
  });
  \`\`\`

  If some keys in object \`css\` are same as Editor's, Editor's whill be replaced.

  2. Set \`codeTheme\`

  \`\`\`jsx
  <MdEditor codeTheme="xxxxx" />
  \`\`\`

### 🛠 Config Extensions

Extensions highlight, prettier, cropper, screenfull are import from \`cdn\`. When your project is running offline, replace urls of these extensions. Some Extensions support be injected in development environment.

Example for \`screenfull\`:

#### ⚰️ Inject Directly

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import screenfull from 'screenfull';

MdEditor.config({
  editorExtensions: {
    screenfull: {
      instance: screenfull
    }
  }
});

export default () => {
  const [text, setText] = useState('hello md-editor-rt!');
  return <MdEditor modelValue={text} onChange={setText} />;
};
\`\`\`

#### 📡 Intranet Link

Get files from [unpkg.com](https://unpkg.com).

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

MdEditor.config({
  editorExtensions: {
    screenfull: {
      js: 'https://localhost:8090/screenfull@5.2.0/index.js'
    }
  }
});

export default () => {
  const [text, setText] = useState('hello md-editor-rt!');
  return <MdEditor modelValue={text} onChange={setText} />;
};
\`\`\`

### 📷 Upload Pictures

By default, you can select multiple pictures. You can paste and upload screenshots and copy web page pictures.

> Tips: When pasting pictures, if they are GIF graphs, it does not work! Please upload it by file system.

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

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
  const [text, setText] = useState('hello md-editor-rt!');
  return <MdEditor modelValue={text} onChange={setText} onUploadImg={onUploadImg} />;
};
\`\`\`

### 🏳️‍🌈 Extension Language

\`\`\`js
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

MdEditor.config({
  editorConfig: {
    languageUserDefined: {
      'my-lang': {
        toolbarTips: {
          bold: 'bold',
          underline: 'underline',
          italic: 'italic',
          strikeThrough: 'strikeThrough',
          title: 'title',
          sub: 'subscript',
          sup: 'superscript',
          quote: 'quote',
          unorderedList: 'unordered list',
          orderedList: 'ordered list',
          task: 'task list',
          codeRow: 'inline code',
          code: 'block-level code',
          link: 'link',
          image: 'image',
          table: 'table',
          mermaid: 'mermaid',
          katex: 'formula',
          revoke: 'revoke',
          next: 'undo revoke',
          save: 'save',
          prettier: 'prettier',
          pageFullscreen: 'fullscreen in page',
          fullscreen: 'fullscreen',
          preview: 'preview',
          htmlPreview: 'html preview',
          catalog: 'catalog',
          github: 'source code'
        },
        titleItem: {
          h1: 'Lv1 Heading',
          h2: 'Lv2 Heading',
          h3: 'Lv3 Heading',
          h4: 'Lv4 Heading',
          h5: 'Lv5 Heading',
          h6: 'Lv6 Heading'
        },
        imgTitleItem: {
          link: 'Add Img Link',
          upload: 'Upload Img',
          clip2upload: 'Clip Upload'
        },
        linkModalTips: {
          linkTitle: 'Add Link',
          imageTitle: 'Add Image',
          descLabel: 'Desc:',
          descLabelPlaceHolder: 'Enter a description...',
          urlLabel: 'Link:',
          urlLabelPlaceHolder: 'Enter a link...',
          buttonOK: 'OK'
        },
        clipModalTips: {
          title: 'Crop Image',
          buttonUpload: 'Upload'
        },
        copyCode: {
          text: 'Copy',
          successTips: 'Copied!',
          failTips: 'Copy failed!'
        },
        mermaid: {
          flow: 'flow',
          sequence: 'sequence',
          gantt: 'gantt',
          class: 'class',
          state: 'state',
          pie: 'pie',
          relationship: 'relationship',
          journey: 'journey'
        },
        katex: {
          inline: 'inline',
          block: 'block'
        },
        footer: {
          markdownTotal: 'Word Count',
          scrollAuto: 'Scroll Auto'
        }
      }
    }
  }
});

export default () => {
  const [text, setText] = useState('hello md-editor-rt!');
  const [language] = useState('my-lang');

  return <MdEditor modelValue={text} onChange={setText} language={language} />;
};
\`\`\`

You can install the existing language also: [md-editor-extension](https://github.com/imzbf/md-editor-extension). Refer to extension library for the usage and the way to contribute~

### 📄 Get Catalogue

- Get

  \`\`\`jsx
  import React, { useState } from 'react';
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  export default () => {
    const [text, setText] = useState('hello md-editor-rt!');
    const [catalogList, setList] = useState([]);

    return <MdEditor modelValue={text} onChange={setText} onGetCatalog={setList} />;
  };
  \`\`\`

- Display

  Use \`MdEditor.MdCatalog\`

  \`\`\`jsx
  import React, { useState } from 'react';
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  const editorId = 'my-editor';

  export default () => {
    const [state] = useState({
      text: '# heading',
      scrollElement: document.documentElement
    });

    return (
      <>
        <MdEditor modelValue={state.text} editorId={editorId} previewOnly />
        <MdEditor.MdCatalog editorId={editorId} scrollElement={state.scrollElement} />
      </>
    );
  };
  \`\`\`

### 🪚 Define Toolbar

> after v1.2.0, You can sort the toolbar as you like, split tools by \`'-'\`, the left and right toolbars are divided by \`'='\`!

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('hello md-editor-rt!');
  const [toolbars] = useState(['italic', 'underline', '-', 'bold', '=', 'github']);

  return <MdEditor modelValue={text} onChange={setText} toolbars={toolbars} />;
};
\`\`\`

### 💪 Customize Toolbar

There are examples of \`mark\` and \`emoji\`.

To get complete code, refer to [docs](https://github.com/imzbf/md-editor-rt/blob/docs/src/pages/Preview/index.tsx).

![mark and Emoji extension](https://imzbf.github.io/md-editor-rt/imgs/mark_emoji.gif)

> Get more emojis, go to [https://getemoji.com/](https://getemoji.com/).

### 🧙‍♂️ Change Styles

\`\`\`less
.css-vars(@isDark) {
  --md-color: if(@isDark, #999, #222);
  --md-hover-color: if(@isDark, #bbb, #000);
  --md-bk-color: if(@isDark, #000, #fff);
  --md-bk-color-outstand: if(@isDark, #111, #f6f6f6);
  --md-bk-hover-color: if(@isDark, #1b1a1a, #f5f7fa);
  --md-border-color: if(@isDark, #2d2d2d, #e6e6e6);
  --md-border-hover-color: if(@isDark, #636262, #b9b9b9);
  --md-border-active-color: if(@isDark, #777, #999);
  --md-modal-mask: #00000073;
  --md-scrollbar-bg-color: if(@isDark, #0f0f0f, #e2e2e2);
  --md-scrollbar-thumb-color: if(@isDark, #2d2d2d, #0000004d);
  --md-scrollbar-thumb-hover-color: if(@isDark, #3a3a3a, #00000059);
  --md-scrollbar-thumb-active-color: if(@isDark, #3a3a3a, #00000061);
}

.md-editor {
  .css-vars(false);
}

.md-editor-dark {
  .css-vars(true);
}
\`\`\`

Change background color in dark mode:

\`\`\`css
.md-editor-dark {
  --md-bk-color: #333 !important;
}
\`\`\`

### 🙍🏻‍♂️ Import All Library

\`\`\`jsx
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

// <=5.2.0
import screenfull from 'screenfull';

import katex from 'katex';
import 'katex/dist/katex.min.css';

import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

import mermaid from 'mermaid';

import highlight from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.css';

import prettier from 'prettier';
import parserMarkdown from 'prettier/parser-markdown';

MdEditor.config({
  editorExtensions: {
    prettier: {
      prettierInstance: prettier,
      parserMarkdownInstance: parserMarkdown
    },
    highlight: {
      instance: highlight
    },
    screenfull: {
      instance: screenfull
    },
    katex: {
      instance: katex
    },
    cropper: {
      instance: Cropper
    },
    mermaid: {
      instance: mermaid
    }
  }
});

export default () => {
  return <MdEditor modelValue="" />;
};
\`\`\`

> Tips: While import highlight styles by yourself, editor will not be able to change code styles.

## 🔒 XSS

after\`1.3.0\`, please use \`sanitize\` to sanitize \`html\`. eg: \`sanitize-html\`

\`\`\`shell
yarn add sanitize-html
\`\`\`

\`\`\`jsx
import React from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import sanitizeHtml from 'sanitize-html';

export default () => {
  return <MdEditor sanitize={(html) => sanitizeHtml(html)} />;
};
\`\`\`

## 🧻 Edit This Page

[demo-en-US](https://github.com/imzbf/md-editor-rt/blob/dev-docs/public/demo-en-US.md)
`,o=`## 😁 基本使用示例

目前一直在迭代开发，所以尽量安装最新版本。发布日志请前往：[releases](https://github.com/imzbf/md-editor-rt/releases)

### 🤓 CDN 链接

通过直接链接生产版本来使用，下面是一个小例子：

\`\`\`html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <link
      href="https://unpkg.com/md-editor-rt@\${EDITOR_VERSION}/lib/style.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"><\/script>
    <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"><\/script>
    <script src="https://unpkg.com/md-editor-rt@\${EDITOR_VERSION}/lib/md-editor-rt.umd.js"><\/script>
    <script>
      ReactDOM.createRoot(document.getElementById('root')).render(
        React.createElement(MdEditorRT, {
          modelValue: 'Hello Editor!!'
        })
      );
    <\/script>
  </body>
</html>
\`\`\`

### 🤖 NPM 安装

\`\`\`shell [install:yarn]
yarn add md-editor-rt
\`\`\`

\`\`\`shell [install:npm]
npm install md-editor-rt
\`\`\`

### 🤓 基本使用

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('hello md-editor-rt！');
  return <MdEditor modelValue={text} onChange={setText} />;
};
\`\`\`

## 🥂 扩展功能

这里包含了一些编辑器\`api\`的使用示范

### 🥶 自定义快捷键

内置的快捷键配置的源码：[commands.ts](https://github.com/imzbf/md-editor-rt/blob/develop/MdEditor/layouts/Content/codemirror/commands.ts)，它们作为扩展项被添加到了\`codemirror\`。

想要替换、删除快捷键的基本原理是找到对应的扩展，然后遍历这个快捷键配置的数组，找到并处理它。

事实上，\`MdEditor.config\`中\`codeMirrorExtensions\`的第二入参\`extensions\`是一个数组，它的第一项就是快捷键扩展，第三入参就是默认的快捷键配置。

#### 💅 修改快捷键

将\`Ctrl-b\`修改为\`Ctrl-m\`

\`\`\`js
import MdEditor from 'md-editor-rt';
import { keymap } from '@codemirror/view';

MdEditor.config({
  // [keymap, minimalSetup, markdown, EditorView.lineWrapping, EditorView.updateListener, EditorView.domEventHandlers, oneDark??oneLight]
  codeMirrorExtensions(theme, extensions, mdEditorCommands) {
    const newExtensions = [...extensions];
    // 1. 先把默认的快捷键扩展移除
    newExtensions.shift();

    // 2. 参考快捷键配置的源码，找到CtrlB的配置项在mdEditorCommands中的位置
    const CtrlB = mdEditorCommands[0];

    // 3. 配置codemirror快捷键的文档
    // https://codemirror.net/docs/ref/#commands
    const CtrlM = {
      // 这里我们需要CtrlB默认触发执行的run方法，如果是新增快捷键等，就需要自行处理触发逻辑
      ...CtrlB,
      key: 'Ctrl-m',
      mac: 'Cmd-m'
    };

    // 4. 把修改后的快捷键放到待构建扩展的数组中
    const newMdEditorCommands = [
      CtrlM,
      ...mdEditorCommands.filter((i) => i.key !== 'Ctrl-b')
    ];

    newExtensions.push(keymap.of(newMdEditorCommands));

    return newExtensions;
  }
});
\`\`\`

#### ✂️ 删除快捷键

禁用所有快捷键

\`\`\`js
import MdEditor from 'md-editor-rt';

MdEditor.config({
  // [keymap, minimalSetup, markdown, EditorView.lineWrapping, EditorView.updateListener, EditorView.domEventHandlers, oneDark??oneLight]
  codeMirrorExtensions(theme, extensions) {
    const newExtensions = [...extensions];
    // 1. 把默认的快捷键扩展移除
    newExtensions.shift();

    // 2. 返回扩展列表即可
    return newExtensions;
  }
});
\`\`\`

#### 💉 新增快捷键

如果涉及到向编辑框插入内容，这是需要借助组件实例上绑定的\`insert\`方法，参考[手动向文本框插入内容](/md-editor-rt/zh-CN/docs#%F0%9F%92%89%20insert)。

如果不是在编辑器所在的组件中使用\`MdEditor.config\`，这是无法拿到编辑器组件实例，这时，你可能需要借助\`event-bus\`。

示例实现\`Ctrl+m\`向编辑框插入标记模块(\`==mark==\`)

\`index.ts\`

\`\`\`js
import MdEditor from 'md-editor-rt';
import { keymap, KeyBinding } from '@codemirror/view';
// 假设你使用了EventBus
import bus from '@/utils/event-bus';

MdEditor.config({
  // [keymap, minimalSetup, markdown, EditorView.lineWrapping, EditorView.updateListener, EditorView.domEventHandlers, oneDark??oneLight]
  codeMirrorExtensions(theme, extensions, mdEditorCommands) {
    const newExtensions = [...extensions];
    // 1. 先把默认的快捷键扩展移除
    newExtensions.shift();

    // 2. 创建一个新的快捷键配置，参考https://codemirror.net/docs/ref/#commands
    const CtrlM: KeyBinding = {
      key: 'Ctrl-m',
      mac: 'Cmd-m',
      run: () => {
        bus.emit('insertMarkBlock');
        return true;
      }
    };

    // 4. 把新的快捷键添加到数组中
    const newMdEditorCommands = [...mdEditorCommands, CtrlM];

    newExtensions.push(keymap.of(newMdEditorCommands));

    return newExtensions;
  }
});
\`\`\`

接下来在编辑器所在组件监听\`insertMarkBlock\`这个事件

\`App.tsx\`

\`\`\`tsx
import React, { useState, useRef, useEffect } from 'react';
import MdEditor from 'md-editor-rt';
import type { ExposeParam } from 'md-editor-rt';
// 假设你使用了EventBus
import bus from '@/utils/event-bus';

const App = () => {
  const [text] = useState('## md-editor-rt\\n\\n');
  const mdEditorRef = useRef<ExposeParam>();

  useEffect(() => {
    bus.on('insertMarkBlock', () => {
      mdEditorRef.current?.insert((selectedText) => {
        return {
          targetValue: \`==\${selectedText}==\`,
          select: true,
          deviationStart: 2,
          deviationEnd: -2
        };
      });
    });
  }, []);

  return <MdEditor modelValue={text} ref={mdEditorRef} />;
};
\`\`\`

附：\`EventBus\`最简单实现

\`\`\`ts
/* eslint-disable @typescript-eslint/ban-types */
class EventBus {
  private events: Map<string, Function[]>;

  constructor() {
    this.events = new Map();
  }

  on(eventName: string, fn: Function) {
    if (!eventName) {
      console.error('无效的事件名称');
      return false;
    }

    if (!(fn instanceof Function)) {
      console.error('无效的回调方法');
      return false;
    }

    const fns = this.events.get(eventName) || [];
    fns.push(fn);
    this.events.set(eventName, fns);
  }

  emit(eventName: string, ...args: any[]) {
    this.events.get(eventName)?.forEach((fn) => {
      fn(args);
    });
  }
}

export default new EventBus();
\`\`\`

### 🍦 主题切换

主题分为了编辑器主题（\`theme\`，称为全局主题）、预览内容主题（\`previewTheme\`）和块级代码主题（\`codeTheme\`）。

#### 🍧 编辑器主题

支持默认和暗夜模式两种

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('hello md-editor-rt！');
  const [theme] = useState('dark');
  return <MdEditor modelValue={text} onChange={setText} theme={theme} />;
};
\`\`\`

#### 🍡 预览主题

内置了\`default\`、\`github\`、\`vuepress\`、\`mk-cute\`、\`smart-blue\`、\`cyanosis\`6 种主题，在一些直接预览文档内容时使用。并且支持在线切换（修改\`previewTheme\`即可）和自行扩展。

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('hello md-editor-rt！');
  const [previewTheme] = useState('github');
  return <MdEditor modelValue={text} onChange={setText} previewTheme={previewTheme} />;
};
\`\`\`

- 自定义

  1. 先以\`xxx-theme\`为类名，定义你的主题\`css\`，xxx 是主题名称，具体的内容参考[markdown-theme](https://github.com/imzbf/markdown-theme)

  _xxx.css_

  \`\`\`css
  .xxx-theme code {
    color: red;
  }
  \`\`\`

  2. 全局引入

  \`\`\`js
  import 'xxx.css';
  \`\`\`

  3. 设置\`previewTheme\`为 xxx

  \`\`\`jsx
  <MdEditor previewTheme="xxx" />
  \`\`\`

#### 🎄 代码主题

内置了\`atom\`、\`a11y\`、\`github\`、\`gradient\`、\`kimbie\`、\`paraiso\`、\`qtcreator\`、\`stackoverflow\`代码主题，均来至[highlight.js](https://highlightjs.org/)

- 使用

  \`\`\`jsx
  import React, { useState } from 'react';
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  export default () => {
    const [text, setText] = useState('hello md-editor-rt！');
    const [codeTheme] = useState('atom');
    return <MdEditor modelValue={text} onChange={setText} codeTheme={codeTheme} />;
  };
  \`\`\`

- 自定义

  1. 找到你喜欢的代码主题，最好支持暗夜模式

  \`\`\`js
  import MdEditor from 'md-editor-rt';

  MdEditor.config({
    editorExtensions: {
      highlight: {
        css: {
          xxxxx: {
            light: 'https://unpkg.com/highlight.js@11.2.0/styles/xxxxx-light.css',
            dark: 'https://unpkg.com/highlight.js@11.2.0/styles/xxxxx-dark.css'
          },
          yyyyy: {
            light: 'https://unpkg.com/highlight.js@11.2.0/styles/xxxxx-light.css',
            dark: 'https://unpkg.com/highlight.js@11.2.0/styles/xxxxx-dark.css'
          }
        }
      }
    }
  });
  \`\`\`

  你可以通过将\`css\`的\`key\`设置为内置名称来覆盖内置的链接。

  2. 设置\`codeTheme\`

  \`\`\`jsx
  <MdEditor codeTheme="xxxxx" />
  \`\`\`

### 🛠 扩展库替换

highlight、prettier、cropper、screenfull 均使用外链引入，在无外网的时候，部分可将项目中已安装的依赖传入，也可以使用下载好的引用。

\`screenfull\` 的例子：

#### ⚰️ 内置实例

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
// 引用screenfull
import screenfull from 'screenfull';

MdEditor.config({
  editorExtensions: {
    screenfull: {
      instance: screenfull
    }
  }
});

export default () => {
  const [text, setText] = useState('hello md-editor-rt！');
  return <MdEditor modelValue={text} onChange={setText} />;
};
\`\`\`

#### 📡 内网链接

对应的 js 文件可以去[unpkg.com](https://unpkg.com)，直接找到对应的文件下载即可。

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

MdEditor.config({
  editorExtensions: {
    screenfull: {
      js: 'https://localhost:8090/screenfull@5.2.0/index.js'
    }
  }
});

export default () => {
  const [text, setText] = useState('hello md-editor-rt！');
  return <MdEditor modelValue={text} onChange={setText} />;
};
\`\`\`

### 📷 图片上传

默认可以选择多张图片，支持截图粘贴板上传图片，支持复制网页图片粘贴上传。

> 注意：粘贴板上传时，如果是网页上的 gif 图，无法正确上传为 gif 格式！请保存本地后再手动上传。

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

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
  const [text, setText] = useState('hello md-editor-rt！');
  return <MdEditor modelValue={text} onChange={setText} onUploadImg={onUploadImg} />;
};
\`\`\`

### 🏳️‍🌈 语言扩展与替换

\`\`\`js
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

MdEditor.config({
  editorConfig: {
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
          task: '任务列表',
          codeRow: '行内代码',
          code: '块级代码',
          link: '链接',
          image: '图片',
          table: '表格',
          mermaid: 'mermaid图',
          katex: 'katex公式',
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
      }
    }
  }
});

export default () => {
  const [text, setText] = useState('hello md-editor-rt！');
  const [language] = useState('my-lang');

  return <MdEditor modelValue={text} onChange={setText} language={language} />;
};
\`\`\`

你也可以使用现成的扩展语言：[md-editor-extension](https://github.com/imzbf/md-editor-extension)。使用及贡献方式见扩展库文档~

### 📄 目录获取与展示

- 获取

  \`\`\`jsx
  import React, { useState } from 'react';
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  export default () => {
    const [text, setText] = useState('hello md-editor-rt！');
    const [catalogList, setList] = useState([]);

    return <MdEditor modelValue={text} onChange={setText} onGetCatalog={setList} />;
  };
  \`\`\`

- 展示

  使用内置\`MdEditor.MdCatalog\`组件

  \`\`\`jsx
  import React, { useState } from 'react';
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  const editorId = 'my-editor';

  export default () => {
    const [state] = useState({
      text: '# 标题',
      scrollElement: document.documentElement
    });

    return (
      <>
        <MdEditor modelValue={state.text} editorId={editorId} previewOnly />
        <MdEditor.MdCatalog editorId={editorId} scrollElement={state.scrollElement} />
      </>
    );
  };
  \`\`\`

### 🪚 调整工具栏

从\`v1.2.0\`开始，支持调整工具栏内容顺序和分割符了 🤔。

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('hello md-editor-rt！');
  const [toolbars] = useState(['italic', 'underline', '-', 'bold', '=', 'github']);

  return <MdEditor modelValue={text} onChange={setText} toolbars={toolbars} />;
};
\`\`\`

### 💪 自定义工具栏

这里包含了\`mark\`标记扩展普通工具栏和\`emoji\`扩展下拉工具栏的类型

可运行源码参考本文档[docs](https://github.com/imzbf/md-editor-rt/blob/docs/src/pages/Preview/index.tsx)。

![标记及Emoji预览](https://imzbf.github.io/md-editor-rt/imgs/mark_emoji.gif)

> 更多 emoji，[https://getemoji.com/](https://getemoji.com/)。

### 🧙‍♂️ 调整编辑器样式

2.x 使用 css 变量定义了大部分内容：

\`\`\`less
.css-vars(@isDark) {
  --md-color: if(@isDark, #999, #222);
  --md-hover-color: if(@isDark, #bbb, #000);
  --md-bk-color: if(@isDark, #000, #fff);
  --md-bk-color-outstand: if(@isDark, #111, #f6f6f6);
  --md-bk-hover-color: if(@isDark, #1b1a1a, #f5f7fa);
  --md-border-color: if(@isDark, #2d2d2d, #e6e6e6);
  --md-border-hover-color: if(@isDark, #636262, #b9b9b9);
  --md-border-active-color: if(@isDark, #777, #999);
  --md-modal-mask: #00000073;
  --md-scrollbar-bg-color: if(@isDark, #0f0f0f, #e2e2e2);
  --md-scrollbar-thumb-color: if(@isDark, #2d2d2d, #0000004d);
  --md-scrollbar-thumb-hover-color: if(@isDark, #3a3a3a, #00000059);
  --md-scrollbar-thumb-active-color: if(@isDark, #3a3a3a, #00000061);
}

.md-editor {
  .css-vars(false);
}

.md-editor-dark {
  .css-vars(true);
}
\`\`\`

只需要调整对应的 css 变量，比如调整暗夜模式下的背景：

\`\`\`css
.md-editor-dark {
  --md-bk-color: #333 !important;
}
\`\`\`

### 🙍🏻‍♂️ 自行引入扩展库

这里给出一个完全不使用外部链接，全部自行引入的示例：

\`\`\`jsx
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

// <=5.2.0
import screenfull from 'screenfull';

import katex from 'katex';
import 'katex/dist/katex.min.css';

import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

import mermaid from 'mermaid';

import highlight from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.css';

import prettier from 'prettier';
import parserMarkdown from 'prettier/parser-markdown';

MdEditor.config({
  editorExtensions: {
    prettier: {
      prettierInstance: prettier,
      parserMarkdownInstance: parserMarkdown
    },
    highlight: {
      instance: highlight
    },
    screenfull: {
      instance: screenfull
    },
    katex: {
      instance: katex
    },
    cropper: {
      instance: Cropper
    },
    mermaid: {
      instance: mermaid
    }
  }
});

export default () => {
  return <MdEditor modelValue="" />;
};
\`\`\`

> 注意：highlight 的样式自行引入后，将不支持切换代码样式。

## 🔒 xss 防范

在\`1.3.0\`之后，通过\`sanitize\`事件，自行处理不安全的 html 内容。例如：使用\`sanitize-html\`处理

\`\`\`shell
yarn add sanitize-html
\`\`\`

\`\`\`jsx
import React from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import sanitizeHtml from 'sanitize-html';

export default () => {
  return <MdEditor sanitize={(html) => sanitizeHtml(html)} />;
};
\`\`\`

更详细的实现可以参考本文档的源码！

## 🧻 编辑此页面

[demo-zh-CN](https://github.com/imzbf/md-editor-rt/blob/dev-docs/public/demo-zh-CN.md)
`,i="demo-preview",x=()=>{const e=l(m=>m),[s,d]=t.useState(()=>e.lang==="zh-CN"?o:r),a=()=>{d(p(e.lang==="en-US"?r:o))};return t.useEffect(a,[e.lang]),n.jsx("div",{className:"container",children:n.jsxs("div",{className:"doc",children:[n.jsx(c,{editorId:i,modelValue:s}),n.jsx(u,{editorId:i})]})})};export{x as default};
