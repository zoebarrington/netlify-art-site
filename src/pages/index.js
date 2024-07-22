import * as React from "react";
import {createGlobalStyle} from 'styled-components';

import Layout from "../components/Layout";
// import BlogRoll from "../components/BlogRoll";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    body {
        font-family: 'Montserrat', sans-serif;
    }
`;

export default class BlogIndexPage extends React.Component {

    render() {
        return (
            <div className="construction-wrapper">
            <div className="cat-background">
            {/*<Layout>*/}
                {/*//   <GlobalStyle/>*/}
                {/*//   <section className="section">*/}
                {/*//     <div className="container">*/}
                {/*//       <div className="content">*/}
                {/*//         <BlogRoll />*/}
                {/*//       </div>*/}
                {/*//     </div>*/}
                {/*//   </section>*/}
                    <GlobalStyle/>
                <div className="text-container">
                    <h1 className="title-header">ELSPETH SPARLING</h1>
                    <p className="website-text">Elspeth Sparling's website is currently under construction</p>
                    <p className="mobile-text">Elspeth's website is currently under construction</p>
                    <p>For enquiries, please email <strong><a href="mailto:elspethsparling@gmail.com"
                                                              class="email-link">by clicking here</a></strong> and/or
                        follow <strong><a
                            href="https://www.instagram.com/elspethsparlingpaintings">@elspethsparlingpaintings</a></strong> on
                        Instagram!</p>
                </div>
                {/*</Layout>*/}
            </div>
            </div>
        );
    }
}

