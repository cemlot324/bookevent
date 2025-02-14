import { NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'
import { Document, MongoClient } from 'mongodb'

interface VisitCount extends Document {
  _id: string;
  count: number;
}

export async function GET() {
  let client: MongoClient | null = null;
  
  try {
    // Connect to MongoDB with timeout
    client = await Promise.race([
      clientPromise,
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Connection timeout')), 5000)
      )
    ]) as MongoClient;

    console.log('MongoDB connected successfully')

    const db = client.db("beherenow")
    const visits = db.collection<VisitCount>("visits")

    // Test the connection
    await db.command({ ping: 1 })
    console.log('Database ping successful')

    // Ensure collection exists
    const collections = await db.listCollections({ name: 'visits' }).toArray()
    if (collections.length === 0) {
      console.log('Creating visits collection')
      await db.createCollection('visits')
    }

    // Try to find the current count
    let currentCount = await visits.findOne({ _id: 'visitCount' })
    
    if (!currentCount) {
      console.log('Initializing visit counter')
      await visits.insertOne({
        _id: 'visitCount',
        count: 0
      })
    }

    // Increment the counter
    const result = await visits.findOneAndUpdate(
      { _id: 'visitCount' },
      { $inc: { count: 1 } },
      { 
        upsert: true,
        returnDocument: 'after'
      }
    )

    if (!result) {
      throw new Error('No document returned after update')
    }

    console.log('Visit count updated successfully:', result.count)

    return NextResponse.json({ 
      success: true,
      count: result.count,
      message: 'Visit count updated successfully'
    })

  } catch (error) {
    console.error('Visit Counter Error:', error)
    return NextResponse.json({ 
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update visit count',
      details: process.env.NODE_ENV === 'development' ? String(error) : undefined
    }, { 
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
} 