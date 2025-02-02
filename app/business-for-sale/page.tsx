import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { MapPin, FileIcon as FilePdf } from "lucide-react"

const businesses = [
  {
    title: "Established Restaurant",
    image:
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Well-known restaurant with loyal customer base and prime location.",
    location: "Downtown, Major City",
    annualRevenue: "$1.5M",
    employees: 25,
    reasonForSale: "Owner retiring",
    saleType: "Full sale",
    askingPrice: "$2.8M",
    documents: [
      { name: "Financial Statements", type: "pdf" },
      { name: "Business Overview", type: "pdf" },
      { name: "Location Details", type: "location" },
    ],
  },
  {
    title: "E-commerce Platform",
    image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Fast-growing e-commerce platform specializing in eco-friendly products.",
    location: "Online (Headquartered in Tech Hub)",
    annualRevenue: "$5M",
    employees: 15,
    reasonForSale: "Seeking strategic partnership",
    saleType: "Partial sale (40% stake)",
    askingPrice: "$4M for 40% stake",
    documents: [
      { name: "Growth Projections", type: "pdf" },
      { name: "Tech Stack Overview", type: "pdf" },
      { name: "User Demographics", type: "pdf" },
    ],
  },
  {
    title: "Manufacturing Unit",
    image:
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Established manufacturing unit with state-of-the-art machinery and strong B2B client base.",
    location: "Industrial Park, Suburban Area",
    annualRevenue: "$8M",
    employees: 50,
    reasonForSale: "Diversification of business interests",
    saleType: "Full sale",
    askingPrice: "$12M",
    documents: [
      { name: "Equipment Inventory", type: "pdf" },
      { name: "Client Contracts", type: "pdf" },
      { name: "Factory Layout", type: "pdf" },
      { name: "Location Details", type: "location" },
    ],
  },
]

export default function BusinessForSalePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Businesses for Sale</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {businesses.map((business, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{business.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src={business.image || "/placeholder.svg"}
                alt={business.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600 mb-4">{business.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span>{business.location}</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Revenue:</span>
                  <span>{business.annualRevenue}</span>
                </div>
                <div className="flex justify-between">
                  <span>Employees:</span>
                  <span>{business.employees}</span>
                </div>
                <div className="flex justify-between">
                  <span>Reason for Sale:</span>
                  <span>{business.reasonForSale}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sale Type:</span>
                  <span>{business.saleType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Asking Price:</span>
                  <span>{business.askingPrice}</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Documents:</h4>
                <ul className="space-y-1">
                  {business.documents.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-center">
                      {doc.type === "pdf" ? (
                        <FilePdf className="mr-2 h-4 w-4 text-red-500" />
                      ) : (
                        <MapPin className="mr-2 h-4 w-4 text-blue-500" />
                      )}
                      <span>{doc.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Request More Information</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Buy an Existing Business?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Established customer base and revenue stream</li>
          <li>Existing operational systems and processes</li>
          <li>Trained workforce already in place</li>
          <li>Immediate cash flow compared to starting from scratch</li>
          <li>Opportunity for growth and expansion</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Restaurant industry sees surge in business acquisitions post-pandemic
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              E-commerce platforms attract major investors amid digital transformation
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Manufacturing sector consolidation creates opportunities for business buyers
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Webinar: Due Diligence in Business Acquisitions - September 5, 2023
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Virtual Networking: Connect with Business Sellers - September 12, 2023
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Similar Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {businesses.map((business, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{business.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={business.image || "/placeholder.svg"}
                  alt={business.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <p className="text-sm text-gray-600">{business.description}</p>
                <p className="text-sm font-semibold mt-2">{business.saleType}</p>
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

