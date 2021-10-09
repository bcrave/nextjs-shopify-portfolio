import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import styled from "@emotion/styled";

const ToggleButton = styled.button`
  --toggle-width: 70px;
  --toggle-height: 30px;
  --toggle-padding: 2px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(#e3e3e3);
  transition: background 0.5s ease-in-out;
  position: absolute;
  right: 100%;
  bottom: 50%;
  transform: translateX(50%) translateY(50%);
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background-color: #333;
  transition: transform 0.5s ease-in-out;
  transform: ${(p) =>
    p.activeTheme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === "dark" ? "light" : "dark";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <ToggleButton
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type="button"
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      <ToggleThumb activeTheme={activeTheme} />
      <span aria-hidden={true}>
        <FontAwesomeIcon icon={faMoon} />
      </span>
      <span aria-hidden={true}>
        <FontAwesomeIcon icon={faSun} />
      </span>
    </ToggleButton>
  );
};

export default ThemeToggle;
