import {ChangeEvent, useState} from "react";
import { BiSearchAlt } from 'react-icons/bi'

const Search = () => {
  const [querySearch, setQuerySearch] = useState("");

  const handleSearch = (event:ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(event?.target?.value)
    console.log(event?.target?.value)
  }

  return (
    <div className='max-w-md w-[300px] h-12 flex items-center justify-center mr-auto'>
      <div
        className="w-full relative flex items-center border border-solid border-grey-500 rounded-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <BiSearchAlt/>
        </div>

        <input
          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 border-0"
          type="text"
          id="search"
          onChange={handleSearch}
          placeholder="Search something.."/>
      </div>
    </div>
  )
}

export default Search;