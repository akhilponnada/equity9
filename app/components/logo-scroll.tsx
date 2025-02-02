"use client"

import { useEffect, useRef } from "react"

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1200px-Tesla_T_symbol.svg.png",
]

export default function LogoScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      const scrollContent = scrollContainer.querySelector("div")
      if (scrollContent) {
        scrollContainer.addEventListener("mouseenter", () => {
          scrollContent.style.animationPlayState = "paused"
        })
        scrollContainer.addEventListener("mouseleave", () => {
          scrollContent.style.animationPlayState = "running"
        })
      }
    }
  }, [])

  return (
    <div className="w-full h-[100px] overflow-hidden bg-white pt-[20px]" ref={scrollRef}>
      <div className="flex animate-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-[65px] h-[32px] flex items-center justify-center mx-4">
            <img
              src={logo || "/placeholder.svg"}
              alt={`Partner logo ${index + 1}`}
              className="w-[55px] h-[22px] object-contain rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

