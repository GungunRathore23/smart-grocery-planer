
const QualityAndAdvantage = () => {
    return (

        <section
            className="relative py-20 bg-gray-50"
            style={{
                backgroundImage: `url('/src/assets/images/vegitable.jpg')`, // yahan path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-10 text-white">
                {/* LEFT SPACE / can leave empty for background */}
                <div className="md:w-1/2"></div>

                {/* RIGHT TEXT */}
                <div className="md:w-1/2 space-y-6 bg-white/80 p-8 rounded-3xl shadow-lg text-gray-900">
                    <h2 className="text-4xl font-bold">
                        Best Quality Healthy And Fresh Grocery
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        We prioritize quality in each of our grocery, below are the advantages of our product. Organic food is food produced with care for your health and nature.
                    </p>

                    {/* 4 POINTS */}
                    <ul className="space-y-3 text-gray-800">
                        <li className="flex items-center gap-2">✅ Best Services than others</li>
                        <li className="flex items-center gap-2">✅ 100% Organic & Natural Process</li>
                        <li className="flex items-center gap-2">✅ 100% Returns & Refunds</li>
                        <li className="flex items-center gap-2">✅ User-Friendly Mobile Apps</li>
                    </ul>

                    {/* BUTTON */}
                    <button
                        onClick={() => navigate("/order")}
                        className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition-all duration-300 font-semibold shadow-md"
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </section>

    )
}

export default QualityAndAdvantage