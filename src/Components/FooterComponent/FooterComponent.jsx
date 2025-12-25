
export default function FooterComponent() {
    return (
        <div className="footer-sec h-8 bg-[#543310] flex flex-nowrap justify-center items-center">

            {/* <div className="socialMediaBox w-1/3 h-full flex flex-nowrap justify-center items-center bg-[#AF8F6F] rounded-lg">
                <a href="#" className="w-2/3 h-2/3 font-bold text-center text-[#00660e] cursor-pointer hover:animate-pulse">
                    ✆ Whatsapp ✆
                </a>
                <a href="#" className="w-2/3 h-2/3 font-bold text-center text-[#00597c] cursor-pointer hover:animate-pulse">
                    ➤ Telegram ➤
                </a>
                <a href="#" className="w-2/3 h-2/3 font-bold text-center text-[#8b0074] cursor-pointer hover:animate-pulse">
                    🅾 Instagram 🅾
                </a>
            </div> */}
            {/* <div className="socialMediaBox w-1/3 h-full flex flex-nowrap justify-center items-center">
            </div> */}
            
            <div className="socialMediaBox h-full w-10/12 flex flex-nowrap justify-evenly items-center bg-[#AF8F6F] rounded-lg text-[#543310] font-bold">
                <div className="socialMediaBox h-full w-1/2 flex flex-nowrap justify-evenly items-center bg-[#AF8F6F] rounded-lg">
                    <a href="#" className=" font-bold text-center text-[#8b0074] cursor-pointer hover:animate-pulse">
                     اینستاگرام
                    </a>
                    |
                    <a href="#" className=" font-bold text-center text-[#00538a] cursor-pointer hover:animate-pulse">
                      تلگرام 
                    </a>
                    |
                    <a href="#" className=" font-bold text-center text-[#085201] cursor-pointer hover:animate-pulse">
                     واتساپ
                    </a>
                </div>
                    <div className="socialMediaBox h-full flex flex-nowrap justify-center items-center bg-[#AF8F6F] rounded-lg text-[#000000] font-bold">
                        Tel: 021-12345678 | +9891212345678
                </div>
            </div>
        </div>
    )
}