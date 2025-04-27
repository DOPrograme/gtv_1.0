import Image from "next/image"
import Link from "next/link"

export default function SubmissionSuccess() {
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
          <div className="md:w-1/3">
            <Image
              src="/images/figure-illustration.png"
              width={300}
              height={400}
              alt="Thank you illustration"
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:w-2/3 space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-bold">Thanks you for your submission!</h1>
            <p className="text-gray-600">
              We appreciate you taking the time to provide the necessary information. We will be in touch shortly.
            </p>
            <p className="text-gray-600">
              Your document submission has been received and is currently under review. We will provide you with an
              update as soon as possible
            </p>
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
