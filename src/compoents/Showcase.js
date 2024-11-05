import React from 'react'

const proj = [
    { title: "Vidushi", content: "A robot" },
    { title: "Smart Bin", content: "A sensor based bin which automatically opens on sensing someone" },
    { title: "Smart Switch Control", content: "Use wifi to connect to the power system and control the switches of devices" },
]

const event = [
    { title: "Hackathons", content: "Development competitions" },
    { title: "Guest Speaker Sessions", content: "Learn form exoerts and renowned researchers" },
    { title: "Workshops", content: "Hands on sessions on different fields" },
]

const Projs = proj.map(element =>
    <div className='w-60 rounded-3xl border p-4 hover:scale-[1.01]'>
        <h3 className='text-2xl font-bold sub-head'>{element.title}</h3>
        <p>{element.content}</p>
    </div>
)

const Events = event.map(element =>
    <div className='w-60 rounded-3xl border p-4 hover:scale-[1.01]'>
        <h3 className='text-2xl font-bold sub-head'>{element.title}</h3>
        <p>{element.content}</p>
    </div>  
)

function Showcase() {
    return (
        <section className='text-white text-xl w-11/12 m-auto font-ox my-10'>
            <div className='shadow-[0px_0px_20px_rgba(255,255,255,0.2)] p-4 rounded-3xl my-8 transition-[all 0.15s ease-in-out]'>
                <h2 className='text-4xl font-extrabold text-[#004CAE]'>Projects</h2>
                <div className='flex flex-wrap gap-2 justify-around p-4'>{Projs}</div>
            </div>
            <div className='shadow-[0px_0px_20px_rgba(255,255,255,0.2)] p-8 rounded-3xl my-8'>
                <h2 className='text-4xl font-extrabold text-[#004CAE]'>Events</h2>
                <div className='flex flex-wrap gap-2 justify-around p-4'>{Events}</div>
            </div>
        </section>
    )
}

export default Showcase
