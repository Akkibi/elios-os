import Draggable from 'react-draggable';
import { useState } from 'react';
import Terminal from './Terminal';



const Window = ({name, type, content, zIndex, bringWindowToTop, closeWindow, setOpenWindows, openWindows}) => {

const [width, setWidth] = useState(450);
const [height, setHeight] = useState(350);
const [position, setPosition] = useState({ x: window.innerWidth / 2 - 192, y: window.innerHeight / 2 - 192 });

const renderAppContent = (appName) => {
    switch (appName) {
        case 'terminal':
        return <Terminal />;
        default:
        return null;
    }
    };
    

    const handleResize = (name, e) => {
      let prevX = e.clientX;
      let prevY = e.clientY;
    
      const mousemove = (e) => {
        const diffX = e.clientX - prevX;
        const diffY = e.clientY - prevY;
    
        // Ajustez la largeur et la hauteur en fonction de la direction du mouvement de la souris
        setWidth(prevWidth => prevWidth + diffX);
        setHeight(prevHeight => prevHeight + diffY);
    
        // Mettez à jour les positions précédentes de la souris
        prevX = e.clientX;
        prevY = e.clientY;
      };
    
      const mouseup = () => {
        // Supprimez les écouteurs d'événements lorsque l'utilisateur relâche le bouton de la souris
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseup);
      };
    
      // Ajoutez l'écouteur d'événement mousemove
      document.addEventListener('mousemove', mousemove);
    
      // Ajoutez l'écouteur d'événement mouseup
      document.addEventListener('mouseup', mouseup);
    };
    
    



 return (
    <Draggable 
    onStart={() =>  bringWindowToTop(name) }
    defaultPosition={{ x: position.x, y: position.y }}
    scale={1}
    bounds="#limites"
    key={name}
    onStop={(e) => {
        console.log("onStop", e)
        setPosition({ 
          x: e.x , y: e.y
         });
    }}
  >
    <div className={`absolute z-[${zIndex}] min-w-48 min-h-48 flex flex-wrap flex-col gap-3 p-2 bg-[rgba(0,0,0,0.7)] backdrop-blur-xl translate-x-1/2 translate-y-1/2 rounded-md bg-[#070A11] border border-solid  border-blue rounded-br-lg`}
      style={{ width, height }}
      id={name}
      onClick={() => { bringWindowToTop(name) }}
    >
      <div className='absolute bottom-0 right-0 flex m-1 justify-center items-center flex-row bg-midnight border border-solid border-blue rounded-full w-10 h-10 translate-x-1/2 translate-y-1/2 user-select-none cursor-se-resize' onMouseDown={(e) => handleResize(name, e)}>↘</div>
      <div className='absolute top-0 right-0 flex m-1 justify-center items-center flex-row'>
        {/* <span className=' cursor-pointer select-none  text-xl h-6 w-6 rounded-full  text-center leading-6 text-[#B7FFF2]  'onClick={() => fullWindow(name, this)} > ▢</span> */}
        <span className=' cursor-pointer select-none text-xl h-6 w-6 rounded-full  text-center leading-6 text-red ' onClick={() => closeWindow(name, this)}> X</span>
      </div>
      <div>
        <div className=" absolute bg-[#B7FFF2]  bg-opacity-20 w-2 h-full  border-r  border-r-solid  border-[#B7FFF2] border-opacity-20 left-0 top-0 rounded-l-sm"></div>

      </div>
      <div className='handle h-fit flex justify-between w-full  flex-col text-white rounded-md px-5  text-2xl align-middle items-center' key={name}
      >
        <div className='flex justify-between w-full flex-row  font-extrabold uppercase font-urbanist'> <span className='ml-2 tracking-[.2em] drop-shadow-txt'>{name}</span>  </div>

        {/* <span className='text-center leading-6 opacity-50 rotate-90'>|||</span> */}

        <div className='mt-5 w-full ml-2 h-0 border-b  border-b-solid  border-[#B7FFF2] border-opacity-20  '></div>
      </div>
      <div className="w-full flex gap-3 px-5 pt-2 relative flex-1 flex-wrap rounded-md h-full overflow-hidden"
      >
        {type === 'folder' && content.map(item => (
          <button key={item.name} onClick={() => setOpenWindows([...openWindows, { name: item.name, type: item.type, content: item.content }])} className="flex flex-col max-h-32 min-w-32 gap-2 justify-center items-center">
            <div className="w-20 h-full min-h-16 bg-center bg-contain bg-no-repeat px-2" style={{ backgroundImage: `url(${item.icon})` }}>
            </div>
            <p className='text-center w-full uppercase font-urbanist tracking-[.1em] drop-shadow-txt'>{item.name}</p>
          </button>
        ))}
        {type === 'app' && renderAppContent(content[0])}
        {type === 'image' && <img className="w-full h-fit" src={content[0]} alt={name} />}
        {type === 'video' && <video className="w-full h-fit rounded-xl border-4  border-solid  border-[#B7FFF2] border-opacity-20 " src={content[0]} alt={name} controls autoPlay />}
        {type === 'document' && <div className="w-full h-fit">
          <h1>{content[0]}</h1>
          <p>{content[1]}</p><br />
          <p>{content[2]}</p><br />
          <p>{content[3]}</p>
        </div>
        }
      </div>
    </div>
  </Draggable>
 )
}


export default Window;
