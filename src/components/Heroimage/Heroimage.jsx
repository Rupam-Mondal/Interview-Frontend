import assets from "@/assets/assest";

function Heroimage() {
    return (
        <>
            {/* Overlay for Better Visibility */}
            <div className="absolute w-full h-full bg-black bg-opacity-40 z-1 pointer-events-none" />

            {/* Hero Content */}
            <div className="relative w-full h-screen flex justify-center items-center pb-10 md:p-10 z-10">
                <img
                    src={assets.image1}
                    alt="Illustration"
                    className="max-w-[90%] md:max-w-[60%] rounded-lg shadow-lg transition duration-500 hover:shadow-[0px_0px_50px_10px_rgba(56,189,248,0.5)] border border-white border-opacity-40 md:my-10"
                />
            </div>
        </>
    );
}

export default Heroimage;
