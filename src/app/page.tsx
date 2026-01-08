import { BlogPosts } from 'src/app/components/posts'

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto flex gap-4 mt-8">
      <aside className="bg-amber-200 min-w-52">
        <section className="mb-4">
          LOREM IPSUM
        </section>
        <section className="">
          LOREM IPSUM
        </section>
      </aside>

      <main className="bg-amber-400 grow">
        <section className="mb-4">
            Hello! This is a introduction description stuff
        </section>
        <section className="mb-4">
            This is where you put all your main content
        </section>
        <section className="">
            This is mainly just for fun at this point.
        </section>
      </main>

      <aside className="bg-amber-200 min-w-52">
          <section className="">
              LOREM IPSUM
          </section>
      </aside>
    </section>
  )
}
