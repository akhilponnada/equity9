"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import HeroBanner from "./components/hero-banner"
import BusinessNews from "./components/business-news"
import YouTubeEmbed from "./components/youtube-embed"
import LatestProjects from "./components/latest-projects"
import LogoScroll from "./components/logo-scroll"
import MarketInsights from "./components/market-insights"
import { useState, useEffect } from "react"

const mockStockData = [
  { symbol: "NIFTY 50", lastPrice: 19789.45, change: 234.75, percentChange: 1.2 },
  { symbol: "SENSEX", lastPrice: 66598.91, change: 487.23, percentChange: 0.74 },
  { symbol: "BANKNIFTY", lastPrice: 45678.3, change: -123.45, percentChange: -0.27 },
  { symbol: "RELIANCE", lastPrice: 2567.8, change: 45.6, percentChange: 1.81 },
  { symbol: "TCS", lastPrice: 3456.75, change: -23.45, percentChange: -0.67 },
]

export default function Home() {
  const [stockData, setStockData] = useState(mockStockData)

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = stockData.map((stock) => ({
        ...stock,
        lastPrice: stock.lastPrice * (1 + (Math.random() * 0.02 - 0.01)),
        change: stock.lastPrice * (Math.random() * 0.02 - 0.01),
        percentChange: Math.random() * 2 - 1,
      }))
      setStockData(updatedData)
    }, 5000)

    return () => clearInterval(interval)
  }, [stockData])

  return (
    <div>
      <HeroBanner />
      <LogoScroll />
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="space-y-8">
              <LatestProjects />
              <div>
                <h3 className="text-2xl font-bold mb-4">Featured Projects</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      title: "Green Energy",
                      image:
                        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
                      link: "/projects/green-energy",
                    },
                    {
                      title: "AI Innovation",
                      image:
                        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
                      link: "/projects/ai-innovation",
                    },
                    {
                      title: "Smart Cities",
                      image:
                        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
                      link: "/projects/smart-cities",
                    },
                  ].map((project, index) => (
                    <Link href={project.link} key={index} className="relative block">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                        <h4 className="text-sm font-semibold">{project.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Advertisement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-64 flex items-center justify-center overflow-hidden relative">
                  <Image
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Business Advertisement"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
            <BusinessNews />
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tech Innovators",
                description: "Revolutionary AI-powered solutions",
                image:
                  "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
              {
                title: "Green Energy Future",
                description: "Sustainable energy solutions for tomorrow",
                image:
                  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
              {
                title: "HealthTech Revolution",
                description: "Transforming healthcare with cutting-edge technology",
                image:
                  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
            ].map((project, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/projects/${i + 1}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Investment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Equity Partner",
                image:
                  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
              {
                title: "Fixed Return",
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
              {
                title: "Long Term",
                image:
                  "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
              },
              {
                title: "Startups",
                image:
                  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
            ].map((option) => (
              <Card key={option.title}>
                <CardHeader>
                  <CardTitle>{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={option.image || "/placeholder.svg"}
                    alt={option.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <p>Discover our {option.title.toLowerCase()} investment opportunities.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href={`/investments/${option.title.toLowerCase().replace(" ", "-")}`}>Explore</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">12% ROI Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tech Growth Fund",
                image:
                  "https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Green Energy Bonds",
                image:
                  "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Real Estate Trust",
                image:
                  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
            ].map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-gray-600 mb-4">Guaranteed 12% annual return on investment</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/12-percent-roi">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Buyback Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Tech Startup Shares",
                image:
                  "https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "E-commerce Platform",
                image:
                  "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Renewable Energy Project",
                image:
                  "https://images.pexels.com/photos/9875430/pexels-photo-9875430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "AI Research Firm",
                image:
                  "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
            ].map((offer, index) => (
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
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <p className="text-sm text-gray-600">Attractive buyback terms</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href="/buyback-offers">View Offer</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Property Share</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Apartment Complex",
                image:
                  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Commercial Office Space",
                image:
                  "https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Retail Shopping Center",
                image:
                  "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
            ].map((property, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{property.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-gray-600 mb-4">Invest in fractional ownership of prime properties</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/property-share">Invest Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">High Rental Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "City Center Apartments",
                image:
                  "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Suburban Townhouses",
                image:
                  "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Beachfront Villas",
                image:
                  "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
            ].map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-gray-600 mb-4">High-yield rental properties in prime locations</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/high-rental-projects">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Joint Ventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Tech Incubator",
                image:
                  "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Green Energy Initiative",
                image:
                  "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Healthcare Innovation",
                image:
                  "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Agritech Revolution",
                image:
                  "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
            ].map((venture, index) => (
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
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <p className="text-sm text-gray-600">Exciting partnership opportunities</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href="/joint-ventures">View Opportunities</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Business for Sale</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Established Restaurant",
                image:
                  "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                reason: "Owner retiring",
                saleType: "Full sale",
              },
              {
                title: "E-commerce Platform",
                image:
                  "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                reason: "Seeking strategic partnership",
                saleType: "Partial sale (40% stake)",
              },
              {
                title: "Manufacturing Unit",
                image:
                  "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                reason: "Diversification of business interests",
                saleType: "Full sale",
              },
            ].map((business, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{business.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={business.image || "/placeholder.svg"}
                    alt={business.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-gray-600 mb-2">Reason for sale: {business.reason}</p>
                  <p className="text-sm font-semibold mb-4">{business.saleType}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/business-for-sale">Explore Listing</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Pre-IPO Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Tech Unicorn",
                image:
                  "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Biotech Innovator",
                image:
                  "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Fintech Disruptor",
                image:
                  "https://images.pexels.com/photos/6347707/pexels-photo-6347707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Sustainable Energy Leader",
                image:
                  "https://images.pexels.com/photos/9875430/pexels-photo-9875430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
            ].map((opportunity, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={opportunity.image || "/placeholder.svg"}
                    alt={opportunity.title}
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <p className="text-sm text-gray-600">Invest before they go public</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href="/pre-ipo">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">HNW Club</h2>
          <div className="flex-shrink-0 w-64 space-y-4">
            <Card className="bg-gradient-to-br from-[#FFD700] to-[#B8860B] text-white h-40">
              <CardHeader>
                <CardTitle className="text-lg">HNW Club Membership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Exclusive benefits await</p>
              </CardContent>
              <CardFooter className="text-right">
                <p className="text-xs">Member since 2023</p>
              </CardFooter>
            </Card>
            <Button className="w-full bg-[#B8860B] hover:bg-[#B8860B]/90">Join Club</Button>
          </div>
          <div className="flex-shrink-0 w-64">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gold%20card2-XGR7AUKvmN7bRPBlmh5GFHea9TYCZU.png"
              alt="HNW Club Gold Membership Card"
              width={300}
              height={190}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Join with Builders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Projects",
                image:
                  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Commercial Developments",
                image:
                  "https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Infrastructure Initiatives",
                image:
                  "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
            ].map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-gray-600 mb-4">Partner with leading builders on exciting projects</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/join-builders">Explore Partnerships</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Sleeping Partner Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Tech Startup",
                image:
                  "https://images.pexels.com/photos/7367/startup-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Restaurant Chain",
                image:
                  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "E-learning Platform",
                image:
                  "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                title: "Fitness Centers",
                image:
                  "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
            ].map((opportunity, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={opportunity.image || "/placeholder.svg"}
                    alt={opportunity.title}
                    width={300}
                    height={200}
                    className="w-fullh-32 object-cover rounded-md mb-2"
                  />
                  <p className="text-sm text-gray-600">Passive investment opportunities</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href="/sleeping-partner">View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Payslip Investment</h2>
          <Card>
            <CardHeader>
              <CardTitle>Invest with Your Payslip</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Unlock investment opportunities using your regular income. Our innovative payslip-based investment
                program allows you to grow your wealth steadily.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>No additional collateral required</li>
                <li>Flexible investment options</li>
                <li>Automated monthly investments</li>
                <li>Tailored plans based on your income</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/payslip-investment">Start Investing</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Introducing UNISEC: Private Stock Exchange</h2>
          <Card>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <Image
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="UNISEC Private Stock Exchange"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <div>
                <CardHeader>
                  <CardTitle className="text-2xl">Coming Soon: UNISEC Asset-Based Private Stock Exchange</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Experience the future of private equity with UNISEC, our innovative asset-based private stock
                    exchange.
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Create live partnerships as shareholders in LLPs, Pvt Ltd, and Limited companies</li>
                    <li>Invest in unlisted companies with asset security</li>
                    <li>Transparent and secure trading platform for private equity</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" asChild>
                    <Link href="/unisec">Learn More About UNISEC</Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Market Insights</h2>
          <MarketInsights stockData={stockData} />
        </div>
      </section>

      <YouTubeEmbed />
    </div>
  )
}

