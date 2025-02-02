import InnerPageBanner from "@/app/components/inner-page-banner"

export default function PartnerPage() {
  return (
    <div>
      <InnerPageBanner 
        title="Become a Partner" 
        description="Join our network of successful partners"
      />
      <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4">Partnership Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">For Businesses</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access to investment opportunities</li>
                  <li>Network with industry leaders</li>
                  <li>Business growth support</li>
                  <li>Marketing assistance</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">For Investors</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Exclusive investment deals</li>
                  <li>Regular market insights</li>
                  <li>Portfolio management tools</li>
                  <li>Priority access to new projects</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center py-8">
            <p className="text-lg font-medium">Partnership Applications Opening Soon</p>
            <p className="text-gray-500">We're currently updating our partnership program.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 