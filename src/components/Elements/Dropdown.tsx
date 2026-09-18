import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
type DropdownProps = {
  options: string[];
  children: String;
};

const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const dropdownIcon = open ? (<ChevronDown size={24} />) : (<ChevronUp size={24} />);
  const textOptions = props.options;
  const [defaultText, setDefaultText] = useState(props.children as string);
  return (
    <div>
      <div className="relative inline-block">
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-500 text-white text-base px-2 py-0.5 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          <div className=" flex justify-between items-center">
            <div className="flex justify-center w-32">{defaultText}</div>
            {dropdownIcon}
          </div>
        </button>

        {open && (
          <div className="absolute mt-0.5 w-42 rounded bg-white shadow-lg">
            <ul>
              {textOptions.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center px-2 hover:bg-gray-100 cursor-pointer">
                  <button
                    onClick={() => {
                      setOpen(!open);
                      setDefaultText(item);
                    }}
                    className="flex justify-start w-full text-base py-1 hover:scale-105">
                    {" "}
                    {item}{" "}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
