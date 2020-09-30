import React from 'react';

import { Container, Row, Col} from 'react-bootstrap';

import sytles from './Blog.module.scss';
import {MDXProvider} from '@mdx-js/react'
import {importMDX} from 'mdx.macro'
const Test = importMDX('./Test.md')
const components = {

    h2: (props) => <h2 style= {{'color': 'red'}} {...props} />,
   
  };

function Blog (props) {

    return (
        // <MDXProvider components={components}><Test /></MDXProvider>
        <Test></Test>
);
};
export default Blog;