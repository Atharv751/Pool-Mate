import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Clock,
  Shield,
  Briefcase,
  Shield,
  Briefcase,
  Briefcase,
  Briefcase,
  Calendar,
  UserCheck,
  RotateCw,
  CreditCard,
  ArrowRight,
  Brain,
  Wallet,
  BellRing,
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
          </p>
        </div>
      </section>

      {/* Features Tabs */}
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
                      icon: <Shield className="h-8 w-8 text-primary" />,
                      title: "Women-Only Mode",
                      description:
                        "Exclusive rides for female passengers with verified female drivers. Travel with complete peace of mind, especially during late hours.",
                    },
                    {
                      icon: <UserCheck className="h-8 w-8 text-primary" />,
                      title: "Driver Verification",
                      description:
                        "All drivers undergo rigorous background checks, document verification, and in-person interviews before joining our platform.",
                    },
                    {
                      icon: <MapPin className="h-8 w-8 text-primary" />,
                      title: "Live Tracking",
                      description:
                        "Share your ride details and real-time location with trusted contacts. They can monitor your entire journey for added safety.",
                    },
                    {
                      icon: <BellRing className="h-8 w-8 text-primary" />,
                      title: "Emergency Support",
                      description:
                        "One-tap SOS button connects you to emergency services and our 24/7 support team. Help is always just a button away.",
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

              {/* Savings & Smart Features */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-center">Savings & Smart Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <CreditCard className="h-8 w-8 text-primary" />,
                      title: "Cost Savings",
                      description:
                        "Split travel costs and save up to 60% on your daily commute expenses compared to traditional ride-hailing services.",
                    },
                    {
                      icon: <Leaf className="h-8 w-8 text-primary" />,
                      title: "Eco-Friendly",
                      description:
                        "Reduce your carbon footprint by sharing rides. Our app shows you the environmental impact of your carpooling choices.",
                    },
                    {
                      icon: <Brain className="h-8 w-8 text-primary" />,
                      title: "Smart Ride Pooling",
                      description:
                        "AI-powered route optimization ensures efficient travel with minimal detours, saving you time and reducing traffic congestion.",
                    },
                    {
                      icon: <Wallet className="h-8 w-8 text-primary" />,
                      title: "Flexible Payment",
                      description:
                        "Pay via digital wallets, credit cards, or cash. Our transparent pricing means no hidden charges or surge pricing, ever.",
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
