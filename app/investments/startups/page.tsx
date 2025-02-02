import InnerPageBanner from "@/app/components/inner-page-banner"

export default function StartupsPage() {
  return (
    <div>
      <InnerPageBanner 
        title="Startup Investments" 
        description="Invest in innovative startups shaping the future"
      />
      <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4">Startup Investment Program</h2>
            <p className="text-gray-700 mb-6">
              Participate in the growth of innovative startups across various sectors.
              Our team carefully vets each startup for potential, sustainability, and growth prospects.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Focus Sectors</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Technology & AI</li>
                  <li>Healthcare Innovation</li>
                  <li>Clean Energy</li>
                  <li>FinTech Solutions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Investment Details</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Early-stage funding rounds</li>
                  <li>Diversified portfolio approach</li>
                  <li>Expert mentorship support</li>
                  <li>Regular progress updates</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center py-8">
            <p className="text-lg font-medium">New Opportunities Coming Soon</p>
            <p className="text-gray-500">We're currently evaluating promising startups for our next investment round.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 