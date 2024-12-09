function Card(){

    const data = [
        {
            name:"SHEETAL",
            image: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
            instock:false
        },
        {
            name:"DIVYANSH",
            image:"https://plus.unsplash.com/premium_photo-1673734625279-2738ecf66fa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D",
            instock:true
        },
        {
            name:"RITU",
            image:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
            instock:true

        },
        {
            name:"KHUSHI",
            image:"https://plus.unsplash.com/premium_photo-1669951581968-73b5b71face3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
            instock:true
        }

    ]

    return(
        <div className="w-full flex gap-5 p-10 ">
            {data.map((item , index) => (
                <div className="h-[400px] w-[300px] bg-white rounded-3xl card">
                <div className=" w-full  img">
                    <img className="w-full h-[200px]  rounded-t-3xl object-cover object-center  " src={item.image} alt="image" />
                </div>
                <div className="flex flex-col items-center justify-center text-center gap-5 btm">
                <h1 className="font-medium text-3xl pt-5 ">{item.name}</h1>
                <p className="font-normal text-sm opacity-65 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, eaque?</p>
                <button className={`px-5 py-2
                     ${item.instock ? "bg-green-700" : "bg-red-500"} bg-black hover:underline border-solid text-white rounded-lg  text-sm`}>
                    {item.instock ? "In Stack" : "Out Of Stack"}
                </button>
                </div>
                </div>
            ))}
                

            </div>
    )
}
export default Card;