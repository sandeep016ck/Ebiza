import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const LearnMoreComponent = () => {

    const [showMore, setShowMore] = useState(false);

    return (
        (showMore) ?
            <MainSection /> :
            <section className="h-[79vh] p-8 bg-gradient-to-r from-blue-900 to-blue-950 text-white text-center">
                <div className="p-8 bg-gradient-to-r from-blue-900 to-blue-950 text-white text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to EbizA!</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        EbizA connects communities, businesses, and investors to improve accessibility and foster impactful projects. Together, we can create a more inclusive world.
                    </p>
                    <button
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-800 rounded-lg text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                        onClick={() => setShowMore(true)}
                    >
                        Go Back
                    </button>
                </div>
            </section>

    );
};

const MainSection = () => {
    const [showLearnMore, setShowLearnMore] = useState(false);

    return (
        showLearnMore ? (
            <LearnMoreComponent />
        ) : (
            <section className="h-[100vh] flex flex-col md:flex-row items-center p-8 bg-gradient-to-r from-customStart to-customEnd text-white">
            {/* Image Section */}
            <div className="w-[40%] md:w-1/2 flex justify-center md:justify-center mb-4 md:mb-0"> {/* Reduced margin here */}
                <img
                    src="https://static1.squarespace.com/static/5f088a46ebe405013044f1a4/5f0e1620b83cc1774e40d2d3/6169957f3e340047164fdf63/1690836922454/Sarah+-+Cover.jpg?format=1500w"
                    alt="Accessibility Illustration"
                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Text Section */}    
            <div className="w-[60%] md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Transforming Accessibility with <span className="text-[#ce102e] ">EbizA</span>
                </h2>
                <p className="text-lg leading-relaxed">
                    EbizA is a transformative platform designed to tackle accessibility challenges for disabled individuals by connecting social impact investors, local governments, businesses, and the community. By leveraging crowdsourcing and investment frameworks, it fosters scalable, impactful projects that improve accessibility and quality of life.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    The platform features a crowdsourcing model, where users can report accessibility issues and fund specific projects, with real-time tracking and transparency. Supported by industry leaders like Microsoft, Google, and Tata Group, EbizA emphasizes inclusivity, social returns, and sustainability.
                </p>
                <button
                    className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-800 rounded-lg text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                    onClick={() => setShowLearnMore(true)}
                >
                    Learn More
                </button>
            </div>
        </section>

        )
    );
};

export default MainSection;
