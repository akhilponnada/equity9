"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

interface NewsItem {
  title: string
  description: string
  publishedAt: string
  url: string
  source: {
    name: string
  }
}

export default function BusinessNews() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("/api/news?category=business")
        if (!response.ok) throw new Error("Failed to fetch news")
        const data = await response.json()
        setNews(data.articles.slice(0, 5))
      } catch (err) {
        setError("Failed to load news")
        console.error("Error fetching news:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  function getTimeAgo(dateString: string) {
    const now = new Date()
    const date = new Date(dateString)
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60)
      return `${minutes} minutes ago`
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600)
      return `${hours} hours ago`
    } else {
      const days = Math.floor(seconds / 86400)
      return `${days} days ago`
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Business News</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="space-y-4">
            {news.map((item, i) => (
              <div key={i} className="flex items-start space-x-4 border-b last:border-0 pb-4 last:pb-0">
                <div className="flex-grow">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium mb-1 hover:text-blue-600 transition-colors"
                  >
                    {item.title}
                  </a>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{item.source.name}</Badge>
                    <span className="text-sm text-muted-foreground">{getTimeAgo(item.publishedAt)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

