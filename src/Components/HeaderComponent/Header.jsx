import ContactUs from "./AccountComponent/Account";
import Logo from "./LogoComponent/Logo";
import MainMenu from "./MainMenuComponent/MainMenu";


export default function Header(){
    return(
        <header className="header flex flex-row items-center justify-evenly h-1/12 w-screen backdrop-brightness-40">
            <Logo />
            <MainMenu />
            <ContactUs />
        </header>
    )
}