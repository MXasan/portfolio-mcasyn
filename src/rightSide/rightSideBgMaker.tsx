import { useEffect } from "react";

const RightSideBgMaker = () => {
  useEffect(() => {
    const rightSide = document.querySelector<HTMLElement>(".bg-fixed");
    const randomNum = Math.floor(Math.random() * 4) + 1;
    if (randomNum >= 3) {
      if (rightSide) rightSide.style.backgroundImage = "black";
    } else {
      if (rightSide) rightSide.style.backgroundImage = `url('bg/bg-${randomNum}.jpg')`;
    }
  }, []);
};

export default RightSideBgMaker;