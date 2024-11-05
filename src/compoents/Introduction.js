import React from 'react'

function Introduction() {
    return (
        <div className='text-white w-11/12 m-auto p-8 text-[1.125rem] font-ox'>
            <h1 className='text-6xl my-10 text-[#004CAE] font-semibold'>Discover the AI Lab: Cutting-Edge Facilities and Research</h1>
            <div className="flex flex-wrap justify-between">
                <div className="w-1/4 p-5 max-w-60 min-w-[240px] bg-[rgba(0,0,0,0.4)] rounded-xl mb-5 shadow-[rgba(255,255,255,0.05)] shadow-md">
                    <h2 className="text-3xl font-semibold sub-head">State-of-the-Art Facilities</h2>
                    <p className="leading-[1.4]">Our AI lab features powerful GPUs, high-performance computing clusters, and specialized AI software. We leverage advanced tools for data visualization and analysis.</p>
                </div>
                <div className="w-1/4 p-5 max-w-60 min-w-[240px] bg-[rgba(0,0,0,0.4)] rounded-xl mb-5 shadow-[rgba(255,255,255,0.05)] shadow-md">
                    <h2 className="text-3xl font-semibold sub-head">Pioneering Research</h2>
                    <p className="leading-[1.4]">Our researchers explore new frontiers in machine learning, deep learning, natural language processing, and computer vision. We're committed to pushing the boundaries of AI.</p>
                </div>
                <div className="w-1/4 p-5 max-w-60 min-w-[240px] bg-[rgba(0,0,0,0.4)] rounded-xl mb-5 shadow-[rgba(255,255,255,0.05)] shadow-md">
                    <h2 className="text-3xl font-semibold sub-head">Collaborative Environment</h2>
                    <p className="leading-[1.4]">We foster a collaborative ecosystem where academia and industry partners work together to solve complex problems and drive innovation in artificial intelligence.</p>
                </div>
                <div className="w-1/4 p-5 max-w-60 min-w-[240px] bg-[rgba(0,0,0,0.4)] rounded-xl mb-5 shadow-[rgba(255,255,255,0.05)] shadow-md">
                    <h2 className="text-3xl font-semibold sub-head">Ethical AI Development</h2>
                    <p className="leading-[1.4]">We prioritize the responsible development of AI technologies, focusing on fairness, transparency, and the societal impact of our research and applications.</p>
                </div>
            </div>
        </div>
    )
}

export default Introduction
