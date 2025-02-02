import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ProjectPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the project data based on the ID
  const project = {
    id: params.id,
    name: "TechRevolution AI",
    description: "A groundbreaking AI startup revolutionizing the tech industry",
    fundingGoal: 1000000,
    currentFunding: 750000,
    sharesAvailable: 1000,
    sharesFilled: 750,
    timeline: "12 months",
    shareValue: 1000,
    returns: "20% equity",
  }

  const fundingPercentage = (project.currentFunding / project.fundingGoal) * 100

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">{project.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Image
            src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            alt={project.name}
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Funding Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={fundingPercentage} className="mb-2" />
              <p className="text-sm text-gray-600 mb-4">{fundingPercentage.toFixed(2)}% funded</p>
              <p className="font-semibold">
                ${project.currentFunding.toLocaleString()} / ${project.fundingGoal.toLocaleString()}
              </p>
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Investment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div>
                  <dt className="font-semibold">Shares Available:</dt>
                  <dd>
                    {project.sharesAvailable - project.sharesFilled} / {project.sharesAvailable}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">Share Value:</dt>
                  <dd>${project.shareValue.toLocaleString()} per share</dd>
                </div>
                <div>
                  <dt className="font-semibold">Expected Returns:</dt>
                  <dd>{project.returns}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Timeline:</dt>
                  <dd>{project.timeline}</dd>
                </div>
              </dl>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Invest Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

