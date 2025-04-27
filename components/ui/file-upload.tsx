"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload } from "lucide-react"

export function FileUpload() {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div
      className={`border-2 ${
        isDragging ? "border-gray-500 bg-gray-50" : "border-gray-300"
      } rounded-lg p-8 w-full max-w-md aspect-square flex flex-col items-center justify-center text-center cursor-pointer`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
      {file ? (
        <div className="space-y-2">
          <p className="font-medium">File selected:</p>
          <p className="text-gray-600">{file.name}</p>
        </div>
      ) : (
        <>
          <Upload className="h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-400">
            Drag & drop your document here,
            <br />
            and we&apos;ll instantly match it with the perfect media.
          </p>
        </>
      )}
    </div>
  )
}
