"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function HeroBanner() {
  const [text, setText] = useState("")
  const fullText = "Invest in the Future with Equity9"

  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [adImage, setAdImage] = useState("")

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news?category=business")
        if (!response.ok) throw new Error("Failed to fetch news")
        const data = await response.json()
        setNews(data.articles.slice(0, 5))
      } catch (err) {
        setError("Failed to load news")
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  const fetchAdImage = async () => {
    try {
      const response = await fetch('/api/pexels?query=business&per_page=1')
      if (!response.ok) {
        const errorData = await response.json()
        console.error('Pexels API error:', errorData)
        throw new Error(errorData.error || 'Failed to fetch from internal API')
      }
      const data = await response.json()
      const imageUrl = data.photos?.[0]?.src?.large2x
      if (imageUrl) {
        setAdImage(imageUrl)
      } else {
        // Fallback image if no results
        setAdImage("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg")
      }
    } catch (error) {
      console.error('Failed to load ad image:', error)
      // Set fallback image on error
      setAdImage("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg")
    }
  }

  useEffect(() => {
    console.log("Pexels API Key:", process.env.NEXT_PUBLIC_PEXELS_API_KEY ? "Set" : "Not set")
    fetchAdImage()
  }, [])

  return (
    <div className="container mx-auto py-2">
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-3xl"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80)",
              }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4 min-h-[60px]">{text}</h1>
                <p className="text-xl mb-8">Join the crowd and become an equity partner in exciting ventures</p>
                <Button size="lg" className="bg-[#e31837] hover:bg-[#e31837]/90 text-white" asChild>
                  <Link href="/projects">Explore Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] bg-white rounded-3xl overflow-hidden shadow-lg">
          <div className="p-4 border-b">
            <h3 className="font-semibold text-lg">Business Trends</h3>
          </div>
          <div className="h-[352px] overflow-auto" id="paytrend-container">
            {adImage && (
              <div className="mb-4">
                <img src={adImage || "/placeholder.svg"} alt="Business Ad" className="w-full h-40 object-cover" />
              </div>
            )}
            {loading ? (
              <div className="p-4 space-y-4">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="space-y-3 mt-4">
                    <div className="h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4 p-4">
                {news.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-sm mb-2">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

