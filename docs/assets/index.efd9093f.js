import{u as m,r as t,R as n,I as c}from"./index.d5bdd06f.js";import{I as u}from"./index.75917911.js";var o=`> Use it online: [Go](https://codesandbox.io/s/elated-khorana-65jmr)

## \u{1F92F} Props

### \u{1F4C3} modelValue

- **type**: \`string\`
- **default**: \`''\`

  Markdown content.

  \`\`\`jsx
  <MdEditor modelValue="xxx" />
  \`\`\`

---

### \u{1F6CD} theme

- **type**: \`'light' | 'dark'\`
- **default**: \`'light'\`

  Editor's theme.

  \`\`\`jsx
  <MdEditor theme="dark" />
  \`\`\`

---

### \u{1F380} className

- **type**: \`string\`
- **default**: \`''\`

  ...

---

### \u{1F4BB} pageFullscreen

- **type**: \`boolean\`
- **default**: \`false\`

  Screenfull in web page.

---

### \u{1F4F1} preview

- **type**: \`boolean\`
- **default**: \`true\`

  Preview content in editor.

---

### \u{1F4C0} htmlPreview

- **type**: \`boolean\`
- **default**: \`false\`

  Preview html in editor. Set \`preview\` to \`false\` when \`htmlPreview\` is \`true\`.

---

### \u{1F4FA} previewOnly

- **type**: \`boolean\`
- **default**: \`false\`

  Only render article content, no toolbar, no edit area.

---

### \u{1F524} language

- **type**: \`string\`
- **default**: \`'zh-CN'\`

  Build-in language('zh-CN', 'en-US').

  You can install the existing language also: [md-editor-extension](https://github.com/imzbf/md-editor-extension). Refer to extension library for the usage and the way to contribute~

---

### \u{1F9F1} toolbars

- **type**: \`Array\`
- **default**: \`[all]\`

  Show contents of toolbar.

  You can sort the toolbar as you like, split tools by \`'-'\`, the left and right toolbars are divided by \`'='\`\uFF01

  _[all]_

  \`\`\`js
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
  \`\`\`

---

### \u{1F9F1} toolbarsExclude

- **type**: \`Array\`
- **default**: \`[]\`

  Don't show some item of toolbars, all keys.

---

### \u{1FA92} noPrettier

- **type**: \`boolean\`
- **default**: \`true\`

  Use prettier to beautify content or not.

---

### \u{1F3B2} editorId

- **type**: \`string\`
- **default**: \`'md-editor-rt'\`

  Editor's id, also the html id, it is used when there are two or more editor and server render.

---

### \u{1F90F} tabWidth

- **type**: \`number\`
- **default**: \`2\`

  One tab eq some space.

---

### \u{1F522} showCodeRowNumber

- **type**: \`boolean\`
- **default**: \`false\`

  Show row number for code block or not.

---

### \u{1F526} previewTheme

- **type**: \`'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'\`
- **default**: \`'default'\`

  Preview themes.

  Custom:

  1. Write css

  \`\`\`css
  .xxx-theme {
    color: red;
  }
  \`\`\`

  2. Set \`previewTheme\`

  \`\`\`jsx
  <MdEditor previewTheme="xxx" />
  \`\`\`

  For more, refer to [markdown-theme](https://github.com/imzbf/markdown-theme).

---

### \u{1F385}\u{1F3FB} style

- **type**: \`CSSProperties\`
- **default**: \`{}\`

  Editor inline style.

---

### \u{1F4C5} tableShape

- **type**: \`[number, number]\`
- **default**: \`[6, 4]\`

  Preset the size of the table, [columns, rows].

  \`\`\`jsx
  <MdEditor tableShape={[8, 4]}>
  \`\`\`

  ![Preview](https://imzbf.github.io/md-editor-rt/imgs/20211216165424.png)

---

### \u261D\uFE0F noMermaid

- **type**: \`boolean\`
- **default**: \`false\`

  do not want to use \`mermaid\`, set it to \`true\`.

  \`\`\`jsx
  <MdEditor noMermaid />
  \`\`\`

---

### \u{1FAA7} placeholder

- **type**: \`string\`
- **default**: \`''\`

  em-\\_-\uFF01

---

### \u274C noKatex

- **type**: \`boolean\`
- **default**: \`false\`

  Do not want to use \`katex\`, set it to \`true\`.

---

### \u{1F4AA} defToolbars

- **type**: \`Array<VNode>\`
- **default**: \`[]\`

  Custom toolbar in \`DropdownToolbar\`, \`NormalToolbar\` or \`ModalToolbar\`. To display them, put index of \`defToolbars\` into \`toolbars\`(this is not standard).

  \`\`\`jsx
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  const NormalToolbar = MdEditor.NormalToolbar;

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
  \`\`\`

  ![NormalToolbar](https://imzbf.github.io/md-editor-rt/imgs/normal-toolbar.gif)

  ![DropdownToolbar](https://imzbf.github.io/md-editor-rt/imgs/dropdown-toolbar.gif)

  For more info, Get **Internal Components** heading. Get source code of **mark**, **emoji** and **modal preview** at [docs](https://github.com/imzbf/md-editor-rt/tree/docs/src/components) branch.

---

### \u{1F989} codeTheme

- **type**: \`'atom'|'a11y'|'github'|'gradient'|'kimbie'|'paraiso'|'qtcreator'|'stackoverflow'\`
- **default**: \`'atom'\`

  Highlight code css name. Get Them from \`highlight.js\`.

  Custom:

  1. Config \`editorExtensions\`

  \`\`\`js
  import MdEditor from 'md-editor-rt';

  MdEditor.config({
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
  \`\`\`

  2. Set \`codeTheme\`

  \`\`\`jsx
  <MdEditor codeTheme="xxx" />
  \`\`\`

---

### \u{1F3B1} mdHeadingId

- **type**: \`(text: string, level: number, index: number) => string\`
- **default**: \`(text) => text\`

  Title \`ID\` generator.

  \`\`\`jsx
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  const mdHeadingId = (_text, _level, index) => \`heading-\${index}\`;

  export default () => {
    return <MdEditor mdHeadingId={mdHeadingId} />;
  };
  \`\`\`

---

### \u{1F423} sanitize

- **type**: \`(html: string) => string\`
- **default**: \`(html) => html\`

  Sanitize the html, prevent XSS. When you can be sure that your content is OK, ignore this.

  \`sanitize-html\` example:

  \`\`\`jsx
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';
  import sanitizeHtml from 'sanitize-html';

  const sanitize = (html) => sanitizeHtml(html);

  export default () => {
    return <MdEditor sanitize={sanitize} />;
  };
  \`\`\`

---

### \u{1F9B6} footers

- **type**: \`Array<'markdownTotal' \\| '=' \\| 'scrollSwitch' \\| number>\`
- **default**: \`['markdownTotal', '=', 'scrollSwitch']\`

  Show contents of footer, they are divided by \`'='\`. Set it to [] to hidden footer.

---

### \u26F5\uFE0F scrollAuto

- **type**: \`boolean\`
- **default**: \`true\`

  Scroll default setting.

---

### \u{1F9BF} defFooters

- **type**: \`Array<string \\| ReactElement>\`
- **default**: \`[]\`

  Custom footer.

  [Get](https://github.com/imzbf/md-editor-rt/blob/docs/src/pages/Preview/index.tsx) example code.

---

### \u{1F91E}\u{1F3FC} noIconfont

- **type**: \`boolean\`
- **default**:\`true\`

  Not append iconfont script, [download](https://at.alicdn.com/t/c/font_2605852_u82y61ve02.js) and import it by yourself.

  \`\`\`jsx
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  import '/assets/iconfont.js';

  export default () => {
    return <MdEditor noIconfont />;
  };
  \`\`\`

---

### \u{1F485} formatCopiedText

- **type**: \`(text: string) => string\`
- **default**: \`(text) => text\`

  Format copied code

  \`\`\`jsx
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  export default () => {
    const formatCopiedText = (text: string) => {
      return \`\${text}  - from md-editor-rt\`;
    };

    return <MdEditor formatCopiedText={formatCopiedText} />;
  };
  \`\`\`

---

### \u{1F979} noUploadImg

- **type**: \`boolean\`
- **default**: \`false\`

  Not show the entrance to upload pictures

  \`\`\`jsx
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  export default () => {
    return <MdEditor noUploadImg />;
  };
  \`\`\`

---

### \u{1F6C1} codeStyleReverse

- **type**: \`boolean\`
- **default**: \`true\`

  Code style will be reversed to dark while code block of the theme has a dark background.

---

### \u{1F9FC} codeStyleReverseList

- **type**: \`Array\`
- **default**: \`['default', 'mk-cute']\`

  Themes to be reversed.

---

### \u{1F52C} autoFocus

- **type**: \`boolean\`
- **default**: \`false\`

  Same as \`autofocus\` in native textarea.

---

### \u{1F529} disabled

- **type**: \`boolean\`
- **default**: \`false\`

  Same as \`disabled\` in native textarea.

---

### \u{1F512} readOnly

- **type**: \`boolean\`
- **default**: \`false\`

  Same as \`readonly\` in native textarea.

---

### \u{1F4CF} maxLength

- **type**: \`number\`
- **default**: \`\`

  Same as \`maxlength\` in native textarea.

---

### \u{1F4E5} autoDetectCode

- **type**: \`boolean\`
- **default**: \`false\`

  Auto detect the type of pasted code, only support that copied from \`vscode\`.

---

## \u{1FAA2} Event

### \u{1F4DE} onChange

- **type**: \`(v: string) => void\`

  Content changed event(bind to \`oninput\` of \`textarea\`).

---

### \u{1F4BE} onSave

- **type**: \`(v: string, h: Promise<string>) => void\`

  Save Content event, \`ctrl+s\` and click button will trigger.

  \`\`\`jsx
  import MdEditor from 'md-editor-rt';
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
  \`\`\`

---

### \u{1F4F8} onUploadImg

- **type**: \`(files: Array<File>, callback: (urls: Array<string>) => void) => void\`

  Upload picture event, when picture is uploading the modal will not close, please provide right urls to the callback function.

\`\`\`jsx
import MdEditor from 'md-editor-rt';
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
\`\`\`

---

### \u{1F681} onHtmlChanged

- **type**: \`(h: string) => void\`

  Compile markdown successful event, you can use it to get the html code.

---

### \u{1F5D2} onGetCatalog

- **type**: \`(list: HeadList[]) => void\`

  Get catalogue of article.

---

### \u{1F480} onError

- **type**: \`(err: { name: string; message: string;}) => void\`

  Run-Time error event, only be called when \`Cropper\`, \`fullscreen\`, \`prettier\` is not loaded.

  \`\`\`jsx
  const onError = (err) => {
    alert(err.message);
  };

  export default () => <MdEditor onError={onError} />;
  \`\`\`

---

### \u{1F43E} onBlur

- **type**: \`(event: FocusEvent<HTMLTextAreaElement, Element>) => void\`

  Blur the textarea element.

  \`\`\`jsx
  const onBlur = (err) => {
    console.log('onBlur', e);
  };

  export default () => <MdEditor onBlur={onBlur} />;
  \`\`\`

---

### \u{1F516} onFocus

- **type**: \`(event: FocusEvent<HTMLTextAreaElement, Element>) => void\`

  Focus the textarea element

---

### \u{1F54A} noHighlight

- **type**: \`boolean\`
- **default**: \`false\`

  never highlight code

---

## \u{1F931}\u{1F3FC} Expose

After 2.5.0, Editor exposes several methods on the instance, used to get or change the internal status of the editor.

\`\`\`js
import React, { useState, useEffect, useRef } from 'react';
import MdEditor, { ExposeParam } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('#Hello Editor');

  const editorRef = useRef<ExposeParam>();

  useEffect(() => {
    editorRef.current?.on('catalog', console.log);
  }, []);

  return <MdEditor ref={editorRef} modelValue={text} onChange={setText} />;
};
\`\`\`

### \u{1F442}\u{1F3FC} on

Get the internal state of the editor, including pageFullscreen, fullscreen, preview, htmlPreview, catalog, etc.

- pageFullscreen

  \`\`\`js
  editorRef.current?.on('pageFullscreen', (status) => console.log(status));
  \`\`\`

- fullscreen
  \`\`\`js
  editorRef.current?.on('fullscreen', (status) => console.log(status));
  \`\`\`
- preview
  \`\`\`js
  editorRef.current?.on('preview', (status) => console.log(status));
  \`\`\`
- htmlPreview
  \`\`\`js
  editorRef.current?.on('htmlPreview', (status) => console.log(status));
  \`\`\`
- catalog
  \`\`\`js
  editorRef.current?.on('catalog', (status) => console.log(status));
  \`\`\`

---

### \u{1F4BB} togglePageFullscreen

Toggle status of fullscreen within the page.

\`\`\`js
editorRef.current?.togglePageFullscreen(true);
\`\`\`

> Switched to the opposite status, without input parameter.

---

### \u{1F5A5} toggleFullscreen

Toggle status of fullscreen widthin browser.

\`\`\`js
editorRef.current?.toggleFullscreen(true);
\`\`\`

> Switched to the opposite status, without input parameter.

---

### \u{1F4D6} togglePreview

Toggle status of preview.

\`\`\`js
editorRef.current?.togglePreview(true);
\`\`\`

> Switched to the opposite status, without input parameter.

---

### \u{1F4FC} toggleHtmlPreview

Toggle status of htmlPreview.

\`\`\`js
editorRef.current?.toggleHtmlPreview(true);
\`\`\`

> Switched to the opposite status, without input parameter.

---

### \u{1F9EC} toggleCatalog

Toggle status of catalog.

\`\`\`js
editorRef.current?.toggleCatalog(true);
\`\`\`

> Switched to the opposite status, without input parameter.

---

### \u{1F4BE} triggerSave

\`\`\`js
editorRef.current?.triggerSave();
\`\`\`

---

### \u{1F489} insert

Manually insert content into textarea.

\`\`\`js
/**
 * @params selectedText
 */
editorRef.current?.insert((selectedText) => {
  /**
   * @return targetValue    Content to be inserted
   * @return select         Automatically select content
   * @return deviationStart Start position of the selected content
   * @return deviationEnd   End position of the selected content
   */
  return {
    targetValue: \`\${selectedText}\`,
    select: true,
    deviationStart: 0,
    deviationEnd: 0
  };
});
\`\`\`

---

### \u{1F3AF} focus

focus the textarea.

\`\`\`js
editorRef.current?.focus();
\`\`\`

---

## \u{1F4B4} Config Editor

Use \`MdEditor.config(option: ConfigOption)\` to reconfigure \`markdown-it\` and so on.

- codeMirrorExtensions: Customize new extensions based on theme and default extensions f codeMirror.

  Example: Editor does not render the line number of textarea by default, this extension needs to be manually added

  \`\`\`js
  import MdEditor from 'md-editor-rt';
  import { lineNumbers } from '@codemirror/view';

  MdEditor.config({
    codeMirrorExtensions(_theme, extensions) {
      return [...extensions, lineNumbers()];
    }
  });
  \`\`\`

- markdownItConfig: Customize extensions, attributes of \`markdown-it\`, etc.

  Example: Use \`markdown-it-anchor\` to render a hyperlink symbol to the right of the title

  \`\`\`js
  import MdEditor from 'md-editor-rt';
  import ancher from 'markdown-it-anchor';

  MdEditor.config({
    markdownItConfig(mdit) {
      mdit.use(ancher, {
        permalink: true
      });
    }
  });
  \`\`\`

- editorConfig: Add more languages, reset \`mermaid\` template or delay rendering time

  \`\`\`js
  import MdEditor from 'md-editor-rt';

  MdEditor.config({
    editorConfig: {
      languageUserDefined: {
        'en-US': {
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
        },
        // mermaid template
        mermaidTemplate: {
          flow: \`flow tempalte\`,
          sequence: \`sequence template\`,
          gantt: \`gantt template\`,
          class: \`class template\`,
          state: \`state template\`,
          pie: \`pie template\`,
          relationship: \`relationship template\`,
          journey: \`journey template\`
        },
        // delay rendering time(ms)
        renderDelay: 0
      }
    }
  });
  \`\`\`

- editorExtensions: Config some dependency libraries, like highlight..

  \`\`\`typescript
  import MdEditor from 'md-editor-rt';

  MdEditor.config({
    editorExtensions: { iconfont: 'https://xxx.cc' }
  });
  \`\`\`

  <details>
    <summary>[EditorExtensions]</summary>

  \`\`\`ts
  import MdEditor from 'md-editor-rt';

  interface EditorExtensions {
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
  \`\`\`

  </details>

## \u{1FAA1} Shortcut Keys

!!! warning Pay attention

Shortcut keys are only available when the textarea is focused!

!!!

| key | function | description |
| --- | --- | --- |
| TAB | insert space | Insert space, the length eq \`tabWidth\`, default: 2, support multiline |
| SHIFT + TAB | delete space, setting is the same as Tab |  |
| CTRL + C | copy | When selected, copy the selected content. When not selected, copy the content of the current line |
| CTRL + X | shear | When selected, cut the selected content. When not selected, cut the current line |
| CTRL + D | delete | When selected, delete the selected content. When not selected, delete the current line |
| CTRL + S | save | Trigger \`onSave\` event |
| CTRL + B | bold text | \`**bold**\` |
| CTRL + U | underline | \`<u>underline</u>\` |
| CTRL + I | italic | \`*italic*\` |
| CTRL + 1-6 | h1-h6 | \`# title\` |
| CTRL + \u2191 | superscript | \`<sup>superscript</sup>\` |
| CTRL + \u2193 | subscript | \`<sub>subscript</sub>\` |
| CTRL + O | ordered list | \`1. ordered list\` |
| CTRL + L | link | \`[link](https://github.com/imzbf/md-editor-rt)\` |
| CTRL + Z | withdraw | Withdraw history in editor, not the function of system |
| CTRL + SHIFT + S | line-through | \`~line-through~\` |
| CTRL + SHIFT + U | unordered list | \`- unordered list\` |
| CTRL + SHIFT + C | code block |  |
| CTRL + SHIFT + I | picture | \`![picture](https://imzbf.cc)\` |
| CTRL + SHIFT + Z | forward | Forward history in editor, not the function of system |
| CTRL + SHIFT + F | Beautify |  |
| CTRL + ALT + C | code row |  |
| CTRL + SHIFT + ALT + T | table | \`\\|table\\|\` |

## \u{1FAA4} Internal components

They are used as attributes of the editor component, eg: \`Editor.DropdownToolbar\`

### \u{1F423} NormalToolbar

\`Editor.NormalToolbar\`

- **props**

  - \`title\`: \`string\`, not necessary, title of toolbar.

- **events**

  - \`onClick\`: \`(e: MouseEvent) => void\`, necessary.

- **slots**

  - \`trigger\`: \`string | ReactElement\`, necessary, it is usually an icon, which is displayed on the toolbar.

usage:

\`\`\`jsx
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  return (
    <MdEditor
      modelValue=""
      editorId="md-prev"
      defToolbars={[
        <MdEditor.NormalToolbar
          title="mark"
          trigger={
            <svg className="md-editor-icon" aria-hidden="true">
              <use xlinkHref="#icon-mark"></use>
            </svg>
          }
          onClick={console.log}
          key="mark-toolbar"
        />
      ]}
    />
  );
};
\`\`\`

[MarkExtension Source Code](https://github.com/imzbf/md-editor-rt/blob/docs/src/components/MarkExtension/index.tsx)

---

### \u{1F43C} DropdownToolbar

\`Editor.DropdownToolbar\`

- **props**

  - \`title\`: \`string\`, not necessary, title of toolbar.
  - \`visible\`: \`boolean\`, necessary.

- **events**

  - \`onChange\`: \`(visible: boolean) => void\`, necessary.

- **slots**

  - \`trigger\`: \`string | ReactElement\`, necessary, it is usually an icon, which is displayed on the toolbar.
  - \`overlay\`: \`string | ReactElement\`, necessary, content of dropdown box.

usage:

\`\`\`jsx
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  return (
    <MdEditor
      modelValue={md}
      editorId="md-prev"
      defToolbars={[
        <MdEditor.DropdownToolbar
          visible={emojiVisible}
          onChange={setEmojiVisible}
          overlay={
            <>
              <div className="emoji-container">
                <ol className="emojis">
                  {emojis.map((emoji, index) => (
                    <li
                      key={\`emoji-\${index}\`}
                      onClick={() => {
                        emojiHandler(emoji);
                      }}
                    >
                      {emoji}
                    </li>
                  ))}
                </ol>
              </div>
            </>
          }
          trigger={
            <svg className="md-editor-icon" aria-hidden="true">
              <use xlinkHref="#icon-emoji"></use>
            </svg>
          }
          key="emoji-toolbar"
        />
      ]}
    />
  );
};
\`\`\`

[EmojiExtension Source Code](https://github.com/imzbf/md-editor-rt/blob/docs/src/components/EmojiExtension/index.tsx)

---

### \u{1F989} ModalToolbar

- **props**

  - \`title\`: \`string\`, not necessary, title of toolbar.
  - \`modalTitle\`: \`string\`, not necessary, title of the Modal.
  - \`visible\`: \`boolean\`, necessary, visibility of Modal.
  - \`width\`: \`string\`, not necessary, width of Modal, default \`auto\`.
  - \`height\`: \`string\`, same as \`width\`.
  - \`showAdjust\`: \`boolean\`, not necessary, visibility of fullscreen button.
  - \`isFullscreen\`: \`boolean\`, necessary when \`showAdjust = true\`, status of fullscreen.

- **events**

  - \`onClick\`: \`() => void\`, necessary.
  - \`onClose\`: \`() => void\`, necessary, close event.
  - \`onAdjust\`: \`(val: boolean) => void\`, fullscreen button click event.

- **slots**

  - \`trigger\`: \`string | ReactElement\`, necessary, it is usually an icon, which is displayed on the toolbar.
  - \`overlay\`: \`string | ReactElement\`, necessary, content of Modal.

\`\`\`jsx
<MdEditor
  modelValue=""
  editorId="md-prev"
  defToolbars={[
    <MdEditor.ModalToolbar
      visible={state.visible}
      isFullscreen={state.modalFullscreen}
      showAdjust
      title="title"
      modalTitle="modalTitle"
      width="870px"
      height="600px"
      onClick={() => {
        setState({
          ...state,
          visible: true
        });
      }}
      onClose={() => {
        setState({
          ...state,
          visible: false
        });
      }}
      onAdjust={() => {
        setState({
          ...state,
          modalFullscreen: !state.modalFullscreen
        });
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
        <MdEditor
          theme={store.theme}
          language={store.lang}
          previewTheme={store.previewTheme}
          codeTheme={store.codeTheme}
          editorId="edit2preview"
          previewOnly
          modelValue={props.mdText}
        />
      </div>
    </MdEditor.ModalToolbar>
  ]}
/>
\`\`\`

[ReadExtension Source Code](https://github.com/imzbf/md-editor-rt/blob/docs/src/components/ReadExtension/index.tsx)

---

### \u{1F43B} MdCatalog

\`Editor.MdCatalog\`

- **props**

  - \`editorId\`: \`string\`, necessary, editor's \`editorId\`, used to register listening events.
  - \`className\`: \`string\`, not necessary.
  - \`mdHeadingId\`: \`mdHeadingId\`, not necessary, same as editor.
  - \`scrollElement\`: \`string | HTMLElement\`, not necessary, it is an element selector when its type is string. When \`previewOnly\` eq \`true\`, it is usually set to \`document.documentElement\`.
  - \`theme\`: 'light' | 'dark', not necessary, provide it when you want to change theme online, it is the same as Editor \`theme\`.
  - \`offsetTop\`: \`number\`, not necessary, highlight current item of catalogs when title is \`offsetTop\` pixels from the top, defalut 20.
  - \`scrollElementOffsetTop\`: \`number\`, not necessary, offsetTop of the scroll container\uFF0Cdefalut 0.

- **events**

  - \`onClick\`: \`(e: MouseEvent, t: TocItem) => void\`, not necessary.

usage:

\`\`\`jsx
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

---

## \u270D\uFE0F Edit This Page

[doc-en-US](https://github.com/imzbf/md-editor-rt/blob/dev-docs/public/doc-en-US.md)
`,r=`> \u5728\u7EBF\u5C1D\u8BD5\u793A\u4F8B\uFF1A[\u4F20\u9001\u95E8](https://codesandbox.io/s/elated-khorana-65jmr)\u3002

## \u{1F92F} Props \u8BF4\u660E

\u8FD9\u662F\u7EC4\u4EF6\u6700\u91CD\u8981\u7684\u4E00\u90E8\u5206\u5185\u5BB9\uFF0C\`md-editor-rt\`\u7684\u5C5E\u6027\u53C2\u6570\u5982\u4E0B\uFF1A

### \u{1F4C3} modelValue

- **\u7C7B\u578B**\uFF1A\`string\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`''\`

  \u7F16\u8F91\u7684\u5185\u5BB9\u3002

  \`\`\`jsx
  <MdEditor modelValue="xxx" />
  \`\`\`

---

### \u{1F6CD} theme

- **\u7C7B\u578B**\uFF1A\`'light' | 'dark'\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`'light'\`

  \u7F16\u8F91\u5668\u4E3B\u9898\u3002

  \`\`\`jsx
  <MdEditor theme="dark" />
  \`\`\`

---

### \u{1F380} className

- **\u7C7B\u578B**\uFF1A\`string\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`''\`

  ...

---

### \u{1F4BB} pageFullscreen

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`false\`

  \u9875\u9762\u5185\u5168\u5C4F\u3002

---

### \u{1F4F1} preview

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`true\`

  \u662F\u5426\u663E\u793A\u9884\u89C8\u3002

---

### \u{1F4C0} htmlPreview

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`false\`

  \u662F\u5426\u663E\u793A html \u9884\u89C8\u3002\u5F53\u8BBE\u7F6E\u4E3A\`true\`\u65F6\uFF0C\u9700\u8981\u5C06\`preview\`\u8BBE\u7F6E\u4E3A\`false\`

  \`\`\`jsx
  <MdEditor htmlPreview preview={false} />
  \`\`\`

---

### \u{1F4FA} previewOnly

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`false\`

  \u4EC5\u9884\u89C8\u6A21\u5F0F\uFF0C\u4E0D\u663E\u793A bar \u548C\u7F16\u8F91\u6846\uFF0C\u53EA\u652F\u6301\u521D\u59CB\u5316\u8BBE\u7F6E\u3002

  \`\`\`jsx
  <MdEditor previewOnly />
  \`\`\`

---

### \u{1F524} language

- **\u7C7B\u578B**\uFF1A\`string\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`'zh-CN'\`

  \u5185\u7F6E\u4E2D\u82F1\u6587(\`'zh-CN'\`, \`'en-US'\`)\uFF0C\u53EF\u81EA\u884C\u6269\u5C55\u5176\u4ED6\u8BED\u8A00\uFF0C\u540C\u65F6\u53EF\u8986\u76D6\u5185\u7F6E\u7684\u4E2D\u82F1\u6587\u3002

  \u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u73B0\u6210\u7684\u6269\u5C55\u8BED\u8A00\uFF1A[md-editor-extension](https://github.com/imzbf/md-editor-extension)\u3002\u4F7F\u7528\u53CA\u8D21\u732E\u65B9\u5F0F\u89C1\u6269\u5C55\u5E93\u6587\u6863~

---

### \u{1F9F1} toolbars

- **\u7C7B\u578B**\uFF1A\`Array\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`[all]\`

  \u9009\u62E9\u6027\u5C55\u793A\u5DE5\u5177\u680F\uFF0C\u53EF\u9009\u5185\u5BB9\u89C1\u4E0B\u65B9\u3002

  \u4F60\u53EF\u4EE5\u968F\u610F\u6392\u5E8F\u5DE5\u5177\u680F\uFF0C\u901A\u8FC7\`'-'\`\u5206\u5272\u4E24\u4E2A\u5DE5\u5177\uFF0C\u901A\u8FC7\`'='\`\u5B9E\u73B0\u5DE6\u53F3\u653E\u7F6E\uFF01

  _[all]_

  \`\`\`js
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

  // \u5BF9\u5E94\u529F\u80FD\u540D\u79F0
  [
    '\u52A0\u7C97',
    '\u4E0B\u5212\u7EBF',
    '\u659C\u4F53',
    '\u5220\u9664\u7EBF',
    '\u4E0B\u6807',
    '\u4E0A\u6807',
    '\u5F15\u7528',
    '\u65E0\u5E8F\u5217\u8868',
    '\u6709\u5E8F\u5217\u8868',
    '\u4EFB\u52A1',
    '\u884C\u5185\u4EE3\u7801',
    '\u5757\u7EA7\u4EE3\u7801',
    '\u94FE\u63A5',
    '\u56FE\u7247',
    '\u8868\u683C',
    '\u56FE\u8868',
    '\u516C\u5F0F',
    '\u540E\u9000\u4E00\u6B65',
    '\u524D\u8FDB\u4E00\u6B65',
    '\u4FDD\u5B58',
    '\u9875\u9762\u5185\u5168\u5C4F',
    '\u5C4F\u5E55\u5168\u5C4F',
    '\u5185\u5BB9\u9884\u89C8',
    'html\u4EE3\u7801\u9884\u89C8',
    '\u76EE\u5F55',
    '\u6E90\u7801\u5730\u5740'
  ];
  \`\`\`

---

### \u{1F9F1} toolbarsExclude

- **\u7C7B\u578B**\uFF1A\`Array\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`[]\`

  \u9009\u62E9\u6027\u4E0D\u5C55\u793A\u5DE5\u5177\u680F\uFF0C\u5185\u5BB9\u540C\u4E0A\u3002

---

### \u{1FA92} noPrettier

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`false\`

  \u662F\u5426\u542F\u7528 prettier \u4F18\u5316 md \u5185\u5BB9\u3002

---

### \u{1F3B2} editorId

- **\u7C7B\u578B**\uFF1A\`string\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`'md-editor-rt'\`

  \u7F16\u8F91\u5668\u552F\u4E00\u6807\u8BC6\uFF0C\u975E\u5FC5\u987B\u9879\uFF0C\u670D\u52A1\u7AEF\u6E32\u67D3\u65F6\uFF0C\u9632\u6B62\u4EA7\u751F\u670D\u52A1\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u6E32\u67D3\u5185\u5BB9\u4E0D\u4E00\u81F4\u9519\u8BEF\u63D0\u793A\uFF0C\u4EE5\u53CA\u5355\u9875\u9762\u591A\u7F16\u8F91\u5668\u65F6\u505A\u533A\u522B\u3002

---

### \u{1F90F} tabWidth

- **\u7C7B\u578B**\uFF1A\`number\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`2\`

  \u7F16\u8F91\u5668\u4E00\u4E2A TAB \u952E\u7B49\u4E8E\u7A7A\u683C\u6570\u3002

---

### \u{1F522} showCodeRowNumber

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`false\`

  \u4EE3\u7801\u5757\u662F\u5426\u663E\u793A\u884C\u53F7\u3002

---

### \u{1F526} previewTheme

- **\u7C7B\u578B**\uFF1A\`'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`'default'\`

  \u9884\u89C8\u5185\u5BB9\u4E3B\u9898\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u3002

  \u4E3B\u9898\u81EA\u5B9A\u4E49\u65B9\u5F0F\uFF1A

  1. \u7F16\u8F91 css

  \`\`\`css
  .xxx-theme {
    color: red;
  }
  \`\`\`

  2. \u8BBE\u7F6E\`previewTheme\`

  \`\`\`jsx
  <MdEditor preview-theme="xxx" />
  \`\`\`

  \u53C2\u8003[markdown-theme](https://github.com/imzbf/markdown-theme)\u9879\u76EE\u3002

---

### \u{1F385}\u{1F3FB} style

- **\u7C7B\u578B**\uFF1A\`CSSProperties\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`{}\`

  \u7F16\u8F91\u5668\u5185\u8054\u6837\u5F0F\u3002

---

### \u{1F4C5} tableShape

- **\u7C7B\u578B**\uFF1A\`[number, number]\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`[6, 4]\`

  \u6807\u9898\u680F\u6DFB\u52A0\u8868\u683C\u65F6\uFF0C\u9884\u8BBE\u5F85\u9009\u8868\u683C\u5927\u5C0F\uFF0C\u7B2C\u4E00\u4E2A\u4EE3\u8868\u6700\u5927\u5217\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u4EE3\u8868\u6700\u5927\u884C\u6570\u3002

\`\`\`jsx
<MdEditor tableShape={[8, 4]}>
\`\`\`

![\u8868\u683C\u9884\u8BBE\u5927\u5C0F\u9884\u89C8](https://imzbf.github.io/md-editor-rt/imgs/20211216165424.png)

---

### \u261D\uFE0F noMermaid

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`false\`

  \u5982\u679C\u4F60\u4E0D\u5E0C\u671B\u4F7F\u7528\u56FE\u8868\u5C55\u793A\u5185\u5BB9\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5173\u95ED\u3002

\`\`\`jsx
<MdEditor noMermaid />
\`\`\`

---

### \u{1FAA7} placeholder

- **\u7C7B\u578B**\uFF1A\`string\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`''\`

  \u554A\u8FD9-\\_-\uFF01

---

### \u274C noKatex

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`false\`

  \u5982\u679C\u4F60\u4E0D\u5E0C\u671B\u4F7F\u7528\u6570\u5B66\u516C\u5F0F\u5C55\u793A\u5185\u5BB9\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5173\u95ED\u3002

\`\`\`jsx
<MdEditor noKatex />
\`\`\`

---

### \u{1F4AA} defToolbars

- **\u7C7B\u578B**\uFF1A\`Array<ReactElement>\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`[]\`

  \u81EA\u5B9A\u4E49\u5DE5\u5177\u680F\u63D2\u69FD\uFF0C\u901A\u8FC7\u4F7F\u7528\u5185\u7F6E\u7684\`NormalToolbar\`\u666E\u901A\u70B9\u51FB\u89E6\u53D1\u4E8B\u4EF6\u7EC4\u4EF6\uFF0C\`DropdownToolbar\`\u4E0B\u62C9\u70B9\u51FB\u89E6\u53D1\u4E8B\u4EF6\u7EC4\u4EF6\uFF0C\u548C\`ModalToolbar\`\u5F39\u7A97\u7EC4\u4EF6\u8FDB\u884C\u6269\u5C55\u3002\u5C06\`defToolbars\`\u63D2\u69FD\u4E2D\u7684\u7EC4\u4EF6\u4E0B\u6807\u7A7F\u63D2\u5728\`toolbars\`\u5B9E\u73B0\u5C55\u793A\uFF08\u8FD9\u5E76\u4E0D\u89C4\u8303\uFF09

  \`\`\`jsx
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  const NormalToolbar = MdEditor.NormalToolbar;

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
  \`\`\`

  ![\u666E\u901A\u6269\u5C55\u5DE5\u5177\u680F](https://imzbf.github.io/md-editor-rt/imgs/normal-toolbar.gif)

  ![\u4E0B\u62C9\u6269\u5C55\u5DE5\u5177\u680F](https://imzbf.github.io/md-editor-rt/imgs/dropdown-toolbar.gif)

  \u6269\u5C55\u7EC4\u4EF6\u5C5E\u6027\u53C2\u8003**\u5185\u7F6E\u7EC4\u4EF6**\uFF0C\u4F7F\u7528\u793A\u4F8B\u53C2\u89C1[\u6587\u6863\u5206\u652F](https://github.com/imzbf/md-editor-rt/tree/docs/src/components)\uFF0C\u63D0\u4F9B**\u6807\u8BB0**\u3001**\u8868\u60C5**\u548C**\u5F39\u7A97\u9884\u89C8**\u6269\u5C55\u7EC4\u4EF6\u3002

---

### \u{1F989} codeTheme

- **\u7C7B\u578B**\uFF1A\`'atom'|'a11y'|'github'|'gradient'|'kimbie'|'paraiso'|'qtcreator'|'stackoverflow'\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`'atom'\`

  \u4EE3\u7801\u5757\u9AD8\u4EAE\u6837\u5F0F\u540D\u79F0\u3002

  \u4F60\u53EF\u4EE5\u6DFB\u52A0\u81EA\u5DF1\u7684\u6837\u5F0F\uFF0C\u628A\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u4F60\u60F3\u8981\u7684\u5373\u53EF\uFF0C\u65B9\u5F0F\u5982\u4E0B\uFF1A

  1. \u914D\u7F6E\u6837\u5F0F\u94FE\u63A5

  \`\`\`js
  import MdEditor from 'md-editor-rt';

  MdEditor.config({
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
  \`\`\`

  2. \u8BBE\u7F6E\`codeTheme\`

  \`\`\`jsx
  <MdEditor codeTheme="xxx" />
  \`\`\`

---

### \u{1F3B1} mdHeadingId

- **\u7C7B\u578B**\uFF1A\`(text: string, level: number, index: number) => string\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`(text) => text\`

  \u6784\u9020\u6807\u9898\`ID\`\u7684\u751F\u6210\u65B9\u5F0F\u3002

  \`\`\`jsx
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  const mdHeadingId = (_text, _level, index) => \`heading-\${index}\`;

  export default () => {
    return <MdEditor mdHeadingId={mdHeadingId} />;
  };
  \`\`\`

---

### \u{1F423} sanitize

- **\u7C7B\u578B**\uFF1A\`(html: string) => string\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`(html) => html\`

  \u5728\u6BCF\u6B21\u751F\u6210 html \u540E\uFF0C\u901A\u8FC7\u8BE5\u65B9\u6CD5\u79FB\u9664\u5371\u9669\u5185\u5BB9\uFF0C\u6BD4\u5982 xss \u76F8\u5173\uFF0C\u5F53\u4F60\u5F88\u786E\u5B9A\u4F60\u7684\u5185\u5BB9\u4E0D\u4F1A\u51FA\u73B0\u7C7B\u4F3C\u60C5\u51B5\u65F6\uFF0C\u4E0D\u5FC5\u8BBE\u7F6E\u5B83\u3002

  \u4F7F\u7528\`sanitize-html\`\u6F14\u793A

  \`\`\`jsx
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';
  import sanitizeHtml from 'sanitize-html';

  const sanitize = (html) => sanitizeHtml(html);

  export default () => {
    return <MdEditor sanitize={sanitize} />;
  };
  \`\`\`

  > \u4E3A\u4EC0\u4E48\u4E0D\u5185\u7F6E\u5230\u7F16\u8F91\u5668\uFF1A\u7531\u4E8E\u7C7B\u4F3C\u7F16\u8F91\u5668\u5927\u591A\u5C5E\u4E8E\u81EA\u884C\u5904\u7406\u6587\u672C\uFF0C\u81EA\u8EAB\u5373\u53EF\u786E\u8BA4\u5185\u5BB9\u662F\u5426\u5B89\u5168\uFF0C\u5E76\u4E0D\u9700\u8981\u8BE5\u529F\u80FD\u3002

---

### \u{1F9B6} footers

- **\u7C7B\u578B**\uFF1A\`Array<'markdownTotal' | '=' | 'scrollSwitch' | number>\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`['markdownTotal', '=', 'scrollSwitch']\`

  \u9875\u811A\u663E\u793A\u5185\u5BB9\uFF0C\`'='\`\u5DE6\u53F3\u5206\u5272\uFF0C\u8BBE\u7F6E\u4E3A\`[]\`\u4E0D\u663E\u793A\u9875\u811A\u3002

---

### \u26F5\uFE0F scrollAuto

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`true\`

  \u9ED8\u8BA4\u5DE6\u53F3\u540C\u6B65\u6EDA\u52A8\u72B6\u6001\u3002

---

### \u{1F9BF} defFooters

- **\u7C7B\u578B**\uFF1A\`Array<string \\| ReactElement>\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`[]\`

  \u81EA\u5B9A\u4E49\u6269\u5C55\u9875\u811A\u3002

  \u793A\u4F8B\u4EE3\u7801\u89C1[\u6587\u6863\u9875\u6E90\u7801](https://github.com/imzbf/md-editor-rt/blob/docs/src/pages/Preview/index.tsx)\u3002

---

### \u{1F91E}\u{1F3FC} noIconfont

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`true\`

  \u4E0D\u63D2\u5165 iconfont \u94FE\u63A5\uFF0C\u4F60\u53EF\u4EE5[\u4E0B\u8F7D](https://at.alicdn.com/t/c/font_2605852_u82y61ve02.js)\u5230\u672C\u5730\u81EA\u884C\u5F15\u5165\u3002

  \`\`\`jsx
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  import '/assets/iconfont.js';

  export default () => {
    return <MdEditor noIconfont />;
  };
  \`\`\`

---

### \u{1F485} formatCopiedText

- **\u7C7B\u578B**\uFF1A\`(text: string) => string\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`(text) => text\`

  \u683C\u5F0F\u5316\u590D\u5236\u4EE3\u7801

  \`\`\`jsx
  import MdEditor from 'md-editor-rt';
  import 'md-editor-rt/lib/style.css';

  export default () => {
    const formatCopiedText = (text: string) => {
      return \`\${text}  - from md-editor-rt\`;
    };

    return <MdEditor formatCopiedText={formatCopiedText} />;
  };
  \`\`\`

---

### \u{1F979} noUploadImg

- **type**: \`boolean\`
- **default**: \`false\`

  \u5DE5\u5177\u680F\u4E0D\u663E\u793A\u4E0A\u4F20\u56FE\u7247\u5165\u53E3\u3002

  \`\`\`jsx
  <MdEditor noUploadImg />
  \`\`\`

---

### \u{1F6C1} codeStyleReverse

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`true\`

  \u67D0\u4E9B\u9884\u89C8\u4E3B\u9898\u7684\u4EE3\u7801\u6A21\u5757\u80CC\u666F\u662F\u6697\u8272\u7CFB\uFF0C\u5C06\u8FD9\u4E2A\u5C5E\u6027\u8BBE\u7F6E\u4E3A true\uFF0C\u4F1A\u81EA\u52A8\u5728\u8BE5\u4E3B\u9898\u4E0B\u7684 light \u6A21\u5F0F\u4E0B\u4F7F\u7528\u6697\u8272\u7CFB\u7684\u4EE3\u7801\u98CE\u683C\u3002

---

### \u{1F9FC} codeStyleReverseList

- **\u7C7B\u578B**\uFF1A\`Array\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`['default', 'mk-cute']\`

  \u9700\u8981\u81EA\u52A8\u8C03\u6574\u7684\u9884\u89C8\u4E3B\u9898\uFF0C\u5DF2\u9ED8\u8BA4\u5305\u542B default\u3001mk-cute\u3002

---

### \u{1F52C} autoFocus

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`false\`

  \u539F\u751F\u5C5E\u6027\uFF0C\u6587\u672C\u533A\u57DF\u81EA\u52A8\u83B7\u5F97\u7126\u70B9\u3002

---

### \u{1F529} disabled

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`false\`

  \u539F\u751F\u5C5E\u6027\uFF0C\u7981\u7528\u6587\u672C\u533A\u57DF\u3002

---

### \u{1F512} readOnly

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`false\`

  \u539F\u751F\u5C5E\u6027\uFF0C\u6587\u672C\u533A\u57DF\u4E3A\u53EA\u8BFB\u3002

---

### \u{1F4CF} maxLength

- **\u7C7B\u578B**\uFF1A\`number\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`\`

  \u539F\u751F\u5C5E\u6027\uFF0C\u6587\u672C\u533A\u57DF\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u3002

---

### \u{1F4E5} autoDetectCode

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`false\`

  \u662F\u5426\u542F\u7528\u81EA\u52A8\u8BC6\u522B\u7C98\u8D34\u4EE3\u7801\u7C7B\u522B\uFF0C\u76EE\u524D\u4EC5\u652F\u6301\u4ECE\`vscode\`\u590D\u5236\u7684\u5185\u5BB9\u3002

---

## \u{1FAA2} \u7ED1\u5B9A\u4E8B\u4EF6

\u76EE\u524D\u652F\u6301\u7684\u5185\u5BB9\u5982\u4E0B\uFF1A

### \u{1F4DE} onChange

- **\u7C7B\u578B**\uFF1A\`(v: string) => void\`

  \u5185\u5BB9\u53D8\u5316\u4E8B\u4EF6\uFF08\u5F53\u524D\u4E0E\`textare\`\u7684\`oninput\`\u4E8B\u4EF6\u7ED1\u5B9A\uFF0C\u6BCF\u8F93\u5165\u4E00\u4E2A\u5355\u5B57\u5373\u4F1A\u89E6\u53D1\uFF09\u3002

---

### \u{1F4BE} onSave

- **\u7C7B\u578B**\uFF1A\`(v: string, h: Promise<string>) => void\`

  \u4FDD\u5B58\u4E8B\u4EF6\uFF0C\u5FEB\u6377\u952E\u4E0E\u4FDD\u5B58\u6309\u94AE\u5747\u4F1A\u89E6\u53D1\u3002

  \`\`\`jsx
  import MdEditor from 'md-editor-rt';
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
  \`\`\`

---

### \u{1F4F8} onUploadImg

- **\u7C7B\u578B**\uFF1A\`(files: Array<File>, callback: (urls: Array<string>) => void) => void\`

  \u4E0A\u4F20\u56FE\u7247\u4E8B\u4EF6\uFF0C\u5F39\u7A97\u4F1A\u7B49\u5F85\u4E0A\u4F20\u7ED3\u679C\uFF0C\u52A1\u5FC5\u5C06\u4E0A\u4F20\u540E\u7684 urls \u4F5C\u4E3A callback \u5165\u53C2\u56DE\u4F20\u3002

\`\`\`jsx
import MdEditor from 'md-editor-rt';
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
\`\`\`

---

### \u{1F681} onHtmlChanged

- **\u7C7B\u578B**\uFF1A\`(h: string) => void\`

  html \u53D8\u5316\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u7528\u4E8E\u83B7\u53D6\u9884\u89C8 html \u4EE3\u7801\u3002

---

### \u{1F5D2} onGetCatalog

- **\u7C7B\u578B**\uFF1A\`(list: HeadList[]) => void\`

  \u52A8\u6001\u83B7\u53D6\`markdown\`\u76EE\u5F55\u3002

---

### \u{1F480} onError

- **\u7C7B\u578B**\uFF1A\`(err: { name: string; message: string;}) => void\`

  \u6355\u83B7\u6267\u884C\u9519\u8BEF\u4E8B\u4EF6\uFF0C\u76EE\u524D\u652F\u6301\`Cropper\`\u3001\`fullscreen\`\u3001\`prettier\`\u5B9E\u4F8B\u672A\u52A0\u8F7D\u5B8C\u6210\u64CD\u4F5C\u9519\u8BEF\u3002

  \`\`\`jsx
  const onError = (err) => {
    alert(err.message);
  };

  export default () => <MdEditor onError={onError} />;
  \`\`\`

---

### \u{1F43E} onBlur

- **\u7C7B\u578B**\uFF1A\`(event: FocusEvent) => void\`

  \u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u4E8B\u4EF6\u3002

  \`\`\`jsx
  const onBlur = (err) => {
    console.log('onBlur', e);
  };

  export default () => <MdEditor onBlur={onBlur} />;
  \`\`\`

---

### \u{1F516} onFocus

- **\u7C7B\u578B**\uFF1A\`(event: FocusEvent) => void\`

  \u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1\u4E8B\u4EF6\u3002

---

### \u{1F54A} noHighlight

- **\u7C7B\u578B**\uFF1A\`boolean\`
- **\u9ED8\u8BA4\u503C**\uFF1A\`false\`

  \u4E0D\u9AD8\u4EAE\u4EE3\u7801\uFF0C\u4E5F\u4E0D\u4F1A\u52A0\u8F7D\u76F8\u5E94\u7684\u6269\u5C55\u5E93

---

## \u{1F931}\u{1F3FC} \u5B9E\u4F8B\u66B4\u9732

2.5.0 \u7248\u672C\u4E4B\u540E\uFF0C\u7F16\u8F91\u5668\u66B4\u9732\u4E86\u82E5\u5E72\u65B9\u6CD5\u5728\u7EC4\u4EF6\u5B9E\u4F8B\u4E0A\uFF0C\u7528\u6765\u5FEB\u6377\u76D1\u542C\u7F16\u8F91\u5668\u5185\u90E8\u72B6\u6001\u6216\u5BF9\u8C03\u6574\u5185\u90E8\u72B6\u6001\u3002

\`\`\`jsx
import React, { useState, useEffect, useRef } from 'react';
import MdEditor, { ExposeParam } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  const [text, setText] = useState('#Hello Editor');

  const editorRef = useRef<ExposeParam>();

  useEffect(() => {
    editorRef.current?.on('catalog', console.log);
  }, []);

  return <MdEditor ref={editorRef} modelValue={text} onChange={setText} />;
};
\`\`\`

### \u{1F442}\u{1F3FC} on

\u76D1\u542C\u7F16\u8F91\u5668\u5185\u90E8\u72B6\u6001\uFF0C\u5305\u62EC\uFF1A\u5C4F\u5E55\u5168\u5C4F\u3001\u6D4F\u89C8\u5668\u5168\u5C4F\u3001\u9884\u89C8\u6587\u672C\u3001\u9884\u89C8 html\u3001\u76EE\u5F55\u7B49\u3002

- pageFullscreen

  \`\`\`js
  editorRef.value?.on('pageFullscreen', (status) => console.log(status));
  \`\`\`

- fullscreen
  \`\`\`js
  editorRef.value?.on('fullscreen', (status) => console.log(status));
  \`\`\`
- preview
  \`\`\`js
  editorRef.value?.on('preview', (status) => console.log(status));
  \`\`\`
- htmlPreview
  \`\`\`js
  editorRef.value?.on('htmlPreview', (status) => console.log(status));
  \`\`\`
- catalog
  \`\`\`js
  editorRef.value?.on('catalog', (status) => console.log(status));
  \`\`\`

---

### \u{1F4BB} togglePageFullscreen

\u5207\u6362\u9875\u9762\u5185\u5168\u5C4F\u3002

\`\`\`js
editorRef.value?.togglePageFullscreen(true);
\`\`\`

> \u4E0D\u8BBE\u7F6E\u5165\u53C2\u5207\u6362\u4E3A\u76F8\u53CD\u72B6\u6001

---

### \u{1F5A5} toggleFullscreen

\u5207\u6362\u5C4F\u5E55\u5168\u5C4F\u3002

\`\`\`js
editorRef.value?.toggleFullscreen(true);
\`\`\`

> \u4E0D\u8BBE\u7F6E\u5165\u53C2\u5207\u6362\u4E3A\u76F8\u53CD\u72B6\u6001

---

### \u{1F4D6} togglePreview

\u5207\u6362\u662F\u5426\u663E\u793A\u9884\u89C8\u3002

\`\`\`js
editorRef.value?.togglePreview(true);
\`\`\`

> \u4E0D\u8BBE\u7F6E\u5165\u53C2\u5207\u6362\u4E3A\u76F8\u53CD\u72B6\u6001

---

### \u{1F4FC} toggleHtmlPreview

\u5207\u6362\u662F\u5426\u663E\u793A html \u9884\u89C8\u3002

\`\`\`js
editorRef.value?.toggleHtmlPreview(true);
\`\`\`

> \u4E0D\u8BBE\u7F6E\u5165\u53C2\u5207\u6362\u4E3A\u76F8\u53CD\u72B6\u6001

---

### \u{1F9EC} toggleCatalog

\u5207\u6362\u662F\u5426\u663E\u793A\u76EE\u5F55\u3002

\`\`\`js
editorRef.value?.toggleCatalog(true);
\`\`\`

> \u4E0D\u8BBE\u7F6E\u5165\u53C2\u5207\u6362\u4E3A\u76F8\u53CD\u72B6\u6001

---

### \u{1F4BE} triggerSave

\u89E6\u53D1\u4FDD\u5B58\u3002

\`\`\`js
editorRef.value?.triggerSave();
\`\`\`

---

### \u{1F489} insert

\u624B\u52A8\u5411\u6587\u672C\u6846\u63D2\u5165\u5185\u5BB9\u3002

\`\`\`js
/**
 * @params selectedText \u9009\u4E2D\u7684\u5185\u5BB9
 */
editorRef.value?.insert((selectedText) => {
  /**
   * @return targetValue    \u5F85\u63D2\u5165\u5185\u5BB9
   * @return select         \u63D2\u5165\u540E\u662F\u5426\u81EA\u52A8\u9009\u4E2D\u5185\u5BB9
   * @return deviationStart \u63D2\u5165\u540E\u9009\u4E2D\u5185\u5BB9\u9F20\u6807\u5F00\u59CB\u4F4D\u7F6E
   * @return deviationEnd   \u63D2\u5165\u540E\u9009\u4E2D\u5185\u5BB9\u9F20\u6807\u7ED3\u675F\u4F4D\u7F6E
   */
  return {
    targetValue: \`\${selectedText}\`,
    select: true,
    deviationStart: 0,
    deviationEnd: 0
  };
});
\`\`\`

---

### \u{1F3AF} focus

\u624B\u52A8\u805A\u7126\u8F93\u5165\u6846\u3002

\`\`\`js
editorRef.current?.focus();
\`\`\`

---

## \u{1F4B4} \u914D\u7F6E\u7F16\u8F91\u5668

\u4F7F\u7528\`MdEditor.config(option: ConfigOption)\`\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5BF9\u6784\u5EFA\u5B9E\u4F8B\u8FDB\u884C\u5B9A\u5236\u3002

- codeMirrorExtensions: \u6839\u636E\u4E3B\u9898\u548C\u5185\u90E8\u9ED8\u8BA4\u7684 codeMirror \u6269\u5C55\u81EA\u5B9A\u4E49\u65B0\u7684\u6269\u5C55\u3002

  \u4F7F\u7528\u793A\u4F8B\uFF1A\u7F16\u8F91\u5668\u9ED8\u8BA4\u4E0D\u663E\u793A\u8F93\u5165\u6846\u7684\u884C\u53F7\uFF0C\u9700\u8981\u624B\u52A8\u6DFB\u52A0\u6269\u5C55

  \`\`\`js
  import MdEditor from 'md-editor-rt';
  import { lineNumbers } from '@codemirror/view';

  MdEditor.config({
    codeMirrorExtensions(_theme, extensions) {
      return [...extensions, lineNumbers()];
    }
  });
  \`\`\`

- markdownItConfig: \u81EA\u5B9A\u4E49 markdown-it \u6838\u5FC3\u5E93\u6269\u5C55\u3001\u5C5E\u6027\u7B49\u3002

  \u4F7F\u7528\u793A\u4F8B\uFF1A\u914D\u7F6E\u4F7F\u7528\`markdown-it-anchor\`\u5E76\u5728\u6807\u9898\u53F3\u4FA7\u663E\u793A\u4E00\u4E2A\u8D85\u94FE\u63A5\u7B26\u53F7

  \`\`\`js
  import MdEditor from 'md-editor-rt';
  import ancher from 'markdown-it-anchor';

  MdEditor.config({
    markdownItConfig(mdit) {
      mdit.use(ancher, {
        permalink: true
      });
    }
  });
  \`\`\`

- editorConfig: \u7F16\u8F91\u5668\u5E38\u89C4\u914D\u7F6E\uFF0C\u8BED\u8A00\u3001\`mermaid\`\u9ED8\u8BA4\u6A21\u677F\u3001\u6E32\u67D3\u5EF6\u8FDF\uFF1A

  \`\`\`js
  import MdEditor from 'md-editor-rt';

  MdEditor.config({
    editorConfig: {
      // \u8BED\u8A00
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
            codeRow: '\u884C\u5185\u4EE3\u7801',
            code: '\u5757\u7EA7\u4EE3\u7801',
            link: '\u94FE\u63A5',
            image: '\u56FE\u7247',
            table: '\u8868\u683C',
            mermaid: 'mermaid\u56FE',
            katex: '\u516C\u5F0F',
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
        },
        // mermaid\u6A21\u677F
        mermaidTemplate: {
          // \u6D41\u7A0B\u56FE
          flow: \`flow tempalte\`,
          // \u65F6\u5E8F\u56FE
          sequence: \`sequence template\`,
          // \u7518\u7279\u56FE
          gantt: \`gantt template\`,
          // \u7C7B\u56FE
          class: \`class template\`,
          // \u72B6\u6001\u56FE
          state: \`state template\`,
          // \u997C\u56FE
          pie: \`pie template\`,
          // \u5173\u7CFB\u56FE
          relationship: \`relationship template\`,
          // \u65C5\u7A0B\u56FE
          journey: \`journey template\`
        },
        // \u8F93\u5165\u6E32\u67D3\u5EF6\u8FDF\uFF08ms\uFF09
        renderDelay: 0
      }
    }
  });
  \`\`\`

- editorExtensions: \u7C7B\u578B\u5982\u4E0B\uFF0C\u7528\u4E8E\u914D\u7F6E\u7F16\u8F91\u5668\u5185\u90E8\u7684\u6269\u5C55

  \`\`\`js
  import MdEditor from 'md-editor-rt';

  MdEditor.config({
    editorExtensions: { iconfont: 'https://xxx.cc' }
  });
  \`\`\`

  <details>
    <summary>[EditorExtensions]</summary>

  \`\`\`ts
  import MdEditor from 'md-editor-rt';

  interface EditorExtensions {
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
  \`\`\`

  </details>

## \u{1FAA1} \u5FEB\u6377\u952E

\u4E3B\u8981\u4EE5\`CTRL\`\u642D\u914D\u5BF9\u5E94\u529F\u80FD\u82F1\u6587\u5355\u8BCD\u9996\u5B57\u6BCD\uFF0C\u51B2\u7A81\u9879\u6DFB\u52A0\`SHIFT\`\uFF0C\u518D\u51B2\u7A81\u66FF\u6362\u4E3A\`ALT\`\u3002

!!! warning \u6CE8\u610F\u4E8B\u9879

\u5FEB\u6377\u952E\u4EC5\u5728\u8F93\u5165\u6846\u83B7\u53D6\u5230\u7126\u70B9\u65F6\u53EF\u7528\uFF01

!!!

| \u952E\u4F4D | \u529F\u80FD | \u8BF4\u660E |
| --- | --- | --- |
| TAB | \u7A7A\u683C | \u901A\u8FC7\`tabWidth\`\u5C5E\u6027\u9884\u8BBE TAB \u952E\u4F4D\u65B0\u589E\u7A7A\u683C\u957F\u5EA6\uFF0C\u9ED8\u8BA4 2\uFF0C\u652F\u6301\u591A\u884C |
| SHIFT + TAB | \u53D6\u6D88\u7A7A\u683C | \u540C\u4E0A\uFF0C\u4E00\u6B21\u53D6\u6D88\u4E24\u4E2A\u7A7A\u683C\uFF0C\u652F\u6301\u591A\u884C |
| CTRL + C | \u590D\u5236 | \u9009\u4E2D\u65F6\u590D\u5236\u9009\u4E2D\u5185\u5BB9\uFF0C\u672A\u9009\u4E2D\u65F6\u590D\u5236\u5F53\u524D\u884C\u5185\u5BB9 |
| CTRL + X | \u526A\u5207 | \u9009\u4E2D\u65F6\u526A\u5207\u9009\u4E2D\u5185\u5BB9\uFF0C\u672A\u9009\u4E2D\u65F6\u526A\u5207\u5F53\u524D\u884C |
| CTRL + D | \u5220\u9664 | \u9009\u4E2D\u65F6\u5220\u9664\u9009\u4E2D\u5185\u5BB9\uFF0C\u672A\u9009\u4E2D\u65F6\u5220\u9664\u5F53\u524D\u884C |
| CTRL + S | \u4FDD\u5B58 | \u89E6\u53D1\u7F16\u8F91\u5668\u7684\`onSave\`\u56DE\u8C03 |
| CTRL + B | \u52A0\u7C97 | \`**\u52A0\u7C97**\` |
| CTRL + U | \u4E0B\u5212\u7EBF | \`<u>\u4E0B\u5212\u7EBF</u>\` |
| CTRL + I | \u659C\u4F53 | \`*\u659C\u4F53*\` |
| CTRL + 1-6 | 1-6 \u7EA7\u6807\u9898 | \`# \u6807\u9898\` |
| CTRL + \u2191 | \u4E0A\u89D2\u6807 | \`<sup>\u4E0A\u89D2\u6807</sup>\` |
| CTRL + \u2193 | \u4E0B\u89D2\u6807 | \`<sub>\u4E0B\u89D2\u6807</sub>\` |
| CTRL + O | \u6709\u5E8F\u5217\u8868 | \`1. \u6709\u5E8F\u5217\u8868\` |
| CTRL + L | \u94FE\u63A5 | \`[\u94FE\u63A5](https://imzbf.cc)\` |
| CTRL + Z | \u64A4\u56DE | \u89E6\u53D1\u7F16\u8F91\u5668\u5185\u5185\u5BB9\u64A4\u56DE\uFF0C\u4E0E\u7CFB\u7EDF\u65E0\u5173 |
| CTRL + SHIFT + S | \u5220\u9664\u7EBF | \`~\u5220\u9664\u7EBF~\` |
| CTRL + SHIFT + U | \u65E0\u5E8F\u5217\u8868 | \`- \u65E0\u5E8F\u5217\u8868\` |
| CTRL + SHIFT + C | \u5757\u7EA7\u4EE3\u7801 | \u591A\u884C\u4EE3\u7801\u5757 |
| CTRL + SHIFT + I | \u56FE\u7247\u94FE\u63A5 | \`![\u56FE\u7247](https://imzbf.cc)\` |
| CTRL + SHIFT + Z | \u524D\u8FDB\u4E00\u6B65 | \u89E6\u53D1\u7F16\u8F91\u5668\u5185\u5185\u5BB9\u524D\u8FDB\uFF0C\u4E0E\u7CFB\u7EDF\u65E0\u5173 |
| CTRL + SHIFT + F | \u7F8E\u5316\u5185\u5BB9 |  |
| CTRL + ALT + C | \u884C\u5185\u4EE3\u7801 | \u884C\u5185\u4EE3\u7801\u5757 |
| CTRL + SHIFT + ALT + T | \u8868\u683C | \`\\|\u8868\u683C\\|\` |

## \u{1FAA4} \u5185\u7F6E\u7EC4\u4EF6

\u6269\u5C55\u7EC4\u4EF6\u4F5C\u4E3A\u7F16\u8F91\u5668\u7EC4\u4EF6\u7684\u5C5E\u6027\u503C\u6765\u4F7F\u7528\uFF0C\u4F8B\u5982\uFF1A\`MdEditor.DropdownToolbar\`\u3002

### \u{1F423} NormalToolbar

- **props**

  - \`title\`: \`string\`\uFF0C\u975E\u5FC5\u987B\uFF0C\u4F5C\u4E3A\u5DE5\u5177\u680F\u4E0A\u7684 hover \u63D0\u793A\u3002

- **events**

  - \`onClick\`: \`(e: MouseEvent) => void\`\uFF0C\u5FC5\u987B\uFF0C\u70B9\u51FB\u4E8B\u4EF6\u3002

- **slots**

  - \`trigger\`: \`string | ReactElement\`\uFF0C\u5FC5\u987B\uFF0C\u901A\u5E38\u662F\u4E2A\u56FE\u6807\uFF0C\u7528\u6765\u5C55\u793A\u5728\u5DE5\u5177\u680F\u4E0A\u3002

\`\`\`jsx
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  return (
    <MdEditor
      modelValue=""
      editorId="md-prev"
      defToolbars={[
        <MdEditor.NormalToolbar
          title="\u6807\u8BB0"
          trigger={
            <svg className="md-editor-icon" aria-hidden="true">
              <use xlinkHref="#icon-mark"></use>
            </svg>
          }
          onClick={console.log}
          key="mark-toolbar"
        />
      ]}
    />
  );
};
\`\`\`

[\u83B7\u53D6\u4F7F\u7528\u6E90\u7801](https://github.com/imzbf/md-editor-rt/blob/docs/src/components/MarkExtension/index.tsx)

---

### \u{1F43C} DropdownToolbar

- **props**

  - \`title\`: \`string\`\uFF0C\u975E\u5FC5\u987B\uFF0C\u4F5C\u4E3A\u5DE5\u5177\u680F\u4E0A\u7684 hover \u63D0\u793A\u3002
  - \`visible\`: \`boolean\`\uFF0C\u5FC5\u987B\uFF0C\u4E0B\u62C9\u72B6\u6001\u3002

- **events**

  - \`onChange\`: \`(visible: boolean) => void\`\uFF0C\u5FC5\u987B\uFF0C\u72B6\u6001\u53D8\u5316\u4E8B\u4EF6\u3002

- **slots**

  - \`trigger\`: \`string | ReactElement\`\uFF0C\u5FC5\u987B\uFF0C\u901A\u5E38\u662F\u4E2A\u56FE\u6807\uFF0C\u7528\u6765\u5C55\u793A\u5728\u5DE5\u5177\u680F\u4E0A\u3002
  - \`overlay\`: \`string | ReactElement\`\uFF0C\u5FC5\u987B\uFF0C\u4E0B\u62C9\u6846\u4E2D\u7684\u5185\u5BB9\u3002

\`\`\`jsx
<MdEditor
  modelValue=""
  editorId="md-prev"
  defToolbars={[
    <MdEditor.DropdownToolbar
      visible={emojiVisible}
      onChange={setEmojiVisible}
      overlay={
        <div className="emoji-container">
          <ol className="emojis">
            {emojis.map((emoji, index) => (
              <li
                key={\`emoji-\${index}\`}
                onClick={() => {
                  emojiHandler(emoji);
                }}
              >
                {emoji}
              </li>
            ))}
          </ol>
        </div>
      }
      trigger={
        <svg className="md-editor-icon" aria-hidden="true">
          <use xlinkHref="#icon-emoji"></use>
        </svg>
      }
      key="emoji-toolbar"
    />
  ]}
/>
\`\`\`

[\u83B7\u53D6\u4F7F\u7528\u6E90\u7801](https://github.com/imzbf/md-editor-rt/blob/docs/src/components/EmojiExtension/index.tsx)

---

### \u{1F989} ModalToolbar

- **props**

  - \`title\`: \`string\`\uFF0C\u975E\u5FC5\u987B\uFF0C\u4F5C\u4E3A\u5DE5\u5177\u680F\u4E0A\u7684 hover \u63D0\u793A\u3002
  - \`modalTitle\`: \`string\`\uFF0C\u975E\u5FC5\u987B\uFF0C\u5F39\u7A97\u7684\u6807\u9898\u3002
  - \`visible\`: \`boolean\`\uFF0C\u5FC5\u987B\uFF0C\u5F39\u7A97\u663E\u793A\u72B6\u6001\u3002
  - \`width\`: \`string\`\uFF0C\u975E\u5FC5\u987B\uFF0C\u5F39\u7A97\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\`auto\`\u3002
  - \`height\`\uFF1A\`string\`\uFF0C\u540C\`width\`\u3002
  - \`showAdjust\`: \`boolean\`\uFF0C\u975E\u5FC5\u987B\uFF0C\u662F\u5426\u663E\u793A\u5F39\u7A97\u5168\u5C4F\u6309\u94AE\u3002
  - \`isFullscreen\`: \`boolean\`\uFF0C\u663E\u793A\u5168\u5C4F\u6309\u94AE\u65F6\u5FC5\u987B\uFF0C\u5F39\u7A97\u5168\u5C4F\u72B6\u6001\u3002

- **events**

  - \`onClick\`: \`() => void\`\uFF0C\u5FC5\u987B\uFF0C\u5DE5\u5177\u680F\u70B9\u51FB\u4E8B\u4EF6\u3002
  - \`onClose\`\uFF1A\`() => void\`\uFF0C\u5FC5\u987B\uFF0C\u5F39\u7A97\u70B9\u51FB\u5173\u95ED\u4E8B\u4EF6\u3002
  - \`onAdjust\`\uFF1A\`(val: boolean) => void\`\uFF0C\u5F39\u7A97\u5168\u5C4F\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6\u3002

- **slots**

  - \`trigger\`: \`string | ReactElement\`\uFF0C\u5FC5\u987B\uFF0C\u901A\u5E38\u662F\u4E2A\u56FE\u6807\uFF0C\u7528\u6765\u5C55\u793A\u5728\u5DE5\u5177\u680F\u4E0A\u3002
  - \`overlay\`: \`string | ReactElement\`\uFF0C\u5FC5\u987B\uFF0C\u4E0B\u62C9\u6846\u4E2D\u7684\u5185\u5BB9\u3002

\`\`\`jsx
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default () => {
  return (
    <MdEditor
      modelValue=""
      editorId="md-prev"
      defToolbars={[
        <MdEditor.ModalToolbar
          visible={state.visible}
          isFullscreen={state.modalFullscreen}
          showAdjust
          title="\u5F39\u7A97\u9884\u89C8"
          modalTitle="\u7F16\u8F91\u9884\u89C8"
          width="870px"
          height="600px"
          onClick={() => {
            setState({
              ...state,
              visible: true
            });
          }}
          onClose={() => {
            setState({
              ...state,
              visible: false
            });
          }}
          onAdjust={() => {
            setState({
              ...state,
              modalFullscreen: !state.modalFullscreen
            });
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
            <MdEditor
              theme={store.theme}
              language={store.lang}
              previewTheme={store.previewTheme}
              codeTheme={store.codeTheme}
              editorId="edit2preview"
              previewOnly
              modelValue={props.mdText}
            />
          </div>
        </MdEditor.ModalToolbar>
      ]}
    />
  );
};
\`\`\`

[\u83B7\u53D6\u4F7F\u7528\u6E90\u7801](https://github.com/imzbf/md-editor-rt/blob/docs/src/components/ReadExtension/index.tsx)

---

### \u{1F43B} MdCatalog

\`Editor.MdCatalog\`

- **props**

  - \`editorId\`: \`string\`\uFF0C\u5FC5\u987B\uFF0C\u5BF9\u5E94\u7F16\u8F91\u5668\u7684\`editorId\`\uFF0C\u5728\u5185\u90E8\u6CE8\u518C\u76EE\u5F55\u53D8\u5316\u76D1\u542C\u4E8B\u4EF6\u3002
  - \`className\`: \`string\`\uFF0C\u975E\u5FC5\u987B\uFF0C\u76EE\u5F55\u7EC4\u4EF6\u6700\u5916\u5C42\u7C7B\u540D\u3002
  - \`mdHeadingId\`: \`mdHeadingId\`\uFF0C\u975E\u5FC5\u987B\uFF0C\u7279\u6B8A\u5316\u7F16\u8F91\u5668\u6807\u9898\u7684\u7B97\u6CD5\uFF0C\u4E0E\u7F16\u8F91\u5668\u76F8\u540C\u3002
  - \`scrollElement\`: \`string | HTMLElement\`\uFF0C\u975E\u5FC5\u987B\uFF0C\u4E3A\u5B57\u7B26\u65F6\u5E94\u662F\u4E00\u4E2A\u5143\u7D20\u9009\u62E9\u5668\u3002\u4EC5\u9884\u89C8\u6A21\u5F0F\u4E2D\uFF0C\u6574\u9875\u6EDA\u52A8\u65F6\uFF0C\u8BBE\u7F6E\u4E3A\`document.documentElement\`\u3002
  - \`theme\`: \`'light' | 'dark'\`\uFF0C\u975E\u5FC5\u987B\uFF0C\u5F53\u9700\u8981\u5207\u6362\u4E3B\u9898\u65F6\u63D0\u4F9B\uFF0C\u540C\u7F16\u8F91\u5668\u7684\`theme\`\u3002
  - \`offsetTop\`: \`number\`\uFF0C\u975E\u5FC5\u987B\uFF0C\u6807\u9898\u8DDD\u79BB\u9876\u90E8\u8BE5\u50CF\u7D20\u65F6\u9AD8\u4EAE\u5F53\u524D\u76EE\u5F55\u9879\uFF0C\u9ED8\u8BA4 20 \u50CF\u7D20\u3002
  - \`scrollElementOffsetTop\`: \`number\`\uFF0C\u975E\u5FC5\u987B\uFF0C\u6EDA\u52A8\u533A\u57DF\u7684\u56FA\u5B9A\u9876\u90E8\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4 0\u3002

- **events**

  - \`onClick\`: \`(e: MouseEvent, t: TocItem) => void\`\uFF0C\u975E\u5FC5\u987B\uFF0C\u5BFC\u822A\u70B9\u51FB\u4E8B\u4EF6\u3002

> \`scrollElement\`\u8BF4\u660E\uFF1A\u4EC5\u9884\u89C8\u4E0B\uFF0C\u8BE5\u5143\u7D20\u5FC5\u987B\u5DF2\u5B9A\u4F4D\u7684\u5E76\u4E14\u652F\u6301\u6EDA\u52A8\u3002

\`\`\`jsx
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

## \u270D\uFE0F \u7F16\u8F91\u6B64\u9875\u9762

[doc-zh-CN](https://github.com/imzbf/md-editor-rt/blob/dev-docs/public/doc-zh-CN.md)
`;const i="doc-preview";var h=()=>{const e=m(d=>d),[s,l]=t.exports.useState(()=>e.lang==="zh-CN"?r:o),a=()=>{l(e.lang==="en-US"?o:r)};return t.exports.useEffect(a,[e.lang]),n.createElement("div",{className:"container"},n.createElement("div",{className:"doc"},n.createElement(c,{editorId:i,modelValue:s}),n.createElement(u,{editorId:i})))};export{h as default};
