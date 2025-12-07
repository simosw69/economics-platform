export default function Home({ title, subtitle, features }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white font-sans">
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 py-16">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-4 tracking-tight">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
                    {subtitle}
                </p>
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg shadow-indigo-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/50 transition-all duration-300 cursor-pointer">
                    Get Started
                </button>
            </div>

            {/* Features Section */}
            {features && features.length > 0 && (
                <div className="py-16 px-6 bg-white/5">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        What You'll Learn
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-white/70 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
