import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div>
      <section className="bg-muted py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">About POOL MATE</h1>
              <p className="mb-6 text-lg text-muted-foreground">
                We're on a mission to transform urban commuting through smart carpooling solutions that are affordable,
                safe, and sustainable.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Leaf className="h-5 w-5 text-primary" />
                  </div>
                  <p>Reducing carbon emissions through shared rides</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <p>Building a community of responsible commuters</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <p>Making travel more affordable for everyone</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
              <Image src="/placeholder.svg?height=600&width=800" alt="POOL MATE team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              At POOL MATE, we're committed to creating a more sustainable, connected, and efficient urban
              transportation ecosystem through innovative carpooling solutions.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <MissionCard
              icon={<Leaf className="h-12 w-12 text-primary" />}
              title="Environmental Impact"
              description="We aim to reduce carbon emissions by optimizing vehicle occupancy and decreasing the number of cars on the road."
            />
            <MissionCard
              icon={<Users className="h-12 w-12 text-primary" />}
              title="Community Building"
              description="We're creating a trusted network of commuters who share resources and build meaningful connections."
            />
            <MissionCard
              icon={<TrendingUp className="h-12 w-12 text-primary" />}
              title="Economic Efficiency"
              description="We help users save money on transportation costs while providing additional income opportunities for drivers."
            />
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Impact</h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Since our launch, we've made significant strides in transforming urban commuting
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ImpactCard
              number="50,000+"
              label="Active Users"
              description="Commuters who regularly use POOL MATE for their daily travel needs"
            />
            <ImpactCard
              number="₹2.5 Cr+"
              label="User Savings"
              description="Total amount saved by our users on transportation costs"
            />
            <ImpactCard
              number="500,000+"
              label="Rides Completed"
              description="Successful carpooling trips facilitated through our platform"
            />
            <ImpactCard
              number="120+ tons"
              label="CO₂ Reduced"
              description="Carbon emissions prevented through shared rides"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Team</h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Meet the passionate individuals behind POOL MATE who are dedicated to revolutionizing urban commuting
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <TeamCard
              name="Rahul Sharma"
              role="Founder & CEO"
              image="/placeholder.svg?height=300&width=300"
              description="Former transportation executive with 15+ years of experience in urban mobility solutions."
            />
            <TeamCard
              name="Priya Patel"
              role="Chief Technology Officer"
              image="/placeholder.svg?height=300&width=300"
              description="Tech innovator with expertise in building scalable platforms and AI-driven solutions."
            />
            <TeamCard
              name="Vikram Singh"
              role="Head of Operations"
              image="/placeholder.svg?height=300&width=300"
              description="Operations expert focused on creating seamless user experiences and efficient processes."
            />
            <TeamCard
              name="Ananya Desai"
              role="Chief Safety Officer"
              image="/placeholder.svg?height=300&width=300"
              description="Former security consultant dedicated to ensuring the highest safety standards for all users."
            />
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">Join Our Mission</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Be part of the transportation revolution. Together, we can create more sustainable, affordable, and
            connected cities.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" variant="secondary">
              <Link href="/find-ride">Start Carpooling</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function MissionCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 rounded-full bg-primary/10 p-6">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function ImpactCard({ number, label, description }: { number: string; label: string; description: string }) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="mb-2 text-3xl font-bold text-primary">{number}</div>
        <h3 className="mb-2 text-xl font-semibold">{label}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function TeamCard({
  name,
  role,
  image,
  description,
}: { name: string; role: string; image: string; description: string }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="mb-2 text-sm font-medium text-primary">{role}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

