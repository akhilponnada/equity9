import { NextResponse } from "next/server"

// Mark this route as dynamic
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("query") || "business"
  const perPage = searchParams.get("per_page") || "1"
  
  // Remove 'Bearer ' prefix if it exists in the environment variable
  const apiKey = process.env.NEXT_PUBLIC_PEXELS_API_KEY?.replace('Bearer ', '')

  if (!apiKey) {
    console.error("Pexels API key is missing")
    return NextResponse.json(
      { error: "Pexels API key is not configured" },
      { status: 500 }
    )
  }

  try {
    console.log("Attempting to fetch from Pexels API...")
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        cache: 'no-store'
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`Pexels API error: Status ${response.status}, Response:`, errorText)
      throw new Error(`Pexels API request failed: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    
    if (!data.photos || !data.photos.length) {
      console.warn("No photos found in Pexels API response")
      return NextResponse.json({ 
        photos: [{
          src: {
            large2x: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
          }
        }]
      })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Detailed Pexels API error:", error)
    // Return a fallback response instead of an error
    return NextResponse.json({
      photos: [{
        src: {
          large2x: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        }
      }]
    })
  }
} 