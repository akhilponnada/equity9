import InnerPageBanner from "@/app/components/inner-page-banner"

export default function FixedReturnPage() {
  return (
    <div>
      <InnerPageBanner 
        title="Fixed Return Investments" 
        description="Secure, predictable returns on your investments"
      />
      <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4">Fixed Return Investment Options</h2>
            <p className="text-gray-700 mb-6">
              Our fixed return investment products offer stable, predictable returns with minimal risk.
              Perfect for investors seeking consistent income streams and capital preservation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Available Products</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Fixed Deposit Plans</li>
                  <li>Monthly Income Schemes</li>
                  <li>Corporate Bonds</li>
                  <li>Government Securities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Guaranteed returns</li>
                  <li>Flexible tenure options</li>
                  <li>Regular payout schedules</li>
                  <li>Low minimum investment</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center py-8">
            <p className="text-lg font-medium">Investment Products Coming Soon</p>
            <p className="text-gray-500">We're currently finalizing our fixed return investment products.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 