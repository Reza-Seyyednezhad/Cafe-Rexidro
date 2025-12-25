export default function LoginComponent(){
    return (
        <div className="loginBox w-fit flex rounded-xl backdrop-brightness-50 backdrop-blur-md flex-col items-center">
             <h1 className="logo text-[#F8F4E1] font-extrabold text-xl hover:scale-125 transition-all 
            transition-300 ease-in-out animate-bounce"> رکسیدرو | REXIDRO </h1>
            <form action="" className="flex flex-col justify-around items-center">
                <input className="text-[#F8F4E1] rounded-xl w-100 border-2 border-[#F8F4E1]" type="email" name="emailInput" id="" placeholder="ایمیل خود را وارد کنید" />
                <input className="text-[#F8F4E1] rounded-xl w-100 border-2 border-[#F8F4E1]" type="password" name="passInput" id="" placeholder="رمز خود را وارد کنید" />
                <button type="submit" className="loginBtn border-2 text-[#F8F4E1] border-[#F8F4E1] cursor-pointer rounded-xl w-100
                hover:bg-[#F8F4E1] hover:text-[#543310]">ورود به حساب کاربری</button>
                <a type="submit" className="text-[#F8F4E1] underline underline-offset-2 cursor-pointer hover:text-red-500">فراموشی رمز عبور؟</a>
            </form>
            <hr className="border-[#F8F4E1] w-90" />
            <div className="web3-api flex flex-col justify-around items-center">
            <button type="submit" className="loginBtn border-2 bg-red-600 text-[#F8F4E1] border-red-600 cursor-pointer rounded-xl w-100
                hover:bg-[#F8F4E1] hover:text-[#543310] hover:border-[#F8F4E1]"> ورود از طریق گوگل</button>

            </div>
        </div>
    )
}