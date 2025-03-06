"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, MessageSquare, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Have questions or feedback? We're here to help. Reach out to our team and we'll get back to you as soon as
            possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {formSubmitted ? (
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex flex-col items-center text-center p-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                      <p className="text-muted-foreground mb-4">
                        Your message has been sent successfully. We'll get back to you shortly.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)}>Send Another Message</Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="How can we help you?" rows={5} required />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                You can also reach out to us directly using the contact information below.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="h-6 w-6 text-primary" />,
                    title: "Office Address",
                    details: [
                      "POOL MATE Headquarters",
                      "123 Tech Park, Sector 62",
                      "Noida, Uttar Pradesh 201301",
                      "India",
                    ],
                  },
                  {
                    icon: <Phone className="h-6 w-6 text-primary" />,
                    title: "Phone Numbers",
                    details: [
                      "Customer Support: +91 98765 43210",
                      "Driver Support: +91 98765 43211",
                      "Business Inquiries: +91 98765 43212",
                    ],
                  },
                  {
                    icon: <Mail className="h-6 w-6 text-primary" />,
                    title: "Email Addresses",
                    details: [
                      "General Inquiries: info@poolmate.com",
                      "Customer Support: support@poolmate.com",
                      "Partnership Opportunities: partners@poolmate.com",
                    ],
                  },
                  {
                    icon: <MessageSquare className="h-6 w-6 text-primary" />,
                    title: "Social Media",
                    details: [
                      "Facebook: /poolmateindia",
                      "Twitter: @poolmateindia",
                      "Instagram: @poolmate_india",
                      "LinkedIn: /company/poolmate",
                    ],
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <ul className="space-y-1 text-muted-foreground">
                        {item.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Find Us on the Map</h3>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="POOL MATE office location map"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about POOL MATE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How do I report an issue with my ride?",
                answer:
                  "You can report issues through the app by going to 'Ride History', selecting the ride, and tapping 'Report an Issue'. Alternatively, you can contact our support team directly via email or phone.",
              },
              {
                question: "What are your customer support hours?",
                answer:
                  "Our customer support team is available 24/7 to assist you with any issues or questions you may have about our service.",
              },
              {
                question: "How can I become a POOL MATE driver?",
                answer:
                  "To become a driver, download our app, sign up as a driver, complete the verification process, and submit the required documents. Our team will review your application and get back to you within 48 hours.",
              },
              {
                question: "Do you offer corporate carpooling solutions?",
                answer:
                  "Yes, we offer customized carpooling solutions for businesses. Contact our business team at partners@poolmate.com for more information.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/how-it-works" className="text-primary hover:underline">
              View all FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Download the POOL MATE App</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Get the POOL MATE app for iOS and Android to start carpooling today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-apple"
              >
                <path d="M12 20.94c1.5 0 2.75-.67 3.95-1.89a24.6 24.6 0 0 0 4.1-8.2c-1.67-.5-2.7-2.17-2.7-4.05 0-2.2 1.8-3.95 4-3.95-1.05-2.05-2.92-2.93-4.85-2.93-1.3 0-2.57.4-3.57 1.1-.35.25-.75.25-1.1 0-1-.7-2.27-1.1-3.57-1.1-1.93 0-3.8.88-4.85 2.93 2.2 0 4 1.75 4 3.95 0 1.88-1.03 3.55-2.7 4.05a24.6 24.6 0 0 0 4.1 8.2c1.2 1.22 2.45 1.89 3.95 1.89Z" />
                <path d="M12 20.94c-1.5 0-2.75-.67-3.95-1.89a24.6 24.6 0 0 1-4.1-8.2c1.67-.5 2.7-2.17 2.7-4.05 0-2.2-1.8-3.95-4-3.95 1.05-2.05 2.92-2.93 4.85-2.93 1.3 0 2.57.4 3.57 1.1.35.25.75.25 1.1 0 1-.7 2.27-1.1 3.57-1.1 1.93 0 3.8.88 4.85 2.93-2.2 0-4 1.75-4 3.95 0 1.88 1.03 3.55 2.7 4.05a24.6 24.6 0 0 1-4.1 8.2c-1.2 1.22-2.45 1.89-3.95 1.89Z" />
              </svg>
              Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-smartphone"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                <path d="M12 18h.01" />
              </svg>
              Download for Android
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

