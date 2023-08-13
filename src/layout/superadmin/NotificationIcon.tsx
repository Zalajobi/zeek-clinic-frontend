import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { TiMessages } from 'react-icons/ti';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { Typography } from '../../components/global/dialog/Typography';

const NotificationIcon = () => {
  return (
    <div className={`px-4`}>
      <Menu
        as="div"
        className="relative inline-block text-left px-5">
        <div className={`flex`}>
          <Menu.Button className="relative flex shrink-0 items-center flex-row text-grey justify-between items-center">
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <MdOutlineNotificationsNone size={20} />
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                20
              </div>
            </button>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items
            className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white
            shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-scroll max-h-[400px]">
            <div className="p-1">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`flex flex-row items-center h-22 px-2 py-2 rounded-lg ${
                      active ? 'bg-black text-white' : 'text-gray-900'
                    }`}>
                    <TiMessages
                      size={20}
                      className={'mr-1'}
                    />

                    <div className="flex flex-col ml-1">
                      <Typography
                        text={`Notification From`}
                        size={`xs`}
                        className={`text-gray-500 leading-[10px]`}
                        weight={400}
                        Tag={`p`}
                      />
                      <p
                        className={`group flex flex-row w-full items-center py-2 text-sm text-justify truncate mx-w-[200px]`}>
                        Contrary to popular belief
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`flex flex-row items-center h-22 px-2 py-2 rounded-lg ${
                      active ? 'bg-black text-white' : 'text-gray-900'
                    }`}>
                    <TiMessages
                      size={20}
                      className={'mr-1'}
                    />

                    <div className="flex flex-col ml-1">
                      <Typography
                        text={`Notification From`}
                        size={`xs`}
                        className={`text-gray-500 leading-[10px]`}
                        weight={400}
                        Tag={`p`}
                      />
                      <p
                        className={`group flex flex-row w-full items-center py-2 text-sm text-justify truncate mx-w-[200px]`}>
                        Contrary to popular belief
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`flex flex-row items-center h-22 px-2 py-2 rounded-lg ${
                      active ? 'bg-black text-white' : 'text-gray-900'
                    }`}>
                    <TiMessages
                      size={20}
                      className={'mr-1'}
                    />

                    <div className="flex flex-col ml-1">
                      <Typography
                        text={`Notification From`}
                        size={`xs`}
                        className={`text-gray-500 leading-[10px]`}
                        weight={400}
                        Tag={`p`}
                      />
                      <p
                        className={`group flex flex-row w-full items-center py-2 text-sm text-justify truncate mx-w-[200px]`}>
                        Contrary to popular belief
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`flex flex-row items-center h-22 px-2 py-2 rounded-lg ${
                      active ? 'bg-black text-white' : 'text-gray-900'
                    }`}>
                    <TiMessages
                      size={20}
                      className={'mr-1'}
                    />

                    <div className="flex flex-col ml-1">
                      <Typography
                        text={`Notification From`}
                        size={`xs`}
                        className={`text-gray-500 leading-[10px]`}
                        weight={400}
                        Tag={`p`}
                      />
                      <p
                        className={`group flex flex-row w-full items-center py-2 text-sm text-justify truncate mx-w-[200px]`}>
                        Contrary to popular belief
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`flex flex-row items-center h-22 px-2 py-2 rounded-lg ${
                      active ? 'bg-black text-white' : 'text-gray-900'
                    }`}>
                    <TiMessages
                      size={20}
                      className={'mr-1'}
                    />

                    <div className="flex flex-col ml-1">
                      <Typography
                        text={`Notification From`}
                        size={`xs`}
                        className={`text-gray-500 leading-[10px]`}
                        weight={400}
                        Tag={`p`}
                      />
                      <p
                        className={`group flex flex-row w-full items-center py-2 text-sm text-justify truncate mx-w-[200px]`}>
                        Contrary to popular belief
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`flex flex-row items-center h-22 px-2 py-2 rounded-lg ${
                      active ? 'bg-black text-white' : 'text-gray-900'
                    }`}>
                    <TiMessages
                      size={20}
                      className={'mr-1'}
                    />

                    <div className="flex flex-col ml-1">
                      <Typography
                        text={`Notification From`}
                        size={`xs`}
                        className={`text-gray-500 leading-[10px]`}
                        weight={400}
                        Tag={`p`}
                      />
                      <p
                        className={`group flex flex-row w-full items-center py-2 text-sm text-justify truncate mx-w-[200px]`}>
                        Contrary to popular belief
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`flex flex-row items-center h-22 px-2 py-2 rounded-lg ${
                      active ? 'bg-black text-white' : 'text-gray-900'
                    }`}>
                    <TiMessages
                      size={20}
                      className={'mr-1'}
                    />

                    <div className="flex flex-col ml-1">
                      <Typography
                        text={`Notification From`}
                        size={`xs`}
                        className={`text-gray-500 leading-[10px]`}
                        weight={400}
                        Tag={`p`}
                      />
                      <p
                        className={`group flex flex-row w-full items-center py-2 text-sm text-justify truncate mx-w-[200px]`}>
                        Contrary to popular belief
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`flex flex-row items-center h-22 px-2 py-2 rounded-lg ${
                      active ? 'bg-black text-white' : 'text-gray-900'
                    }`}>
                    <TiMessages
                      size={20}
                      className={'mr-1'}
                    />

                    <div className="flex flex-col ml-1">
                      <Typography
                        text={`Notification From`}
                        size={`xs`}
                        className={`text-gray-500 leading-[10px]`}
                        weight={400}
                        Tag={`p`}
                      />
                      <p
                        className={`group flex flex-row w-full items-center py-2 text-sm text-justify truncate mx-w-[200px]`}>
                        Contrary to popular belief
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`flex flex-row items-center h-22 px-2 py-2 rounded-lg ${
                      active ? 'bg-black text-white' : 'text-gray-900'
                    }`}>
                    <TiMessages
                      size={20}
                      className={'mr-1'}
                    />

                    <div className="flex flex-col ml-1">
                      <Typography
                        text={`Notification From`}
                        size={`xs`}
                        className={`text-gray-500 leading-[10px]`}
                        weight={400}
                        Tag={`p`}
                      />
                      <p
                        className={`group flex flex-row w-full items-center py-2 text-sm text-justify truncate mx-w-[200px]`}>
                        Contrary to popular belief
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`flex flex-row items-center h-22 px-2 py-2 rounded-lg ${
                      active ? 'bg-black text-white' : 'text-gray-900'
                    }`}>
                    <TiMessages
                      size={20}
                      className={'mr-1'}
                    />

                    <div className="flex flex-col ml-1">
                      <Typography
                        text={`Notification From`}
                        size={`xs`}
                        className={`text-gray-500 leading-[10px]`}
                        weight={400}
                        Tag={`p`}
                      />
                      <p
                        className={`group flex flex-row w-full items-center py-2 text-sm text-justify truncate mx-w-[200px]`}>
                        Contrary to popular belief
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default NotificationIcon;
