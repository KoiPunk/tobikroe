import Link from 'next/link'
import { formatDate, getBlogPosts } from 'src/app/(blog)/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          }
          return 1
        })

        // Blog post thumbnail
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 outline outline-gray-200 shadow"
            href={`/blog/${post.slug}`}
          >
            <div className="">
              {/* Cover image */}
              <img src="" alt=""/>

              <div className="pt-6 pb-7 px-6">
                <div className="text-neutral-600 dark:text-neutral-400 flex text-xs tabular-nums mb-3">
                  {/* Date */}
                  <p className="mr-4 my-auto">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>

                  {/* TODO: Article read time */}
                  <p className="grow my-auto">3 min</p>

                  {/* TODO: Menu to share and more */}
                  <p className="font-bold text-xl">⋮</p>
                </div>
                
                <p className="text-neutral-900 dark:text-neutral-100 text-xl font-semibold mb-4">
                  {post.metadata.title}
                </p>
                <p className="">
                  Short description
                </p>
              </div>


            </div>
          </Link>
        ))}
    </div>
  )
}
