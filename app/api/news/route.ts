import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category") || "business"
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: "News API key is not configured" },
      { status: 500 }
    )
  }

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
    )

    if (!response.ok) {
      throw new Error("News API request failed")
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("News API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    )
  }
}

