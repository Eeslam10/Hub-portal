import "./login.css";
import image from "../../assets/images/plane.png";
import imageOne from "../../assets/images/palace.png";
import imageTwo from "../../assets/images/group.png";
import { LuMail } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import { BsFacebook } from "react-icons/Bs";
import { DiApple } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return ( 
        <>
            <div className="container">
                <aside className="display">
                    <h1>Travelista Tours</h1>
                    <p>Travel is the only purchase that enriches you in ways beyond material wealth</p>
                </aside>

                <aside className="form">
                    <form>
                    <div className="plane">
                        <img src={image}/>
                    </div>
                    <div className="details">
                        <h2>Welcome</h2>
                        <p>Login with Email</p>
                        <div class="input-container" >
                            
                            <input type="text" placeholder="enter your mail"/>
                         
                            {/* <div className="icon">
                            <LuMail size={27}/>
                            </div> */}
                        
                            <input type="password" placeholder="enter password"/>
                      
                            {/* <div className="icon">
                            <FiLock size={27}/>
                            </div> */}
                        </div>
                        
                        <div className="login">
                            <a href="#">Forgot your password?</a>
                            <button>LOGIN</button>

                            <div className="or">
                                <div></div>
                                <p>OR</p>
                                <div></div>
                            </div>
                        <div className="logos">
                            <div className="logo">
                                <FcGoogle size={35}/>
                            </div>
                            <div className="logo">
                                <BsFacebook color="#009EE2" size={35}/>
                            </div>
                            <div className="logo">
                                <DiApple  size={35}/>
                            </div>
                        </div>
                        <p>Don't have account?<a href="#">Register Now</a></p>
                        </div>

                        <footer>
                            <img src={imageOne}/>
                            <img src={imageTwo}/>
                        </footer>
                        

                    </div>
                    </form>
                </aside>
            </div>
        </>
     );
}
 
export default Login;