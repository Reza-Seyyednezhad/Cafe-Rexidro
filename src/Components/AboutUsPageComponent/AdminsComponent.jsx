export default function AdminComponent({name, image, info}){
    return(
        <div className="AdminComponent w-[300px] h-[60px] flex flex-nowrap bg-[#74512D] rounded-4xl">
            <div className="AdminImage w-1/4 h-full flex justify-center items-center rounded-full">
                <img className="w-full h-full object-cover rounded-full" src={image} alt={name} />
            </div>
            <div className="AdminInfo w-3/4 h-full flex flex-col justify-evenly items-center text-center ">
                <h1 className="text-lg font-bold text-[#F1E6D5]">{name}</h1>
                <p className="text-[#F1E6D5] text-sm overflow-hidden">{info}</p>
            </div>
        </div>
    )
}