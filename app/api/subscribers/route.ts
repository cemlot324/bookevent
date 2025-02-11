import { NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    const client = await clientPromise
    const db = client.db("beherenow")
    const collection = db.collection("subscribers")

    // Check if subscriber already exists
    const existing = await collection.findOne({ email })
    if (existing) {
      return NextResponse.json({ 
        message: 'Already subscribed',
        success: true 
      })
    }

    // Add new subscriber
    await collection.insertOne({
      email,
      subscribedAt: new Date(),
    })

    return NextResponse.json({ 
      message: 'Subscription successful',
      success: true 
    })

  } catch (error) {
    console.error('Database Error:', error)
    return NextResponse.json({ 
      error: 'Failed to add subscriber',
      success: false 
    }, { status: 500 })
  }
} 