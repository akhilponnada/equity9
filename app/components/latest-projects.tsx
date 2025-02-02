"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Healthcare",
    description: "Revolutionary AI solutions for early disease detection",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    fundingGoal: 1000000,
    currentFunding: 750000,
    minInvestment: 5000,
    sharesOffered: "10%",
    security: "Equity",
    roi: 20,
    timePeriod: "3 years",
  },
  {
    title: "Sustainable Energy Grid",
    description: "Next-gen smart grid for efficient energy distribution",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    fundingGoal: 2000000,
    currentFunding: 1500000,
    minInvestment: 10000,
    sharesOffered: "15%",
    security: "Debt",
    roi: 15,
    timePeriod: "5 years",
  },
  {
    title: "Urban Vertical Farming",
    description: "Innovative solution for sustainable urban agriculture",
    image:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    fundingGoal: 500000,
    currentFunding: 300000,
    minInvestment: 2500,
    sharesOffered: "20%",
    security: "Revenue Share",
    roi: 18,
    timePeriod: "4 years",
  },
  {
    title: "Quantum Computing Startup",
    description: "Developing practical quantum computing solutions",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    fundingGoal: 5000000,
    currentFunding: 3000000,
    minInvestment: 25000,
    sharesOffered: "5%",
    security: "Convertible Note",
    roi: 25,
    timePeriod: "6 years",
  },
]

export default function LatestProjects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={currentProject.image || "/placeholder.svg"}
          alt={currentProject.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
        <h3 className="text-xl font-semibold mb-2">{currentProject.title}</h3>
        <p className="text-gray-600 mb-4">{currentProject.description}</p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm font-semibold">Funding Goal: ${currentProject.fundingGoal.toLocaleString()}</p>
            <p className="text-sm font-semibold">Current Funding: ${currentProject.currentFunding.toLocaleString()}</p>
          </div>
          <div className="flex space-x-2">
            <Button onClick={prevProject} size="icon" variant="outline">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button onClick={nextProject} size="icon" variant="outline">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 text-xs mb-4">
          <div className="font-semibold">Min. Investment</div>
          <div className="font-semibold">Shares Offered</div>
          <div className="font-semibold">Security</div>
          <div className="font-semibold">ROI %</div>
          <div className="font-semibold">Time Period</div>
          <div>${currentProject.minInvestment.toLocaleString()}</div>
          <div>{currentProject.sharesOffered}</div>
          <div>{currentProject.security}</div>
          <div>{currentProject.roi}%</div>
          <div>{currentProject.timePeriod}</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  )
}

