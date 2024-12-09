function Section5(){
    return(
        <div className="w-full flex gap-5 p-8">
            <div className=" w-1/2 h-full flex flex-col gap-3 left">
            <img className="object-cover h-[500px] rounded-3xl" src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac65e2bf6eb87608fe500_GC_Flyers-Nan-min-p-2000.jpg" alt="" />
            
            <div className="btm">
                <h3 className="opacity-30">Gaaf Creaties</h3>
                <h1 className="font-medium text-[20px]">Creating mood-boosting experiences</h1>
            </div>
            <div className="flex gap-4 pb-44 buttons">
                <button class=" border border-black border-solid px-3 py-1 text-[10px] rounded-xl btn1">BRAND STORY</button>
                <button class=" border border-black border-solid px-3 py-1 text-[10px] rounded-xl btn2">MERKIDENTITEIT</button>
                <button class="border border-black border-solid px-3 py-1 text-[10px] rounded-xl btn3">WEB DESIGN</button>
            </div>
            <div className=" flex items-center justify-center w-[500px] h-[80px] rounded-xl gap-5 bg-white para5">
                <p className=" font-medium">Ook aan de slag met jouw merk?</p>
                <button className="border border-black border-solid rounded-xl px-3 py-2 ">Let's Meet
                     <span className="pl-5"><i class="ri-arrow-right-line"></i></span>
                </button>
            </div>
            </div>

          

            <div className=" flex flex-col gap-3 w-1/2 h-full right">
            <img  className="object-cover h-[650px] rounded-3xl"src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb716dc15a767d726cdea_DM_header-p-2000.jpg" alt="" />

            <div className=" btm">
                <h3 className=" opacity-30 ">Don't Mind</h3>
                <h1 className=" font-medium text-[20px] " >Campaigners for eventful brands</h1>
            </div>
            <div className=" flex gap-4 buttons">
                <button class="border border-black border-solid px-3 py-1 text-[10px] rounded-xl btn1">BRAND STORY</button>
                <button class=" border border-black border-solid px-3 py-1 text-[10px] rounded-xl btn2">MERKIDENTITEIT</button>
                <button class=" border border-black border-solid px-3 py-1 text-[10px] rounded-xl btn3">WEB DESIGN</button>

            </div>
            </div>
          

            

        </div>
    )
}
export default Section5;