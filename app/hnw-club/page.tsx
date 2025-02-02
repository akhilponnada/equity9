import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export default function HNWClubPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Health N Wealth Club</h1>

      <div className="mb-12">
        <Image
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Health N Wealth Club"
          width={1200}
          height={400}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">About Our Club</h2>
        <p className="text-gray-600 mb-4">
          The Health N Wealth Club is an exclusive community dedicated to helping our members achieve holistic
          well-being and financial prosperity. We believe that true success comes from balancing physical health, mental
          wellness, and financial stability.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Member Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Health Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Access to premium health and wellness facilities</li>
                <li>Personalized nutrition and fitness plans</li>
                <li>Regular health check-ups and screenings</li>
                <li>Mental health support and resources</li>
                <li>Exclusive wellness retreats and workshops</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Wealth Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>One-on-one financial advisory sessions</li>
                <li>Exclusive investment opportunities</li>
                <li>Wealth management workshops and seminars</li>
                <li>Access to premium financial planning tools</li>
                <li>Networking events with successful entrepreneurs</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Membership Levels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Silver",
              price: "$1,000/year",
              features: ["Basic health check-ups", "Quarterly financial review", "Access to online resources"],
            },
            {
              title: "Gold",
              price: "$2,500/year",
              features: [
                "Comprehensive health assessments",
                "Monthly financial advisory",
                "Exclusive event invitations",
              ],
            },
            {
              title: "Platinum",
              price: "$5,000/year",
              features: ["VIP health concierge", "Dedicated wealth manager", "Priority access to all benefits"],
            },
          ].map((level, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{level.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4">{level.price}</p>
                <ul className="list-disc list-inside space-y-2">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "John D.",
              quote:
                "Joining the Health N Wealth Club was the best decision I've made for my overall well-being. The personalized approach to health and wealth management has been transformative.",
            },
            {
              name: "Sarah M.",
              quote:
                "The networking opportunities alone are worth the membership. I've connected with like-minded individuals who have become valuable partners in both my health journey and business ventures.",
            },
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="mt-12 text-center">
        <Button size="lg">Apply for Membership</Button>
      </div>
    </div>
  )
}

