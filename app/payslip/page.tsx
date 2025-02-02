import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import InnerPageBanner from "../components/inner-page-banner"
import BusinessNews from "../components/business-news"
import YouTubeEmbed from "../components/youtube-embed"

export default function PayslipPage() {
  return (
    <div>
      <InnerPageBanner
        title="Payslip Investment"
        subtitle="Invest easily with just your payslip"
        imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Invest with Your Payslip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Equity9 offers a unique opportunity to invest based on your payslip. We partner with banks and NBFCs
                  to provide investment options without additional security. Invest in secured projects for potentially
                  high returns.
                </p>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  <div>
                    <Label htmlFor="salary">Monthly Salary</Label>
                    <Input id="salary" type="number" placeholder="Enter your monthly salary" />
                  </div>
                  <div>
                    <Label htmlFor="payslip">Upload Payslip</Label>
                    <Input id="payslip" type="file" accept=".pdf,.jpg,.png" />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit for Investment Options
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Featured Ad</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <p className="text-gray-500">Ad Space</p>
                </div>
              </CardContent>
            </Card>
            <BusinessNews />
          </div>
        </div>
      </div>
      <YouTubeEmbed />
    </div>
  )
}

