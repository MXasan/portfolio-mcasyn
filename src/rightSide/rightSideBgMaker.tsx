import { useEffect } from "react";

const RightSideBgMaker = () => {
  useEffect(() => {
    const rightSide = document.querySelector(".right"),
      randomNum = Math.floor(Math.random() * 4) + 1;
    if (randomNum >= 3) {
      rightSide.style.backgroundImage = "black";
    } else {
      if (rightSide) {
        rightSide.style.backgroundImage = `url('bg/bg-${randomNum}.jpeg')`;
      }
    }
  }, []);
};

export default RightSideBgMaker;
