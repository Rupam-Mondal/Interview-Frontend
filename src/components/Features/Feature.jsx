function Features(){
    return(
        <>
            <section className="py-16 px-8 text-center mb-10">
                <h2 className="text-4xl font-bold text-[#38BDF8]">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
                    <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:-translate-y-4 hover:scale-105 transition-all duration-300 hover:shadow-slate-500">
                        <h3 className="text-xl font-semibold">Mock Interviews</h3>
                        <p className="mt-2 text-gray-400">
                            Practice real interview scenarios with AI-driven simulations.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:-translate-y-4 hover:scale-105 transition-all duration-300 hover:shadow-slate-500">
                        <h3 className="text-xl font-semibold">Question Bank</h3>
                        <p className="mt-2 text-gray-400">
                            Access hundreds of frequently asked interview questions.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:-translate-y-4 hover:scale-105 transition-all duration-300 hover:shadow-slate-500">
                        <h3 className="text-xl font-semibold">Expert Guidance</h3>
                        <p className="mt-2 text-gray-400">
                            Get tips and insights from industry professionals.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features;