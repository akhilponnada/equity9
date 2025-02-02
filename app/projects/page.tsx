import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import InnerPageBanner from "../components/inner-page-banner"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "Tech Innovators AI Platform",
    category: "Technology",
    description: "Revolutionary AI-powered platform for business automation",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    roi: "15-20% annually",
    documents: ["Business Plan", "Financial Projections", "Team Bios"],
  },
  {
    id: 2,
    title: "Green Energy Solutions",
    category: "Renewable Energy",
    description: "Sustainable energy solutions for commercial buildings",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    roi: "12-18% over 5 years",
    documents: ["Project Overview", "Environmental Impact Report", "Investment Terms"],
  },
  {
    id: 3,
    title: "HealthTech Revolution",
    category: "Healthcare",
    description: "Innovative medical devices for remote patient monitoring",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    roi: "25-30% potential return",
    documents: ["Product Specifications", "Clinical Trial Results", "Market Analysis"],
  },
  {
    id: 4,
    title: "Smart City Infrastructure",
    category: "Urban Development",
    description: "IoT-based solutions for efficient city management",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    roi: "10-15% annual yield",
    documents: ["City Partnership Details", "Technology Overview", "ROI Projections"],
  },
  {
    id: 5,
    title: "E-commerce Revolution",
    category: "Retail",
    description: "Next-gen e-commerce platform with AR/VR integration",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    roi: "20-25% projected growth",
    documents: ["Platform Features", "Market Opportunity", "Financial Forecast"],
  },
  {
    id: 6,
    title: "Sustainable Agriculture",
    category: "AgriTech",
    description: "Vertical farming solutions for urban areas",
    image:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    roi: "18-22% estimated return",
    documents: ["Farming Technique Details", "Sustainability Report", "Expansion Plans"],
  },
  {
    id: 7,
    title: "EdTech Platform",
    category: "Education",
    description: "AI-powered personalized learning experiences",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    roi: "15-20% year-over-year growth",
    documents: ["Learning Algorithm Explanation", "User Acquisition Strategy", "Revenue Model"],
  },
  {
    id: 8,
    title: "Blockchain for Supply Chain",
    category: "Logistics",
    description: "Transparent and efficient supply chain management",
    image:
      "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    roi: "20-25% cost savings potential",
    documents: ["Blockchain Architecture", "Partner Network", "Implementation Roadmap"],
  },
  {
    id: 9,
    title: "Space Tourism",
    category: "Aerospace",
    description: "Making space travel accessible for civilians",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    roi: "30-40% long-term growth potential",
    documents: ["Safety Protocols", "Launch Schedule", "Ticket Pricing Strategy"],
  },
  {
    id: 10,
    title: "Quantum Computing Services",
    category: "Technology",
    description: "Cloud-based quantum computing solutions",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    roi: "25-35% projected annual return",
    documents: ["Quantum Technology Overview", "Use Cases", "Competitive Analysis"],
  },
]

export default function ProjectsPage() {
  return (
    <div>
      <InnerPageBanner
        title="Investment Projects"
        subtitle="Discover exciting opportunities across various sectors"
        imageUrl="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600 mb-2">{project.category}</CardDescription>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold">ROI:</h4>
                  <p>{project.roi}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Documents:</h4>
                  <ul className="list-disc list-inside">
                    {project.documents.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center mt-auto">
                <Button asChild>
                  <Link href={`/projects/${project.id}`}>More Details</Link>
                </Button>
                <Button className="bg-[#e31837] hover:bg-[#e31837]/90">Invest Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

