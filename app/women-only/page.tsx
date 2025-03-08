import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Bell, MessageCircle, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WomenOnlyPage() {
  return (
    <div>
      <section className="relative bg-pink-500 py-16 text-white">
        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <Badge className="mb-4 bg-white text-pink-500 hover:bg-white/90">Women-Only Mode</Badge>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Safe Carpooling for Women</h1>
              <p className="mb-6 text-lg">
                Travel with confidence in our exclusive Women-Only Mode. Connect with verified female drivers and
                passengers for a secure and comfortable journey.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg" variant="secondary" className="bg-white text-pink-500 hover:bg-white/90">
                  <Link href="/find-ride">Find a Women-Only Ride</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-pink-500"
                >
                  <Link href="/join-driver">Join as a Female Driver</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
              <Image src="/placeholder.svg?height=600&width=800" alt="Women carpooling" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Why Choose Women-Only Mode?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Shield className="h-12 w-12 text-pink-500" />}
              title="Enhanced Safety"
              description="Travel exclusively with verified female drivers and passengers for added security and peace of mind."
            />
            <FeatureCard
              icon={<Users className="h-12 w-12 text-pink-500" />}
              title="Verified Profiles"
              description="All women in our network undergo thorough verification, including government ID and background checks."
            />
            <FeatureCard
              icon={<Bell className="h-12 w-12 text-pink-500" />}
              title="Emergency Support"
              description="Access 24/7 emergency assistance with our dedicated SOS button and real-time ride tracking."
            />
            <FeatureCard
              icon={<MessageCircle className="h-12 w-12 text-pink-500" />}
              title="Community Support"
              description="Join a supportive community of women helping each other commute safely and affordably."
            />
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">How It Works</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Our Women-Only Mode is designed to provide a safe and comfortable carpooling experience
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold">Enable Women-Only Mode</h3>
              <p className="text-muted-foreground">
                Toggle the Women-Only Mode option when searching for a ride or offering one as a driver.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold">Connect with Verified Women</h3>
              <p className="text-muted-foreground">
                Browse and connect with verified female drivers or passengers going your way.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold">Travel Safely</h3>
              <p className="text-muted-foreground">
                Enjoy a secure journey with real-time tracking and emergency support features.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Testimonials from Women Riders</h2>

          <Tabs defaultValue="passengers" className="mx-auto max-w-3xl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="passengers">Passengers</TabsTrigger>
              <TabsTrigger value="drivers">Drivers</TabsTrigger>
            </TabsList>
            <TabsContent value="passengers" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <TestimonialCard
                  name="Priya Sharma"
                  role="Marketing Executive"
                  image="/placeholder.svg?height=100&width=100"
                  quote="As a woman who often works late, POOL MATE's Women-Only Mode has been a game-changer for me. I feel completely safe and have made some great friends during my daily commute."
                  rating={5}
                />
                <TestimonialCard
                  name="Anjali Patel"
                  role="College Student"
                  image="/placeholder.svg?height=100&width=100"
                  quote="The Women-Only Mode gives me and my parents peace of mind when I travel to college. The drivers are professional, and I've never had any safety concerns."
                  rating={5}
                />
              </div>
            </TabsContent>
            <TabsContent value="drivers" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <TestimonialCard
                  name="Meera Reddy"
                  role="Part-time Driver"
                  image="/placeholder.svg?height=100&width=100"
                  quote="Driving for POOL MATE's Women-Only Mode has been a rewarding experience. I feel like I'm helping other women travel safely while earning extra income on my daily commute."
                  rating={5}
                />
                <TestimonialCard
                  name="Sunita Gupta"
                  role="Full-time Driver"
                  image="/placeholder.svg?height=100&width=100"
                  quote="The verification process was thorough, which I appreciate as it ensures safety for everyone. My passengers often tell me how much they value this service."
                  rating={4}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="bg-pink-500 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Experience Safer Carpooling?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Join thousands of women who are already enjoying safe and comfortable rides with POOL MATE's Women-Only
            Mode.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" variant="secondary" className="bg-white text-pink-500 hover:bg-white/90">
              <Link href="/find-ride">Find a Women-Only Ride</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-pink-500"
            >
              <Link href="/join-driver">Join as a Female Driver</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  quote: string
  rating: number
}

function TestimonialCard({ name, role, image, quote, rating }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
            />
          ))}
        </div>
        <p className="mb-6 text-muted-foreground">{quote}</p>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

