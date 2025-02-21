import path from 'path';
import { fileURLToPath } from 'url';
import { build, LibraryFormats } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { removeDir } from './u';

const __dirname = fileURLToPath(new URL('..', import.meta.url));
const resolvePath = (p: string) => path.resolve(__dirname, p);

!(async () => {
  const moduleEntry = {
    index: resolvePath('packages'),
    MdEditor: resolvePath('packages/MdEditor'),
    MdPreview: resolvePath('packages/MdPreview'),
    NormalToolbar: resolvePath('packages/NormalToolbar'),
    DropdownToolbar: resolvePath('packages/DropdownToolbar'),
    ModalToolbar: resolvePath('packages/ModalToolbar'),
    MdCatalog: resolvePath('packages/MdCatalog'),
    MdModal: resolvePath('packages/MdEditor/components/Modal'),
    config: resolvePath('packages/config')
  };
  const formats: LibraryFormats[] = ['es', 'cjs', 'umd'];

  const entries = {
    es: {
      ...moduleEntry,
      // 这里只有利用vite构建的assetFileNames为文件名的特性构建样式文件
      preview: resolvePath('packages/MdEditor/styles/preview.less'),
      style: resolvePath('packages/MdEditor/styles/style.less')
    },
    cjs: moduleEntry,
    umd: resolvePath('packages')
  };

  const extnames = {
    es: 'mjs',
    cjs: 'cjs'
  };

  removeDir(resolvePath('lib'));

  await Promise.all(
    formats.map((t) => {
      return build({
        base: '/',
        publicDir: false,
        resolve: {
          alias: {
            '~~': resolvePath('packages'),
            '~': resolvePath('packages/MdEditor')
          }
        },
        plugins: [
          react(),
          t === 'es' &&
            dts({
              outputDir: resolvePath('lib/types'),
              include: [resolvePath('packages')]
            })
        ],
        css: {
          modules: {
            localsConvention: 'camelCase' // 默认只支持驼峰，修改为同事支持横线和驼峰
          },
          preprocessorOptions: {
            less: {
              javascriptEnabled: true
            }
          }
        },
        build: {
          emptyOutDir: false,
          cssCodeSplit: true,
          outDir: resolvePath('lib'),
          lib: {
            entry: entries[t],
            name: 'MdEditorRT',
            formats: [t],
            fileName(format) {
              switch (format) {
                case 'es': {
                  return 'es/[name].mjs';
                }
                case 'cjs': {
                  return 'cjs/[name].cjs';
                }
                default: {
                  return 'umd/index.js';
                }
              }
            }
          },
          rollupOptions: {
            external:
              t === 'umd'
                ? ['react']
                : [
                    'react',
                    'medium-zoom',
                    'lru-cache',
                    'copy-to-clipboard',
                    'codemirror',
                    '@vavt/util',
                    /@codemirror\/.*/,
                    /@lezer\/.*/,
                    /markdown-it.*/
                  ],
            output: {
              chunkFileNames: `${t}/chunks/[name].${extnames[t]}`,
              assetFileNames: '[name][extname]',
              globals:
                t === 'umd'
                  ? {
                      react: 'React'
                    }
                  : {}
            }
          }
        }
      });
    })
  );
})();
