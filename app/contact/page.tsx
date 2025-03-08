"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
  }

  return (
    <div className="container py-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Contact Us</h1>
        <p className="mb-8 text-muted-foreground">
          Have questions or feedback? We'd love to hear from you. Our team is here to help.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" rows={5} />
                </div>
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Office Address</h3>
                    <p className="text-muted-foreground">
                      123 Tech Park, Sector 62
                      <br />
                      Noida, Uttar Pradesh 201301
                      <br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">
                      +91 98765 43210
                      <br />
                      (Mon-Fri, 9:00 AM - 6:00 PM)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      support@poolmate.com
                      <br />
                      info@poolmate.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Working Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">How do I sign up for POOL MATE?</h3>
                  <p className="text-sm text-muted-foreground">
                    You can sign up by downloading our app or visiting our website and clicking on the "Sign Up" button.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Is POOL MATE available in my city?</h3>
                  <p className="text-sm text-muted-foreground">
                    POOL MATE is currently available in Delhi NCR, Mumbai, Bangalore, Hyderabad, and Chennai. We're
                    expanding to more cities soon!
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">How does payment work?</h3>
                  <p className="text-sm text-muted-foreground">
                    You can pay for rides using our in-app wallet, credit/debit cards, UPI, or cash. Drivers receive
                    payments directly to their linked bank accounts.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">What if I need to cancel my ride?</h3>
                  <p className="text-sm text-muted-foreground">
                    You can cancel your ride up to 30 minutes before the scheduled pickup time without any penalty.
                    Later cancellations may incur a small fee.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Button asChild variant="link" className="p-0">
                  <Link href="/faq">View all FAQs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-6 text-center text-2xl font-bold">Find Us On The Map</h2>
        <div className="h-96 w-full overflow-hidden rounded-lg bg-muted">
          {/* Map would be integrated here */}
          <div className="flex h-full items-center justify-center">
            <p className="text-muted-foreground">Interactive map would be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

