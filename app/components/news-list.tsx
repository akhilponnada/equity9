import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function NewsList() {
  const news = [
    {
      id: 1,
      title: "New Investment Opportunities in Tech Sector",
      date: "2023-07-10",
      image: "https://source.unsplash.com/featured/?technology&1",
    },
    {
      id: 2,
      title: "Global Market Trends: What Investors Need to Know",
      date: "2023-07-08",
      image: "https://source.unsplash.com/featured/?market&2",
    },
    {
      id: 3,
      title: "Startup Success Story: Local Company Goes International",
      date: "2023-07-06",
      image: "https://source.unsplash.com/featured/?startup&3",
    },
    {
      id: 4,
      title: "Economic Forecast: Experts Predict Growth in Q3",
      date: "2023-07-04",
      image: "https://source.unsplash.com/featured/?economy&4",
    },
    {
      id: 5,
      title: "New Regulations to Impact Small Business Investments",
      date: "2023-07-02",
      image: "https://source.unsplash.com/featured/?business&5",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest News</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <ul className="space-y-4">
            {news.map((item) => (
              <li key={item.id} className="p-2 hover:bg-gray-100 rounded">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.date}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

