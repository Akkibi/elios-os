const Terminal = () => {

    return (
        <div className="w-full h-screen flex flex-col justify-start  ">

            <div className=" w-2/3 flex flex-col sticky bottom-0 justify-start  mt-20 ml-20">
                <h1 className="  text-4xl mb-4">Terminal</h1>
                <p>Welcome to the terminal ! <br /> You are currently connected to EU8. Explore, create, and manage your projects with care.</p>


                <div className="flex" >
                    <p>@EliOsTem </p>
                    <input className="ml-4 h-1/2 w-full text-black p-3 focus:outline-none focus:border-pink-500 focus:ring-pink-500 focus:ring-4 " type="text" name="" id="" />
                </div>
            </div>

        </div>
    );
};

export default Terminal;