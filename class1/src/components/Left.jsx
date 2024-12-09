import img from '../../public/nav-img.webp';
function Left(){
    return(
        <div className="w-[50%]  ">
            <div className=" relative w-full  text ">
                <p className="text-[100px] leading-[0.9] font-medium font-serif flex items-end  justify-center " >Turning heads and conquering hearts 
                    <img className="rotate absolute left-72 w-16" src={img} alt="image" />
                </p>
            </div>

        </div>
    )
}
export default Left;