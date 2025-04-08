import React from "react";
import SectionComponent from "./Section";
import { creative1, creative2, rocket, target } from "../../assets/mainImages";

const CreativeTeamSection = () => {
  return (
    <>
      <div>
        <SectionComponent
          heading="Cretive & Digital Design"
          text="We craft powerful brand identities through logo design, motion graphics, social media content, and video editing ; bringing your vision to life with creativity and impact."
          imagePath={
            // "https://cdn.prod.website-files.com/65f9d9d22fb2f3b3f17c09ed/663280ce947a093198288960_home-page-inpage-1.png"
            // creative1
            rocket
          }
          imageAlt="Storytelling Illustration"
          reverse={true}
        />
        <SectionComponent
          heading="Development, AI & Marketing Solutions"
          text="From websites and mobile apps to AI chatbots and automation tools, we build smart digital products. Our growth services include SEO, ad campaigns, and complete social media management to scale your business."
          imagePath={
            // "https://cdn.prod.website-files.com/65f9d9d22fb2f3b3f17c09ed/663280cd47a47296bb847efc_home-page-inpage-1-1.png"
            target
          }
          imageAlt="Creative Mind"
        />
      </div>
    </>
  );
};

export default CreativeTeamSection;
