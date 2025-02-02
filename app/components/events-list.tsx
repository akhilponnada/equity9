import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function EventsList() {
  const events = [
    {
      id: 1,
      title: "Investor Conference",
      date: "2023-07-15",
      image:
        "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Startup Pitch Day",
      date: "2023-07-22",
      image:
        "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Business Networking Event",
      date: "2023-07-29",
      image:
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Financial Workshop",
      date: "2023-08-05",
      image:
        "https://images.pexels.com/photos/5466784/pexels-photo-5466784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Tech Innovation Summit",
      date: "2023-08-12",
      image:
        "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <ul className="space-y-4">
            {events.map((event) => (
              <li key={event.id} className="p-2 hover:bg-gray-100 rounded">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.date}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
        <p className="text-xs text-gray-500 mt-2 text-center">Images from Pexels</p>
      </CardContent>
    </Card>
  )
}

