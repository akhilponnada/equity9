import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function GreenEnergyProject() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Green Energy Project</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Green Energy Project"
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
                Our Green Energy Project aims to revolutionize the renewable energy sector by developing cutting-edge
                solar and wind power technologies. This initiative will contribute to reducing carbon emissions and
                promoting sustainable energy solutions.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Advanced solar panel technology with 30% higher efficiency</li>
                <li>Next-generation wind turbines for urban environments</li>
                <li>Smart grid integration for optimized energy distribution</li>
              </ul>
              <Button asChild>
                <Link href="/investments/green-energy">Invest Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

