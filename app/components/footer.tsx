import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1f1b3d] text-white py-12">
      <div className="container mx-auto">
        {/* Logo and Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-k1CMsrLxTk0i8ZJ2YwUjKnDgHfLUUL.png"
              alt="Equity9 Logo"
              width={200}
              height={80}
              className="mb-4"
            />
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>contact@equity9.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>123 Investment Street, Financial District</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-sky-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-sky-300 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/investments" className="hover:text-sky-300 transition-colors">
                  Investments
                </Link>
              </li>
              <li>
                <Link href="/become-partner" className="hover:text-sky-300 transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Investment Options */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Investment Options</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/investments/equity" className="hover:text-sky-300 transition-colors">
                  Equity Investment
                </Link>
              </li>
              <li>
                <Link href="/investments/fixed-return" className="hover:text-sky-300 transition-colors">
                  Fixed Return
                </Link>
              </li>
              <li>
                <Link href="/investments/startups" className="hover:text-sky-300 transition-colors">
                  Startup Investment
                </Link>
              </li>
              <li>
                <Link href="/investments/pre-ipo" className="hover:text-sky-300 transition-colors">
                  Pre-IPO Opportunities
                </Link>
              </li>
              <li>
                <Link href="/investments/real-estate" className="hover:text-sky-300 transition-colors">
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <Link href="/terms" className="hover:text-sky-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-sky-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-sky-300 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-sky-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-sky-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-sky-300 transition-colors">
                <LinkedIn className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-sky-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-sky-300 transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center text-sm">© {new Date().getFullYear()} Equity9. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

