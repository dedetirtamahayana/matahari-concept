import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export function CustomLayoutTabs() {
  const [activeTab, setActiveTab] = React.useState("tab1");

  const tabData = {
    tab1: {
      label: "Tab 1",
      content: (
        <div>
          <h2>Tab 1 Content</h2>
          <p>This is the content for Tab 1.</p>
        </div>
      ),
    },
    tab2: {
      label: "Tab 2",
      content: (
        <div>
          <h2>Tab 2 Content</h2>
          <p>This is the content for Tab 2.</p>
        </div>
      ),
    },
    tab3: {
      label: "Tab 3",
      content: (
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-1'>
            <h2>Tab 3 Content Column 1</h2>
            <p>This is column 1 content for Tab 3.</p>
          </div>
          <div className='col-span-1'>
            <h2>Tab 3 Content Column 2</h2>
            <p>This is column 2 content for Tab 3.</p>
          </div>
          <div className='col-span-1'>
            <h2>Tab 3 Content Column 3</h2>
            <p>This is column 3 content for Tab 3.</p>
          </div>
        </div>
      ),
    },
  };

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className='rounded-none border-b border-blue-gray-50 bg-transparent p-0'
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {Object.keys(tabData).map((value) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {tabData[value].label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {Object.keys(tabData).map((value) => (
          <TabPanel key={value} value={value}>
            {tabData[value].content}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
