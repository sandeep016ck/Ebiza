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
            <section className="h-[79vh] flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-blue-900 to-blue-950 text-white">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="Accessibility Illustration"
                        className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Transforming Accessibility with <span className="text-blue-200">EbizA</span>
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
