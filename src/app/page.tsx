import { BlogPosts } from 'src/app/components/posts'
import Boombox from './components/boombox'
import ChangeTheme from './components/change-theme'
import Todo from './components/todo'

const test = <div className="bg-amber-800">HELLO HELLO WORLD~!!!!!!!</div>

export default function Page() {
    return (
        <section className="max-w-7xl mx-auto flex gap-4 mt-8">
            {/* <aside className="min-w-52">

                Breaking News
                <section className="bg-newspaper mb-4 shadow-md">
                    <h3 className="text-center font-semibold mb-2 border-b-3 border-double">
                        Breaking News! Breaking News!
                    </h3>
                    <p>Marquee is now a deprecated tag!</p>
                </section>

                <section className="border_window ">
                    <ChangeTheme/>
                </section>

            </aside> */}


            <main className="grow">

            <section className="border_window mb-4">
                {/* <marquee className="text-center font-semibold mb-2">Welcome to my silly site!!</marquee> */}
            </section>

            <section className="border_window mb-4">
                <h3 className="text-center font-semibold mb-2">Title</h3>
                This is where you put all your main content
            </section>

            <section className="border_window ">
                This is mainly just for fun at this point.
            </section>

            </main>


            <aside className="min-w-52">

                {/*Todo */}
                <section className="mb-4">
                    <Todo/>
                </section>

                {/* Music player */}
                <Boombox/>

            </aside>
        </section>
    )
}
