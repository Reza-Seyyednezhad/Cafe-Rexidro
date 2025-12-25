import { NavLink } from "react-router";

export default function MainMenu(){
    return(
        <div className="main-menu w-2/4">
            <ul className="flex justify-evenly items-center list-image-none text-lg font-bold text-[#F8F4E1]">
                <li className="cursor-pointer hover:border-b-2">
                    <NavLink to="/">
                        کافه ما
                    </NavLink>
                </li>
                <li className="cursor-pointer hover:border-b-2 ">
                    <NavLink to="/services" end>
                        سفارش قهوه
                    </NavLink>
                </li>
                <li className="cursor-pointer hover:border-b-2">
                    <NavLink to="/about-us" end>
                        درباره ما
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}