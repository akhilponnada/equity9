import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import InnerPageBanner from "../components/inner-page-banner"

export default function UnisecPage() {
  return (
    <div>
      <InnerPageBanner
        title="UNISEC Asset-Based Private Stock Exchange"
        subtitle="The future of private equity trading"
        imageUrl="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      <div className="container mx-auto py-12">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is UNISEC?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              UNISEC is an innovative asset-based private stock exchange that allows investors to create live
              partnerships as shareholders in LLPs, Private Limited Companies, and Limited Companies for unlisted
              entities. By providing asset security and transparent partnerships, UNISEC revolutionizes the way private
              equity is traded and managed.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            {
              title: "Asset-Based Security",
              description: "Investments backed by real assets, providing enhanced security for investors.",
            },
            {
              title: "Live Partnerships",
              description: "Create and manage partnerships in real-time across various business structures.",
            },
            {
              title: "Unlisted Companies",
              description: "Access investment opportunities in promising unlisted companies.",
            },
            {
              title: "Transparent Trading",
              description: "A secure and transparent platform for trading private equity shares.",
            },
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside mb-8 space-y-2">
          <li>Register as an investor or company on the UNISEC platform</li>
          <li>Complete the verification process</li>
          <li>Browse available investment opportunities or list your company shares</li>
          <li>Perform due diligence and make informed investment decisions</li>
          <li>Execute trades securely through our platform</li>
          <li>Manage your portfolio and track your investments in real-time</li>
        </ol>

        <Card>
          <CardHeader>
            <CardTitle>Benefits for Investors</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Access to a diverse range of investment opportunities in unlisted companies</li>
              <li>Enhanced security through asset-backed investments</li>
              <li>Transparent and efficient trading process</li>
              <li>Real-time portfolio management and performance tracking</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Benefits for Companies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Access to a wider pool of potential investors</li>
              <li>Simplified process for raising capital</li>
              <li>Increased liquidity for shareholders</li>
              <li>Enhanced company valuation through market-driven pricing</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="#" className="inline-block">
              Register Interest
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

