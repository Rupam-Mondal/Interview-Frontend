import assets from "@/assets/assest";

function Heroimage(){
    return (
        <>
            {/* Image Section */}
            <div className="absolute w-full h-full hidden md:block bg-gradient-to-b to-black from-transparent z-[1] pointer-events-none" />

            <div className="w-full h-screen flex justify-center items-center pb-10 md:p-10 ">
                <img
                    src={assets.image1}
                    alt="Illustration"
                    className="max-w-[90%] md:max-w-[60%] rounded-lg shadow-lg transition duration-500 hover:shadow-[0px_0px_100px_30px_rgba(255,255,0,0.2)] border border-white border-opacity-40 md:my-10 "
                />
            </div>
        </>
    )
}

export default Heroimage;