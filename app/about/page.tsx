import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto py-4 px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  fill="currentColor"
                />
                <path d="M13 7h-2v6h2V7zm0 8h-2v2h2v-2z" fill="currentColor" />
              </svg>
            </div>
            <h1 className="text-xl font-bold">Synonym Visa Ai</h1>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-gray-800">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-12">About Us</h1>

          <div className="space-y-6 text-gray-600">
            <p>
              I&apos;m an entrepreneur who began my creative journey in university, launching my first studio—YDMD (You
              De Mei De), in my second year at uni. That studio went on to win awards and became a space where
              creativity and impact met.
            </p>

            <p>
              Later, I founded Synonym Lab, a platform designed to reactivate artists&apos; studios by transforming
              their creativity into accessible, in-person experiences for the public.
            </p>

            <p>
              Now, I&apos;m working on my first tech-driven project, bringing together my creative, community, and
              entrepreneurial experience to help more people navigate the Global Talent Visa (GTV) journey.
            </p>

            <p>
              I received my own GTV two years ago and have since supported friends and fellow creatives in preparing
              their successful applications. This project is an extension of that mission: making the process clearer,
              more approachable, and more empowering.
            </p>
          </div>

          <div className="mt-12">
            <Link href="/">
              <Button className="bg-gray-600 hover:bg-gray-700 text-white rounded-full px-8">Start Now</Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="container mx-auto py-6 px-6 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  fill="currentColor"
                />
                <path d="M13 7h-2v6h2V7zm0 8h-2v2h2v-2z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-lg font-bold">SynonymVisa Ai</h2>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link href="/rednote" className="text-gray-500 hover:text-gray-800">
                  Rednote
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-gray-800">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-gray-800">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}
