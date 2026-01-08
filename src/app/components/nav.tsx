import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
  '/about': {
    name: 'About',
  },
  '/art/oular': {
    name: 'Oular System',
  },
  // '/store': {
  //   name: 'Store',
  // },
  // '/project': {
  //   name: 'Project',
  // },
}

export function Navbar() {
  return (
    <header className="bg-white dark:bg-neutral-950 sticky top-0 ">
      <div className="pt-8 pb-2" >
        <Link key="/" href="/">
          <img src="/title.png" alt="" className="mx-auto h-14"/>
        </Link>
      </div>
      <nav id="nav" className="text-center">
        <div className="inline-flex space-x-2 w-fit mb-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link key={path} href={path}
                      className="inline-block transition-all text-stone-700 dark:text-white hover:text-amber-300 py-2 px-4">
                  {name}
                </Link>
              )
            })}
        </div>
      </nav>
      <hr className='text-gray-300 dark:text-neutral-800'/>
    </header>
  )
}
