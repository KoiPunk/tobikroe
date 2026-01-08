import { BlogPosts } from 'src/app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="max-w-5xl mx-auto">
      <h1 className="font-semibold text-2xl mt-16 mb-6 ">Blog</h1>
      
      <div className="flex">
        <div>
          <BlogPosts />
        </div>
      </div>
    </section>
  )
}
