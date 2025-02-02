import InnerPageBanner from "@/app/components/inner-page-banner"

export default function EquityPartnerPage() {
  return (
    <div>
      <InnerPageBanner 
        title="Equity Partnership" 
        description="Become an equity partner in promising ventures"
      />
      <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4">Equity Partnership Program</h2>
            <p className="text-gray-700 mb-6">
              Join our equity partnership program and become a stakeholder in high-potential businesses.
              We carefully select ventures that demonstrate strong growth potential and sustainable business models.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Direct ownership in vetted businesses</li>
                  <li>Regular dividend payments</li>
                  <li>Voting rights in major decisions</li>
                  <li>Exit opportunities through our network</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Minimum investment threshold</li>
                  <li>Long-term commitment</li>
                  <li>Understanding of business operations</li>
                  <li>Compliance with regulatory requirements</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center py-8">
            <p className="text-lg font-medium">Applications Opening Soon</p>
            <p className="text-gray-500">We're currently reviewing new partnership opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 