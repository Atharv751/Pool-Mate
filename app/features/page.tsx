import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Car,
  Users,
  Shield,
  Leaf,
  CreditCard,
  MapPin,
  Calendar,
  UserCheck,
  RotateCw,
  MessageSquare,
  Coffee,
  Brain,
  Wallet,
  BellRing,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Features for Smarter Commuting</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover all the innovative features that make POOL MATE the most convenient, safe, and cost-effective
            carpooling service in Delhi.
          </p>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <TabsTrigger value="all">All Features</TabsTrigger>
                <TabsTrigger value="convenience">Convenience</TabsTrigger>
                <TabsTrigger value="safety">Safety</TabsTrigger>
                <TabsTrigger value="savings">Savings</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-16">
              {/* Convenience Features */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-center">Convenience Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Car className="h-8 w-8 text-primary" />,
                      title: "Instant Carpool",
                      description:
                        "Find a ride in seconds with no surge pricing, even during peak hours. Our algorithm matches you with the closest available drivers.",
                    },
                    {
                      icon: <Calendar className="h-8 w-8 text-primary" />,
                      title: "Scheduled Rides",
                      description:
                        "Pre-book rides days or weeks in advance for important meetings, flights, or regular commutes. Never worry about last-minute bookings.",
                    },
                    {
                      icon: <Users className="h-8 w-8 text-primary" />,
                      title: "Professional Mode",
                      description:
                        "Weekly automated pickup/drop-off scheduling for daily commuters. Set your work schedule once and let our system handle the rest.",
                    },
                    {
                      icon: <RotateCw className="h-8 w-8 text-primary" />,
                      title: "Return Travel Mode",
                      description:
                        "Instantly book round trips with the same driver. Perfect for short meetings or errands when you need a guaranteed return ride.",
                    },
                    {
                      icon: <MessageSquare className="h-8 w-8 text-primary" />,
                      title: "Convo Mode",
                      description:
                        "Match with like-minded professionals or travelers for meaningful networking during your commute. Expand your professional network while traveling.",
                    },
                    {
                      icon: <Coffee className="h-8 w-8 text-primary" />,
                      title: "Instant Food Pickup",
                      description:
                        "Grab meals on the go, saving time on food stops. Your driver can pick up pre-ordered food from partner restaurants along your route.",
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

              {/* Safety Features */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-center">Safety Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
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
                </div>
              </div>
            </TabsContent>

            <TabsContent value="convenience">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Car className="h-8 w-8 text-primary" />,
                    title: "Instant Carpool",
                    description:
                      "Find a ride in seconds with no surge pricing, even during peak hours. Our algorithm matches you with the closest available drivers.",
                  },
                  {
                    icon: <Calendar className="h-8 w-8 text-primary" />,
                    title: "Scheduled Rides",
                    description:
                      "Pre-book rides days or weeks in advance for important meetings, flights, or regular commutes. Never worry about last-minute bookings.",
                  },
                  {
                    icon: <Users className="h-8 w-8 text-primary" />,
                    title: "Professional Mode",
                    description:
                      "Weekly automated pickup/drop-off scheduling for daily commuters. Set your work schedule once and let our system handle the rest.",
                  },
                  {
                    icon: <RotateCw className="h-8 w-8 text-primary" />,
                    title: "Return Travel Mode",
                    description:
                      "Instantly book round trips with the same driver. Perfect for short meetings or errands when you need a guaranteed return ride.",
                  },
                  {
                    icon: <MessageSquare className="h-8 w-8 text-primary" />,
                    title: "Convo Mode",
                    description:
                      "Match with like-minded professionals or travelers for meaningful networking during your commute. Expand your professional network while traveling.",
                  },
                  {
                    icon: <Coffee className="h-8 w-8 text-primary" />,
                    title: "Instant Food Pickup",
                    description:
                      "Grab meals on the go, saving time on food stops. Your driver can pick up pre-ordered food from partner restaurants along your route.",
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
            </TabsContent>

            <TabsContent value="safety">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
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
            </TabsContent>

            <TabsContent value="savings">
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
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Smart Ride Pooling with AI Technology</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our advanced AI algorithms optimize routes in real-time, ensuring you reach your destination faster
                while maximizing the efficiency of each ride.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Intelligent matching of riders going in similar directions",
                  "Dynamic route optimization to avoid traffic congestion",
                  "Minimal detours while accommodating multiple passengers",
                  "Reduced waiting times with predictive demand forecasting",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                      <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="AI-powered route optimization"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 road-pattern text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience These Features Today</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Download the POOL MATE app now and transform your daily commute with our smart carpooling features.
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

