import { useEffect, useState } from "react";

const getScrollPercentage = (scrollValue) => {
  return Math.floor(
    (scrollValue / (document.body.scrollHeight - window.innerHeight)) * 100
  );
};

const ProgressBar = ({ scrollValue }) => {
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
