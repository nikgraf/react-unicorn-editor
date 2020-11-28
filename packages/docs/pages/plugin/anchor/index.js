import React, { Component } from 'react';
import Link from 'next/link';
import simpleExampleCode from '!!raw-loader!./SimpleLinkPluginEditor';
import customExampleCode from '!!raw-loader!./CustomInlineToolbarEditor';
import customExampleLinkStylesCode from '!!raw-loader!./CustomInlineToolbarEditor/linkStyles.module.css';
import gettingStarted from '!!raw-loader!./gettingStarted';
import Container from '../../../components/Container/Container';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Heading from '../../../components/Heading/Heading';
import styles from './styles.module.css';
import Code from '../../../components/Code/Code';
import InlineCode from '../../../components/InlineCode/InlineCode';
import SimpleLinkPluginEditor from './SimpleLinkPluginEditor';
import CustomInlineToolbarEditor from './CustomInlineToolbarEditor';
import ExternalLink from '../../../components/Link/Link';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame>
        <Container>
          <Heading level={2}>Link</Heading>
          <Heading level={3}>Supported Environment</Heading>
          <ul className={styles.list}>
            <li className={styles.listEntry}>Desktop: Yes</li>
            <li className={styles.listEntry}>Mobile: No</li>
            <li className={styles.listEntry}>Screen-reader: No</li>
          </ul>
        </Container>
        <AlternateContainer>
          <Heading level={2}>Getting Started</Heading>
          <p>
            This plugin allows you to add link entities via the{' '}
            <Link href="/plugin/inline-toolbar">inline toolbar</Link>. It also
            provides a decorator that formats the created entities.
          </p>
          <Code code="npm install @draft-js-plugins/editor" />
          <Code code="npm install @draft-js-plugins/anchor" />
          <Code code="npm install @draft-js-plugins/inline-toolbar" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <p>
            The plugin ships with a default styling available at this location:
            &nbsp;
            <InlineCode
              code={'node_modules/@draft-js-plugins/anchor/lib/plugin.css'}
            />
            . If you want to use the default styles, you can include this
            stylesheet (
            <ExternalLink
              target="_blank"
              href="https://webpack.js.org/loaders/style-loader/"
            >
              Webpack usage
            </ExternalLink>
            ). Otherwise you can supply your own styles via the `theme` config
            option.
          </p>
        </AlternateContainer>
        <Container>
          <Heading level={2}>Configuration Parameters</Heading>
          <div className={styles.param}>
            <span className={styles.paramName}>theme</span>
            <span>Object of CSS classes with the following keys:</span>
            <div className={styles.subParams}>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>input:</span>
                CSS class for the input field in the add link form.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>inputInvalid:</span>
                CSS class for the input field when the URL is invalid.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>link:</span>
                CSS class for the link in the editor content.
              </div>
            </div>
          </div>
          <div>
            <span className={styles.paramName}>placeholder</span>
            <span>
              The placeholder that is shown when the input field is empty.
            </span>
          </div>
          <div>
            <span className={styles.paramName}>linkTarget</span>
            <span>The target attribute of the link.</span>
          </div>
          <div>
            <span className={styles.paramName}>Link</span>
            <span>Specify the link component that will be rendered.</span>
          </div>
        </Container>
        <Container>
          <Heading level={2}>Simple Link Plugin Example</Heading>
          <SimpleLinkPluginEditor />
          <Code code={simpleExampleCode} name="SimpleLinkPluginEditor.js" />
        </Container>
        <Container>
          <Heading level={2}>Custom Link Plugin Example</Heading>
          <CustomInlineToolbarEditor />
          <Code code={customExampleCode} name="CustomLinkPluginEditor.js" />
          <Code code={customExampleLinkStylesCode} name="linkStyles.css" />
        </Container>
      </PluginPageFrame>
    );
  }
}
