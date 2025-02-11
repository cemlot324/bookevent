import { NextResponse } from 'next/server'
import mailchimp from '@mailchimp/mailchimp_marketing'

if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_API_SERVER || !process.env.MAILCHIMP_LIST_ID) {
  throw new Error('Missing Mailchimp API configuration')
}

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER
})

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID as string, {
      email_address: email,
      status: 'subscribed'
    })

    return NextResponse.json({ 
      success: true,
      message: 'Successfully subscribed!' 
    })

  } catch (error) {
    console.error('Mailchimp Error:', error)
    return NextResponse.json({ 
      error: 'Failed to subscribe',
      success: false 
    }, { status: 500 })
  }
} 