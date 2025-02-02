import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface InnerPageBannerProps {
  title: string
  subtitle?: string
  imageUrl: string
}

async function fetchStockData() {
  const url =
    "https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&datatype=json"
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY as string,
      "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return result["Time Series (Daily)"]
  } catch (error) {
    console.error("Error fetching stock data:", error)
    return null
  }
}

export default async function InnerPageBanner({ title, subtitle, imageUrl }: InnerPageBannerProps) {
  const stockData = await fetchStockData()

  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-[70%]">
          <div className="relative h-[196px] rounded-3xl overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
              priority
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                {subtitle && <p className="text-lg">{subtitle}</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[30%]">
          <Card>
            <CardHeader>
              <CardTitle>Stock Data</CardTitle>
            </CardHeader>
            <CardContent>
              {stockData ? (
                <div>
                  <h3 className="font-semibold mb-2">Microsoft (MSFT) Stock</h3>
                  {Object.entries(stockData)
                    .slice(0, 5)
                    .map(([date, values]: [string, any]) => (
                      <div key={date} className="mb-2">
                        <p className="font-medium">{date}</p>
                        <p>Open: ${Number.parseFloat(values["1. open"]).toFixed(2)}</p>
                        <p>Close: ${Number.parseFloat(values["4. close"]).toFixed(2)}</p>
                      </div>
                    ))}
                </div>
              ) : (
                <p>Failed to load stock data. Please try again later.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

