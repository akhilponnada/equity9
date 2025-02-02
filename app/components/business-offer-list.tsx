import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

function getBusinessImageId(category: string, offerId: number): number {
  const imageIds = {
    "Featured Offers": [3183150, 3184292, 3184325, 3184339, 3184360],
    "Fixed Return Offers": [210607, 534216, 1043458, 2058130, 2058137],
    "Startup Business Offers": [1181244, 1181304, 1181345, 1181354, 1181434],
    "Sleeping Partners": [3182812, 3182826, 3183153, 3183170, 3183197],
    "Joint Ventures": [3182781, 3182812, 3182826, 3183153, 3183170],
    "Finance Offers": [210607, 534216, 1043458, 2058130, 2058137],
    "Exit Plan Offers": [3182781, 3182812, 3182826, 3183153, 3183170],
    Recommended: [3184292, 3184325, 3184339, 3184360, 3184374],
    "Real Estate Business Offers": [271624, 280229, 323705, 323780, 323781],
    "Special Business Offers": [3182781, 3182812, 3182826, 3183153, 3183170],
    "High Returns Offers": [210607, 534216, 1043458, 2058130, 2058137],
    "Secured Business Offers": [3182781, 3182812, 3182826, 3183153, 3183170],
  }

  const defaultIds = [3183150, 3184292, 3184325, 3184339, 3184360]
  const categoryIds = imageIds[category as keyof typeof imageIds] || defaultIds
  return categoryIds[offerId % categoryIds.length]
}

interface BusinessOfferListProps {
  category: string
}

export default function BusinessOfferList({ category }: BusinessOfferListProps) {
  // This is mock data. In a real application, you would fetch this data from an API or database
  const offers = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `${category} Offer ${i + 1}`,
    description: `This is a brief description of ${category} Offer ${i + 1}`,
    image: `https://source.unsplash.com/featured/?business,${category.toLowerCase().replace(/\s+/g, "-")}&${i}`,
  }))

  return (
    <section id={category.toLowerCase().replace(/\s+/g, "-")} className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{category}</h2>
      <ScrollArea className="h-[400px]">
        <div className="grid grid-cols-2 gap-4 pr-4">
          {offers.map((offer) => (
            <Card key={offer.id} className="flex flex-col">
              <CardHeader className="p-0">
                <div className="relative w-full h-40">
                  <Image
                    src={`https://images.pexels.com/photos/${getBusinessImageId(category, offer.id)}/pexels-photo-${getBusinessImageId(category, offer.id)}.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2`}
                    alt={offer.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-2 right-2 text-white text-xs bg-black bg-opacity-50 px-1 rounded">
                    Photo from Pexels
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <CardTitle className="text-lg mb-2">{offer.title}</CardTitle>
                <p className="text-sm text-gray-600">{offer.description}</p>
              </CardContent>
              <CardFooter className="p-4">
                <Link href={`/business-offers/${offer.id}`} className="text-blue-600 hover:underline text-sm">
                  Learn More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </section>
  )
}

