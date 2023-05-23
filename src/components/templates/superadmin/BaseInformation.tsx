import React, {Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { AiFillCaretDown, AiFillSetting } from 'react-icons/ai'
import { FaUserAstronaut } from 'react-icons/fa'
import { TiMessages } from 'react-icons/ti'
import { RiLockPasswordLine, RiLogoutBoxLine } from 'react-icons/ri'
import MaleUserIcon from '../../../assets/img/global/male-user-iconn.png'
import Text from "../../global/Text";

type BaseInformationProps = {
  name: string
  role: string
}

const BaseInformation = ({name, role}: BaseInformationProps) => {
  return (
    <React.Fragment>
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div className={`flex`}>
            <Menu.Button className="relative flex shrink-0 items-center flex-row text-grey justify-between items-center">
              <div className={`rounded-full overflow-hidden w-10 h-10 p-1 mr-3 shadow-md`}>
                <img src={MaleUserIcon} alt={`User Placeholder Icon`}/>
              </div>

              <div className={`flex flex-shrink relative flex-col`}>
                <div className={`flex flex-shrink relative flex-row`}>
                  {name} <AiFillCaretDown className="pl-3" size={25}/>
                </div>

                <Text text={role} size={`xs`} className={`text-gray-500 leading-[10px]`} weight={400}/>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-black text-white' : 'text-gray-900'
                      } group flex w-full items-center px-2 py-2 text-sm rounded-lg`}
                    >

                      <FaUserAstronaut size={20} className={`mr-3`}/>
                      My Account
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-black text-white' : 'text-gray-900'
                      } group flex w-full items-center px-2 py-2 text-sm rounded-lg`}
                    >

                      <TiMessages size={20} className={`mr-3`}/>
                      messages
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-black text-white' : 'text-gray-900'
                      } group flex w-full items-center px-2 py-2 text-sm rounded-lg`}
                    >

                      <RiLockPasswordLine size={20} className={`mr-3`}/>
                      Recover Password
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-black text-white' : 'text-gray-900'
                      } group flex w-full items-center px-2 py-2 text-sm rounded-lg`}
                    >
                      <AiFillSetting size={20} className={`mr-3`}/>
                      Settings
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-red-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center px-2 py-2 text-sm rounded-lg`}
                    >
                      <RiLogoutBoxLine size={20} className={`mr-3`}/>
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </React.Fragment>
  )
}

export default BaseInformation;