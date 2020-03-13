import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <section className="hero">
                    <h1 className="hero-heading">Beer Diary</h1>
                    <p className="tagline">Tagline Goes Here</p>
                </section>

                <div className="info-container">
                    <section className="info">
                        <h2>Create an Account</h2>
                        <p className="info-content">
                            Click the Register link above to set up your account to start adding beers.
                        </p>
                    </section>

                    <section className="info">
                        <h2>Add Beers</h2>
                        <p className="info-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in orci lorem. 
                            Maecenas risus metus, aliquam ut imperdiet eu, luctus congue nunc. 
                        </p>
                    </section>

                    <section className="info">
                        <h2>Rate &amp; Take Notes</h2>
                        <p className="info-content">
                            Quisque lacinia convallis rutrum. Suspendisse vel laoreet neque, in ultrices erat. 
                            Nulla vel vestibulum metus. Suspendisse viverra, ipsum id malesuada luctus, 
                            tortor diam faucibus
                        </p>
                    </section>
                </div>

            </div>
        );
    }
}

export default LandingPage;