import { NextResponse } from 'next/server'
import mailchimp from '@mailchimp/mailchimp_marketing'

// Validate environment variables and assert types
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY as string
const MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_SERVER as string
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID as string

// Early validation
if (!MAILCHIMP_API_KEY || !MAILCHIMP_API_SERVER || !MAILCHIMP_LIST_ID) {
  throw new Error('Missing Mailchimp API configuration')
}

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_API_SERVER
})

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ 
        success: false,
        error: 'Email is required' 
      }, { status: 400 })
    }

    // Use the validated LIST_ID
    await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, {
      email_address: email,
      status: 'subscribed',
    })

    return NextResponse.json({ 
      success: true,
      message: 'Successfully subscribed!' 
    })

  } catch (error: any) {
    console.error('Mailchimp error:', error?.response?.body || error)

    // Return 200 if already subscribed
    if (error.response?.body?.title === 'Member Exists') {
      return NextResponse.json({ 
        success: true,
        message: 'You\'re already subscribed!' 
      })
    }

    return NextResponse.json({ 
      success: false,
      error: 'Failed to subscribe. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error?.message : undefined
    }, { status: 500 })
  }
} 