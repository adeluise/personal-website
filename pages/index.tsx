import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>My Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to My Personal Website
        </h1>
        <p className="text-xl text-center">
          This is a boilerplate for a personal website using Next.js and Tailwind CSS.
        </p>
      </main>

      <footer className="text-center py-4">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}