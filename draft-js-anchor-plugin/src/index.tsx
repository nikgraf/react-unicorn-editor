import React, {
  AnchorHTMLAttributes,
  ComponentType,
  ReactElement,
} from 'react';
import { EditorPlugin } from 'draft-js-plugins-editor';
import EditorUtils from 'draft-js-plugins-utils';
import { EditorState } from 'draft-js';
import DefaultLink, { LinkPubProps } from './components/Link';
import LinkButton, { LinkButtonPubParams } from './components/LinkButton';
import linkStrategy from './linkStrategy';
import { defaultTheme, AnchorPluginTheme } from './theme';

export type { AnchorPluginTheme } from './theme';

export interface AnchorPluginConfig {
  theme?: AnchorPluginTheme;
  placeholder?: string;
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
  linkTarget?: string;
  validateUrl?: (url: string) => boolean;
}

export type AnchorPlugin = EditorPlugin & {
  LinkButton: ComponentType<LinkButtonPubParams>;
};

export interface AnchorPluginStore {
  getEditorState?(): EditorState;
  setEditorState?(state: EditorState): void;
}

export default (config: AnchorPluginConfig = {}): AnchorPlugin => {
  const {
    theme = defaultTheme,
    placeholder,
    Link,
    linkTarget,
    validateUrl,
  } = config;

  const store: AnchorPluginStore = {
    getEditorState: undefined,
    setEditorState: undefined,
  };

  const DecoratedDefaultLink = (props: LinkPubProps): ReactElement => (
    <DefaultLink {...props} className={theme.link} target={linkTarget} />
  );

  const DecoratedLinkButton = (props: LinkButtonPubParams): ReactElement => (
    <LinkButton
      {...props}
      ownTheme={theme}
      store={store}
      placeholder={placeholder}
      onRemoveLinkAtSelection={() =>
        store.setEditorState!(
          EditorUtils.removeLinkAtSelection(store.getEditorState!())
        )
      }
      validateUrl={validateUrl}
    />
  );

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },

    decorators: [
      {
        strategy: linkStrategy,
        component: Link || DecoratedDefaultLink,
      },
    ],

    LinkButton: DecoratedLinkButton,
  };
};
