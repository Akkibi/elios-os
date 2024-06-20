// Desktop.jsx
import React, { useState } from 'react';
import folderStructure from '../data/folderStructure.json';
import { gsap } from "gsap";
import Window from './Window';

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState([]);

  const setNewWindow = (name, type, content) => {
    // find highestZIndex in openWindows
    if (!openWindows.find(windowObj => windowObj.name === name)) {
      setOpenWindows([...openWindows, {name: name, type: type, zIndex: findHighestZIndex() + 1, content: content, position: { x: window.innerWidth / 4 + openWindows.length * 20, y: window.innerHeight / 4 + openWindows.length * 20 }, size: { width: 600, height: 450}}]);
    }
  }

  const findHighestZIndex = () => {
    console.log("zindex",openWindows.reduce((acc, windowObj) => windowObj.zIndex > acc ? windowObj.zIndex : acc, 0));
    return (openWindows.reduce((acc, windowObj) => windowObj.zIndex > acc ? windowObj.zIndex : acc, 0));
  }

  const setSize = (name, size) => {
    const updatedWindows = openWindows.map(windowObj => {
      if (windowObj.name === name) {
        return { ...windowObj, size: size };
      } else {
        return windowObj;
      }
    });
    setOpenWindows(updatedWindows);
  }
  const setPosition = (name, position) => {
    const updatedWindows = openWindows.map(windowObj => {
      if (windowObj.name === name) {
        return { ...windowObj, position: position };
      } else {
        return windowObj;
      }
    });
    setOpenWindows(updatedWindows);
  }

  const closeWindow = (name) => {
    gsap.fromTo("#" + name, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, {
      clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', ease: 'power4.out', duration: 0.2, onComplete: () => {
        const updatedWindows = openWindows.filter(windowObj => windowObj.name !== name);
        setOpenWindows(updatedWindows)
      }
    });
  };

  const bringWindowToTop = (name) => {
    //if highest zIndex is already the highest, return
    if (openWindows.find(windowObj => windowObj.name === name).zIndex === findHighestZIndex()) return;
    console.log('bringWindowToTop', name);
    const updatedWindows = openWindows.map(windowObj => {
      if (windowObj.name === name) {
        return { ...windowObj, zIndex: findHighestZIndex() + 1 };
      } else {
        return windowObj;
      }
    });
    setOpenWindows(updatedWindows);  
  };

  return (
    <>
      <section id="limites" className='w-full h-full inset-0 fixed pl-16 pt-12 pr-5 pb-5'></section>
        <section className="fixed flex flex-row flex-wrap gap-7 p-16 inset-0 w-full h-full" id="pages">
          {folderStructure.bureau.map(item => (
            <button key={item.name} onClick={() => setNewWindow(item.name, item.type, item.content)} className="flex flex-col max-h-32">
              <div className="w-20 h-full min-h-16 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(${item.icon})` }}>
              </div>
              <p className='text-center uppercase font-urbanist w-full tracking-widest drop-shadow-txt'>{item.name}</p>
            </button>
          ))}
        </section >

        <section className='top-0 left-0 w-0 h-0 fixed' id="windows-container user-select-none">
          {openWindows.map((props, index) => (
            <Window {...props} key={index} bringWindowToTop={bringWindowToTop} closeWindow={closeWindow} setNewWindow={setNewWindow} setPosition={setPosition} setSize={setSize} />
          ))}
        </section>
    </>
  );
};

export default Desktop;
