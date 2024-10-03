import React from "react";
import SectionComponent from "./Section";

const CreativeTeamSection = () => {
  return (
    <>
      <div>
        <SectionComponent
          heading="We help brands drive measurable results through performance-creative"
          text="Leveraging data-driven insights, we craft creative campaigns that align with your brand. Our strategies are measurable and backed by reliable data, ensuring every effort results in real, tangible performance."
          imagePath={
            "https://cdn.prod.website-files.com/65f9d9d22fb2f3b3f17c09ed/663280ce947a093198288960_home-page-inpage-1.png"
          }
          imageAlt="Storytelling Illustration"
          reverse={true}
        />
        <SectionComponent
          heading="Creator-centric growth solutions"
          text="Our approach places curated creators at the heart of our strategy. We rigorously test and select creators from diverse backgrounds and communities. Our macro & micro influencer agency ensures they align perfectly with your brand’s unique tone."
          imagePath={
            "https://cdn.prod.website-files.com/65f9d9d22fb2f3b3f17c09ed/663280cd47a47296bb847efc_home-page-inpage-1-1.png"
          }
          imageAlt="Creative Mind"
        />
      </div>
    </>
  );
};

export default CreativeTeamSection;
