import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 }); 
  const [rotation, setRotation] = useState(0); 
  const [isMove10StepsAvailable, setIsMove10StepsAvailable] = useState(false);
  const moveCatBy10Steps = () => {
    console.log('I am clicked');
    setPosition((prevPos) => ({ ...prevPos, x: prevPos.x + 10, y: prevPos.y + 0 }));
  };
  const turnCatBy15Degrees = () => {
    console.log('Turn 15 degrees clicked');
    setRotation((prevRotation) => prevRotation + 15); // Update rotation state
  };
  const handleDropAction = () => {
    setIsMove10StepsAvailable(true); // Set to true when dropped
  };
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar moveCat={moveCatBy10Steps} turnCat={turnCatBy15Degrees} /> <MidArea onDrop={handleDropAction} isMove10StepsAvailable={isMove10StepsAvailable}  moveCat={moveCatBy10Steps}/>
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea position={position} rotation={rotation} />
        </div>
      </div>
    </div>
  );
}
