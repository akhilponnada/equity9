import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const buybackOffers = [
  {
    title: "Tech Startup Shares",
    image:
      "https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Opportunity to invest in a high-growth tech startup with guaranteed buyback.",
    buybackPrice: "120% of investment",
    lockInPeriod: "2 years",
  },
  {
    title: "E-commerce Platform",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Invest in a rapidly expanding e-commerce platform with attractive buyback terms.",
    buybackPrice: "130% of investment",
    lockInPeriod: "3 years",
  },
  {
    title: "Renewable Energy Project",
    image:
      "https://images.pexels.com/photos/9875430/pexels-photo-9875430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Support green energy initiatives with a secure investment and buyback option.",
    buybackPrice: "125% of investment",
    lockInPeriod: "5 years",
  },
  {
    title: "AI Research Firm",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Invest in cutting-edge AI research with a guaranteed exit strategy.",
    buybackPrice: "140% of investment",
    lockInPeriod: "4 years",
  },
]

export default function BuybackOffersPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Buyback Offers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {buybackOffers.map((offer, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{offer.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src={offer.image || "/placeholder.svg"}
                alt={offer.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Buyback Price: {offer.buybackPrice}</span>
                <span>Lock-in Period: {offer.lockInPeriod}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View Offer Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Buyback Offer Comparison</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Offer</TableHead>
              <TableHead>Buyback Price</TableHead>
              <TableHead>Lock-in Period</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {buybackOffers.map((offer, index) => (
              <TableRow key={index}>
                <TableCell>{offer.title}</TableCell>
                <TableCell>{offer.buybackPrice}</TableCell>
                <TableCell>{offer.lockInPeriod}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Tech Startup XYZ announces successful buyback program
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              E-commerce giant offers attractive buyback terms for early investors
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Renewable Energy Project completes buyback ahead of schedule
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Webinar: Understanding Buyback Offers - July 5, 2023
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Investor Workshop: Evaluating Buyback Terms - July 12, 2023
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Similar Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {buybackOffers.slice(0, 3).map((offer, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{offer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <p className="text-sm text-gray-600">{offer.description}</p>
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

