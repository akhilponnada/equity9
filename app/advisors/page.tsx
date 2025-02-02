import InnerPageBanner from "@/app/components/inner-page-banner"
import Image from "next/image"

export default function AdvisorsPage() {
  const advisors = [
    {
      name: "Sarah Johnson",
      role: "Investment Strategist",
      image: "/placeholder-user.jpg",
      description: "15+ years experience in wealth management and investment strategy"
    },
    {
      name: "Michael Chen",
      role: "Financial Advisor",
      image: "/placeholder-user.jpg",
      description: "Expert in portfolio diversification and risk management"
    },
    {
      name: "David Smith",
      role: "Market Analyst",
      image: "/placeholder-user.jpg",
      description: "Specializes in market trends and investment opportunities"
    }
  ]

  return (
    <div>
      <InnerPageBanner 
        title="Wealth Advisors" 
        description="Meet our team of expert financial advisors"
      />
      <div className="container mx-auto py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisors.map((advisor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{advisor.name}</h3>
                  <p className="text-gray-600">{advisor.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{advisor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 