import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Users, Award, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">POOL MATE</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We're on a mission to transform urban commuting with smart, affordable, and eco-friendly carpooling
              solutions.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="POOL MATE team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At POOL MATE, we're committed to creating a more sustainable, efficient, and connected urban
              transportation ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="h-10 w-10 text-primary" />,
                title: "Sustainability",
                description: "Reducing carbon emissions and traffic congestion through efficient carpooling.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Community",
                description: "Building connections between commuters and fostering a sense of community.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Safety",
                description: "Prioritizing the safety and security of all passengers, especially women.",
              },
              {
                icon: <Target className="h-10 w-10 text-primary" />,
                title: "Innovation",
                description: "Leveraging technology to create smarter, more efficient transportation solutions.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-none shadow-md text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="POOL MATE founding story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                POOL MATE was born out of a simple observation: thousands of people in Delhi travel similar routes every
                day in half-empty vehicles, contributing to traffic congestion, pollution, and higher commuting costs.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2022 by a team of transportation experts and tech enthusiasts, we set out to create a
                carpooling platform that addresses the unique challenges of urban commuting in India.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                What started as a small pilot project in Delhi has now grown into a comprehensive carpooling service
                with thousands of daily users, helping reduce traffic congestion and carbon emissions while providing
                affordable and safe transportation options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every ride shared on POOL MATE contributes to a more sustainable and efficient urban transportation
              ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                value: "500,000+",
                label: "Rides Shared",
                description: "Half a million shared journeys and counting.",
              },
              {
                value: "1,200+",
                label: "Tons of CO₂ Saved",
                description: "Reducing carbon emissions one ride at a time.",
              },
              {
                value: "₹20M+",
                label: "Commuter Savings",
                description: "Helping commuters save on transportation costs.",
              },
            ].map((stat, index) => (
              <Card key={index} className="border-none shadow-md text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">{stat.value}</div>
                  <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The passionate individuals behind POOL MATE who are dedicated to transforming urban commuting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Arjun Mehta",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Former transportation consultant with a passion for sustainable urban mobility.",
              },
              {
                name: "Priya Sharma",
                role: "Chief Technology Officer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Tech innovator with expertise in AI and machine learning for transportation solutions.",
              },
              {
                name: "Rahul Verma",
                role: "Head of Operations",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Operations expert with experience scaling transportation networks across India.",
              },
              {
                name: "Ananya Patel",
                role: "Safety & Security Lead",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Former security consultant dedicated to creating safe transportation experiences for all.",
              },
            ].map((member, index) => (
              <Card key={index} className="border-none shadow-md text-center">
                <CardContent className="pt-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 road-pattern text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Be part of the transportation revolution. Start carpooling with POOL MATE today and help us create a more
            sustainable, connected urban future.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/how-it-works">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

