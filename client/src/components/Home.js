import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <main className="Main">
                <div className="Main-bg">
                    <div className="Landing">
                        <div className="Landing-background">
                            <div className="Container Landing-main Container--lg Container--center">
                                <div className="Landing-title">
                                    <h1 className="Landing-heading">Ronjiru</h1>
                                    <p className="Landing-subheading">Avatar Generator</p>
                                </div>
                            </div>
                            <div className="Landing value">
                                <div className="Container Container--lg Container--center">
                                    <div className="ValueProposition">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Explainer">
                        <div className="Explainer-bg">
                            <div className="Container Container--lg">
                                <div className="Explainer-what">
                                    <div className="Explainer-logo">
                                        <img src="https://cdn.discordapp.com/attachments/563795998145773591/568152772814569481/rologo1.png" alt="Rologo"/>
                                    </div>
                                    <div className="Explainer-what-text">
                                        <h1 className="Explainer-heading">What is Ronjiru?</h1>
                                        <p className="Explainer-description">Originally, Ronjiru was a discussion forum, but due to time constraints and lack of knowledge, it is now an avatar generator.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="Container Container--md Container--center">
                            <div className="Explainer-row">
                                <h1 className="Explainer-heading">How does it work?</h1>
                                <p className="Explainer-description">
                                    Basically, navigate to the 'Generate' page and click on the
                                    'Generate Avatar' button. This will call an RNG function from
                                    our 'GenerateAvatar' smart contract and return the avatar
                                    details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Home;