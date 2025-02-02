import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Advertisement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Advertisement</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="https://source.unsplash.com/featured/?advertisement,business"
            alt="Advertisement"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
            Sponsored Content
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

