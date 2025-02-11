import { NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'
import { Document } from 'mongodb'

interface VisitCount extends Document {
  _id: string;
  count: number;
}

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("beherenow")
    const collection = db.collection<VisitCount>("visits")

    // Find the current count document or create it if it doesn't exist
    const result = await collection.findOneAndUpdate(
      { _id: 'visitCount' },
      { $inc: { count: 1 } },
      { 
        upsert: true,
        returnDocument: 'after'
      }
    )

    const count = result?.count || 0

    return NextResponse.json({ 
      success: true,
      count: count
    })

  } catch (error) {
    console.error('Database Error:', error)
    return NextResponse.json({ 
      error: 'Failed to get visit count',
      success: false 
    }, { status: 500 })
  }
} 