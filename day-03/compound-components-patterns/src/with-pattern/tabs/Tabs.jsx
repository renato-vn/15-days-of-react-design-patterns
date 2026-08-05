const Tabs = ({ children }) => {
  return <section className="tabs">{children}</section>;
};

const TabsButtons = ({ children }) => (
  <div className="tabs-buttons-container">{children}</div>
);

const TabButton = ({ children, id, onActive }) => {
  return (
    <button
      id={id}
      className="tabs-button"
      onClick={(e) => onActive(e.target.id)}
    >
      {children}
    </button>
  );
};

const TabContent = ({ children, id, isActive }) => {
  return (
    <div id={id} className={`tabs-content ${isActive && "active"}`}>
      {children}
    </div>
  );
};

Tabs.Buttons = TabsButtons;
Tabs.Button = TabButton;
Tabs.Content = TabContent;

export default Tabs;
