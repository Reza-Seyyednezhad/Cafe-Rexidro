import Header from "../HeaderComponent/Header";
import FooterComponent from "../FooterComponent/FooterComponent";
import { NavLink } from "react-router";

export default function Body(){
    return(
        <main className="min-h-[100vh] flex-col items-center justify-center w-screen p-5 backdrop-brightness-40 grow">
            <Header /> 
            <div className="main w-screen lg:w-1/2 flex flex-col justify-center items-center lg:items-start leading-6">
                <h2 className="text-[#F8F4E1] text-2xl flex font-bold">
                ☕ لحظه‌ای برای لذت بردن از قهوه
                </h2>
                {/* <div className="welcomeBox flex flex-col justify-center items-center text-[#F8F4E1] text-3xl">
                    <h1 className="text-3xl">
                        به کافه
                        <span className="logo-name text-5xl text-[#AF8F6F]"> رکسیدرو </span>
                        خوش آمدید.
                    </h1>
                    
                </div> */}
                <p className="text-[#F8F4E1] text-xl flex align leading-12 text-center lg:text-justify">
                در هر جرعه از قهوه، داستانی نهفته است؛ 
                داستانی از دانه‌هایی که در دل طبیعت رشد کرده‌اند،
                با دستانی مهربان جمع‌آوری شده‌اند و در نهایت به فنجان شما رسیده‌اند.
                اینجا، در کافه رکسیدرو، ما اعتقاد داریم که قهوه فقط یک نوشیدنی نیست،
                بلکه تجربه‌ای است از آرامش، گرما و لذت. چه به دنبال یک شروع پرانرژی باشید،
                چه لحظه‌ای از سکوت و تأمل، یک فنجان قهوه همیشه همراه شماست.
                </p>
                <h2 className="text-[#F8F4E1] font-extrabold text-xl flex items-end leading-12 text-justify">✨ جرعه‌ای بنوشید، لبخندی بزنید و از لحظه لذت ببرید. ✨</h2>
                <button className="order-btn flex justify-center items-center text-2xl 
            rounded-2xl bg-transparent text-[#F8F4E1] cursor-pointer 
            font-semibold hover:bg-[#F8F4E1] hover:text-[#543310] transition-all 
            transition-300 ease-in-out border-3 border-[#F8F4E1]">
                <NavLink to="/services" end>سفارش قهوه</NavLink>
            </button>
            </div>
            <FooterComponent />
        </main>
    )
}