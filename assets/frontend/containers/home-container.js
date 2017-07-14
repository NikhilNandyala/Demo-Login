import React, { Component } from "react";
import { EmbeddedApp } from "@shopify/polaris/embedded";
import { Page, Card, Button, Stack, Heading } from "@shopify/polaris";
import { Link } from "react-router-dom";
import "@shopify/polaris/styles.css";

import LinkCard from "../components/link-card";

class HomeContainer extends Component {
    render() {
        return (
            <Page title="Home">
                <Heading>Add Content</Heading>
                <LinkCard
                    url={`/app/mission`}
                    buttonTitle={"Provide Mission and Tagline"}
                    description={
                        <p>
                            <strong>Mission and Tagline: </strong> Specify your
                            brand's mission and tagline.
                        </p>
                    }
                />

                <LinkCard
                    url={`/app/achievements`}
                    buttonTitle={"List Achievements"}
                    description={
                        <p>
                            <strong>Achievements: </strong> Highlight notable
                            achievements, blog posts, media coverage and more.
                        </p>
                    }
                />

                <LinkCard
                    url={`/app/milestones`}
                    buttonTitle={"List Milestones"}
                    description={
                        <p>
                            <strong>Milestones: </strong> Highlight impressive
                            numbers, sales targets, or customer ratings.
                        </p>
                    }
                />

                <LinkCard
                    url={`/app/team`}
                    buttonTitle={"Add Team Members"}
                    description={
                        <p>
                            <strong>Team Members: </strong> Highlight your
                            executive team.
                        </p>
                    }
                />

                <LinkCard
                    url={`/app/gallery`}
                    buttonTitle={"Add Images"}
                    description={
                        <p>
                            <strong>Featured Gallery: </strong> Add featured
                            images that highlight your products and brand.
                        </p>
                    }
                />

                <LinkCard
                    url={`/app/about`}
                    buttonTitle={"Write About your Brand"}
                    description={
                        <p>
                            <strong>About: </strong> Tell a story about your
                            brand so customers can learn about what you are
                            passionate about.
                        </p>
                    }
                />

                <Heading>Design</Heading>

                <LinkCard
                    url={`/app/preview`}
                    buttonTitle={"Customize and Publish"}
                    description={
                        <p>
                            <strong>Customize and Publish: </strong> Choose your
                            theme, preview your Press Kit and publish it to your
                            store.
                        </p>
                    }
                />
            </Page>
        );
    }
}

export default HomeContainer;