import React from "react";
import {
  AboutSection,
  //ArticlesSection,
  ContactSection,
  HeroSection,
  //InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Hannah Chea's super cool personal website!" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/*<ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />*/} 
        <AboutSection sectionId="about" heading="About me" />
        {/*<InterestsSection sectionId="details" heading="Details" />*/}
        <ProjectsSection sectionId="projects" heading="Some projects" />
        <ContactSection sectionId="contact" heading="Please talk to me!" />
      </Page>
    </>
  );
}
