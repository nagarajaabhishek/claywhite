import Link from "next/link";

export default function NewsEventsPage() {
  return (
    <section className="section-padding bg-white text-charcoal">
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">News and Events</h1>
        <p className="text-lg text-gray-600 mb-10">
          Stay up to date with the latest WH Advisory Services articles and posts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/news-events/articles" className="block border border-gray-200 rounded-lg p-6 hover:border-gold transition-colors">
            <h2 className="text-2xl font-bold mb-2">Articles</h2>
            <p className="text-gray-600">Long-form insights and thought leadership.</p>
          </Link>
          <Link href="/news-events/posts" className="block border border-gray-200 rounded-lg p-6 hover:border-gold transition-colors">
            <h2 className="text-2xl font-bold mb-2">Posts</h2>
            <p className="text-gray-600">Short updates, announcements, and highlights.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
