import RightSideIntro from "./rightSideIntro/rightSideIntro";
import RightSideBgMaker from "./rightSideBgMaker";

import "./rightSide.css";
import RightSideCarousel from "./rightSideCarusel";
const RightSide = () => {
  return (
    <div className="right-side">
      <RightSideBgMaker />
      <RightSideIntro />
      <RightSideIntro />
      <RightSideIntro />
      <RightSideIntro />
      <RightSideIntro />

      <RightSideCarousel />
      {/* <RightSideProjects /> */}
    </div>
  );
};

export default RightSide;
