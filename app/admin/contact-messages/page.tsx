'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ContactMessage {
    name: string
    wechat: string
    email: string
    message: string
    timestamp: string
}

export default function ContactMessages() {
    const [messages, setMessages] = useState<ContactMessage[]>([])

    useEffect(() => {
        // Function to read all JSON files from the submissions directory
        const fetchMessages = async () => {
            try {
                const response = await fetch('/api/contact')
                const data = await response.json()
                if (data.success) {
                    setMessages(data.messages)
                }
            } catch (error) {
                console.error('Error fetching messages:', error)
            }
        }

        fetchMessages()
    }, [])

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">Contact Messages</h1>
            <ScrollArea className="h-[600px]">
                {messages.map((message, index) => (
                    <Card key={index} className="mb-4">
                        <CardHeader>
                            <CardTitle className="text-lg">
                                From: {message.name}
                            </CardTitle>
                            <div className="text-sm text-gray-500">
                                {new Date(message.timestamp).toLocaleString()}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-2">
                                <div>
                                    <strong>WeChat:</strong> {message.wechat}
                                </div>
                                <div>
                                    <strong>Email:</strong> {message.email}
                                </div>
                                <div>
                                    <strong>Message:</strong>
                                    <p className="mt-1">{message.message}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </ScrollArea>
        </div>
    )
}