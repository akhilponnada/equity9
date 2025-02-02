import InnerPageBanner from "@/app/components/inner-page-banner"

export default function LongTermPage() {
  return (
    <div>
      <InnerPageBanner 
        title="Long-Term Investments" 
        description="Secure your future with strategic long-term investments"
      />
      <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4">Long-Term Investment Opportunities</h2>
            <p className="text-gray-700 mb-6">
              Our long-term investment options are designed for investors looking to build sustainable wealth
              over extended periods. We focus on stable, growth-oriented opportunities with proven track records.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Investment Types</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Real Estate Development</li>
                  <li>Infrastructure Projects</li>
                  <li>Green Energy Initiatives</li>
                  <li>Technology Ventures</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>5-10 year investment horizon</li>
                  <li>Quarterly performance reports</li>
                  <li>Professional portfolio management</li>
                  <li>Regular dividend options</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center py-8">
            <p className="text-lg font-medium">Investment Options Coming Soon</p>
            <p className="text-gray-500">We're currently curating new long-term investment opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 