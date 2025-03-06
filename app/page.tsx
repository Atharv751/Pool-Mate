import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Users, Shield, Leaf, Clock, CreditCard, MapPin, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4">Smart Carpooling Service</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Ride Smart. Save More. Travel Better with <span className="text-primary">POOL MATE!</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              The intelligent carpooling platform designed for working professionals, college students, and daily
              commuters in urban areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/how-it-works">Find a Ride</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works">Join as a Driver</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="POOL MATE carpooling app interface"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background rounded-lg p-4 shadow-lg max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Eco-friendly</p>
                  <p className="text-sm text-muted-foreground">Reduce your carbon footprint</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose POOL MATE?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our smart carpooling service offers numerous benefits for urban commuters looking for affordable, safe,
              and convenient travel options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CreditCard className="h-10 w-10 text-primary" />,
                title: "Cost Savings",
                description: "Split travel costs and save up to 60% on your daily commute expenses.",
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Safety First",
                description: "Verified drivers, in-app tracking, and emergency support for secure travel.",
              },
              {
                icon: <Leaf className="h-10 w-10 text-primary" />,
                title: "Eco-Friendly",
                description: "Reduce carbon emissions and traffic congestion by sharing rides.",
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Convenience",
                description: "Book instant or scheduled rides with flexible pickup and drop-off options.",
              },
            ].map((benefit, index) => (
              <div key={index} className="dashboard-card dark:dashboard-card-dark">
                <CardHeader>
                  <div className="mb-2">{benefit.icon}</div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our unique carpooling features designed to make your travel experience better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Instant Carpool",
                description: "Find a ride in seconds with no surge pricing, even during peak hours.",
                icon: <Car className="h-6 w-6" />,
              },
              {
                title: "Women-Only Mode",
                description: "Exclusive rides for female passengers with verified female drivers.",
                icon: <Shield className="h-6 w-6" />,
              },
              {
                title: "Professional Mode",
                description: "Weekly automated pickup/drop-off scheduling for daily commuters.",
                icon: <Users className="h-6 w-6" />,
              },
              {
                title: "Return Travel Mode",
                description: "Instant booking for round trips with the same driver.",
                icon: <MapPin className="h-6 w-6" />,
              },
              {
                title: "Convo Mode",
                description: "Match with like-minded professionals for meaningful networking.",
                icon: <Users className="h-6 w-6" />,
              },
              {
                title: "Smart Ride Pooling",
                description: "AI-powered route optimization for efficient and faster travel.",
                icon: <MapPin className="h-6 w-6" />,
              },
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/features">Explore All Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from people who have transformed their daily commute with POOL MATE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Marketing Professional",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "As a woman, safety is my top priority. The Women-Only Mode gives me peace of mind during my daily commute to work.",
              },
              {
                name: "Rahul Verma",
                role: "Software Engineer",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "I've saved over ₹5,000 monthly on my commute costs and made some great professional connections through Convo Mode!",
              },
              {
                name: "Ananya Patel",
                role: "College Student",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "The scheduled rides feature is perfect for my college schedule. I never have to worry about being late for classes.",
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 road-pattern text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Daily Commute?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of commuters who are saving money, time, and reducing their carbon footprint with POOL MATE.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/how-it-works">Find a Ride</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link href="/how-it-works">Join as a Driver</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

