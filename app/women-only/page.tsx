import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Bell, MessageSquare, UserCheck, MapPin, Star } from "lucide-react"

export default function WomenOnlyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Women-Only Mode: <span className="text-primary">Safety First</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Travel with complete peace of mind with our exclusive Women-Only Mode, designed specifically for female
              passengers with verified female drivers.
            </p>
            <Button size="lg" asChild>
              <Link href="/how-it-works">Try Women-Only Mode</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Women-Only Mode"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Safety Features for Women</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our Women-Only Mode comes with enhanced safety features designed to provide a secure travel experience for
              female passengers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <UserCheck className="h-10 w-10 text-primary" />,
                title: "Verified Female Drivers",
                description:
                  "All drivers in Women-Only Mode are verified females who undergo additional background checks and in-person verification.",
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Enhanced Security",
                description:
                  "Additional security measures including regular driver audits, safety training, and stricter verification protocols.",
              },
              {
                icon: <MapPin className="h-10 w-10 text-primary" />,
                title: "Live Location Sharing",
                description:
                  "Share your ride details and real-time location with trusted contacts who can monitor your entire journey.",
              },
              {
                icon: <Bell className="h-10 w-10 text-primary" />,
                title: "Emergency Alert System",
                description:
                  "One-tap SOS button that immediately alerts emergency contacts and our 24/7 safety response team.",
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-primary" />,
                title: "Secure In-App Chat",
                description:
                  "Communicate with your driver through our secure in-app messaging system without sharing personal contact details.",
              },
              {
                icon: <Star className="h-10 w-10 text-primary" />,
                title: "Women-Only Ratings",
                description:
                  "Exclusive rating system where female passengers rate female drivers, ensuring high service standards.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Women-Only Mode Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple process designed to provide maximum safety and convenience for female passengers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Enable Women-Only Mode",
                description:
                  "Toggle the Women-Only Mode option in your app settings to exclusively match with female drivers.",
              },
              {
                step: "2",
                title: "Book Your Ride",
                description: "Request an instant ride or schedule in advance, just like you would with regular rides.",
              },
              {
                step: "3",
                title: "Verify Your Driver",
                description: "Check your driver's profile and verification badge before getting in the car.",
              },
              {
                step: "4",
                title: "Travel Safely",
                description: "Enjoy your ride with the added peace of mind that comes with Women-Only Mode.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-background rounded-lg p-6 shadow-md h-full">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Women Say About Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from women who use our Women-Only Mode for their daily commutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Marketing Professional",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "As a woman who often works late, safety is my top priority. The Women-Only Mode gives me peace of mind during my evening commutes.",
              },
              {
                name: "Ananya Patel",
                role: "College Student",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "I feel so much more comfortable using the Women-Only Mode, especially when traveling to new areas of the city for classes.",
              },
              {
                name: "Meera Kapoor",
                role: "Healthcare Worker",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "With night shifts at the hospital, Women-Only Mode has been a blessing. I can rest during the ride without worrying about safety.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="italic mb-4">"{testimonial.quote}"</p>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Stats */}
      <section className="py-16 md:py-24 road-pattern text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Safety By The Numbers</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our commitment to women's safety is reflected in our statistics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "100%",
                label: "Verified Female Drivers",
              },
              {
                value: "24/7",
                label: "Safety Support",
              },
              {
                value: "98%",
                label: "Safety Rating",
              },
              {
                value: "50,000+",
                label: "Women-Only Rides Monthly",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Safer Travel?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Join thousands of women who trust POOL MATE's Women-Only Mode for their daily commutes.
          </p>
          <Button size="lg" asChild>
            <Link href="/how-it-works">Try Women-Only Mode Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

