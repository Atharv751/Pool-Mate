import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Leaf, Clock, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import BenefitsSection from "@/components/benefits-section"
import FeaturedRides from "@/components/featured-rides"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.freepik.com/premium-photo/cartoon-car-drives-along-coastal-road-with-view-ocean_36682-150697.jpg"
            alt="Carpooling"
            fill
            className="object-cover brightness-[0.7"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Ride Smart. Save More.
            <br />
            Travel Better with POOL MATE!
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            Join thousands of commuters who are saving money, reducing their carbon footprint, and making new
            connections through smart carpooling.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-primary text-lg font-semibold">
              <Link href="/find-ride">
                Find a Ride <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white bg-transparent text-lg font-semibold text-white hover:bg-white hover:text-black"
            >
              <Link href="/join-driver">
                Join as a Driver <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Featured Rides Section */}
      <FeaturedRides />

      {/* Features Highlight */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Why Choose POOL MATE?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<DollarSign className="h-10 w-10 text-primary" />}
              title="Affordable"
              description="Save up to 60% on your daily commute costs compared to solo rides."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-primary" />}
              title="Safe"
              description="Verified drivers and passengers with real-time tracking and emergency support."
            />
            <FeatureCard
              icon={<Leaf className="h-10 w-10 text-primary" />}
              title="Eco-Friendly"
              description="Reduce your carbon footprint by sharing rides and decreasing traffic congestion."
            />
            <FeatureCard
              icon={<Clock className="h-10 w-10 text-primary" />}
              title="Convenient"
              description="Schedule rides in advance or find instant matches for your daily commute."
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/features">
                Explore All Features <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Transform Your Daily Commute?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Join thousands of smart commuters who are saving money, time, and the environment with POOL MATE.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" variant="secondary" className="text-lg font-semibold">
              <Link href="/find-ride">Find a Ride Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-lg font-semibold text-white hover:bg-white hover:text-primary"
            >
              <Link href="/join-driver">Become a Driver</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-md transition-all hover:shadow-lg">
      <div className="mb-4 rounded-full bg-primary/10 p-4">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

