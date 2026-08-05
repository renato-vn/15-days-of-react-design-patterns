import Tab1Example from "./contentExamples/Tab1Example";
import Tab2Example from "./contentExamples/Tab2Example";
import Tab3Example from "./contentExamples/Tab3Example";
import Tabs from "./Tabs";

const tabs = [
  { id: "tab1", btnTitle: "TAB 1", content: <Tab1Example /> },
  { id: "tab2", btnTitle: "TAB 2", content: <Tab2Example /> },
  { id: "tab3", btnTitle: "TAB 3", content: <Tab3Example /> },
];

const TabsDemo = ({ onTabActive, tabActive }) => {
  return (
    <Tabs>
      <Tabs.Buttons>
        {tabs.map((tab) => (
          <Tabs.Button key={tab.id} id={tab.id} onActive={onTabActive}>
            {tab.btnTitle}
          </Tabs.Button>
        ))}
      </Tabs.Buttons>

      {tabs.map((tab) => (
        <Tabs.Content key={tab.id} id={tab.id} isActive={tabActive === tab.id}>
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs>
  );
};

export default TabsDemo;
