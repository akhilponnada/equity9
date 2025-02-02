import { Search, Phone, MessageCircle, PlusCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TopStrip() {
  return (
    <div className="bg-[#e31837] text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <a
            href="tel:+1234567890"
            className="flex items-center space-x-2 uppercase hover:bg-[#1f1b3d] px-3 py-1 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm">Helpline: 1800-123-4567</span>
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 uppercase hover:bg-[#1f1b3d] px-3 py-1 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm">Chat with us</span>
          </a>
          <Link href="/become-partner" className="text-sm uppercase hover:bg-[#1f1b3d] px-3 py-1 transition-colors">
            Become a Partner
          </Link>
          <Link href="/events" className="text-sm uppercase hover:bg-[#1f1b3d] px-3 py-1 transition-colors">
            Events
          </Link>
          <Link href="/wealth-advisors" className="text-sm uppercase hover:bg-[#1f1b3d] px-3 py-1 transition-colors">
            Wealth Advisors
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="AI Search..."
              className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
          </div>
          <Button variant="secondary" className="bg-[#1f1b3d] text-white hover:bg-[#1f1b3d]/90 h-8 text-sm">
            JOIN NOW
          </Button>
          <Button variant="secondary" className="bg-white text-red-600 hover:bg-white/90 h-8 text-sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Post Business Offer
          </Button>
        </div>
      </div>
    </div>
  )
}

