import React from 'react'

function Project() {
    return (
        <div className='bg-[rgba(0,0,100,0.1)] text-xl'>
            <div className="m-auto text-white  min-h-screen flex flex-col items-center justify-center p-4 w-11/12 gap-10">
                <h1 className="text-left text-[#004CAE] text-6xl font-bold w-[100%]">Featured Projects: Showcasing Student Ingenuity</h1>
                <div className="grid grid-cols-2 gap-10">
                    <div className="bg-[rgba(0,0,0,0.4)] rounded-lg shadow-[rgba(255,255,255,0.05)] shadow-md p-6">
                        <h2 className="text-4xl sub-head font-bold mb-4">Intelligent Chatbot</h2>
                        <p>
                            Developed a conversational AI assistant with natural language processing capabilities.
                        </p>
                    </div>
                    <div className="bg-[rgba(0,0,0,0.4)] rounded-lg shadow-[rgba(255,255,255,0.05)] shadow-md p-6">
                        <h2 className="text-4xl sub-head font-bold mb-4">Image Recognition</h2>
                        <p>
                            Trained a deep learning model to accurately identify and classify various objects in images.
                        </p>
                    </div>
                    <div className="bg-[rgba(0,0,0,0.4)] rounded-lg shadow-[rgba(255,255,255,0.05)] shadow-md p-6">
                        <h2 className="text-4xl sub-head font-bold mb-4">Autonomous Vehicle</h2>
                        <p>
                            Designed and built a self-driving car using computer vision and reinforcement learning.
                        </p>
                    </div>
                    <div className="bg-[rgba(0,0,0,0.4)] rounded-lg shadow-[rgba(255,255,255,0.05)] shadow-md p-6">
                        <h2 className="text-4xl sub-head font-bold mb-4">Medical Diagnosis</h2>
                        <p>
                            Developed an AI system to assist in the early detection of diseases based on patient data.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project
