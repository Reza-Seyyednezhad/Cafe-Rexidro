export default function CoffeeCard({image, name, price}){
    return(
        <div className="cardCoffee w-[300px] h-11/12 flex flex-col justify-center items-center border-2 bg-[#543310] backdrop-contrast-50 rounded-xl">
            <div className="coffeeImage w-full h-8/12"> 
                <img className="object-cover size-full rounded-xl" src={image} alt={name} />
            </div>
            <div className="coffeeInfo w-full h-4/12 flex flex-col justify-evenly items-center">
                <h1 className="coffeeName text-xl text-center w-full h-fit text-[#F8F4E1] font-bold">{name}</h1>
                <h4 className="coffeePrice text-lg text-center w-full h-fit text-[#F8F4E1] font-bold"> {price} تومان</h4>
                <button className="border-2 w-10/12 border-[#F8F4E1] coffee-submit rounded-xl cursor-pointer hover:bg-[#F8F4E1] hover:text-[#543310] transition-all transition-300 ease-in-out">سفارش</button>
            </div>
        </div>
    )
}