import { useEffect } from "react";

const RightSideBgMaker = () => {
  useEffect(() => {
    const rightSide = document.querySelector(".right"),
      randomNum = Math.floor(Math.random() * 3) + 1;
    if (rightSide) {
      rightSide.style.backgroundImage = `url('bg/bg-${randomNum}.jpeg')`;
    }
  }, []);
};

export default RightSideBgMaker;
