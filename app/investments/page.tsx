import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const investmentOptions = [
  { name: "Long Term", description: "Invest in projects with a long-term growth potential" },
  { name: "Short Term", description: "Quick turnaround investments for immediate returns" },
  { name: "Fixed Return", description: "Guaranteed returns on your investment" },
  { name: "Equity", description: "Become a shareholder in promising companies" },
  { name: "Rental Properties", description: "Invest in real estate for steady income" },
  { name: "Market Investments", description: "Diversify your portfolio with market-based investments" },
  { name: "Shares", description: "Trade shares of publicly listed companies" },
  { name: "IPOs", description: "Get early access to Initial Public Offerings" },
  { name: "Commodities", description: "Invest in physical goods and raw materials" },
]

export default function InvestmentsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Investment Options</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {investmentOptions.map((option) => (
          <Card key={option.name}>
            <CardHeader>
              <CardTitle>{option.name}</CardTitle>
              <CardDescription>{option.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Discover our range of {option.name.toLowerCase()} investment opportunities.</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/investments/${option.name.toLowerCase().replace(" ", "-")}`}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

