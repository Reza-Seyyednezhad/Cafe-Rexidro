import SVGComponent from "./RexidroSVGFile"
import { NavLink } from "react-router";
export default function Logo(){
    return(
        <div className="logo w-1/4 flex flex-col justify-center items-center cursor-pointer">
            {/* <img src={logopic} className="size-32 hover:scale-125 transition-all 
            transition-300 ease-in-out" alt="" /> */}
            {/* <NavLink to="/" end>
                <SVGComponent className="size-20 hover:scale-125 transition-all
                transition-300 ease-in-out" />
            </NavLink> */}
            <NavLink to="/" end>
                <h1 className="text-[#F8F4E1] font-extrabold text-xl hover:scale-125 transition-all 
                transition-300 ease-in-out"> رکسیدرو | REXIDRO </h1>
            </NavLink>
            
        </div>
    )
}