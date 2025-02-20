import { Particles } from "../ui/particles";

function ParticlesDemo() {
    return (
        <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-black">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
                Particles
            </span>
            <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color="#ffffff"
                refresh
            />
        </div>
    );
}

export default ParticlesDemo;