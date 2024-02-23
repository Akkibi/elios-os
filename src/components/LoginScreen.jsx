import  { useState } from 'react';
import PropTypes from 'prop-types';

const LoginScreen = ({ onLogin }) => {

        const [password, setPassword] = useState('');
      
        const handleKeyDown = (e) => {
          if (e.key === 'Enter') {
            handleSubmit(e);
          }
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          onLogin(password.toLowerCase());
        };
  return (
    <div className='w-full h-full flex top-0 justify-center items-center fixed'>
        <div className='bg-transparent relative h-[72vh] w-[72vh] flex justify-center items-center'>
        <img className='animate-spin-slow-3 absolute w-full h-full' src="../img/login-bg-ext.png" alt="" />
        
        <div  className="login-card relative  h-[65vh] w-[65vh] flex justify-center flex-col gap-4 items-center"> 
        <img className='animate-spin-slow-4 absolute w-full h-full' src="../img/login-bg-int.png" alt="" />
            <img className='w-[18vw] mb-[-2rem]'  src="img/logo-elios.png" alt="Elios" />
            <form onSubmit={handleSubmit} className="relative px-[4rem] flex justify-start items-center w-[23vw] h-[10vh]">
                <input className="bg-transparent z-10 drop-shadow-xl uppercase  w-full placeholder:text-blue text-blue text-xl focus:outline-none mt-[0.8rem]" type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyDown} 
                    placeholder="Mot de passe"/> 
                <img className="absolute w-full h-full z-0 top-0 left-0" src="img/input-mdp.svg" alt="" />
            </form>
      </div>
      </div>
     
    </div>
  );
}

LoginScreen.propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

export default LoginScreen;