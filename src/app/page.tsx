import { BlogPosts } from 'src/app/components/posts'
// className atributes is rended as class atributes
// JavaScript is written in {}

const test = <div className="bg-amber-800">HELLO HELLO WORLD~!!!!!!!</div>

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto flex gap-4 mt-8">
      <aside className="min-w-52">

        <section className="bg-amber-50 border_window mb-4">
          <h3 className="text-center font-semibold mb-2">Breaking News! Breaking News!</h3>
          <p>I just learned that marquee is deprecated.</p>
        </section>

        <section className="bg-amber-50 border_window ">
          <h3 className="text-center font-semibold mb-2">Site Style</h3>
          
          <ul>
            <li>Light</li>
            <li>Dark</li>
            <li>Marine</li>
            <li>Space</li>
            <li>Katamari</li>
            <li>Custom</li>
          </ul>
        </section>

      </aside>


      <main className="grow">

        <section className="bg-amber-50 border_window mb-4">
          <marquee className="text-center font-semibold mb-2">Welcome to my silly site!!</marquee>
        </section>

        <section className="bg-amber-50 border_window mb-4">
          <h3 className="text-center font-semibold mb-2">Title</h3>
            This is where you put all your main content
        </section>

        <section className="bg-amber-50 border_window ">
          <h3 className="text-center font-semibold mb-2">Title</h3>
            This is mainly just for fun at this point.
        </section>

      </main>


      <aside className="min-w-52">

          <section className="bg-amber-50 border_window mb-4">
          <h3 className="text-center font-semibold mb-2">To-Do List</h3>
              <ul>
                <li>Fix Blog</li>
                <li>Actually learn React</li>
                <li>Set up custom domain and hosting</li>
                <li>yeah</li>
              </ul>
          </section>

          <section className="bg-amber-50 border_window mb-4">
          <h3 className="text-center font-semibold mb-2">Image of the Month</h3>
              <span>Last Changed: </span>
          </section>

          <section className="bg-amber-50 border_window">
          <h3 className="text-center font-semibold mb-2">Hits & Visitors</h3>
              LOREM IPSUM
          </section>

      </aside>
    </section>
  )
}
