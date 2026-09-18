import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Card from "../Elements/Card";

const Gallery = () => {
  const [show, setShow] = useState(false);
  const showIcon = show ? (<ChevronDown size={24} />) : (<ChevronUp size={24} />);
  const showText = show ? "Show" : "Hide";
  const showNavbar = show ? "h-25" : "h-10";
  const [toggleOnClick, setToggleOnClick] = useState(false);
  const toggleOuterBg = toggleOnClick ? "bg-indigo-950" : "bg-blue-400";
  const toggleinnerBg = toggleOnClick ? "bg-indigo-900" : "bg-blue-300";
  const toggleSliderBall = toggleOnClick ? "translate-x-16.5 bg-white justify-end blur-[1px] duration-500" : "translate-x-0 bg-yellow-300 ring-amber-100 ring-3 justify-center blur-[2px] duration-600";
  const toggleHidetheMoon = toggleOnClick ? "" : "hidden";

  return (
    <div>
      <nav className={`sticky flex z-50 top-0 bg-black text-4xl font-semibold w-full ${showNavbar} px-4 py-6`}>
        <div className="flex justify-between items-center w-full">
          <div> 
            dsadad
          </div>
          {/* Darkmode Toggle Switch */}
          <div>
            <div onClick={() => setToggleOnClick(!toggleOnClick)} className={`flex ${toggleOuterBg} text-white text-base w-28 h-10 px-2 py-0.5 rounded-3xl items-center focus:outline-none `}>
              <div className={`flex justify-start items-center h-8 w-24 ${toggleinnerBg} rounded-2xl px-1`}>
                <div className={`flex items-center h-7 w-7 rounded-full transition-all ease-in-out ${toggleSliderBall}`}>
                  <div className={`h-5 w-5 px-1.5 bg-indigo-900 rounded-full opacity-90 ${toggleHidetheMoon}`}></div>
                </div>
              </div>
            </div>
          </div>
          {/* Show/Hide Button */}
          <div className="flex items-center">
            <button
              onClick={() => setShow(!show)}
              className="bg-blue-500 text-white text-base px-2 py-0.5 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              <div className=" flex justify-between items-center">
                <div className="flex justify-center w-32">{showText}</div>
                {showIcon}
              </div>
            </button>
          </div>
        </div>
      </nav>
      <div className="inline-block justify-content items-center">
        <Card />
        <Card
          title="Amiya tralalala hoshimachiossdsd"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. fsdfsfsdfsfwfewsasasasas"
        />
        <Card />

      </div>
    </div>
  );
};

export default Gallery;
