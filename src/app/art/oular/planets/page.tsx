import Link from 'next/link'

export default function Page() {
    return (
        <div className="w-fit mx-auto pt-16 px-8">
            <section className="flex space-x-8 items-center mb-14">
                <img src="/oular/canis.png" alt="" className="w-sm min-h-full"/>
                <div className="max-w-xl">
                    <h1 className="text-2xl font-semibold mb-4">Canis (E-382)</h1>
                    <p> A rocky planet with a lava surface.
                        <br/>The planet rotates in close proximity to its star, raising the temperature
                        3 moon Heavy atmosphere filled with decomposers waste gas. 
                        Requires helmet. 
                        Furnace lives in a cave here. 
                        Decomposer Primacy producer: Secondary producer: Primary consumer: Secondary consumer: Tertiary consumer:
                    </p>
                </div>
            </section>
        </div>
    )
}