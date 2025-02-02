import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function AIInnovationProject() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">AI Innovation Project</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="AI Innovation Project"
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
                Our AI Innovation Project is at the forefront of artificial intelligence research and development. We're
                creating advanced AI systems that will transform industries and improve daily life.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Natural language processing breakthroughs</li>
                <li>Computer vision advancements for autonomous systems</li>
                <li>AI-powered predictive analytics for business intelligence</li>
              </ul>
              <Button asChild>
                <Link href="/investments/ai-innovation">Invest Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

