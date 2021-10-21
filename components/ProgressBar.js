import { useContext, useEffect, useState } from "react";
import { LayoutContext } from "../contexts/LayoutContext";
const getScrollPercentage = (scrollValue) => {
  return Math.floor(
    (scrollValue / (document.body.scrollHeight - window.innerHeight)) * 100
  );
};

const ProgressBar = () => {
  const { scrollValue } = useContext(LayoutContext);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    setScrollPercentage(getScrollPercentage(scrollValue));
    const progress = document.querySelector(".progress");
    progress.style.height = `${scrollPercentage}%`;
  });

  return (
    <div className="progress-wrapper">
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
