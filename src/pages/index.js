import * as React from "react";
import { createGlobalStyle } from 'styled-components';

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    body {
        font-family: 'Montserrat', sans-serif;
    }
`;

export default class BlogIndexPage extends React.Component {

    render() {
        return (
            <Layout>
                  <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/snowy-forrest.png')`,
          }}
        ></div>
                <GlobalStyle />
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <BlogRoll />
                        </div>
                    </div>
                </section>
                <GlobalStyle />
                {/* <h1 className="title-header">ELSPETH SPARLING</h1> */}
            </Layout>
        );
    }
}

