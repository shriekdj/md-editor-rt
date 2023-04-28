import{u as l,r as t,R as n,I as c,a as p}from"./index.d5bdd06f.js";import{I as u}from"./index.75917911.js";var r=`## \u{1F601} Basic Usage

It has been developing iteratively, so update the latest version please. Publish logs: [releases](https://github.com/imzbf/md-editor-rt/releases)

### \u{1F913} CDN

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

### \u{1F916} Npm Install

\`\`\`shell [install:yarn]
yarn add md-editor-rt
\`\`\`

\`\`\`shell [install:npm]
npm install md-editor-rt
\`\`\`

### \u{1F913} Jsx Template

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('hello md-editor-rt!');
  return <MdEditor modelValue={text} onChange={setText} />;
};
\`\`\`

## \u{1F942} Api usage

Usages of some APIs.

### \u{1F976} Customize Shortcut Key

Source code for built-in shortcut key configuration: [commands.ts](https://github.com/imzbf/md-editor-rt/blob/develop/MdEditor/layouts/Content/codemirror/commands.ts). They have been added as extensions to \`codemirror\`.

The basic principle of replacing or deleting shortcut keys is to find the corresponding extension, and handle it.

In fact, The Second input parameter \`extensions\` of \`codeMirrorExtensions\` is an array, The first item in the array is the shortcut key extension. The third input parameter is the default shortcut key configuration.

#### \u{1F485} Modify Shortcut Key

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

#### \u2702\uFE0F Delete Shortcut Key

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

#### \u{1F489} Add Shortcut Key

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

### \u{1F366} Change Theme

Themes are divided into editor theme(\`theme\`), article preview theme(\`previewTheme\`) and code theme(\`codeTheme\`).

#### \u{1F367} Editor Theme

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

#### \u{1F361} Preview Theme

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

#### \u{1F384} Code Theme

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

### \u{1F6E0} Config Extensions

Extensions highlight, prettier, cropper, screenfull are import from \`cdn\`. When your project is running offline, replace urls of these extensions. Some Extensions support be injected in development environment.

Example for \`screenfull\`:

#### \u26B0\uFE0F Inject Directly

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

#### \u{1F4E1} Intranet Link

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

### \u{1F4F7} Upload Pictures

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

### \u{1F3F3}\uFE0F\u200D\u{1F308} Extension Language

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

### \u{1F4C4} Get Catalogue

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

### \u{1FA9A} Define Toolbar

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

### \u{1F4AA} Customize Toolbar

There are examples of \`mark\` and \`emoji\`.

To get complete code, refer to [docs](https://github.com/imzbf/md-editor-rt/blob/docs/src/pages/Preview/index.tsx).

![mark and Emoji extension](https://imzbf.github.io/md-editor-rt/imgs/mark_emoji.gif)

> Get more emojis, go to [https://getemoji.com/](https://getemoji.com/).

### \u{1F9D9}\u200D\u2642\uFE0F Change Styles

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

### \u{1F64D}\u{1F3FB}\u200D\u2642\uFE0F Import All Library

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

## \u{1F512} XSS

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

## \u{1F9FB} Edit This Page

[demo-en-US](https://github.com/imzbf/md-editor-rt/blob/dev-docs/public/demo-en-US.md)
`,o=`## \u{1F601} \u57FA\u672C\u4F7F\u7528\u793A\u4F8B

\u76EE\u524D\u4E00\u76F4\u5728\u8FED\u4EE3\u5F00\u53D1\uFF0C\u6240\u4EE5\u5C3D\u91CF\u5B89\u88C5\u6700\u65B0\u7248\u672C\u3002\u53D1\u5E03\u65E5\u5FD7\u8BF7\u524D\u5F80\uFF1A[releases](https://github.com/imzbf/md-editor-rt/releases)

### \u{1F913} CDN \u94FE\u63A5

\u901A\u8FC7\u76F4\u63A5\u94FE\u63A5\u751F\u4EA7\u7248\u672C\u6765\u4F7F\u7528\uFF0C\u4E0B\u9762\u662F\u4E00\u4E2A\u5C0F\u4F8B\u5B50\uFF1A

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

### \u{1F916} NPM \u5B89\u88C5

\`\`\`shell [install:yarn]
yarn add md-editor-rt
\`\`\`

\`\`\`shell [install:npm]
npm install md-editor-rt
\`\`\`

### \u{1F913} \u57FA\u672C\u4F7F\u7528

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('hello md-editor-rt\uFF01');
  return <MdEditor modelValue={text} onChange={setText} />;
};
\`\`\`

## \u{1F942} \u6269\u5C55\u529F\u80FD

\u8FD9\u91CC\u5305\u542B\u4E86\u4E00\u4E9B\u7F16\u8F91\u5668\`api\`\u7684\u4F7F\u7528\u793A\u8303

### \u{1F976} \u81EA\u5B9A\u4E49\u5FEB\u6377\u952E

\u5185\u7F6E\u7684\u5FEB\u6377\u952E\u914D\u7F6E\u7684\u6E90\u7801\uFF1A[commands.ts](https://github.com/imzbf/md-editor-rt/blob/develop/MdEditor/layouts/Content/codemirror/commands.ts)\uFF0C\u5B83\u4EEC\u4F5C\u4E3A\u6269\u5C55\u9879\u88AB\u6DFB\u52A0\u5230\u4E86\`codemirror\`\u3002

\u60F3\u8981\u66FF\u6362\u3001\u5220\u9664\u5FEB\u6377\u952E\u7684\u57FA\u672C\u539F\u7406\u662F\u627E\u5230\u5BF9\u5E94\u7684\u6269\u5C55\uFF0C\u7136\u540E\u904D\u5386\u8FD9\u4E2A\u5FEB\u6377\u952E\u914D\u7F6E\u7684\u6570\u7EC4\uFF0C\u627E\u5230\u5E76\u5904\u7406\u5B83\u3002

\u4E8B\u5B9E\u4E0A\uFF0C\`MdEditor.config\`\u4E2D\`codeMirrorExtensions\`\u7684\u7B2C\u4E8C\u5165\u53C2\`extensions\`\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5B83\u7684\u7B2C\u4E00\u9879\u5C31\u662F\u5FEB\u6377\u952E\u6269\u5C55\uFF0C\u7B2C\u4E09\u5165\u53C2\u5C31\u662F\u9ED8\u8BA4\u7684\u5FEB\u6377\u952E\u914D\u7F6E\u3002

#### \u{1F485} \u4FEE\u6539\u5FEB\u6377\u952E

\u5C06\`Ctrl-b\`\u4FEE\u6539\u4E3A\`Ctrl-m\`

\`\`\`js
import MdEditor from 'md-editor-rt';
import { keymap } from '@codemirror/view';

MdEditor.config({
  // [keymap, minimalSetup, markdown, EditorView.lineWrapping, EditorView.updateListener, EditorView.domEventHandlers, oneDark??oneLight]
  codeMirrorExtensions(theme, extensions, mdEditorCommands) {
    const newExtensions = [...extensions];
    // 1. \u5148\u628A\u9ED8\u8BA4\u7684\u5FEB\u6377\u952E\u6269\u5C55\u79FB\u9664
    newExtensions.shift();

    // 2. \u53C2\u8003\u5FEB\u6377\u952E\u914D\u7F6E\u7684\u6E90\u7801\uFF0C\u627E\u5230CtrlB\u7684\u914D\u7F6E\u9879\u5728mdEditorCommands\u4E2D\u7684\u4F4D\u7F6E
    const CtrlB = mdEditorCommands[0];

    // 3. \u914D\u7F6Ecodemirror\u5FEB\u6377\u952E\u7684\u6587\u6863
    // https://codemirror.net/docs/ref/#commands
    const CtrlM = {
      // \u8FD9\u91CC\u6211\u4EEC\u9700\u8981CtrlB\u9ED8\u8BA4\u89E6\u53D1\u6267\u884C\u7684run\u65B9\u6CD5\uFF0C\u5982\u679C\u662F\u65B0\u589E\u5FEB\u6377\u952E\u7B49\uFF0C\u5C31\u9700\u8981\u81EA\u884C\u5904\u7406\u89E6\u53D1\u903B\u8F91
      ...CtrlB,
      key: 'Ctrl-m',
      mac: 'Cmd-m'
    };

    // 4. \u628A\u4FEE\u6539\u540E\u7684\u5FEB\u6377\u952E\u653E\u5230\u5F85\u6784\u5EFA\u6269\u5C55\u7684\u6570\u7EC4\u4E2D
    const newMdEditorCommands = [
      CtrlM,
      ...mdEditorCommands.filter((i) => i.key !== 'Ctrl-b')
    ];

    newExtensions.push(keymap.of(newMdEditorCommands));

    return newExtensions;
  }
});
\`\`\`

#### \u2702\uFE0F \u5220\u9664\u5FEB\u6377\u952E

\u7981\u7528\u6240\u6709\u5FEB\u6377\u952E

\`\`\`js
import MdEditor from 'md-editor-rt';

MdEditor.config({
  // [keymap, minimalSetup, markdown, EditorView.lineWrapping, EditorView.updateListener, EditorView.domEventHandlers, oneDark??oneLight]
  codeMirrorExtensions(theme, extensions) {
    const newExtensions = [...extensions];
    // 1. \u628A\u9ED8\u8BA4\u7684\u5FEB\u6377\u952E\u6269\u5C55\u79FB\u9664
    newExtensions.shift();

    // 2. \u8FD4\u56DE\u6269\u5C55\u5217\u8868\u5373\u53EF
    return newExtensions;
  }
});
\`\`\`

#### \u{1F489} \u65B0\u589E\u5FEB\u6377\u952E

\u5982\u679C\u6D89\u53CA\u5230\u5411\u7F16\u8F91\u6846\u63D2\u5165\u5185\u5BB9\uFF0C\u8FD9\u662F\u9700\u8981\u501F\u52A9\u7EC4\u4EF6\u5B9E\u4F8B\u4E0A\u7ED1\u5B9A\u7684\`insert\`\u65B9\u6CD5\uFF0C\u53C2\u8003[\u624B\u52A8\u5411\u6587\u672C\u6846\u63D2\u5165\u5185\u5BB9](/md-editor-rt/zh-CN/docs#%F0%9F%92%89%20insert)\u3002

\u5982\u679C\u4E0D\u662F\u5728\u7F16\u8F91\u5668\u6240\u5728\u7684\u7EC4\u4EF6\u4E2D\u4F7F\u7528\`MdEditor.config\`\uFF0C\u8FD9\u662F\u65E0\u6CD5\u62FF\u5230\u7F16\u8F91\u5668\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u8FD9\u65F6\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u501F\u52A9\`event-bus\`\u3002

\u793A\u4F8B\u5B9E\u73B0\`Ctrl+m\`\u5411\u7F16\u8F91\u6846\u63D2\u5165\u6807\u8BB0\u6A21\u5757(\`==mark==\`)

\`index.ts\`

\`\`\`js
import MdEditor from 'md-editor-rt';
import { keymap, KeyBinding } from '@codemirror/view';
// \u5047\u8BBE\u4F60\u4F7F\u7528\u4E86EventBus
import bus from '@/utils/event-bus';

MdEditor.config({
  // [keymap, minimalSetup, markdown, EditorView.lineWrapping, EditorView.updateListener, EditorView.domEventHandlers, oneDark??oneLight]
  codeMirrorExtensions(theme, extensions, mdEditorCommands) {
    const newExtensions = [...extensions];
    // 1. \u5148\u628A\u9ED8\u8BA4\u7684\u5FEB\u6377\u952E\u6269\u5C55\u79FB\u9664
    newExtensions.shift();

    // 2. \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5FEB\u6377\u952E\u914D\u7F6E\uFF0C\u53C2\u8003https://codemirror.net/docs/ref/#commands
    const CtrlM: KeyBinding = {
      key: 'Ctrl-m',
      mac: 'Cmd-m',
      run: () => {
        bus.emit('insertMarkBlock');
        return true;
      }
    };

    // 4. \u628A\u65B0\u7684\u5FEB\u6377\u952E\u6DFB\u52A0\u5230\u6570\u7EC4\u4E2D
    const newMdEditorCommands = [...mdEditorCommands, CtrlM];

    newExtensions.push(keymap.of(newMdEditorCommands));

    return newExtensions;
  }
});
\`\`\`

\u63A5\u4E0B\u6765\u5728\u7F16\u8F91\u5668\u6240\u5728\u7EC4\u4EF6\u76D1\u542C\`insertMarkBlock\`\u8FD9\u4E2A\u4E8B\u4EF6

\`App.tsx\`

\`\`\`tsx
import React, { useState, useRef, useEffect } from 'react';
import MdEditor from 'md-editor-rt';
import type { ExposeParam } from 'md-editor-rt';
// \u5047\u8BBE\u4F60\u4F7F\u7528\u4E86EventBus
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

\u9644\uFF1A\`EventBus\`\u6700\u7B80\u5355\u5B9E\u73B0

\`\`\`ts
/* eslint-disable @typescript-eslint/ban-types */
class EventBus {
  private events: Map<string, Function[]>;

  constructor() {
    this.events = new Map();
  }

  on(eventName: string, fn: Function) {
    if (!eventName) {
      console.error('\u65E0\u6548\u7684\u4E8B\u4EF6\u540D\u79F0');
      return false;
    }

    if (!(fn instanceof Function)) {
      console.error('\u65E0\u6548\u7684\u56DE\u8C03\u65B9\u6CD5');
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

### \u{1F366} \u4E3B\u9898\u5207\u6362

\u4E3B\u9898\u5206\u4E3A\u4E86\u7F16\u8F91\u5668\u4E3B\u9898\uFF08\`theme\`\uFF0C\u79F0\u4E3A\u5168\u5C40\u4E3B\u9898\uFF09\u3001\u9884\u89C8\u5185\u5BB9\u4E3B\u9898\uFF08\`previewTheme\`\uFF09\u548C\u5757\u7EA7\u4EE3\u7801\u4E3B\u9898\uFF08\`codeTheme\`\uFF09\u3002

#### \u{1F367} \u7F16\u8F91\u5668\u4E3B\u9898

\u652F\u6301\u9ED8\u8BA4\u548C\u6697\u591C\u6A21\u5F0F\u4E24\u79CD

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('hello md-editor-rt\uFF01');
  const [theme] = useState('dark');
  return <MdEditor modelValue={text} onChange={setText} theme={theme} />;
};
\`\`\`

#### \u{1F361} \u9884\u89C8\u4E3B\u9898

\u5185\u7F6E\u4E86\`default\`\u3001\`github\`\u3001\`vuepress\`\u3001\`mk-cute\`\u3001\`smart-blue\`\u3001\`cyanosis\`6 \u79CD\u4E3B\u9898\uFF0C\u5728\u4E00\u4E9B\u76F4\u63A5\u9884\u89C8\u6587\u6863\u5185\u5BB9\u65F6\u4F7F\u7528\u3002\u5E76\u4E14\u652F\u6301\u5728\u7EBF\u5207\u6362\uFF08\u4FEE\u6539\`previewTheme\`\u5373\u53EF\uFF09\u548C\u81EA\u884C\u6269\u5C55\u3002

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('hello md-editor-rt\uFF01');
  const [previewTheme] = useState('github');
  return <MdEditor modelValue={text} onChange={setText} previewTheme={previewTheme} />;
};
\`\`\`

- \u81EA\u5B9A\u4E49

  1. \u5148\u4EE5\`xxx-theme\`\u4E3A\u7C7B\u540D\uFF0C\u5B9A\u4E49\u4F60\u7684\u4E3B\u9898\`css\`\uFF0Cxxx \u662F\u4E3B\u9898\u540D\u79F0\uFF0C\u5177\u4F53\u7684\u5185\u5BB9\u53C2\u8003[markdown-theme](https://github.com/imzbf/markdown-theme)

  _xxx.css_

  \`\`\`css
  .xxx-theme code {
    color: red;
  }
  \`\`\`

  2. \u5168\u5C40\u5F15\u5165

  \`\`\`js
  import 'xxx.css';
  \`\`\`

  3. \u8BBE\u7F6E\`previewTheme\`\u4E3A xxx

  \`\`\`jsx
  <MdEditor previewTheme="xxx" />
  \`\`\`

#### \u{1F384} \u4EE3\u7801\u4E3B\u9898

\u5185\u7F6E\u4E86\`atom\`\u3001\`a11y\`\u3001\`github\`\u3001\`gradient\`\u3001\`kimbie\`\u3001\`paraiso\`\u3001\`qtcreator\`\u3001\`stackoverflow\`\u4EE3\u7801\u4E3B\u9898\uFF0C\u5747\u6765\u81F3[highlight.js](https://highlightjs.org/)

- \u4F7F\u7528

  \`\`\`jsx
  import React, { useState } from 'react';
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  export default () => {
    const [text, setText] = useState('hello md-editor-rt\uFF01');
    const [codeTheme] = useState('atom');
    return <MdEditor modelValue={text} onChange={setText} codeTheme={codeTheme} />;
  };
  \`\`\`

- \u81EA\u5B9A\u4E49

  1. \u627E\u5230\u4F60\u559C\u6B22\u7684\u4EE3\u7801\u4E3B\u9898\uFF0C\u6700\u597D\u652F\u6301\u6697\u591C\u6A21\u5F0F

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

  \u4F60\u53EF\u4EE5\u901A\u8FC7\u5C06\`css\`\u7684\`key\`\u8BBE\u7F6E\u4E3A\u5185\u7F6E\u540D\u79F0\u6765\u8986\u76D6\u5185\u7F6E\u7684\u94FE\u63A5\u3002

  2. \u8BBE\u7F6E\`codeTheme\`

  \`\`\`jsx
  <MdEditor codeTheme="xxxxx" />
  \`\`\`

### \u{1F6E0} \u6269\u5C55\u5E93\u66FF\u6362

highlight\u3001prettier\u3001cropper\u3001screenfull \u5747\u4F7F\u7528\u5916\u94FE\u5F15\u5165\uFF0C\u5728\u65E0\u5916\u7F51\u7684\u65F6\u5019\uFF0C\u90E8\u5206\u53EF\u5C06\u9879\u76EE\u4E2D\u5DF2\u5B89\u88C5\u7684\u4F9D\u8D56\u4F20\u5165\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E0B\u8F7D\u597D\u7684\u5F15\u7528\u3002

\`screenfull\` \u7684\u4F8B\u5B50\uFF1A

#### \u26B0\uFE0F \u5185\u7F6E\u5B9E\u4F8B

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
// \u5F15\u7528screenfull
import screenfull from 'screenfull';

MdEditor.config({
  editorExtensions: {
    screenfull: {
      instance: screenfull
    }
  }
});

export default () => {
  const [text, setText] = useState('hello md-editor-rt\uFF01');
  return <MdEditor modelValue={text} onChange={setText} />;
};
\`\`\`

#### \u{1F4E1} \u5185\u7F51\u94FE\u63A5

\u5BF9\u5E94\u7684 js \u6587\u4EF6\u53EF\u4EE5\u53BB[unpkg.com](https://unpkg.com)\uFF0C\u76F4\u63A5\u627E\u5230\u5BF9\u5E94\u7684\u6587\u4EF6\u4E0B\u8F7D\u5373\u53EF\u3002

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
  const [text, setText] = useState('hello md-editor-rt\uFF01');
  return <MdEditor modelValue={text} onChange={setText} />;
};
\`\`\`

### \u{1F4F7} \u56FE\u7247\u4E0A\u4F20

\u9ED8\u8BA4\u53EF\u4EE5\u9009\u62E9\u591A\u5F20\u56FE\u7247\uFF0C\u652F\u6301\u622A\u56FE\u7C98\u8D34\u677F\u4E0A\u4F20\u56FE\u7247\uFF0C\u652F\u6301\u590D\u5236\u7F51\u9875\u56FE\u7247\u7C98\u8D34\u4E0A\u4F20\u3002

> \u6CE8\u610F\uFF1A\u7C98\u8D34\u677F\u4E0A\u4F20\u65F6\uFF0C\u5982\u679C\u662F\u7F51\u9875\u4E0A\u7684 gif \u56FE\uFF0C\u65E0\u6CD5\u6B63\u786E\u4E0A\u4F20\u4E3A gif \u683C\u5F0F\uFF01\u8BF7\u4FDD\u5B58\u672C\u5730\u540E\u518D\u624B\u52A8\u4E0A\u4F20\u3002

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
  const [text, setText] = useState('hello md-editor-rt\uFF01');
  return <MdEditor modelValue={text} onChange={setText} onUploadImg={onUploadImg} />;
};
\`\`\`

### \u{1F3F3}\uFE0F\u200D\u{1F308} \u8BED\u8A00\u6269\u5C55\u4E0E\u66FF\u6362

\`\`\`js
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

MdEditor.config({
  editorConfig: {
    languageUserDefined: {
      'my-lang': {
        toolbarTips: {
          bold: '\u52A0\u7C97',
          underline: '\u4E0B\u5212\u7EBF',
          italic: '\u659C\u4F53',
          strikeThrough: '\u5220\u9664\u7EBF',
          title: '\u6807\u9898',
          sub: '\u4E0B\u6807',
          sup: '\u4E0A\u6807',
          quote: '\u5F15\u7528',
          unorderedList: '\u65E0\u5E8F\u5217\u8868',
          orderedList: '\u6709\u5E8F\u5217\u8868',
          task: '\u4EFB\u52A1\u5217\u8868',
          codeRow: '\u884C\u5185\u4EE3\u7801',
          code: '\u5757\u7EA7\u4EE3\u7801',
          link: '\u94FE\u63A5',
          image: '\u56FE\u7247',
          table: '\u8868\u683C',
          mermaid: 'mermaid\u56FE',
          katex: 'katex\u516C\u5F0F',
          revoke: '\u540E\u9000',
          next: '\u524D\u8FDB',
          save: '\u4FDD\u5B58',
          prettier: '\u7F8E\u5316',
          pageFullscreen: '\u6D4F\u89C8\u5668\u5168\u5C4F',
          fullscreen: '\u5C4F\u5E55\u5168\u5C4F',
          preview: '\u9884\u89C8',
          htmlPreview: 'html\u4EE3\u7801\u9884\u89C8',
          catalog: '\u76EE\u5F55',
          github: '\u6E90\u7801\u5730\u5740'
        },
        titleItem: {
          h1: '\u4E00\u7EA7\u6807\u9898',
          h2: '\u4E8C\u7EA7\u6807\u9898',
          h3: '\u4E09\u7EA7\u6807\u9898',
          h4: '\u56DB\u7EA7\u6807\u9898',
          h5: '\u4E94\u7EA7\u6807\u9898',
          h6: '\u516D\u7EA7\u6807\u9898'
        },
        imgTitleItem: {
          link: '\u6DFB\u52A0\u94FE\u63A5',
          upload: '\u4E0A\u4F20\u56FE\u7247',
          clip2upload: '\u88C1\u526A\u4E0A\u4F20'
        },
        linkModalTips: {
          linkTitle: '\u6DFB\u52A0\u94FE\u63A5',
          imageTitle: '\u6DFB\u52A0\u56FE\u7247',
          descLabel: '\u94FE\u63A5\u63CF\u8FF0\uFF1A',
          descLabelPlaceHolder: '\u8BF7\u8F93\u5165\u63CF\u8FF0...',
          urlLabel: '\u94FE\u63A5\u5730\u5740\uFF1A',
          urlLabelPlaceHolder: '\u8BF7\u8F93\u5165\u94FE\u63A5...',
          buttonOK: '\u786E\u5B9A'
        },
        clipModalTips: {
          title: '\u88C1\u526A\u56FE\u7247\u4E0A\u4F20',
          buttonUpload: '\u4E0A\u4F20'
        },
        copyCode: {
          text: '\u590D\u5236\u4EE3\u7801',
          successTips: '\u5DF2\u590D\u5236\uFF01',
          failTips: '\u590D\u5236\u5931\u8D25\uFF01'
        },
        mermaid: {
          flow: '\u6D41\u7A0B\u56FE',
          sequence: '\u65F6\u5E8F\u56FE',
          gantt: '\u7518\u7279\u56FE',
          class: '\u7C7B\u56FE',
          state: '\u72B6\u6001\u56FE',
          pie: '\u997C\u56FE',
          relationship: '\u5173\u7CFB\u56FE',
          journey: '\u65C5\u7A0B\u56FE'
        },
        katex: {
          inline: '\u884C\u5185\u516C\u5F0F',
          block: '\u5757\u7EA7\u516C\u5F0F'
        },
        footer: {
          markdownTotal: '\u5B57\u6570',
          scrollAuto: '\u540C\u6B65\u6EDA\u52A8'
        }
      }
    }
  }
});

export default () => {
  const [text, setText] = useState('hello md-editor-rt\uFF01');
  const [language] = useState('my-lang');

  return <MdEditor modelValue={text} onChange={setText} language={language} />;
};
\`\`\`

\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u73B0\u6210\u7684\u6269\u5C55\u8BED\u8A00\uFF1A[md-editor-extension](https://github.com/imzbf/md-editor-extension)\u3002\u4F7F\u7528\u53CA\u8D21\u732E\u65B9\u5F0F\u89C1\u6269\u5C55\u5E93\u6587\u6863~

### \u{1F4C4} \u76EE\u5F55\u83B7\u53D6\u4E0E\u5C55\u793A

- \u83B7\u53D6

  \`\`\`jsx
  import React, { useState } from 'react';
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  export default () => {
    const [text, setText] = useState('hello md-editor-rt\uFF01');
    const [catalogList, setList] = useState([]);

    return <MdEditor modelValue={text} onChange={setText} onGetCatalog={setList} />;
  };
  \`\`\`

- \u5C55\u793A

  \u4F7F\u7528\u5185\u7F6E\`MdEditor.MdCatalog\`\u7EC4\u4EF6

  \`\`\`jsx
  import React, { useState } from 'react';
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  const editorId = 'my-editor';

  export default () => {
    const [state] = useState({
      text: '# \u6807\u9898',
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

### \u{1FA9A} \u8C03\u6574\u5DE5\u5177\u680F

\u4ECE\`v1.2.0\`\u5F00\u59CB\uFF0C\u652F\u6301\u8C03\u6574\u5DE5\u5177\u680F\u5185\u5BB9\u987A\u5E8F\u548C\u5206\u5272\u7B26\u4E86 \u{1F914}\u3002

\`\`\`jsx
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('hello md-editor-rt\uFF01');
  const [toolbars] = useState(['italic', 'underline', '-', 'bold', '=', 'github']);

  return <MdEditor modelValue={text} onChange={setText} toolbars={toolbars} />;
};
\`\`\`

### \u{1F4AA} \u81EA\u5B9A\u4E49\u5DE5\u5177\u680F

\u8FD9\u91CC\u5305\u542B\u4E86\`mark\`\u6807\u8BB0\u6269\u5C55\u666E\u901A\u5DE5\u5177\u680F\u548C\`emoji\`\u6269\u5C55\u4E0B\u62C9\u5DE5\u5177\u680F\u7684\u7C7B\u578B

\u53EF\u8FD0\u884C\u6E90\u7801\u53C2\u8003\u672C\u6587\u6863[docs](https://github.com/imzbf/md-editor-rt/blob/docs/src/pages/Preview/index.tsx)\u3002

![\u6807\u8BB0\u53CAEmoji\u9884\u89C8](https://imzbf.github.io/md-editor-rt/imgs/mark_emoji.gif)

> \u66F4\u591A emoji\uFF0C[https://getemoji.com/](https://getemoji.com/)\u3002

### \u{1F9D9}\u200D\u2642\uFE0F \u8C03\u6574\u7F16\u8F91\u5668\u6837\u5F0F

2.x \u4F7F\u7528 css \u53D8\u91CF\u5B9A\u4E49\u4E86\u5927\u90E8\u5206\u5185\u5BB9\uFF1A

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

\u53EA\u9700\u8981\u8C03\u6574\u5BF9\u5E94\u7684 css \u53D8\u91CF\uFF0C\u6BD4\u5982\u8C03\u6574\u6697\u591C\u6A21\u5F0F\u4E0B\u7684\u80CC\u666F\uFF1A

\`\`\`css
.md-editor-dark {
  --md-bk-color: #333 !important;
}
\`\`\`

### \u{1F64D}\u{1F3FB}\u200D\u2642\uFE0F \u81EA\u884C\u5F15\u5165\u6269\u5C55\u5E93

\u8FD9\u91CC\u7ED9\u51FA\u4E00\u4E2A\u5B8C\u5168\u4E0D\u4F7F\u7528\u5916\u90E8\u94FE\u63A5\uFF0C\u5168\u90E8\u81EA\u884C\u5F15\u5165\u7684\u793A\u4F8B\uFF1A

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

> \u6CE8\u610F\uFF1Ahighlight \u7684\u6837\u5F0F\u81EA\u884C\u5F15\u5165\u540E\uFF0C\u5C06\u4E0D\u652F\u6301\u5207\u6362\u4EE3\u7801\u6837\u5F0F\u3002

## \u{1F512} xss \u9632\u8303

\u5728\`1.3.0\`\u4E4B\u540E\uFF0C\u901A\u8FC7\`sanitize\`\u4E8B\u4EF6\uFF0C\u81EA\u884C\u5904\u7406\u4E0D\u5B89\u5168\u7684 html \u5185\u5BB9\u3002\u4F8B\u5982\uFF1A\u4F7F\u7528\`sanitize-html\`\u5904\u7406

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

\u66F4\u8BE6\u7EC6\u7684\u5B9E\u73B0\u53EF\u4EE5\u53C2\u8003\u672C\u6587\u6863\u7684\u6E90\u7801\uFF01

## \u{1F9FB} \u7F16\u8F91\u6B64\u9875\u9762

[demo-zh-CN](https://github.com/imzbf/md-editor-rt/blob/dev-docs/public/demo-zh-CN.md)
`;const i="demo-preview";var x=()=>{const e=l(m=>m),[s,d]=t.exports.useState(()=>e.lang==="zh-CN"?o:r),a=()=>{d(p(e.lang==="en-US"?r:o))};return t.exports.useEffect(a,[e.lang]),n.createElement("div",{className:"container"},n.createElement("div",{className:"doc"},n.createElement(c,{editorId:i,modelValue:s}),n.createElement(u,{editorId:i})))};export{x as default};
