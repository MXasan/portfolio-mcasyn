import LeftSideInfo from "./leftSideInfo/leftSideInfo";
import LeftSideContact from "./leftSidecontact/leftSideContact";
import LeftSideSkills from "./leftSideSkills/leftSideSkills";
import LeftSideLanguage from "./leftSideLanguage/leftSideLanguage"; 
import "./leftSide.css";
const LeftSide = () => {
  return (
    <div className="left-side">
      <LeftSideInfo />
      <LeftSideContact />
      <LeftSideSkills />
      <LeftSideLanguage />
    </div>
  );
};

export default LeftSide;
