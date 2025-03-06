import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Download, Car } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-primary mb-4">
              <Car className="h-5 w-5" />
              POOL MATE
            </h2>
            <p className="text-muted-foreground mb-4">Affordable, Safe, and Smart Travel for Urban Commuters.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Features", href: "/features" },
                { name: "Women-Only Mode", href: "/women-only" },
                { name: "How It Works", href: "/how-it-works" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                { name: "Terms of Service", href: "#" },
                { name: "Privacy Policy", href: "#" },
                { name: "Cookie Policy", href: "#" },
                { name: "Safety Guidelines", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Download App</h3>
            <p className="text-muted-foreground mb-4">Get the POOL MATE app for iOS and Android.</p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <Download size={16} />
                iOS App
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <Download size={16} />
                Android App
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} POOL MATE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

