import Draggable from 'react-draggable';
import Terminal from './Terminal';
import Document from './Document';



const Window = ({name, type, content, position, size, zIndex, bringWindowToTop, closeWindow, setNewWindow, setPosition, setSize}) => {

const renderAppContent = () => {
    switch (name) {
        case 'Terminal':
        return <Terminal />;
        case 'document.pdf':
        return <Document content={content} />;
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
        setSize(name, { width: document.getElementById(name).getBoundingClientRect().width + diffX, height: document.getElementById(name).getBoundingClientRect().height + diffY });
    
        // Mettez à jour les positions précédentes de la souris
        prevX = e.clientX;
        prevY = e.clientY;
      };
    
      const mouseup = () => {
        // Remove event listeners when mouse is up
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseup);
      };
    
      // add mousemove and mouseup event listener
      document.addEventListener('mousemove', mousemove);
      document.addEventListener('mouseup', mouseup);
    };
 return (
    <Draggable 
    onStart={() =>  bringWindowToTop(name) }
    defaultPosition={{ x: position.x, y: position.y }}
    scale={1}
    bounds="#limites"
    handle='.handle'
    key={name}
    onStop={(e) => {
        setPosition(name, { x: e.x, y: e.y });
    }}
  >
    <div className={`absolute min-w-48 min-h-48 flex flex-wrap flex-col gap-3 p-2 bg-[rgba(0,0,0,0.7)] backdrop-blur-xl translate-x-1/2 translate-y-1/2 rounded-md bg-[#070A11] border border-solid  border-blue rounded-br-lg`}
      style={{ width: size.width, height: size.height, zIndex: zIndex}}
      id={name}
      onClick={() => { bringWindowToTop(name) }}
    >
      <div className='absolute bottom-[-1px] right-[-1px] m-0 w-6 h-6 rounded-ee ' style={{background: "linear-gradient(-45deg, #fff 35%, #000000 35%, #000000 50%,rgb(183 255 242) 50%,rgb(183 255 242) 53%, #00000000 53% )"}}>
      </div>
      <div className='absolute bottom-0 right-0 m-1 bg-midnight border border-solid border-blue rounded-full w-10 h-10 translate-x-1/2 translate-y-1/2 user-select-none cursor-se-resize opacity-0' onMouseDown={(e) => handleResize(name, e)}></div>
      <div className='absolute top-0 right-0 flex m-1 justify-center items-center flex-row'>
        {/* <span className=' cursor-pointer select-none  text-xl h-6 w-6 rounded-full  text-center leading-6 text-[#B7FFF2]  'onClick={() => fullWindow(name, this)} > ▢</span> */}
        <span className=' cursor-pointer select-none text-2xl h-6 w-6 rounded-full  text-center leading-6 text-red ' onClick={() => closeWindow(name, this)}> <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></span>
      </div>
      <div>
        <div className=" absolute bg-[#B7FFF2]  bg-opacity-20 w-2 h-full  border-r  border-r-solid  border-[#B7FFF2] border-opacity-20 left-0 top-0 rounded-l-sm"></div>

      </div>
      <div className='handle select-none h-fit flex justify-between w-full  flex-col text-white rounded-md px-5  text-2xl align-middle items-center' key={name}
      >
        <div className='flex justify-between w-full flex-row  font-extrabold uppercase font-urbanist'> <h2 className='ml-2 tracking-[.2em] drop-shadow-txt'>{name}</h2></div>
        <div className='mt-5 w-full ml-2 h-0 border-b  border-b-solid  border-[#B7FFF2] border-opacity-20  '></div>
      </div>
      <div className="w-full flex gap-3 px-5 pt-2 relative flex-1 flex-wrap rounded-md h-full overflow-hidden"
      >
        {type === 'folder' && content.map(item => (
          <button key={item.name} onClick={() => setNewWindow(item.name, item.type, item.content)}
             className="flex flex-col max-h-32 min-w-32 gap-2 justify-center items-center">
            <div className="w-20 h-full min-h-16 bg-center bg-contain bg-no-repeat px-2" style={{ backgroundImage: `url(${item.icon})` }}>
            </div>
            <p className='text-center w-full uppercase font-urbanist tracking-[.1em] drop-shadow-txt select-none'>{item.name}</p>
          </button>
        ))}
        {type === 'app' && renderAppContent()}
        {type === 'image' && <img className="w-full h-fit" src={content[0]} alt={name} />}
        {type === 'video' && <video className="w-full h-fit rounded-xl border-4  border-solid  border-[#B7FFF2] border-opacity-20 " src={content[0]} alt={name} controls autoPlay />}
        </div>
    </div>
  </Draggable>
 )
}


export default Window;
