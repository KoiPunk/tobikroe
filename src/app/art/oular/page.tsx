import Link from 'next/link'

export default function Page() {
    return (
        <section className="bg-black min-h-screen text-white tracking-widest">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-6xl text-center pt-16 pb-6">Welcome to the Oular System</h1>
                <p className="text-center mb-24">
                    On an exploration to find a new habitatable planet, your ship was destroyed by an unpredictable event, leading you to crash on the exoplanet, Ares.
                    <br/>
                </p>

                {/* Suns */}
                <h2 className="text-2xl mb-6">Suns</h2>
                <div className="flex w-fit mx-auto mb-20 space-x-6">
                    <Link href="/404">
                        <img src="/oular/planet_placeholder.png" alt="" className="max-w-56"/>
                    </Link>
                    <Link href="/404">
                        <img src="/oular/planet_placeholder.png" alt="" className="max-w-56"/>
                    </Link>
                </div>
                
                {/* Planets */}
                <h2 className="text-2xl mb-6">Planets</h2>
                <div className="flex w-fit mx-auto mb-20 space-x-6">
                    <Link href="/art/oular/planets">
                        <img src="/oular/canis_icon.png" alt="" className="max-w-56"/>
                    </Link>
                    <Link href="/art/oular/planets">
                        <img src="/oular/veilia_icon.png" alt="" className="max-w-64"/>
                    </Link>
                    <Link href="/art/oular/planets">
                        <img src="/oular/planet_placeholder.png" alt="" className=""/>
                    </Link>
                    <Link href="/art/oular/planets">
                        <img src="/oular/planet_placeholder.png" alt="" className=""/>
                    </Link>
                    <Link href="/art/oular/planets">
                        <img src="/oular/planet_placeholder.png" alt="" className=""/>
                    </Link>
                    <Link href="/art/oular/planets">
                        <img src="/oular/planet_placeholder.png" alt="" className=""/>
                    </Link>
                    <Link href="/art/oular/planets">
                        <img src="/oular/planet_placeholder.png" alt="" className=""/>
                    </Link>
                </div>

                {/* Space Crafts */}
                <h2 className="text-2xl mb-6">Space Crafts</h2>
                <div className="flex w-fit mx-auto mb-20 space-x-6">
                    <Link href="/404">
                        <img src="/oular/.png" alt="" className=""/>
                    </Link>
                </div>
                
                {/* Others */}
                <h2 className="text-2xl mb-6"> Others</h2>
                <div className="flex space-x-3 pb-32 w-fit mx-auto">
                    <Link href="/art/oular/fungi">
                        <img src="/oular/fun_icon.png" alt="" className=""/>
                    </Link>
                    <Link href="/art/oular/animals">
                        <img src="/oular/animal_icon.png" alt="" className=""/>
                    </Link>
                    <Link href="/art/oular/characters">
                        <img src="/oular/char_icon.png" alt="" className=""/>
                    </Link>
                    <Link href="/art/oular/plants">
                        <img src="/oular/plants_icon.png" alt="" className=""/>
                    </Link>
                    <Link href="/art/oular/misc">
                        <img src="/oular/misc_icon.png" alt="" className=""/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

// // worlds' most insane ducttaping
// <div className="grid grid-cols-11 grid-rows-10 text-black">
//     <div className="col-start-1 col-span-2">space</div>
//     <div className="col-span-2 row-span-2">
//         <img src="/oular/canis_icon.png" alt="" className="max-h-72"/>
//     </div>
//     <div className="col-start-5 col-span-3 row-span-2">space</div>
//     <div className="col-span-2 row-span-2">
//         <img src="/oular/canis_icon.png" alt="" className="max-h-56 mt-5 ml-12"/>
//     </div>
//     <div className="col-span-2">space</div>
//     <div className="col-span-2 row-span-6">
//         <img src="/oular/ol_icon.png" alt="" className="mt-8"/>
//     </div>
//     <div className="col-start-3 col-span-2 row-span-4">space</div>
//     <div className="col-start-5 col-span-3 row-span-3">
//         <img src="/oular/canis_icon.png" alt="" className="h-full"/>
//     </div>
//     <div className="col-span-2 row-span-2">space</div>
//     <div className="col-start-10 col-span-2 row-start-2 row-span-6">
//         <img src="/oular/oll_icon.png" alt="" className=""/>
//     </div>
//     <div className="col-span-2 row-span-2">
//         <img src="/oular/canis_icon.png" alt="" className="h-72"/>
//     </div>
//     <div className="col-span-3 row-span-1">space</div>
//     <div className="col-span-2 row-span-2">
//         <img src="/oular/canis_icon.png" alt="" className="h-72"/>
//     </div>
//     <div className="col-start-1 col-span-2 row-span-3">space</div>
//     <div className="col-start-5 row-start-7 row-span-2">space</div>
//     <div className="col-start-6 col-span-4 row-start-7 row-span-4">
//         <img src="/oular/canis_icon.png" alt="" className="h-full"/>
//     </div>
// </div>