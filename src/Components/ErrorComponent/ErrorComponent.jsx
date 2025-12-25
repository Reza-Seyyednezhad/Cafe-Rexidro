import Header from "../HeaderComponent/Header";
import coffImage from "../../assets/images/coff.png";
import FooterComponent from "../FooterComponent/FooterComponent";
export default function ErrorComponent() {
    return (
        <div className="errorComponent relative min-h-[100vh] flex-col items-center justify-center w-screen p-5 backdrop-brightness-40 grow">
            <Header />
            <div className="errorBoxParent w-screen flex flex-col justify-center items-start grow backdrop-blur-lg">
                <div className="errorBox  w-1/2 h-fit flex flex-col justify-center items-center backdrop-brightness-50 rounded-lg backdrop-blur-lg">
                    <img src={coffImage} className="size-28" alt="" />
                    <p className="text-9xl"> 404 </p>
                    <p className="text-3xl">صفحه مورد نظر یافت نشد</p>                
                </div>
                <FooterComponent />
            </div>            
        </div>
    )
}