import Link from 'next/link'

// Navigation links
const navItems = [
    {name: "Home", url: "/"},
    {name: "Blog", url: "/blog"},
    {name: "About", url: "/about"},
    {name: "Oular System", url: "/art/oular"},
    {name: "Store", url: "/store"},
    {name: "Project", url: "/project"}
];

// Convert navItems into lists
const listNav = navItems.map(item => {
    return (
        <li key={item.url}>
            <Link href={item.url} className="inline-block transition-all text-stone-700 dark:text-white hover:text-amber-300 py-2 px-4">
                {item.name}
            </Link>
        </li>
    )
})

export default function Navbar() {
    return (
        <header className="bg-white dark:bg-neutral-950 sticky top-0 shadow-2xl shadow-black/4">
            <div className="pt-8 pb-2" >
                <Link href="/"><img src="/title.png" alt="" className="mx-auto h-14"/></Link>
            </div>
            <nav id="nav" className="text-center">
            
            <ul className="inline-flex space-x-2 w-fit mb-2">
                {listNav}
            </ul>

            </nav>
            <hr className='text-gray-200 dark:text-neutral-800'/>
        </header>
    )
}
