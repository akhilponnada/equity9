import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import InnerPageBanner from "../components/inner-page-banner"

export default function BecomePartnerPage() {
  return (
    <div>
      <InnerPageBanner
        title="Become a Partner"
        subtitle="Explore partnership opportunities with Equity9"
        imageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Partnership Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Investment Partner</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Join our network of investors and gain access to exclusive investment opportunities.</p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Strategic Partner</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Collaborate with us to create synergies and drive mutual growth in the market.</p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Technology Partner</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Integrate your innovative solutions with our platform to enhance our offerings.</p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Why Partner with Equity9?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Access to a wide network of investors and entrepreneurs</li>
            <li>Collaborative opportunities for business growth</li>
            <li>Exposure to cutting-edge technologies and innovative projects</li>
            <li>Dedicated support from our experienced team</li>
          </ul>
        </div>
        <div className="mt-12 text-center">
          <Button size="lg">Apply for Partnership</Button>
        </div>
      </div>
    </div>
  )
}

