import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function SmartCitiesProject() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Smart Cities Project</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Smart Cities Project"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our Smart Cities Project is revolutionizing urban living through innovative technologies and sustainable
                practices. We're creating interconnected, efficient, and environmentally friendly urban spaces.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>IoT-powered infrastructure for real-time city management</li>
                <li>Smart transportation systems to reduce traffic and emissions</li>
                <li>Data-driven urban planning for improved quality of life</li>
              </ul>
              <Button asChild>
                <Link href="/investments/smart-cities">Invest Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

