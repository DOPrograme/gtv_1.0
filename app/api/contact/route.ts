import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Contact from '@/models/Contact'

export async function GET() {
    try {
        await dbConnect()
        
        // Get all contacts, sorted by timestamp (newest first)
        const contacts = await Contact.find({}).sort({ timestamp: -1 })
        
        return NextResponse.json({ success: true, messages: contacts })
    } catch (error) {
        console.error('Error fetching contact messages:', error)
        return NextResponse.json(
            { success: false, message: 'Failed to fetch messages' },
            { status: 500 }
        )
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect()
        const data = await request.json()
        
        // Create new contact document
        const contact = await Contact.create(data)
        
        return NextResponse.json({ 
            success: true, 
            message: 'Message saved successfully',
            contact 
        })
    } catch (error) {
        console.error('Error saving contact form:', error)
        return NextResponse.json(
            { success: false, message: 'Failed to save message' },
            { status: 500 }
        )
    }
}