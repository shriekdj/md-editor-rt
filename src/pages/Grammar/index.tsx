import React, { useEffect, useState } from 'react';
import mdEN from '../../../public/grammar-en-US.md';
import mdCN from '../../../public/grammar-zh-CN.md';
import { useSelector } from 'react-redux';
import { StateType } from '@/store';

import IzCatalog from '@/layouts/Catalog';
import IzPreviewContent from '@/layouts/PreviewContent';

const editorId = 'grammar-preview';

export default () => {
  const state = useSelector<StateType>((state) => state) as StateType;

  const [mdText, setMdText] = useState(() => {
    return state.lang === 'zh-CN' ? mdCN : mdEN;
  });

  const queryMd = () => {
    setMdText(state.lang === 'en-US' ? mdEN : mdCN);
  };

  useEffect(queryMd, [state.lang]);

  return (
    <div className="container">
      <div className="doc">
        <IzPreviewContent
          editorId={editorId}
          modelValue={mdText}
          showCodeRowNumber={false}
        />
        <IzCatalog editorId={editorId} />
      </div>
    </div>
  );
};
