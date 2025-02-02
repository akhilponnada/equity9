import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

const rentalProjects = [
  {
    title: "City Center Apartments",
    image:
      "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Luxury apartments in the heart of the city with high rental demand.",
    location: "Downtown Metropolitan",
    units: 50,
    averageRent: "$2,500/month",
    occupancyRate: "98%",
    annualReturn: "8-10%",
  },
  {
    title: "Suburban Townhouses",
    image:
      "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Modern townhouses in a growing suburban area with excellent schools.",
    location: "Greenville Suburbs",
    units: 30,
    averageRent: "$1,800/month",
    occupancyRate: "95%",
    annualReturn: "7-9%",
  },
  {
    title: "Beachfront Villas",
    image: "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Exclusive beachfront villas with premium rental rates for vacationers.",
    location: "Coastal Paradise",
    units: 20,
    averageRent: "$5,000/week",
    occupancyRate: "85%",
    annualReturn: "10-12%",
  },
  {
    title: "Student Housing Complex",
    image:
      "https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Modern student apartments near major universities with consistent demand.",
    location: "University District",
    units: 100,
    averageRent: "$800/month",
    occupancyRate: "99%",
    annualReturn: "9-11%",
  },
]

export default function HighRentalProjectsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">High Rental Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {rentalProjects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span>{project.location}</span>
                </div>
                <div className="flex justify-between">
                  <span>Number of Units:</span>
                  <span>{project.units}</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Rent:</span>
                  <span>{project.averageRent}</span>
                </div>
                <div className="flex justify-between">
                  <span>Occupancy Rate:</span>
                  <span>{project.occupancyRate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Return:</span>
                  <span>{project.annualReturn}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Invest Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Invest in High Rental Projects?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Steady cash flow from rental income</li>
          <li>Potential for property value appreciation</li>
          <li>Diversification of investment portfolio</li>
          <li>Tax benefits associated with real estate investments</li>
          <li>Hedge against inflation as rents typically increase over time</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              City Center Apartments fully occupied within first month of opening
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Suburban Townhouses project expands with 20 new units
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Beachfront Villas see surge in bookings for upcoming holiday season
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Webinar: Maximizing Returns on Rental Properties - August 10, 2023
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Virtual Tour: Student Housing Complex - August 17, 2023
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Similar Investment Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rentalProjects.slice(0, 3).map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <p className="text-sm text-gray-600">{project.description}</p>
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

