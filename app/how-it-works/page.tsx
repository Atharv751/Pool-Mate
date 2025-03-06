import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus, Car, MapPin, Star } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How POOL MATE Works</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A simple, intuitive process designed to make carpooling easy, safe, and convenient for everyone.
          </p>
        </div>
      </section>

      {/* Process Tabs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="passenger" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="passenger">For Passengers</TabsTrigger>
                <TabsTrigger value="driver">For Drivers</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="passenger">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Sign Up",
                    description: "Create your account with basic details and verify your phone number and email.",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    step: "2",
                    title: "Find a Ride",
                    description:
                      "Enter your pickup and drop-off locations, select ride type, and choose from available drivers.",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    step: "3",
                    title: "Travel Safely",
                    description:
                      "Verify driver details, track your ride in real-time, and enjoy a comfortable journey.",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    step: "4",
                    title: "Rate & Review",
                    description: "Rate your experience and provide feedback to help improve our service.",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <Card className="border-none shadow-md h-full">
                      <CardContent className="p-0">
                        <div className="aspect-video relative">
                          <img
                            src={step.image || "/placeholder.svg"}
                            alt={step.title}
                            className="w-full h-full object-cover rounded-t-lg"
                          />
                          <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                            {step.step}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button size="lg" asChild>
                  <Link href="#">Find a Ride Now</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="driver">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Sign Up as Driver",
                    description:
                      "Create your account, submit required documents, and complete the verification process.",
                    image: "/placeholder.svg?height=300&width=400",
                    icon: <UserPlus className="h-6 w-6" />,
                  },
                  {
                    step: "2",
                    title: "Offer Rides",
                    description: "Set your route, schedule, available seats, and pricing for your carpooling service.",
                    image: "/placeholder.svg?height=300&width=400",
                    icon: <Car className="h-6 w-6" />,
                  },
                  {
                    step: "3",
                    title: "Pick Up Passengers",
                    description: "Accept ride requests, follow the optimized route, and provide a comfortable journey.",
                    image: "/placeholder.svg?height=300&width=400",
                    icon: <MapPin className="h-6 w-6" />,
                  },
                  {
                    step: "4",
                    title: "Get Rated & Earn",
                    description: "Receive ratings from passengers and earn money for sharing your ride.",
                    image: "/placeholder.svg?height=300&width=400",
                    icon: <Star className="h-6 w-6" />,
                  },
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <Card className="border-none shadow-md h-full">
                      <CardContent className="p-0">
                        <div className="aspect-video relative">
                          <img
                            src={step.image || "/placeholder.svg"}
                            alt={step.title}
                            className="w-full h-full object-cover rounded-t-lg"
                          />
                          <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                            {step.step}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button size="lg" asChild>
                  <Link href="#">Join as a Driver</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about using POOL MATE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How is POOL MATE different from regular ride-hailing services?",
                answer:
                  "POOL MATE is specifically designed for carpooling, connecting passengers with drivers who are already traveling in the same direction. This results in lower costs, reduced traffic congestion, and a smaller carbon footprint compared to traditional ride-hailing services.",
              },
              {
                question: "How does the Women-Only Mode work?",
                answer:
                  "Women-Only Mode exclusively connects female passengers with verified female drivers. All drivers in this mode undergo additional verification and safety checks to ensure a secure environment for women travelers.",
              },
              {
                question: "How are drivers verified on POOL MATE?",
                answer:
                  "Drivers undergo a comprehensive verification process including identity verification, background checks, vehicle inspection, and in-person interviews. We also continuously monitor driver ratings and feedback to maintain high service standards.",
              },
              {
                question: "Can I schedule rides in advance?",
                answer:
                  "Yes, you can schedule rides days or even weeks in advance. This is particularly useful for regular commutes, important meetings, or airport pickups where you want to ensure availability.",
              },
              {
                question: "How does payment work?",
                answer:
                  "POOL MATE offers multiple payment options including digital wallets, credit/debit cards, and cash. Payments are processed securely through our platform, and drivers receive their earnings after each completed ride.",
              },
              {
                question: "What happens if my ride is canceled?",
                answer:
                  "If a driver cancels, our system immediately works to find you an alternative ride. If no alternatives are available, you'll receive a full refund and, in some cases, additional credits for the inconvenience.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 road-pattern text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of commuters who are already enjoying smarter, safer, and more affordable travel with POOL
            MATE.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#">Find a Ride</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link href="#">Join as a Driver</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

