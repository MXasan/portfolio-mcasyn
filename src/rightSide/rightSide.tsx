import RightSideIntro from "./rightSideIntro/rightSideIntro";
import RightSideBgMaker from "./rightSideBgMaker";
import RightSideExperience from "./rightSideExpereince/rightSideExpereince";
import RightSideEducation from "./rightSideEducation/rightSideEducation";
import RightSideContact from "./rightSideContact/rightSideContact";

import "./rightSide.css";
import RightSideCarousel from "./rightSideCarusel";
const RightSide = () => {
  return (
    <div className="right-side">
      <RightSideBgMaker />
      <RightSideIntro />
      <RightSideCarousel />
      <RightSideExperience />
      <RightSideEducation />
      <RightSideContact />
      {/* <RightSideProjects /> */}
    </div>
  );
};

export default RightSide;
