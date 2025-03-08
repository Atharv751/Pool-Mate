import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">POOL MATE</h3>
            <p className="mb-4 text-muted-foreground">
              Smart carpooling for urban commuters. Save money, reduce emissions, and travel better.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/find-ride" className="text-muted-foreground hover:text-primary">
                  Find a Ride
                </Link>
              </li>
              <li>
                <Link href="/join-driver" className="text-muted-foreground hover:text-primary">
                  Join as a Driver
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/women-only" className="text-muted-foreground hover:text-primary">
                  Women-Only Mode
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-primary">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Download Our App</h3>
            <p className="mb-4 text-muted-foreground">Get the POOL MATE app for a seamless carpooling experience.</p>
            <div className="flex flex-col space-y-2">
              <Button variant="outline" className="flex items-center justify-start">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.9 5c.1 0 .2.1.3.1.4.4.7.8 1 1.3.3.5.4 1 .6 1.6.1.5.1 1.1.1 1.6v6c0 .3 0 .5-.1.8-.1.5-.2 1-.4 1.4-.3.5-.6 1-1 1.4-.1.1-.2.2-.3.2-.2.1-.4.1-.6.1-.4 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1 0-.4.2-.8.5-1.1.3-.3.7-.5 1.1-.5.1 0 .2 0 .3.1.1 0 .2.1.2.1.2-.2.3-.4.4-.6.1-.2.2-.5.2-.8V9.5c0-.4-.1-.8-.2-1.2-.1-.4-.3-.7-.5-1-.2.1-.5.1-.7.1-.4 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1 0-.4.2-.8.5-1.1.3-.3.7-.5 1.1-.5.3 0 .5.1.7.2.2.1.4.3.5.5.1.2.2.4.2.6 0 .2 0 .4-.1.5zM6.8 8.4c.4 0 .8.1 1.2.2.5.1 1 .3 1.4.6.5.3.9.6 1.2 1.1.3.4.6.9.8 1.4.2.5.3 1 .3 1.6 0 .6-.1 1.1-.3 1.6-.2.5-.4 1-.8 1.4-.3.4-.7.8-1.2 1.1-.4.3-.9.5-1.4.6-.4.1-.8.2-1.2.2-.4 0-.8-.1-1.2-.2-.5-.1-1-.3-1.4-.6-.5-.3-.9-.6-1.2-1.1-.3-.4-.6-.9-.8-1.4-.2-.5-.3-1-.3-1.6 0-.6.1-1.1.3-1.6.2-.5.4-1 .8-1.4.3-.4.7-.8 1.2-1.1.4-.3.9-.5 1.4-.6.4-.1.8-.2 1.2-.2zm0 8.9c.3 0 .7-.1 1-.2.3-.1.7-.3.9-.5.3-.2.5-.5.7-.8.2-.3.3-.6.4-1 .1-.4.2-.7.2-1.1 0-.4-.1-.7-.2-1.1-.1-.4-.2-.7-.4-1-.2-.3-.4-.6-.7-.8-.3-.2-.6-.4-.9-.5-.3-.1-.7-.2-1-.2-.3 0-.7.1-1 .2-.3.1-.7.3-.9.5-.3.2-.5.5-.7.8-.2.3-.3.6-.4 1-.1.4-.2.7-.2 1.1 0 .4.1.7.2 1.1.1.4.2.7.4 1 .2.3.4.6.7.8.3.2.6.4.9.5.3.1.6.2 1 .2zM12 2c.4 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1-.3.3-.7.5-1.1.5-.4 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1 0-.4.2-.8.5-1.1.3-.3.7-.5 1.1-.5zm9.7 1.1c.4 0 .8.2 1.1.5.3.3.5.7.5 1.1 0 .4-.2.8-.5 1.1-.3.3-.7.5-1.1.5-.4 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1 0-.4.2-.8.5-1.1.3-.3.7-.5 1.1-.5z" />
                </svg>
                Download for iOS
              </Button>
              <Button variant="outline" className="flex items-center justify-start">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.9 2.4C4.8 3.2 5 4.6 5 6.5v11c0 1.9-.2 3.3-1.1 4.1.5.1 1 .2 1.5.3.8.1 1.6.1 2.4.1 1.9 0 3.9-.2 5.6-.6 1.7-.4 3.2-1 4.5-1.8 1.3-.8 2.4-1.8 3.1-3 .8-1.2 1.1-2.6 1.1-4.1 0-1.5-.4-2.9-1.1-4.1-.8-1.2-1.8-2.2-3.1-3-1.3-.8-2.8-1.4-4.5-1.8-1.7-.4-3.7-.6-5.6-.6-.8 0-1.6 0-2.4.1-.5.1-1 .2-1.5.3zm-.5 15.1v-11c0-1.7-.1-2.8-.7-3.3-.4-.3-.9-.4-1.6-.4-.1 0-.2 0-.3 0-.1 0-.2 0-.3.1v18.2c.1 0 .2.1.3.1.1 0 .2 0 .3 0 .7 0 1.2-.1 1.6-.4.6-.5.7-1.6.7-3.3zm15.1-5.5c0 1.2-.3 2.3-.9 3.2-.6.9-1.5 1.7-2.6 2.3-1.1.6-2.4 1.1-3.9 1.4-1.5.3-3.1.5-4.8.5-.7 0-1.4 0-2.1-.1-.2 0-.4-.1-.6-.1-.2 0-.4-.1-.6-.1v-14.4c.2 0 .4-.1.6-.1.2 0 .4-.1.6-.1.7-.1 1.4-.1 2.1-.1 1.7 0 3.3.2 4.8.5 1.5.3 2.8.8 3.9 1.4 1.1.6 2 1.4 2.6 2.3.6.9.9 2 .9 3.2z" />
                </svg>
                Download for Android
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} POOL MATE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

