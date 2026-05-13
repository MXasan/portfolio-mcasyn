import { useEffect } from "react";

const RightSideBgMaker = () => {
  useEffect(() => {
    const rightSide = document.querySelector(".right"),
      randomNum = Math.floor(Math.random() * 5) + 1;
    if (randomNum >= 6) {
      rightSide.style.backgroundImage = "black";
    } else {
      if (rightSide) {
        rightSide.style.backgroundImage = `url('bg/bg-${randomNum}.jpg')`;
      }
    }
  }, []);
};

export default RightSideBgMaker;
