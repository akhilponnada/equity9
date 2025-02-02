import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

const projects = [
  {
    title: "Tech Growth Fund",
    image:
      "https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Invest in a diversified portfolio of high-growth tech companies.",
    minInvestment: "$5,000",
    term: "3 years",
  },
  {
    title: "Green Energy Bonds",
    image:
      "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Support renewable energy projects with guaranteed returns.",
    minInvestment: "$10,000",
    term: "5 years",
  },
  {
    title: "Real Estate Trust",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Invest in a portfolio of premium commercial real estate properties.",
    minInvestment: "$25,000",
    term: "7 years",
  },
  {
    title: "Infrastructure Development Fund",
    image:
      "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Participate in large-scale infrastructure projects with steady returns.",
    minInvestment: "$15,000",
    term: "10 years",
  },
]

export default function ROIProjectsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">12% ROI Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Min. Investment: {project.minInvestment}</span>
                <span>Term: {project.term}</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Learn More</Button>
              <Button>Invest Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              New Tech Growth Fund launched with 12% guaranteed ROI
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Green Energy Bonds oversubscribed within 24 hours
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Real Estate Trust announces expansion into new markets
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Webinar: Understanding 12% ROI Projects - June 15, 2023
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              Investor Meetup: Q&A with Fund Managers - June 22, 2023
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Similar Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.slice(0, 3).map((project, index) => (
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

