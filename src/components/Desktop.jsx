// Desktop.jsx
import React, { useState } from 'react';
import folderStructure from '../data/folderStructure.json';
import { gsap } from "gsap";
import Window from './Window';

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState([]);

  const setNewWindow = (name, type, content) => {
    if (!openWindows.find(windowObj => windowObj.name === name)) {
      setOpenWindows([...openWindows, {name: name, type: type, zIndex: openWindows.length, content: content}]);
    }
  }

  const closeWindow = (name) => {
    gsap.fromTo("#" + name, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, {
      clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', ease: 'power4.out', duration: 0.2, onComplete: () => {
        const updatedWindows = openWindows.filter(windowObj => windowObj.name !== name);
        setOpenWindows(updatedWindows);
      }
    });
  };

  const bringWindowToTop = (name) => {
    console.log(openWindows.filter(windowObj => windowObj.name === name)[0].zIndex === openWindows.length, openWindows.filter(windowObj => windowObj.name === name)[0].zIndex);
    if(openWindows.filter(windowObj => windowObj.name === name).zIndex === openWindows.length) return;
    // openWindows.map(windowObj => {
    //   if (windowObj.name === name) {
    //     windowObj.zIndex = openWindows.length;
    //   } else {
    //     windowObj.zIndex --;
    //   }
    // })
    // if (openWindows[openWindows.length-1].name !== name) {
    //   const updatedWindows = openWindows.filter(windowObj => windowObj.name !== name);
    //   setOpenWindows([...updatedWindows, openWindows.find(windowObj => windowObj.name === name)]);
    // }
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
            <Window {...props} key={index} bringWindowToTop={bringWindowToTop} closeWindow={closeWindow} setNewWindow={setNewWindow} openWindows={openWindows} setOpenWindows={setOpenWindows} />
          ))}
        </section>
    </>
  );
};

export default Desktop;
