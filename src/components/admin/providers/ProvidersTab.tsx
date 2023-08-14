import { Fragment } from 'react';
import { Tab } from '@headlessui/react';

interface ProvidersTabProps {
  click: (
    value:
      | 'ALL'
      | 'ACTIVE'
      | 'PENDING'
      | 'ON_LEAVE'
      | 'ON_BREAK'
      | 'SUSPENDED'
      | 'TERMINATED'
      | 'UNAVAILABLE'
  ) => void;
  activeTab: string;
}

const ProvidersTab = ({ click, activeTab }: ProvidersTabProps) => {
  return (
    <Fragment>
      <div className={`min-w-md max-w-4xl mt-8`}>
        <Tab.Group>
          <Tab.List className={`flex space-x-1 rounded-xl bg-white p-1`}>
            <Tab
              className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    activeTab === 'ALL'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
              onClick={() => click('ALL')}>
              All
            </Tab>

            <Tab
              className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    activeTab === 'ACTIVE'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
              onClick={() => click('ACTIVE')}>
              Active
            </Tab>

            <Tab
              className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    activeTab === 'PENDING'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
              onClick={() => click('PENDING')}>
              Pending
            </Tab>

            <Tab
              className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    activeTab === 'ON_LEAVE'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
              onClick={() => click('ON_LEAVE')}>
              On Leave
            </Tab>

            <Tab
              className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    activeTab === 'ON_BREAK'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
              onClick={() => click('ON_BREAK')}>
              On Break
            </Tab>

            <Tab
              className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    activeTab === 'SUSPENDED'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
              onClick={() => click('SUSPENDED')}>
              Suspended
            </Tab>

            <Tab
              className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    activeTab === 'TERMINATED'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
              onClick={() => click('TERMINATED')}>
              Terminated
            </Tab>

            <Tab
              className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    activeTab === 'UNAVAILABLE'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
              onClick={() => click('UNAVAILABLE')}>
              Unavailable
            </Tab>
          </Tab.List>
        </Tab.Group>
      </div>
    </Fragment>
  );
};

export default ProvidersTab;
