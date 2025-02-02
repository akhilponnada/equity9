"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

interface StockData {
  symbol: string
  lastPrice: number
  change: number
  percentChange: number
}

// Simulated stock data since we don't have a real API key
const mockStockData: StockData[] = [
  {
    symbol: "NIFTY 50",
    lastPrice: 19789.45,
    change: 234.75,
    percentChange: 1.2,
  },
  {
    symbol: "SENSEX",
    lastPrice: 66598.91,
    change: 487.23,
    percentChange: 0.74,
  },
  {
    symbol: "BANKNIFTY",
    lastPrice: 45678.3,
    change: -123.45,
    percentChange: -0.27,
  },
  {
    symbol: "RELIANCE",
    lastPrice: 2567.8,
    change: 45.6,
    percentChange: 1.81,
  },
  {
    symbol: "TCS",
    lastPrice: 3456.75,
    change: -23.45,
    percentChange: -0.67,
  },
]

export default function YouTubeEmbed() {
  const [stockData, setStockData] = useState<StockData[]>(mockStockData)
  const [lastUpdated, setLastUpdated] = useState<string>("")

  useEffect(() => {
    const updateLastUpdated = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      setLastUpdated(`${hours}:${minutes}:${seconds}`)
    }

    // Update initial time
    updateLastUpdated()

    // Simulate real-time updates every 30 seconds
    const interval = setInterval(() => {
      // Simulate price changes
      const updatedData = stockData.map((stock) => ({
        ...stock,
        lastPrice: stock.lastPrice * (1 + (Math.random() * 0.02 - 0.01)), // ±1% change
        change: stock.lastPrice * (Math.random() * 0.02 - 0.01),
        percentChange: Math.random() * 2 - 1, // ±1% change
      }))
      setStockData(updatedData)
      updateLastUpdated()
    }, 30000)

    return () => clearInterval(interval)
  }, [stockData])

  return (
    <div className="container mx-auto py-8">
      <div className="flex space-x-4">
        <div className="w-1/2">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Invest in Stock Market</h2>
            <div className="text-sm text-gray-500 mb-4">Last Updated: {lastUpdated}</div>
            <div className="space-y-4">
              {stockData.map((stock) => (
                <div key={stock.symbol} className="flex justify-between items-center border-b pb-2">
                  <div className="font-medium">{stock.symbol}</div>
                  <div className="text-right">
                    <div className="font-semibold">₹{stock.lastPrice.toFixed(2)}</div>
                    <div className={`text-sm ${stock.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {stock.change >= 0 ? "▲" : "▼"} {Math.abs(stock.change).toFixed(2)} (
                      {Math.abs(stock.percentChange).toFixed(2)}%)
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="w-1/2 flex flex-col">
          <h2 className="text-3xl font-bold mb-4 text-center">Featured Video</h2>
          <div className="flex-grow relative">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

