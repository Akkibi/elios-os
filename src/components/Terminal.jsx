import React, { useRef, useEffect, useState } from 'react';

const Terminal = () => {
    const inputRef = useRef(null);
    const terminalRef = useRef(null);
    const [entries, setEntries] = useState([]);
    const [input , setInput] = useState('');

    useEffect(() => {
        const handleKeyPress = (event) => {
            setInput(inputRef.current.value)
            if (event.key === 'Enter') {
                console.log(entries, inputRef.current.value);
                setEntries([...entries, input]);
                setInput("");
                inputRef.current.value = "";
                terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
            }
        }
        inputRef.current.focus();
        inputRef.current.addEventListener('keyup', handleKeyPress);
        return () => {
            if (inputRef.current) {
            inputRef.current.removeEventListener('keyup', handleKeyPress);
        }
        }
    });

    const ascii = [` ___  _     ___    ___   ___       ___   ___  `,
        `| __|| |   |_ _|  / _ \\ / __|     / _ \\ / __|  `,
        `| _| | |__  | |  | (_) |\\__ \\    | (_) |\\__ \\ `,
        `|___||____||___|  \\___/ |___/     \\___/ |___/ `];

    return (
        <div className="w-full h-full overflow-y-scroll font-mono" ref={terminalRef}>
            <div className="whitespace-pre leading-4">
                <p>{ascii[0]}</p>
                <p>{ascii[1]}</p>
                <p>{ascii[2]}</p>
                <p>{ascii[3]}</p>
                <p>{ascii[4]}</p>
            </div>
            <p className="leading-7">OS: ELIOS OS v15.5.3 Enterprise beta</p>
            {entries.map((entry, index) => ( 
                entry === '' ? 
                
                <p key={index} className="leading-7">C:/user/schneider/desktop:~$ {entry}</p>
                    :                  
                <div  key={index}>
                    <p className="leading-7">C:/user/schneider/desktop:~$ {entry}</p>
                    <p className='text-red'>elios-cli: {entry}: command not found</p>
                </div>
            ))}
            <div className="flex leading-7">
                <p className="pr-2 leading-7">C:/user/schneider/desktop:~$</p>
                <input ref={inputRef} type="text" className="leading-7 p-0 m-0 bg-transparent text-black w-full outline-none" />
            </div>
        </div>
    );
}

export default Terminal;
