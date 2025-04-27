import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for submissions
const mockSubmissions = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    category: "CV",
    fileName: "john_smith_cv.pdf",
    submittedAt: "2023-05-15 14:32",
  },
  {
    id: "2",
    name: "Emma Johnson",
    email: "emma.j@example.com",
    category: "Media",
    fileName: "emma_portfolio.zip",
    submittedAt: "2023-05-14 09:15",
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "m.chen@example.com",
    category: "Exhibition",
    fileName: "exhibition_catalog.pdf",
    submittedAt: "2023-05-13 16:45",
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "s.williams@example.com",
    category: "Reference Letter",
    fileName: "reference_letter.docx",
    submittedAt: "2023-05-12 11:20",
  },
  {
    id: "5",
    name: "David Lee",
    email: "david.lee@example.com",
    category: "CV",
    fileName: "david_lee_resume.pdf",
    submittedAt: "2023-05-11 13:10",
  },
]

export default function AdminSubmissions() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto py-4 px-6 border-b">
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
            <h1 className="text-xl font-bold">Synonym Visa Ai - Admin</h1>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-800">
                  Back to Site
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-500 hover:text-gray-800">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin/submissions" className="font-medium text-gray-800">
                  Submissions
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">User Submissions</h2>
          <Button className="bg-gray-600 hover:bg-gray-700 text-white">Export Data</Button>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableCaption>A list of recent user submissions</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>File</TableHead>
                <TableHead>Submitted At</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSubmissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium">{submission.id}</TableCell>
                  <TableCell>{submission.name}</TableCell>
                  <TableCell>{submission.email}</TableCell>
                  <TableCell>{submission.category}</TableCell>
                  <TableCell>{submission.fileName}</TableCell>
                  <TableCell>{submission.submittedAt}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>

      <footer className="container mx-auto py-6 px-6 border-t">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">© 2023 Synonym Visa Ai. Admin Portal.</p>
          <p className="text-sm text-gray-500">Version 1.0.0</p>
        </div>
      </footer>
    </div>
  )
}
