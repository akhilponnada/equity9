import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import InnerPageBanner from "../components/inner-page-banner"

const wealthAdvisors = [
  { name: "John Doe", specialty: "Retirement Planning", status: "Online" },
  { name: "Jane Smith", specialty: "Investment Strategies", status: "Online" },
  { name: "Mike Johnson", specialty: "Tax Optimization", status: "Offline" },
  { name: "Sarah Williams", specialty: "Estate Planning", status: "Online" },
  { name: "Robert Brown", specialty: "Risk Management", status: "Offline" },
]

export default function WealthAdvisorsPage() {
  return (
    <div>
      <InnerPageBanner
        title="Wealth Advisors"
        subtitle="Connect with our expert advisors"
        imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-6">Available Wealth Advisors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wealthAdvisors.map((advisor, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{advisor.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">{advisor.specialty}</p>
                <Badge variant={advisor.status === "Online" ? "success" : "secondary"}>{advisor.status}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

