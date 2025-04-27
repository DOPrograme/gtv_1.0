"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function PressKits() {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const router = useRouter()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the file upload here
    router.push("/submission-success")
  }

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
          <h1 className="text-5xl font-bold text-center mb-12">Press Kit</h1>

          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div
              className={`border-2 ${
                isDragging ? "border-gray-500 bg-gray-50" : "border-gray-300"
              } rounded-lg p-8 w-full max-w-3xl aspect-[16/9] flex flex-col items-center justify-center text-center cursor-pointer`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={(e) => e.target.files && e.target.files[0] && setFile(e.target.files[0])}
              />
              {file ? (
                <div className="space-y-2">
                  <p className="font-medium">File selected:</p>
                  <p className="text-gray-600">{file.name}</p>
                </div>
              ) : (
                <p className="text-gray-400">
                  Drag & drop your document here, and we&apos;ll instantly match it with the perfect media.
                </p>
              )}
            </div>

            <Button type="submit" className="mt-8 bg-gray-600 hover:bg-gray-700 text-white rounded-full px-12 py-2">
              Submit
            </Button>
          </form>

          <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
            We share artists&apos; profiles with our partners, who recommend them to over 30 magazines—helping more
            people discover their talent.
          </p>
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
