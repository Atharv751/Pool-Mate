import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus, Search, Car, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HowItWorksPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">How POOL MATE Works</h1>
        <p className="mb-8 text-muted-foreground">
          A simple guide to using our smart carpooling platform for a better commuting experience
        </p>
      </div>

      <Tabs defaultValue="passenger" className="mx-auto max-w-4xl">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="passenger">For Passengers</TabsTrigger>
          <TabsTrigger value="driver">For Drivers</TabsTrigger>
        </TabsList>
        <TabsContent value="passenger" className="mt-6">
          <div className="space-y-12">
            <StepCard
              number={1}
              title="Sign Up & Verify Identity"
              description="Create your POOL MATE account and complete the identity verification process for safety and trust."
              image="/placeholder.svg?height=300&width=500"
              alt="Sign up process"
            />
            <StepCard
              number={2}
              title="Find a Ride"
              description="Enter your pickup location, destination, and preferred time to see available rides matching your route."
              image="/placeholder.svg?height=300&width=500"
              alt="Find a ride"
              reverse
            />
            <StepCard
              number={3}
              title="Book & Pay"
              description="Select your preferred ride, confirm your booking, and pay through our secure payment system."
              image="/placeholder.svg?height=300&width=500"
              alt="Book and pay"
            />
            <StepCard
              number={4}
              title="Travel Safely"
              description="Meet your driver at the pickup point, enjoy your ride with real-time tracking for added security."
              image="/placeholder.svg?height=300&width=500"
              alt="Travel safely"
              reverse
            />
            <StepCard
              number={5}
              title="Rate & Review"
              description="After your ride, rate your experience and provide feedback to help maintain our high-quality service."
              image="/placeholder.svg?height=300&width=500"
              alt="Rate and review"
            />
          </div>
          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link href="/find-ride">Find a Ride Now</Link>
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="driver" className="mt-6">
          <div className="space-y-12">
            <StepCard
              number={1}
              title="Sign Up as a Driver"
              description="Create your POOL MATE driver account and complete the comprehensive verification process."
              image="/placeholder.svg?height=300&width=500"
              alt="Driver sign up"
            />
            <StepCard
              number={2}
              title="Submit Documents"
              description="Upload your driver's license, vehicle registration, insurance, and other required documents for verification."
              image="/placeholder.svg?height=300&width=500"
              alt="Submit documents"
              reverse
            />
            <StepCard
              number={3}
              title="Get Approved"
              description="Our team will review your documents and approve your profile, usually within 24-48 hours."
              image="/placeholder.svg?height=300&width=500"
              alt="Get approved"
            />
            <StepCard
              number={4}
              title="Offer Rides"
              description="Set your route, schedule, and available seats to start offering rides to passengers going your way."
              image="/placeholder.svg?height=300&width=500"
              alt="Offer rides"
              reverse
            />
            <StepCard
              number={5}
              title="Earn & Grow"
              description="Receive payments for your rides, build your rating, and grow your passenger network."
              image="/placeholder.svg?height=300&width=500"
              alt="Earn and grow"
            />
          </div>
          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link href="/join-driver">Become a Driver</Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">Safety Features</h2>
          <p className="mb-8 text-muted-foreground">
            Your safety is our top priority. Here's how we ensure a secure carpooling experience:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <SafetyCard
            icon={<UserPlus className="h-10 w-10 text-primary" />}
            title="Identity Verification"
            description="All users must verify their identity with government-issued ID and phone number."
          />
          <SafetyCard
            icon={<Search className="h-10 w-10 text-primary" />}
            title="Background Checks"
            description="Drivers undergo comprehensive background checks before approval."
          />
          <SafetyCard
            icon={<Car className="h-10 w-10 text-primary" />}
            title="Real-time Tracking"
            description="Track your ride in real-time and share your trip details with trusted contacts."
          />
          <SafetyCard
            icon={<Star className="h-10 w-10 text-primary" />}
            title="Rating System"
            description="Our community-based rating system helps maintain high service standards."
          />
        </div>
      </section>

      <section className="mt-16 rounded-lg bg-primary p-8 text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ready to Get Started?</h2>
          <p className="mb-6">Join thousands of smart commuters who are already enjoying the benefits of POOL MATE.</p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" variant="secondary">
              <Link href="/find-ride">Find a Ride</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary"
            >
              <Link href="/join-driver">Become a Driver</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

interface StepCardProps {
  number: number
  title: string
  description: string
  image: string
  alt: string
  reverse?: boolean
}

function StepCard({ number, title, description, image, alt, reverse }: StepCardProps) {
  return (
    <div className={`flex flex-col items-center gap-8 md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className="flex-1">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
            {number}
          </div>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <p className="mt-4 text-muted-foreground">{description}</p>
      </div>
      <div className="flex-1">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={alt}
            width={500}
            height={300}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

interface SafetyCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function SafetyCard({ icon, title, description }: SafetyCardProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="mb-4 rounded-full bg-primary/10 p-4">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

