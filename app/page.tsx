import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
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
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            Navigating the UK Global Talent Visa Application Process
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Streamlining Your Paperwork: A Comprehensive Tool for Organizing Your UK Global Talent Visa Documents
          </p>
          <div className="mt-8 flex justify-center">
            <Image
              src="/images/hero-illustration.png"
              width={400}
              height={300}
              alt="UK Global Talent Visa illustration"
              className="max-w-full h-auto"
            />
          </div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Elevate Your UK Global Talent Visa Application: Our User-Friendly Platform Ensures a Smooth and Successful
            Journey
          </p>
        </section>

        {/* Evidence Check Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Evidence Check</h2>
              <p className="mt-4 text-gray-600">
                Unlock the full potential of your UK Global Talent Visa application with our intuitive platform.
                Seamlessly organize your documents, track progress, and stay on top of all requirements.
              </p>
              <Link href="/evidence-check">
                <Button className="mt-6 bg-gray-600 hover:bg-gray-700 text-white rounded-full px-8">Start Now</Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/evidence-check-illustration.png"
                width={350}
                height={250}
                alt="Evidence Check illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Press Kits Section */}
        <section className="container mx-auto px-6 py-16 bg-gray-50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/images/press-kits-illustration.png"
                width={350}
                height={250}
                alt="Press Kits illustration"
                className="max-w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">Press Kits</h2>
              <p className="mt-4 text-gray-600">
                Need help with media materials for your UK Global Talent Visa? Our team is here to guide you every step
                of the way, from your first draft to the final submission.
              </p>
              <Link href="/press-kits">
                <Button className="mt-6 bg-gray-600 hover:bg-gray-700 text-white rounded-full px-8">Start Now</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Template Kit Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Template Kit</h2>
              <p className="mt-4 text-gray-600">
                Make your UK Global Talent Visa application easier with our platform, create recommendation letters
                simply and professionally.
              </p>
              <Button className="mt-6 bg-gray-600 hover:bg-gray-700 text-white rounded-full px-8" disabled>
                Coming Soon
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/template-kit-illustration.png"
                width={350}
                height={250}
                alt="Template Kit illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Document Checklist Section */}
        <section className="container mx-auto px-6 py-16 bg-gray-50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <Image
                src="/images/document-checklist-illustration.png"
                width={350}
                height={250}
                alt="Document Checklist illustration"
                className="max-w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">Document Checklist</h2>
              <p className="mt-4 text-gray-600">
                Ensure your UK Global Talent Visa application is complete and ready for submission with our
                comprehensive document management tools.
              </p>
              <Button className="mt-6 bg-gray-600 hover:bg-gray-700 text-white rounded-full px-8" disabled>
                Coming Soon
              </Button>
            </div>
          </div>
        </section>
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
