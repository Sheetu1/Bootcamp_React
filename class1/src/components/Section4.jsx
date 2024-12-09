function Section4(){
    return(
        <div className="w-full">
            <div className=" relative text-center flex  flex-col items-center justify-center gap-12 text2">
                <h1 className="font-medium">Cases</h1>
                <h1 className="text-8xl font-bold w-[800px]">HEAD TURNING PROJECTS</h1>
                <button className="absolute top-60 right-96  bg-[#F4C727] px-4 py-4 rotate-[-15deg] border-none rounded-3xl ">Gotta See 'm all</button>
                <button className=" absolute top-80 right-14 font-medium  text-xs px-2 py-3 border border-black border-solid rounded-xl">Alle projecten
                     <span className="m-4"><i class="ri-arrow-right-line"></i></span>
                     </button>
            </div>
            <div className="w-full  bottom2">
        <div className=" px-16 pt-36 img">
            <img className=" object-cover rounded-3xl " src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b562e62e676d4159713_NS_Wayfinding%20_%20NaN-p-2000.jpg" alt="image" />
        </div>
       <div className=" px-12 py-5 flex flex-col gap-2 text3">
       <h3 className="opacity-35 font-medium">Nieuw Schaijk</h3>
        <h2 className=" font-bold text-lg">De smaak van thuis</h2>
        <div className="flex gap-4 btn">
            <button class="text-[10px] px-2 py-1 border border-black border-solid rounded-lg font-medium btn1">BRAND STORY</button>
            <button class="text-[10px] px-3 py-2 rounded-lg border border-black border-solid font-medium btn2">
                MERKIDENTITEIT</button>
        </div>
       </div>
    </div>
        </div>
      
    )
}
export default Section4;