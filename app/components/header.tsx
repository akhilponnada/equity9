"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const menuItems = [
  {
    title: "ABOUT",
    href: "/about",
    submenu: [
      {
        title: "Our Story",
        description: "Learn about our journey and mission",
        href: "/about/story",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      },
      {
        title: "Team",
        description: "Meet the people behind Equity9",
        href: "/about/team",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        title: "Vision & Mission",
        description: "Discover our goals and values",
        href: "/about/vision-mission",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      },
    ],
  },
  {
    title: "PROJECTS",
    href: "/projects",
    submenu: [
      {
        title: "Featured Projects",
        description: "Explore our highlighted investments",
        href: "/projects/featured",
        image:
          "https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      },
      {
        title: "Sectors",
        description: "Discover projects across industries",
        href: "/projects/sectors",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        title: "Success Stories",
        description: "Read about our successful investments",
        href: "/projects/success-stories",
        image:
          "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
    ],
  },
  {
    title: "INVESTMENTS",
    href: "/investments",
    submenu: [
      {
        title: "Investment Options",
        description: "Explore various investment opportunities",
        href: "/investments/options",
        image:
          "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        title: "How It Works",
        description: "Learn about our investment process",
        href: "/investments/how-it-works",
        image:
          "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
      },
      {
        title: "FAQs",
        description: "Get answers to common questions",
        href: "/investments/faqs",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
    ],
  },
  {
    title: "PAYSLIP",
    href: "/payslip",
  },
  {
    title: "BUSINESS OFFERS",
    href: "/business-offers",
    submenu: [
      {
        title: "All Business Offers",
        description: "Explore all our business opportunities",
        href: "/business-offers",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        title: "For Startups",
        description: "Tailored solutions for new businesses",
        href: "/business-offers/startups",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        title: "For SMEs",
        description: "Support for small and medium enterprises",
        href: "/business-offers/smes",
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      },
      {
        title: "For Corporations",
        description: "Partnership opportunities for large businesses",
        href: "/business-offers/corporations",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
    ],
  },
  {
    title: "FINANCE",
    href: "/finance",
    submenu: [
      {
        title: "Financial Planning",
        description: "Plan your financial future with us",
        href: "/finance/planning",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        title: "Wealth Management",
        description: "Grow and protect your wealth",
        href: "/finance/wealth-management",
        image:
          "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        title: "Tax Advisory",
        description: "Expert advice on tax matters",
        href: "/finance/tax-advisory",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
    ],
  },
  {
    title: "STARTUPS",
    href: "/startups",
    submenu: [
      {
        title: "Incubation",
        description: "Nurture your startup idea with us",
        href: "/startups/incubation",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        title: "Acceleration",
        description: "Accelerate your startup's growth",
        href: "/startups/acceleration",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        title: "Funding",
        description: "Secure funding for your startup",
        href: "/startups/funding",
        image:
          "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
    ],
  },
  {
    title: "PARTNERS",
    href: "/partners",
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Top Strip */}
      <div className="fixed top-0 left-0 right-0 bg-[#e31837] text-white py-2 px-4 z-50">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-sm">
            <a href="tel:1800-123-4567" className="hover:underline">HELPLINE: 1800-123-4567</a>
            <Link href="/chat" className="hover:underline hidden md:inline">Chat with us</Link>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/partner" className="hover:underline hidden md:inline">BECOME A PARTNER</Link>
            <Link href="/events" className="hover:underline hidden md:inline">EVENTS</Link>
            <Link href="/advisors" className="hover:underline hidden md:inline">WEALTH ADVISORS</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-[40px] left-0 right-0 bg-white shadow-md z-40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo2-jNKDPAyxJ0L9usD87OvGQ9UEK48APt.png"
                alt="Equity9 - Your Future Partner"
                width={180}
                height={60}
                priority
                className="h-[60px] w-[180px] object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList className="flex space-x-1">
                  {menuItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      {item.submenu ? (
                        <NavigationMenuTrigger className="text-[#1f1b3d] text-sm font-medium hover:text-[#e31837] transition-colors px-2">
                          {item.title}
                        </NavigationMenuTrigger>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-[#1f1b3d] text-sm font-medium hover:text-[#e31837] transition-colors px-3 py-2"
                        >
                          {item.title}
                        </Link>
                      )}
                      {item.submenu && (
                        <NavigationMenuContent>
                          <div className="w-[600px] lg:w-[800px] p-4 bg-white/95 backdrop-blur-sm">
                            <div className="grid grid-cols-2 gap-4">
                              {item.submenu.map((subitem) => (
                                <Link key={subitem.href} href={subitem.href}>
                                  <div className="group relative overflow-hidden rounded-lg">
                                    <Image
                                      src={subitem.image || "/placeholder.svg"}
                                      alt={subitem.title}
                                      width={300}
                                      height={169}
                                      className="object-cover w-full h-[120px] transition-transform group-hover:scale-105 rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
                                      <h3 className="text-white font-semibold text-base">{subitem.title}</h3>
                                      <p className="text-white text-xs line-clamp-2">{subitem.description}</p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4">
                    {menuItems.map((item) => (
                      <div key={item.title}>
                        <Link
                          href={item.href}
                          className="text-lg font-medium hover:text-[#e31837] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                        {item.submenu && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.href}
                                href={subitem.href}
                                className="block text-sm text-gray-600 hover:text-[#e31837] transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {subitem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="text-sm">
                Sign Up
              </Button>
              <Button className="bg-[#1f1b3d] text-sm">Login</Button>
            </div>
          </div>
        </div>
      </header>

      {/* UNISEC Strip */}
      <div className="fixed top-[120px] left-0 right-0 bg-[#1a237e] h-[40px] z-30 overflow-hidden">
        <div className="container mx-auto px-4 h-full flex items-center">
          <h2 className="text-white font-bold mr-4 whitespace-nowrap">UNISEC</h2>
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-marquee space-x-8">
              {["JPMorgan", "Goldman Sachs", "Morgan Stanley", "Citigroup", "Bank of America"].map((company) => (
                <div key={company} className="flex items-center text-white whitespace-nowrap">
                  <img
                    src={`https://ui-avatars.com/api/?name=${company}&background=random&color=fff&size=24`}
                    alt={company}
                    className="w-6 h-6 mr-2 rounded-full"
                  />
                  <span className="text-sm">{company}</span>
                  <svg
                    className="ml-2 w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

