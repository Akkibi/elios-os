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
    if (!openWindows.find(windowObj => windowObj.name === name) ) {
      setOpenWindows([...openWindows, { name: name, type: type, content: content}])
    }
  }
  const closeWindow = (name) => {
    gsap.fromTo("#"+name, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', ease: 'power4.out', duration: 0.2, onComplete: () => {
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
    const updatedWindows = openWindows.filter(windowObj => windowObj.name !== name);
    setOpenWindows([...updatedWindows, openWindows.find(windowObj => windowObj.name === name)]);
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
      <section className="fixed flex flex-col flex-wrap gap-3 p-5 inset-0 w-full h-full">
        {folderStructure.bureau.map(item => (
          <button key={item.name} onClick={() => setNewWindow(item.name, item.type, item.content)} className="flex flex-col max-h-32 max-w-32">
            <div className="w-20 h-20 bg-black rounded-md">
              {item.type === 'folder' ? 'dossier' : item.type === 'app' ? 'app' : ''}
            </div>
            <p className='text-center w-full'>{item.name}</p>
          </button>
        ))}
      </section>

      <section className='top-0 left-0 w-0 h-0 fixed' id="windows-container">
        {console.log(openWindows)}
        {openWindows.map(({ name, type, content }) => (
        <Draggable handle=".handle"
        onStart={() => {bringWindowToTop(name)}}
        defaultPosition={{x: 150, y: 350}}
        scale={1}
        bounds="body"
        key={name}
        >    
          <div className="absolute z-10 min-w-96 min-h-96 flex flex-wrap flex-col gap-3 p-2 bg-[rgba(0,0,0,0.8)]
          backdrop-blur-lg translate-x-1/2 translate-y-1/2 rounded-md"
          style={{
            width: windowSizes[name]?.width || 'auto',
            height: windowSizes[name]?.height || 'auto',
          }}
          id={name}
          >
            {/* <div className="h-8 w-8 bg-white rounded-full absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-black text-center leading-8" draggable="true" onDrag={(e) => handleResize(name,e)}>↘</div> */}
            <div className='handle h-fit flex justify-between w-full bg-black text-white border-[#646cff] border-solid border-2 rounded-md px-5 py-2 text-2xl align-middle items-center' key={name}
            >
              <span>{name}</span>
              <span className='text-center leading-6 opacity-50 rotate-90'>|||</span>
              <span className=' select-none text-sm h-6 w-6 rounded-full bg-red-500 text-center leading-6 text-black font-black' onClick={() => closeWindow(name, this)}>X</span>
            </div>
        <div className="w-full flex gap-3 p-5 relative flex-1 border-[#646cff] border-2 rounded-md h-full overflow-hidden"
        onClick={() => {bringWindowToTop(name)}}
        >
            { type === 'folder' && content.map(item => (
              <button key={item.name} onClick={() => setOpenWindows([...openWindows, { name: item.name, type: item.type, content: item.content}])} className="flex flex-col max-h-32">
                <div className="w-20 h-20 bg-black rounded-md">
                  {item.type === 'folder' ? 'dossier' : item.type === 'app' ? 'app' : ''}
                </div>
                <p className='text-center w-full'>{item.name}</p>
              </button>
            ))}
            { type === 'app' && renderAppContent(content[0])}
            { type === 'image' && <img className="w-full h-full" src={content[0]} alt={name} />}
            { type === 'document' && <div className="w-full h-full">
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
