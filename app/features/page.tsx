import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Clock,
  Calendar,
  Shield,
  Briefcase,
  RotateCw,
  MessageSquare,
  Coffee,
  Brain,
  CreditCard,
  ArrowRight,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">POOL MATE Features</h1>
        <p className="mb-8 text-muted-foreground">
          Discover all the smart features that make POOL MATE the best carpooling platform for urban commuters
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          icon={<Clock className="h-10 w-10 text-primary" />}
          title="Instant Carpool"
          description="Quick ride-matching with no surge pricing. Find a ride within minutes, even during peak hours."
        />
        <FeatureCard
          icon={<Calendar className="h-10 w-10 text-primary" />}
          title="Scheduled Rides"
          description="Pre-book your rides for future trips. Plan ahead and secure your commute in advance."
        />
        <FeatureCard
          icon={<Shield className="h-10 w-10 text-primary" />}
          title="Women-Only Mode"
          description="Secure carpooling exclusively for female passengers with verified female drivers."
          link="/women-only"
          linkText="Learn More"
        />
        <FeatureCard
          icon={<Briefcase className="h-10 w-10 text-primary" />}
          title="Professional Mode"
          description="Automated daily pickup/drop-off for regular commuters. Perfect for office-goers."
        />
        <FeatureCard
          icon={<RotateCw className="h-10 w-10 text-primary" />}
          title="Return Travel Mode"
          description="Instant round-trip booking. Schedule your return journey at the same time."
        />
        <FeatureCard
          icon={<MessageSquare className="h-10 w-10 text-primary" />}
          title="Convo Mode"
          description="Connect with like-minded travelers. Choose rides based on shared interests."
        />
        <FeatureCard
          icon={<Coffee className="h-10 w-10 text-primary" />}
          title="Instant Food Pickup"
          description="Skip food stops, enjoy meals on the go. Order food to be picked up during your ride."
        />
        <FeatureCard
          icon={<Brain className="h-10 w-10 text-primary" />}
          title="Smart Ride Pooling"
          description="AI-powered optimized routes for efficiency. Save time with intelligent matching."
        />
        <FeatureCard
          icon={<CreditCard className="h-10 w-10 text-primary" />}
          title="Flexible Payment"
          description="Multiple payment options including wallets, credit cards, and cash for your convenience."
        />
      </div>

      <div className="mt-16 rounded-lg bg-primary p-8 text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ready to Experience These Features?</h2>
          <p className="mb-6">Join thousands of smart commuters who are already enjoying the benefits of POOL MATE.</p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" variant="secondary">
              <Link href="/find-ride">Find a Ride Now</Link>
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
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link?: string
  linkText?: string
}

function FeatureCard({ icon, title, description, link, linkText }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 text-base">{description}</CardDescription>
        {link && (
          <Button asChild variant="link" className="p-0">
            <Link href={link}>
              {linkText} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

