"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Marketing Executive",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "POOL MATE has transformed my daily commute! I save over ₹4000 monthly and have made great connections with like-minded professionals. The Women-Only Mode makes me feel completely safe.",
  },
  {
    id: 2,
    name: "Rajiv Mehta",
    role: "Software Engineer",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "As a regular commuter between Gurgaon and Delhi, POOL MATE has been a game-changer. The Professional Mode automatically matches me with riders on my route, and I've reduced my carbon footprint significantly.",
  },
  {
    id: 3,
    name: "Priya Desai",
    role: "College Student",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "The affordability factor is huge for students like me. I've been using POOL MATE for my college commute for 6 months now, and it's reliable, safe, and much cheaper than other options.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Finance Analyst",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The scheduled rides feature is perfect for my fixed office timings. I've been carpooling with the same group for months now, and we've all become good friends while saving money!",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState<typeof testimonials>([])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setVisibleTestimonials([testimonials[activeIndex]])
      } else if (width < 1024) {
        setVisibleTestimonials(testimonials.slice(activeIndex, activeIndex + 2))
      } else {
        setVisibleTestimonials(testimonials.slice(activeIndex, activeIndex + 3))
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [activeIndex])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="bg-muted py-16">
      <div className="container">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">What Our Users Say</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Join thousands of satisfied users who have transformed their daily commute with POOL MATE
        </p>
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-6">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="outline" size="icon" onClick={handlePrev} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <Card className="max-w-md flex-1 transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="mb-4 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
        <p className="mb-6 text-muted-foreground">{testimonial.text}</p>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={testimonial.image} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

