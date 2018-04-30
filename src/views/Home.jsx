import React, { Component } from "react";

import HomeContainer from "../containers/HomeContainer";
import Navbar from "../components/Navbar";
import { withRouter } from "react-router";

class Home extends Component {
    render() {
        return (
            <section className="home-section">
                <Navbar />
                <HomeContainer />
            </section>
        );
    }
}

export default withRouter(Home);
