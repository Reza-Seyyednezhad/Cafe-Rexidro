import Header from "../HeaderComponent/Header";
import FooterComponent from "../FooterComponent/FooterComponent";
import { useState } from "react";
import {ClassicCoffee , SpecialCoffee, IceCoffee, SweetCoffee, DeCoffee} from "./CoffeeTypes"
export default function Services(){
    const [selectCoffeeType , setSelectCoffeeType] = useState("Classic")
    const handleCoffeeChange = (event) => {
        setSelectCoffeeType(event.target.value);
    };
    return (
        <div className="servicesPage flex flex-col w-screen min-h-[100vh] backdrop-brightness-40 grow justify-start items-center">
            <Header />
            <div className="ServicesPageComponents size-10/12 flex flex-col justify-start items-center">
                <div className="servicesItems size-11/12 flex flex-col lg:flex-row justify-evenly items-center">
                    <div className="servicesItemsSidebar w-11/12 lg:size-2/12 lg:h-[80vh] flex flex-col justify-evenly items-center border-2 border-[#AF8F6F] bg-[#543310] rounded-xl">
                        <div className="CaffeeTitle flex flex-nowrap items-center justify-center">
                            <input className="hidden" type="radio" name="coffeeList" id="classicCoffee" value="Classic" onChange={handleCoffeeChange} />
                            <label className="text-[#F8F4E1] cursor-pointer hover:animate-pulse transition-all transition-300 ease-in-out" htmlFor="classicCoffee">قهوه‌های کلاسیک</label>
                        </div>
                        <div className="CaffeeTitle flex flex-nowrap items-center justify-center">
                            <input className="hidden" type="radio" name="coffeeList" id="specialCoffee" value="Special" onChange={handleCoffeeChange} />
                            <label className="text-[#F8F4E1] cursor-pointer hover:animate-pulse transition-all transition-300 ease-in-out" htmlFor="specialCoffee">قهوه‌های تخصصی</label>
                        </div>
                        <div className="CaffeeTitle flex flex-nowrap items-center justify-center">
                            <input className="hidden" type="radio" name="coffeeList" id="iceCoffee" value="Ice" onChange={handleCoffeeChange} />
                            <label className="text-[#F8F4E1] cursor-pointer hover:animate-pulse transition-all transition-300 ease-in-out" htmlFor="iceCoffee">قهوه‌های سرد</label>
                        </div>
                        <div className="CaffeeTitle flex flex-nowrap items-center justify-center">
                            <input className="hidden" type="radio" name="coffeeList" id="sweetCoffee" value="Sweet" onChange={handleCoffeeChange} />
                            <label className="text-[#F8F4E1] cursor-pointer hover:animate-pulse transition-all transition-300 ease-in-out" htmlFor="sweetCoffee">قهوه‌های شیرین و طعم‌دار</label>
                        </div>
                        <div className="CaffeeTitle flex flex-nowrap items-center justify-center">
                            <input className="hidden" type="radio" name="coffeeList" id="deCoffee" value="Decaf" onChange={handleCoffeeChange} />
                            <label className="text-[#F8F4E1] cursor-pointer hover:animate-pulse transition-all transition-300 ease-in-out" htmlFor="deCoffee">قهوه‌های بدون کافئین</label>
                        </div>
                    </div>
                    <div className="servicesItemsMainbar w-9/12 h-[80vh] flex flex-col flex-wrap justify-evenly items-center rounded-xl overflow-y-auto overflow-x-hidden">
                        <div className="size-full flex flex-col lg:flex-row flex-wrap justify-center items-center text-center text-[#F8F4E1] overflow-y-auto overflow-x-hidden">
                            {selectCoffeeType === "Classic" && <ClassicCoffee />}
                            {selectCoffeeType === "Special" && <SpecialCoffee />}
                            {selectCoffeeType === "Ice" && <IceCoffee />}
                            {selectCoffeeType === "Sweet" && <SweetCoffee />}
                            {selectCoffeeType === "Decaf" && <DeCoffee />}
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}