import { NavLink } from "react-router";
export default function ContactUs(){
    return(
        <div className="contact-us w-1/4 flex justify-center items-center">
            <button className="contact-us-btn 
            flex justify-center items-center
            rounded-2xl bg-transparent text-[#F8F4E1] cursor-pointer 
            font-semibold hover:bg-[#F8F4E1] hover:text-[#543310] transition-all 
            transition-300 ease-in-out border-3 border-[#F8F4E1]">
                <NavLink to="/account" end>ورود | ثبت نام </NavLink>
            </button>
        </div>
    )
}

// ورود | ثبت نام 