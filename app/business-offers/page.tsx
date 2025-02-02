import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BusinessOfferList from "../components/business-offer-list"
import EventsList from "../components/events-list"
import NewsList from "../components/news-list"
import Advertisement from "../components/advertisement"

const categories = [
  "Featured Offers",
  "Fixed Return Offers",
  "Startup Business Offers",
  "Sleeping Partners",
  "Joint Ventures",
  "Finance Offers",
  "Exit Plan Offers",
  "Recommended",
  "Real Estate Business Offers",
  "Special Business Offers",
  "High Returns Offers",
  "Secured Business Offers",
]

export default function BusinessOffersPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="relative h-[200px] mb-8 rounded-xl overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Business Offers Banner"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-2 right-2 text-white text-xs">Photo by fauxels from Pexels</div>
      </div>

      <div className="flex gap-8">
        <aside className="w-[200px] flex-shrink-0">
          <Card className="h-[800px]">
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[700px]">
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      {category}
                    </Link>
                  ))}
                </nav>
              </ScrollArea>
            </CardContent>
          </Card>
        </aside>

        <main className="flex-grow">
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All Offers</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-8">
              {categories.map((category) => (
                <BusinessOfferList key={category} category={category} />
              ))}
            </TabsContent>
            <TabsContent value="featured">
              <BusinessOfferList category="Featured Offers" />
            </TabsContent>
            <TabsContent value="new">
              <BusinessOfferList category="New Offers" />
            </TabsContent>
            <TabsContent value="popular">
              <BusinessOfferList category="Popular Offers" />
            </TabsContent>
          </Tabs>
        </main>

        <aside className="w-[300px] flex-shrink-0 space-y-8">
          <EventsList />
          <NewsList />
          <Advertisement />
        </aside>
      </div>
    </div>
  )
}

