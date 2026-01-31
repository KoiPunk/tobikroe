import Link from 'next/link'

const footerItems = [[
        {name:"Home", url:"/"},
        {name:"About", url:"/about"},
        {name:"Blog", url:"/blog"},
        {name:"FAQ", url:"/404"}
    ],[
        {name:"Programming", url:"/404"},
        {name:"Web Dev", url:"/404"},
        {name:"Robotic", url:"/404"}
    ],[
        {name:"Art", url:"/404"},
        {name:"Oular System", url:"/art/oular"},
        {name:"Fanart", url:"/404"},
        {name:"Illustration", url:"/404"},
        {name:"Sketches", url:"/404"},
        {name:"Animation", url:"/404"}
    ],[
        {name:"Misc", url:"/404"},
        {name:"Life Science", url:"/404"},
        {name:"Food", url:"/404"},
        {name:"Plant", url:"/404"}
    ],[
        {name:"Store", url:"/store"},
        {name:"Cart", url:"/404"},
        {name:"Saved", url:"/404"},
        {name:"FAQ", url:"/404"}
    ]
];

const listFooter = footerItems.map(ul => {
    return (
        // ul is a list of objs
        <ul key={ul[0].name} className="pb-10 md:pb-0">

            {/* map each obj in ul into a list */}
            {ul.map((item, index) => {
                // first item! Bolded and fancy 
                if (index == 0) {
                    return (
                        <li className="mb-2 md:mb-6" key={item.name}>
                            <Link href={item.url} className="transition-all font-semibold hover:text-red-700">
                                {item.name}
                            </Link>
                        </li>
                    )
                }
                // every other ones
                else {
                    return (
                        <li className="mb-2" key={item.name}>
                            <Link href={item.url} className="transition-all  dark:text-neutral-300 hover:text-orange-600">
                                {item.name}
                            </Link>
                        </li>
                    )
                }
            })}
        </ul>
    )
})

export default function Footer() {
  return (
    <footer className="bg-amber-300 dark:bg-neutral-950 pt-20 pb-16 px-24 relative bottom-0">
      <div className="pb-4 xl:flex md:pb-12 xl:pb-16">
        <div className="mb-8 lg:mr-24">
            <div className="mb-4 md:mb-6">
                <Link className="text-2xl transition-all font-semibold hover:text-red-700" key="/" href="/">
                    TOBIKROE
                </Link>
            </div>
            <p className="xl:w-72 dark:text-neutral-300">
                Your local one-stop shop for all things ever!
            </p>
        </div>

        <div className="grid grid-cols-2 md:flex md:space-x-20">
            {listFooter}
        </div>
      </div>
      
      <div>
        <hr className="mb-2 md:mb-4 dark:text-neutral-300"/>
        <div className="flex justify-between md:px-6">
            {/* Copyright */}
            <p className="text-neutral-600 dark:text-neutral-300">
                © {new Date().getFullYear()} TOBIKROE
            </p>
            {/* Socials */}
            {/* <ul className="flex space-x-8">
                <li>
                    <a href="/404">
                    <img src="/instagram_icon.png" alt="" className="max-w-6"/>
                </a>
                </li>
                <li>
                    <a href="/404">
                    <img src="/tumblr_icon.png" alt="" className="max-w-6"/>
                    </a>
                </li>
                    <li>
                    <a href="/404">
                        <img src="/youtube_icon.png" alt="" className="max-w-6"/>
                    </a>
                </li>
            </ul> */}
        </div>
      </div>
    </footer>
  )
}
