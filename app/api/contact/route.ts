import { NextResponse } from 'next/server'
import { writeFile, readdir, readFile } from 'fs/promises'
import path from 'path'

export async function GET() {
    try {
        const submissionsDir = path.join(process.cwd(), 'public', 'submissions')
        
        // Read all files in the submissions directory
        const files = await readdir(submissionsDir)
        const jsonFiles = files.filter(file => file.startsWith('contact_') && file.endsWith('.json'))
        
        // Read the content of each file
        const messagesPromises = jsonFiles.map(async (file) => {
            const content = await readFile(path.join(submissionsDir, file), 'utf-8')
            return JSON.parse(content)
        })
        
        const messages = await Promise.all(messagesPromises)
        
        // Sort messages by timestamp, newest first
        messages.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        
        return NextResponse.json({ success: true, messages })
    } catch (error) {
        console.error('Error reading contact messages:', error)
        return NextResponse.json(
            { success: false, message: 'Failed to fetch messages' },
            { status: 500 }
        )
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json()
        
        // Add timestamp to the data
        const submission = {
            ...data,
            timestamp: new Date().toISOString()
        }

        // Create a filename with timestamp
        const filename = `contact_${Date.now()}.json`
        
        // Save to the public directory in a submissions folder
        const filePath = path.join(process.cwd(), 'public', 'submissions', filename)
        
        // Ensure the submissions directory exists and save the file
        await writeFile(filePath, JSON.stringify(submission, null, 2))

        return NextResponse.json({ success: true, message: 'Message saved successfully' })
    } catch (error) {
        console.error('Error saving contact form:', error)
        return NextResponse.json(
            { success: false, message: 'Failed to save message' },
            { status: 500 }
        )
    }
}