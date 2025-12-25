import CoffeeCard from "./CoffeeCard"
import coffeeImage from "../../assets/images/coffee.jpg"
export function ClassicCoffee(){
    return(
        <div className="w-11/12 h-full flex flex-col justify-center items-center text-center overflow-y-auto overflow-x-hidden">
            <h1 className="h-fit w-full text-2xl text-[#F8F4E1] text-center flex justify-center items-center">☕ قهوه‌های کلاسیک ☕</h1>
            <div className="w-full h-11/12 flex flex-col lg:flex-row flex-wrap justify-evenly items-center text-center">
                <CoffeeCard image={coffeeImage} name="قهوه اسپرسو" price="78000" />
                <CoffeeCard image={coffeeImage} name="کاپوچینو" price="60000" />
                <CoffeeCard image={coffeeImage} name="لاته" price="92000" />
                <CoffeeCard image={coffeeImage} name="قهوه اسپرسو" price="78000" />
                <CoffeeCard image={coffeeImage} name="کاپوچینو" price="60000" />
                <CoffeeCard image={coffeeImage} name="لاته" price="92000" />
                <CoffeeCard image={coffeeImage} name="لاته" price="92000" />
            </div>
        </div>
    )
}
export function SpecialCoffee(){
    return(
        <div className="w-11/12 h-full flex flex-col justify-center items-center text-center overflow-y-auto">
            <h1 className="h-fit w-full text-2xl text-[#F8F4E1] text-center flex justify-center items-center">☕ قهوه‌های تخصصی ☕</h1>
            <div className="w-full h-11/12 flex flex-col lg:flex-row flex-wrap justify-evenly items-center text-center">
                <CoffeeCard image={coffeeImage} name="قهوه فلت وایت" price="150000" />
                <CoffeeCard image={coffeeImage} name="کورتادو" price="60000" />
                <CoffeeCard image={coffeeImage} name="قهوه آفوگاتو" price="92000" />
                <CoffeeCard image={coffeeImage} name="قهوه آفوگاتو" price="92000" />
            </div>
        </div>
    )
}
export function IceCoffee(){
    return(
        <div className="w-11/12 h-full flex flex-col justify-center items-center text-center overflow-y-auto">
            <h1 className="h-fit w-full text-2xl text-[#F8F4E1] text-center flex justify-center items-center">☕ قهوه‌های سرد ☕</h1>
            <div className="w-full h-11/12 flex flex-col lg:flex-row flex-wrap justify-evenly items-center text-center">
                <CoffeeCard image={coffeeImage} name="آیس لاته" price="150000" />
                <CoffeeCard image={coffeeImage} name="آیس اسپرسو" price="60000" />
                <CoffeeCard image={coffeeImage} name="آیس کاپوچینو" price="92000" />
                <CoffeeCard image={coffeeImage} name="آیس اسپرسو" price="60000" />
                <CoffeeCard image={coffeeImage} name="آیس کاپوچینو" price="92000" />
            </div>
        </div>
    )
}
export function SweetCoffee(){
    return(
        <div className="w-11/12 h-full flex flex-col justify-center items-center text-center overflow-y-auto">
            <h1 className="h-fit w-full text-2xl text-[#F8F4E1] text-center flex justify-center items-center">☕ قهوه‌های شیرین و طعم‌دار ☕</h1>
            <div className="w-full h-11/12 flex flex-col lg:flex-row flex-wrap justify-evenly items-center text-center">
                <CoffeeCard image={coffeeImage} name="قهوه وانیلی" price="150000" />
                <CoffeeCard image={coffeeImage} name="قهوه کاراملی" price="60000" />
                <CoffeeCard image={coffeeImage} name="قهوه هل‌دار" price="92000" />
                <CoffeeCard image={coffeeImage} name="قهوه وانیلی" price="150000" />
                <CoffeeCard image={coffeeImage} name="قهوه کاراملی" price="60000" />
                <CoffeeCard image={coffeeImage} name="قهوه هل‌دار" price="92000" />
            </div>
        </div>
    )
}
export function DeCoffee(){
    return(
        <div className="w-11/12 h-full flex flex-col justify-center items-center text-center overflow-y-auto">
            <h1 className="h-fit w-full text-2xl text-[#F8F4E1] text-center flex justify-center items-center">☕ قهوه‌های بدون کافئین ☕</h1>
            <div className="w-full h-11/12 flex flex-col lg:flex-row flex-wrap justify-evenly items-center text-center">
                <CoffeeCard image={coffeeImage} name="قهوه بدون کافئین اسپرسو" price="150000" />
                <CoffeeCard image={coffeeImage} name="کاپوچینو بدون کافئین" price="60000" />
                <CoffeeCard image={coffeeImage} name="آمریکانو بدون کافئین" price="92000" />
                <CoffeeCard image={coffeeImage} name="قهوه بدون کافئین اسپرسو" price="150000" />
                <CoffeeCard image={coffeeImage} name="کاپوچینو بدون کافئین" price="60000" />
                <CoffeeCard image={coffeeImage} name="آمریکانو بدون کافئین" price="92000" />
            </div>
        </div>
    )
}
