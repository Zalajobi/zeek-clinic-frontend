import { Fragment } from 'react';
import { Tab, Tabs, TabsHeader } from '@material-tailwind/react';

interface TableTabsProps {
  tabItems: {
    label: string;
    value: string;
  }[];
  onClick: (value: any) => void;
}

const TableTabs = ({ tabItems, onClick }: TableTabsProps) => {
  return (
    <Fragment>
      <Tabs
        value={tabItems[0].value}
        className={`w-full rounded-lg md:w-max bg-gray-300`}>
        <TabsHeader>
          {tabItems.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => onClick(value)}
              className={`cursor-pointer`}>
              &nbsp;&nbsp;{label}&nbsp;&nbsp;
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
    </Fragment>
  );
};

export default TableTabs;
