import Link from 'next/link'
import Image from 'next/image'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-amber-300 dark:bg-neutral-950 pt-20 pb-16 px-24 relative bottom-0">
      <div className="flex pb-16">
        <div className="mr-24">
          <div className="flex mb-6">
            <Image src="" alt="" className=""/>
            <Link className="text-2xl transition-all font-semibold hover:text-red-700" key="/" href="/">
              TOBIKROE
            </Link>
          </div>
          <p className="w-72 dark:text-neutral-300">Description here lol</p>
        </div>
        <div className="flex space-x-20">
          <ul>
            <li className="mb-6">
              <Link href="/" className="transition-all font-semibold hover:text-red-700">Home</Link>
            </li>
            <li className="mb-2">
              <Link href="/about" className="transition-all  dark:text-neutral-300 hover:text-orange-600">About</Link>
            </li>
            <li className="mb-2">
              <Link href="/blog" className="transition-all  dark:text-neutral-300 hover:text-orange-600">Blog</Link>
            </li>
            <li className="mb-2">
              <Link href="/404" className="transition-all  dark:text-neutral-300 hover:text-orange-600">FAQ</Link>
            </li>
          </ul>
          <ul>
            <li className="mb-6">
              <Link href="/404" className="transition-all font-semibold hover:text-red-700">Programming</Link>
            </li>
            <li className="mb-2">
              <Link href="/404" className="transition-all  dark:text-neutral-300 hover:text-orange-600">Web Dev</Link>
            </li>
            <li className="mb-2">
              <Link href="/404" className="transition-all  dark:text-neutral-300 hover:text-orange-600">Robotic</Link>
            </li>
          </ul>
          <ul>
            <li className="mb-6">
              <Link href="/404" className="transition-all font-semibold hover:text-red-700">Art</Link>
            </li>
            <li className="mb-2">
              <Link href="/art/oular" className="transition-all  dark:text-neutral-300 hover:text-orange-600">Oular System</Link>
            </li>
            <li className="mb-2">
              <Link href="/404" className="transition-all  dark:text-neutral-300 hover:text-orange-600">Fanart</Link>
            </li>
            <li className="mb-2">
              <Link href="/404" className="transition-all  dark:text-neutral-300 hover:text-orange-600">Illustration</Link>
            </li>
            <li className="mb-2">
              <Link href="/404" className="transition-all  dark:text-neutral-300 hover:text-orange-600">Sketches</Link>
            </li>
            <li className="mb-2">
              <Link href="/404" className="transition-all  dark:text-neutral-300 hover:text-orange-600">Animation</Link>
            </li>
          </ul>
          <ul>
            <li className="mb-6">
              <Link href="/404" className="transition-all font-semibold hover:text-red-700">Misc</Link>
            </li>
            <li className="mb-2">
              <Link href="/404" className="transition-all dark:text-neutral-300 hover:text-orange-600">Life Science</Link>
            </li>
            <li className="mb-2">
              <Link href="/404" className="transition-all dark:text-neutral-300 hover:text-orange-600">Food</Link>
            </li>
            <li className="mb-2">
              <Link href="/404" className="transition-all dark:text-neutral-300 hover:text-orange-600">Plants</Link>
            </li>
          </ul>
          <ul>
            <li className="mb-6">
              <Link href="/404" className="transition-all font-semibold hover:text-red-700">Store</Link>
            </li>
            <li className="mb-2">
              <Link href="/404" className="transition-all dark:text-neutral-300 hover:text-orange-600">Cart</Link>
            </li>
            <li className="mb-2">
              <Link href="/404" className="transition-all dark:text-neutral-300 hover:text-orange-600">Saved</Link>
            </li>
            <li className="mb-2">
              <Link href="/404" className="transition-all dark:text-neutral-300 hover:text-orange-600">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div>
        <hr className="mb-4 dark:text-neutral-300"/>
        <div className="flex justify-between px-6">
          <p className="text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} TOBIKROE
          </p>
          <ul className="flex space-x-8">
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
          </ul>
        </div>
      </div>
    </footer>
  )
}
