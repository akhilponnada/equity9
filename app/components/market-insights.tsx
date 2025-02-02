"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bitcoin, BarChart3, DollarSign, RefreshCcw } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface NewsItem {
  title: string
  description: string
  url: string
  publishedAt: string
  source: {
    name: string
  }
}

interface MarketNews {
  crypto: NewsItem[]
  stocks: NewsItem[]
  forex: NewsItem[]
}

async function fetchMarketNews(category: string): Promise<NewsItem[]> {
  try {
    const res = await fetch(`/api/market-news?category=${category}`)
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
    const data = await res.json()
    return data.articles.slice(0, 5)
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error)
    throw error
  }
}

export default function MarketInsights() {
  const [news, setNews] = useState<MarketNews>({ crypto: [], stocks: [], forex: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function refreshNews() {
    setLoading(true)
    setError(null)
    try {
      const [cryptoNews, stockNews, forexNews] = await Promise.all([
        fetchMarketNews("crypto"),
        fetchMarketNews("stocks"),
        fetchMarketNews("forex"),
      ])

      setNews({
        crypto: cryptoNews,
        stocks: stockNews,
        forex: forexNews,
      })
    } catch (err) {
      setError("Failed to load market insights")
      console.error("Error fetching market news:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refreshNews()
  }, [])

  function getTimeAgo(dateString: string) {
    const now = new Date()
    const date = new Date(dateString)
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60)
      return `${minutes}m ago`
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600)
      return `${hours}h ago`
    } else {
      const days = Math.floor(seconds / 86400)
      return `${days}d ago`
    }
  }

  const NewsSection = ({ title, icon: Icon, news: items }: { title: string; icon: any; news: NewsItem[] }) => (
    <Card className="overflow-hidden">
      <CardHeader
        className={`bg-gradient-to-r ${
          title === "Crypto Market"
            ? "from-blue-500 to-blue-600"
            : title === "Stock Market"
              ? "from-green-500 to-green-600"
              : "from-purple-500 to-purple-600"
        } text-white`}
      >
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center">
            <Icon className="mr-2 h-6 w-6" />
            {title}
          </CardTitle>
          <Button variant="ghost" size="icon" className="text-white hover:text-white/90" onClick={refreshNews}>
            <RefreshCcw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64 overflow-y-auto space-y-2 mt-4">
          {loading ? (
            Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))
          ) : error ? (
            <p className="text-sm text-red-500">{error}</p>
          ) : (
            items.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 hover:bg-gray-100 rounded transition-colors"
              >
                <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                  <span>{item.source.name}</span>
                  <span>•</span>
                  <span>{getTimeAgo(item.publishedAt)}</span>
                </div>
              </a>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <NewsSection title="Crypto Market" icon={Bitcoin} news={news.crypto} />
      <NewsSection title="Stock Market" icon={BarChart3} news={news.stocks} />
      <NewsSection title="Forex Market" icon={DollarSign} news={news.forex} />
    </div>
  )
}

