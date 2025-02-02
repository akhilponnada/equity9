import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { MapPin, FileIcon as FilePdf } from "lucide-react"

const jointVentures = [
  {
    title: "Tech Incubator",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Partner with us to create a cutting-edge tech incubator fostering innovation and entrepreneurship.",
    sector: "Technology",
    investmentRequired: "$5M - $10M",
    expectedReturn: "20-25% annually",
    duration: "5-7 years",
    location: "Silicon Valley, CA",
    documents: [
      { name: "Business Plan", type: "pdf" },
      { name: "Market Analysis", type: "pdf" },
      { name: "Location Details", type: "location" },
    ],
  },
  {
    title: "Green Energy Initiative",
    image:
      "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Join our mission to develop and implement sustainable energy solutions on a global scale.",
    sector: "Renewable Energy",
    investmentRequired: "$20M - $30M",
    expectedReturn: "15-18% annually",
    duration: "10-15 years",
    location: "Multiple Global Locations",
    documents: [
      { name: "Project Overview", type: "pdf" },
      { name: "Environmental Impact Study", type: "pdf" },
      { name: "Financial Projections", type: "pdf" },
    ],
  },
  {
    title: "Healthcare Innovation",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Collaborate on developing breakthrough medical technologies and improving healthcare accessibility.",
    sector: "Healthcare",
    investmentRequired: "$15M - $25M",
    expectedReturn: "22-28% annually",
    duration: "7-10 years",
    location: "Boston, MA",
    documents: [
      { name: "Research Proposals", type: "pdf" },
      { name: "Regulatory Compliance", type: "pdf" },
      { name: "Location Details", type: "location" },
    ],
  },
  {
    title: "Agritech Revolution",
    image:
      "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Transform agriculture with innovative technologies to increase yield and sustainability.",
    sector: "Agriculture",
    investmentRequired: "$10M - $15M",
    expectedReturn: "18-22% annually",
    duration: "5-8 years",
    location: "Midwest, USA",
    documents: [
      { name: "Agricultural Impact Report", type: "pdf" },
      { name: "Technology Overview", type: "pdf" },
      { name: "Location Details", type: "location" },
    ],
  },
]

export default function JointVenturesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Joint Venture Opportunities</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {jointVentures.map((venture, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{venture.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src={venture.image || "/placeholder.svg"}
                alt={venture.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600 mb-4">{venture.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Sector:</span>
                  <span>{venture.sector}</span>
                </div>
                <div className="flex justify-between">
                  <span>Investment Required:</span>
                  <span>{venture.investmentRequired}</span>
                </div>
                <div className="flex justify-between">
                  <span>Expected Return:</span>
                  <span>{venture.expectedReturn}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{venture.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span>{venture.location}</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Documents:</h4>
                <ul className="space-y-1">
                  {venture.documents.map((doc, docIndex) => (
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
              <Button className="w-full">Express Interest</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Benefits of Joint Ventures</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Access to new markets and technologies</li>
          <li>Shared risks and resources</li>
          <li>Complementary skills and expertise</li>
          <li>Accelerated growth and innovation</li>
          <li>Potential for higher returns on investment</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Tech giants form joint venture to tackle climate change
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Healthcare startups collaborate on breakthrough cancer treatment
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Agritech revolution gains momentum with new cross-industry partnerships
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Webinar: Structuring Successful Joint Ventures - October 15, 2023
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Industry Meetup: Networking for Potential JV Partners - October 22, 2023
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Similar Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {jointVentures.slice(0, 3).map((venture, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{venture.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={venture.image || "/placeholder.svg"}
                  alt={venture.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <p className="text-sm text-gray-600">{venture.description}</p>
                <p className="text-sm font-semibold mt-2">{venture.sector}</p>
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

