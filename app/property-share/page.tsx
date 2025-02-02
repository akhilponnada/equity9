import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const properties = [
  {
    title: "Luxury Apartment Complex",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Invest in a high-end residential complex in a prime location.",
    totalValue: "$50,000,000",
    availableShares: "20%",
    minInvestment: "$50,000",
    expectedReturn: "8-10% annually",
    funded: 65,
  },
  {
    title: "Commercial Office Space",
    image:
      "https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Own a share of a premium office building in the business district.",
    totalValue: "$75,000,000",
    availableShares: "15%",
    minInvestment: "$100,000",
    expectedReturn: "7-9% annually",
    funded: 80,
  },
  {
    title: "Retail Shopping Center",
    image:
      "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Invest in a bustling shopping center with high foot traffic.",
    totalValue: "$40,000,000",
    availableShares: "25%",
    minInvestment: "$25,000",
    expectedReturn: "9-11% annually",
    funded: 45,
  },
  {
    title: "Industrial Warehouse",
    image:
      "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Own a share of a modern logistics facility in a strategic location.",
    totalValue: "$30,000,000",
    availableShares: "30%",
    minInvestment: "$75,000",
    expectedReturn: "8-10% annually",
    funded: 55,
  },
]

export default function PropertySharePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Property Share Investments</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {properties.map((property, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{property.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600 mb-4">{property.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total Value:</span>
                  <span>{property.totalValue}</span>
                </div>
                <div className="flex justify-between">
                  <span>Available Shares:</span>
                  <span>{property.availableShares}</span>
                </div>
                <div className="flex justify-between">
                  <span>Min. Investment:</span>
                  <span>{property.minInvestment}</span>
                </div>
                <div className="flex justify-between">
                  <span>Expected Return:</span>
                  <span>{property.expectedReturn}</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Funding Progress</span>
                  <span>{property.funded}%</span>
                </div>
                <Progress value={property.funded} className="w-full" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Invest Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Invest in Property Shares?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Fractional ownership in prime real estate</li>
          <li>Lower barrier to entry compared to traditional real estate investments</li>
          <li>Diversify your portfolio with tangible assets</li>
          <li>Potential for both rental income and capital appreciation</li>
          <li>Professional management of properties</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Luxury Apartment Complex fully funded within 48 hours
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Commercial Office Space reports record occupancy rates
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Retail Shopping Center announces expansion plans
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Webinar: Introduction to Property Share Investing - July 20, 2023
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Virtual Property Tour: Luxury Apartment Complex - July 27, 2023
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Similar Investment Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {properties.slice(0, 3).map((property, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{property.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <p className="text-sm text-gray-600">{property.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

