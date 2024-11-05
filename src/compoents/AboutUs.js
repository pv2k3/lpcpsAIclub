import React from 'react';

const AboutPage = () => {
    return (
        <div className="text-white text-[1.125rem] min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-6xl font-bold mb-4 text-left text-[#004CAE]">
                    About the AI Club: Fostering Innovation and Collaboration
                </h1>
                <p className="mb-12">
                    The AI Club is a vibrant community dedicated to fostering
                    innovation and collaboration in the field of Artificial
                    Intelligence. Here's what makes us unique:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-[rgba(0,0,0,0.4)] shadow-[rgba(255,255,255,0.05)] shadow-md rounded-lg p-6">
                        <h2 className="text-3xl sub-head font-bold mb-2">
                            Inclusive Community
                        </h2>
                        <p>
                            The AI Club welcomes students from all backgrounds and disciplines, creating a vibrant and diverse community dedicated to advancing AI technology.
                        </p>
                    </div>
                    <div className="bg-[rgba(0,0,0,0.4)] shadow-[rgba(255,255,255,0.05)] shadow-md rounded-lg p-6">
                        <h2 className="text-3xl sub-head font-bold mb-2">
                            Hands-On Experience
                        </h2>
                        <p>
                            Members gain practical experience by working on real-world AI projects, developing valuable skills and knowledge.
                        </p>
                    </div>
                    <div className="bg-[rgba(0,0,0,0.4)] shadow-[rgba(255,255,255,0.05)] shadow-md rounded-lg p-6">
                        <h2 className="text-3xl sub-head font-bold mb-2">
                            Expert Mentorship
                        </h2>
                        <p>
                            Experienced faculty and industry partners provide mentorship and support, guiding members to reach their full potential in the world of AI.
                        </p>
                    </div>
                    <div className="bg-[rgba(0,0,0,0.4)] shadow-[rgba(255,255,255,0.05)] shadow-md rounded-lg p-6">
                        <h2 className="text-3xl sub-head font-bold mb-2">
                            Networking Opportunities
                        </h2>
                        <p>
                            The AI Club fosters a thriving environment for idea sharing, collaboration, and innovation. Through connections and shared learning, members are empowered to make a meaningful impact.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;