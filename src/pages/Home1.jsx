import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ParticlesDemo from "@/components/ParticleBackground/Particlebg";

function Home1(){
    return (
        <>
            <div className="h-[100vh] w-full">
                <Navbar/>
                <ParticlesDemo/>
                <Footer/>
            </div>
        </>
    )
}

export default Home1;