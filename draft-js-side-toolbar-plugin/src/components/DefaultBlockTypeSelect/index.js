import React from 'react';

import {
  HeadlineOneButton,
  HeadlineTwoButton,
  BlockquoteButton,
  CodeBlockButton,
  UnorderedListButton,
  OrderedListButton,
  AddImageButton,
} from 'kaneoh-draft-js-buttons'; // eslint-disable-line import/no-unresolved

import BlockTypeSelect from '../BlockTypeSelect';

const DefaultBlockTypeSelect = ({ getEditorState, setEditorState, theme, store }) => {
  const structure = [
    HeadlineOneButton,
    HeadlineTwoButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
    AddImageButton
  ];

  return (
    <BlockTypeSelect
      getEditorState={getEditorState}
      setEditorState={setEditorState}
      theme={theme}
      store={store}
      structure={structure}
    />
  );
};

export default DefaultBlockTypeSelect;
