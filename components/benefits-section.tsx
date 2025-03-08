import type React from "react"
import { Shield, DollarSign, Leaf, Clock } from "lucide-react"

export default function BenefitsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Smart Carpooling Benefits</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <BenefitCard
            icon={<DollarSign className="h-12 w-12 text-primary" />}
            title="Affordable"
            description="Save up to 60% on your daily commute costs by sharing rides with others going your way."
          />
          <BenefitCard
            icon={<Shield className="h-12 w-12 text-primary" />}
            title="Safe"
            description="Travel with verified users, track your ride in real-time, and access 24/7 emergency support."
          />
          <BenefitCard
            icon={<Leaf className="h-12 w-12 text-primary" />}
            title="Eco-Friendly"
            description="Reduce your carbon footprint and help decrease traffic congestion in your city."
          />
          <BenefitCard
            icon={<Clock className="h-12 w-12 text-primary" />}
            title="Convenient"
            description="Schedule rides in advance or find instant matches for your daily commute needs."
          />
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

