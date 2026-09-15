import '../../index.css'
import { ChevronUp, ChevronDown } from "lucide-react";
import Button from '../Elements/Button'
import Card from '../Elements/Card'
import { useState } from 'react';


function App() {
  const [open, setOpen] = useState(false);
  const dropdownIcon = open ? <ChevronDown size={24}/> : <ChevronUp size={24}/>;
  const TextMenu = ["Home", "Gallery", "Settings"];
  const [defaultText, setDefaultText] = useState(" - ");
  return (
      <div className=" flex-col h-screen bg-blue-300 text-4xl font-semibold px-4 py-6" >
          <div className="flex justify-center items-center">Hello World</div>
          <div className="flex justify-start items-center">
            <Button >Click Me</Button>
            <Button textSize="lg">Hit me</Button  >
          </div>
          <div className="flex flex-wrap justify-baseline items-center">
            <Card />
            <Card title="Amiya tralalala hoshimachiossdsd" description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. fsdfsfsdfsfwfewsasasasas" />
            <Card />
            
            
            <div className='relative inline-block'>
              <button onClick={() => setOpen (!open)} className='bg-blue-500 text-white text-base px-2 py-0.5 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
                <div className=' flex justify-between items-center'>
                  <div className='flex justify-center w-32'>{defaultText}</div>
                  {dropdownIcon}
                </div>
              </button>
 
              {open && (
                <div className="absolute mt-0.5 w-42 rounded bg-white shadow-lg">
                  <ul>
                    {TextMenu.map((item, index) => (
                      <li key={index} className="flex items-center px-2 hover:bg-gray-100 cursor-pointer">
                          <button onClick={() => {setOpen (!open); setDefaultText(item); }}  className='flex justify-start w-full text-base py-1 hover:scale-105'> {item} </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
            </div>
            <div>  </div>
          </div>
        </div>
  )
}

export default App
