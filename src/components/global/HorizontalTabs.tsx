interface HorizontalTabsProps {
  labelValue: {
    label: string;
    value: string;
  }[];
  changeTabFunction: (value: any) => void;
  activeTab: string;
  className?: string;
}

const HorizontalTabs = ({
  labelValue,
  changeTabFunction,
  activeTab,
  className = '',
}: HorizontalTabsProps) => {
  return (
    <div
      className={`w-full flex items-center min-h-[60px] bg-white px-2 rounded-lg ${className}`}>
      <div className="flex items-center w-full h-full">
        <ul
          className={`relative flex list-none flex-wrap rounded-lg p-1 w-full`}
          role="list">
          {labelValue.map(({ label, value }) => (
            <li className="z-30 flex-auto text-center mx-2">
              <a
                className={`text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit py-2 transition-all ease-in-out px-3 ${
                  activeTab === value
                    ? '!bg-[#6090be] shadow-lg shadow-green-950 text-white'
                    : 'text-black hover:bg-blue-gray-500 hover:text-white'
                }`}
                data-tab-target=""
                onClick={() => changeTabFunction(value)}
                role="tab"
                aria-selected="true"
                href={`#`}>
                <span className="ml-1">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HorizontalTabs;
