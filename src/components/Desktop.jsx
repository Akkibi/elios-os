// Desktop.jsx
import React, { useState } from 'react';
import folderStructure from '../data/folderStructure.json';
import Draggable from 'react-draggable';
import { gsap } from "gsap";

import Terminal from './Terminal';
import Calculator from './Calculator';
import Notepad from './Notepad';
import Contacts from './Contacts';

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState([]);
  const [windowSizes, setWindowSizes] = useState({});

  const setNewWindow = (name, type, content) => {
    if (!openWindows.find(windowObj => windowObj.name === name)) {
      setOpenWindows([...openWindows, { name: name, type: type, content: content }])
    }
  }
  const closeWindow = (name) => {
    gsap.fromTo("#" + name, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, {
      clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', ease: 'power4.out', duration: 0.2, onComplete: () => {
        const updatedWindows = openWindows.filter(windowObj => windowObj.name !== name);
        setOpenWindows(updatedWindows)
      }
    });
  };
  // const closeWindow = (name) => {
  //   }

  const renderAppContent = (appName) => {
    switch (appName) {
      case 'terminal':
        return <Terminal />;
      case 'calculator':
        return <Calculator />;
      case 'notepad':
        return <Notepad />;
      case 'contacts':
        return <Contacts />;
      default:
        return null;
    }
  };

  const bringWindowToTop = (name) => {
    if (openWindows[openWindows.length-1].name !== name) {
      const updatedWindows = openWindows.filter(windowObj => windowObj.name !== name);
      setOpenWindows([...updatedWindows, openWindows.find(windowObj => windowObj.name === name)]);
    }
  };

  const handleResize = (name, e) => {
    console.log(name, e)
    setWindowSizes({
      ...windowSizes,
      [name]: {
        width: (windowSizes[name]?.width || 0) + e.deltaX,
        height: (windowSizes[name]?.height || 0) + e.deltaY,
      },
    });
  };

  return (
    <>
      <section className="fixed flex flex-row flex-wrap gap-7 p-16 inset-0 w-full h-full">
        {folderStructure.bureau.map(item => (
          <button key={item.name} onClick={() => setNewWindow(item.name, item.type, item.content)} className="flex flex-col max-h-32">
            <div className="w-20 h-full min-h-16 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(${item.icon})` }}>
            </div>
            <p className='text-center uppercase font-urbanist w-full tracking-[.1em] drop-shadow-txt'>{item.name}</p>
          </button>
        ))}
      </section >

      <section className='top-0 left-0 w-0 h-0 fixed' id="windows-container">
        {console.log(openWindows)}
        {openWindows.map(({ name, type, content }) => (
          <Draggable handle=".handle"
            onStart={() => { bringWindowToTop(name) }}
            defaultPosition={{ x: 150, y: 350 }}
            scale={1}
            bounds="body"
            key={name}
          >
            <div className="absolute z-10 min-w-96 min-h-96 flex flex-wrap flex-col gap-3 p-2 bg-[rgba(0,0,0,0.8)]
          backdrop-blur-lg translate-x-1/2 translate-y-1/2 rounded-md bg-[#070A11] border border-solid  border-blue rounded-br-lg"
              style={{
                width: windowSizes[name]?.width || 'auto',
                height: windowSizes[name]?.height || 'auto',
              }}
              id={name}
            >
              <div className='absolute top-0 right-0 flex m-1 justify-center items-center flex-row'>
                <span className=' cursor-pointer select-none  text-xl h-6 w-6 rounded-full  text-center leading-6 text-[#B7FFF2] ' > ▢</span>
                <span className=' cursor-pointer select-none text-xl h-6 w-6 rounded-full  text-center leading-6 text-red ' onClick={() => closeWindow(name, this)}> X</span>
              </div>
              {/* <div className="h-8 w-8 bg-white rounded-full absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-black text-center leading-8" draggable="true" onDrag={(e) => handleResize(name,e)}>↘</div> */}
              <div>
                <div className=" absolute bg-[#B7FFF2]  bg-opacity-20 w-2 h-full  border-r  border-r-solid  border-[#B7FFF2] border-opacity-20 left-0 top-0 rounded-l-sm"></div>

              </div>
              <div className='handle h-fit flex justify-between w-full  flex-col text-white rounded-md px-5  text-2xl align-middle items-center' key={name}
              >
                <div className='flex justify-between w-full flex-row  font-extrabold uppercase font-urbanist'> <span className='ml-2 tracking-[.2em] drop-shadow-txt'>{name}</span>  </div>

                {/* <span className='text-center leading-6 opacity-50 rotate-90'>|||</span> */}

                <div className='mt-5 w-full ml-2 h-0 border-b  border-b-solid  border-[#B7FFF2] border-opacity-20  '></div>
              </div>
              <div className="w-full flex gap-3 p-5 relative flex-1  rounded-md h-full overflow-hidden"
                onClick={() => { bringWindowToTop(name) }}
              >
                {type === 'folder' && content.map(item => (
                  <button key={item.name} onClick={() => setOpenWindows([...openWindows, { name: item.name, type: item.type, content: item.content }])} className="flex flex-col max-h-32 gap-2 justify-center items-center">
                    <div className="w-20 h-full min-h-16 bg-center bg-contain bg-no-repeat px-2" style={{ backgroundImage: `url(${item.icon})` }}>
                    </div>
                    <p className='text-center w-full uppercase font-urbanist tracking-[.1em] drop-shadow-txt'>{item.name}</p>
                  </button>
                ))}
                {type === 'app' && renderAppContent(content[0])}
                {type === 'image' && <img className="w-full h-full" src={content[0]} alt={name} />}
                {type === 'document' && <div className="w-full h-full">
                  <h1>{content[0]}</h1>
                  <p>{content[1]}</p>
                  <br />
                  <p>{content[2]}</p>
                  <br />
                  <p>{content[3]}</p>
                </div>
                }
              </div>
            </div>
          </Draggable>
        ))}
      </section>
    </>
  );
};

export default Desktop;
