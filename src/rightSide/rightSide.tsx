import RightSideIntro from "./rightSideIntro/rightSideIntro";
import RightSideBgMaker from "./rightSideBgMaker";
import "./rightSide.css";
const RightSide = () => {
  return (
    <div className="right-side">
      <RightSideBgMaker />
      <RightSideIntro />
    </div>
  );
};

export default RightSide;
