import { useEffect, useState } from "react";

const Notepad = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        const data = localStorage.getItem("notepad");
        if (data) {
            setData(data);
        }
    },[]);
    const save = (data) => {
        localStorage.setItem("notepad", data);
    }

    return (
        <>
        <div className="h-full w-full flex flex-col">
            <textarea width="100%" height="100%" placeholder="Notepad" className="text-white resize-none min-w-full min-h-full bg-transparent" onChange={(e) => setData(e.target.value)} value={data} />
            <button className="text-white p-2 w-full border-white border border-solid" onClick={() => save(data)}>Save</button>
        </div>
        </>
    );
}

export default Notepad