import { useState } from "react";

const ToggleWithChildren = ({ children }) => {
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
      {children(isOpen)}
    </button>
  );
};

export default ToggleWithChildren;
