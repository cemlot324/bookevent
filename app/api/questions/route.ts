import { NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'

export async function POST(request: Request) {
  try {
    const questionData = await request.json()
    const client = await clientPromise
    const db = client.db("beherenow")
    const collection = db.collection("questions")

    // Add timestamp to the question
    const questionWithTimestamp = {
      ...questionData,
      submittedAt: new Date(),
    }

    await collection.insertOne(questionWithTimestamp)

    return NextResponse.json({ 
      success: true,
      message: 'Question submitted successfully!' 
    })

  } catch (error) {
    console.error('Database Error:', error)
    return NextResponse.json({ 
      error: 'Failed to submit question',
      success: false 
    }, { status: 500 })
  }
} 