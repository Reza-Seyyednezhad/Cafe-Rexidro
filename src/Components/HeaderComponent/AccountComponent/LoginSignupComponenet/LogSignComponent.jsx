import { useState } from "react";
import Header from "../../Header";
import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";
import FooterComponent from "../../../FooterComponent/FooterComponent";

export default function LogSignComponent(){
    const [selectAccountType, setSelectAccountType] = useState("Login")
    const handleRadioChange = (event) => {
        setSelectAccountType(event.target.value);
      };
    
    return (
        <div className="min-h-[100vh] logSignBox flex flex-col justify-start items-center w-screen backdrop-brightness-40 grow">
            <Header />
            <div className="split w-fit flex flex-col items-center h-fit rounded-xl backdrop-brightness-50 backdrop-blur-md border-2 border-[#74512D]">
                <div className="logSignNav flex w-100 justify-between items-center list-image-none rounded-xl">    
                    <div className="flex items-center justify-center">
                        <input className="hidden" type="radio" name="Account_radio" id="loginRadio" value="Login" checked={selectAccountType === 'Login'} onChange={handleRadioChange} />
                        <label className="rounded-xl text-[#F8F4E1]" htmlFor="loginRadio">ورود به حساب کاربری</label>
                    </div>
                    <div className="flex items-center justify-center">
                        <input className="hidden" type="radio" name="Account_radio" id="SignRadio" value="Signup" checked={selectAccountType === 'Signup'} onChange={handleRadioChange} />
                        <label className="rounded-xl text-[#F8F4E1]" htmlFor="SignRadio">ایجاد حساب کاربری</label>
                    </div>
                </div>
                <div>
                    {selectAccountType === 'Login' && <LoginComponent />}
                    {selectAccountType === 'Signup' && <SignupComponent />}
                </div>
            </div>
            <FooterComponent />
            {/* <LoginComponent /> */}
        </div>
    )
}