import React, {lazy, Component, Suspense} from 'react';

// import { Container, Row, Col} from 'react-bootstrap';

// import sytles from './Blog.module.scss';
// import {MDXProvider} from '@mdx-js/react'
import {importMDX} from 'mdx.macro'
const Content = lazy(() => importMDX('./Test.mdx'))




function Blog (props) {

    return (
        // <MDXProvider components={components}><Test /></MDXProvider>
        <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </div>
);
};
export default Blog;