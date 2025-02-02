import InnerPageBanner from "@/app/components/inner-page-banner"

export default function ChatPage() {
  return (
    <div>
      <InnerPageBanner 
        title="Chat with Us" 
        description="Get in touch with our support team"
      />
      <div className="container mx-auto py-8">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to assist you with any questions or concerns.
          </p>
          {/* Add your chat component here */}
          <div className="text-center py-8">
            <p className="text-lg font-medium">Coming Soon</p>
            <p className="text-gray-500">Chat feature will be available shortly.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 