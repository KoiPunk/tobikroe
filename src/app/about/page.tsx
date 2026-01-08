import Image from 'next/image'
import { PageDoll } from '../components/pagedoll'

export const metadata = {
  title: 'About',
  description: 'Read my about.',
}

export default function Page() {
  return (
    <div className="w-fit mx-auto pt-16 px-8">
        {/* <PageDoll /> */}
        <section className="flex space-x-8 items-center mb-14">
            <img src="/me.png" alt="" className="w-sm min-h-full"/>
            <div className="max-w-xl">
                <h1 className="text-2xl font-semibold mb-4">Welcome to the TOBIKROE variety show!</h1>
                <p>I am a computer science major who's working towards becoming an astronomy researcher and understand the orgin of life! 

                    <br/><br/>This site is a sort of portfolio/journal of my learning journey here on Earth. 
                    Here, you'll learn about my many projects, ranging from programming, art, to baking. 
                    I hope my rambling and yapping can encourage you to be more curious, pick up a new hobby, or learn something new that make you happy!
                                        
                    <br/><br/>This site is built with Next.js, the Tailwind CSS framework, and double-shot affogato!
                </p>
                <div className="flex w-fit mx-auto mt-10 space-x-4 pt-auto">
                    {/* <img src="/resume_icon.png" alt="" className="h-14"/> */}
                    <div className="bg-amber-300 px-8 py-2">Resume</div>
                    <div className="bg-black text-white px-8 py-2">Contact</div>
                </div>
            </div>
        </section>
        
        <section className="bg-neutral-200 pb-24">
            <h2>Leave a message!</h2>
            <p>* INDICATES REQUIRED FIELD</p>
            <div className="flex">
                <div>name *</div><div>contact *</div>
            </div>
            <div>subject *</div>
            <div>word *</div>
                <div className="bg-black text-white w-fit px-8 py-2">Contact</div>
        </section>
    </div>
  )
}