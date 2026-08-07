import { useState } from "react";

const Toggle = ({ render }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOpen}
      className="toggle"
      onClick={handleToggle}
    >
      <span className="knob"></span>
      {render(isOpen)}
    </button>
  );
};

export default Toggle;
