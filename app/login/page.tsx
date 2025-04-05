"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { KeyRound, UserRound, ArrowRight, AlertCircle, Phone } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { 
  RecaptchaVerifier, 
  signInWithPhoneNumber, 
  PhoneAuthProvider,
  signInWithCredential,
  getAuth
} from "firebase/auth"
import { initializeApp } from "firebase/app"

// Your Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyB9OUjYx3I4q5Pqr7leyydhYtcb4U-O-Zs",
  authDomain: "pool-mate-ec09a.firebaseapp.com",
  projectId: "pool-mate-ec09a",
  storageBucket: "pool-mate-ec09a.firebasestorage.app",
  messagingSenderId: "385843835006",
  appId: "1:385843835006:web:8711f868c43b06e457282f",
  measurementId: "G-5F50M5TKW1"
};

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [verificationId, setVerificationId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [step, setStep] = useState<"phone" | "verification">("phone")
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/"
  const [auth, setAuth] = useState<any>(null)

  // Initialize Firebase on client side
  useEffect(() => {
    const app = initializeApp(firebaseConfig)
    const authInstance = getAuth(app)
    setAuth(authInstance)
  }, [])

  // Initialize reCAPTCHA verifier
  const setupRecaptcha = () => {
    if (!auth) return
    
    if (!(window as any).recaptchaVerifier) {
      (window as any).recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': () => {
          // reCAPTCHA solved, allow sending verification code
        }
      });
    }
  }

  const handleSendVerification = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!auth) {
      setError("Authentication not initialized. Please try again.")
      return
    }
    
    setIsLoading(true)
    setError("")

    try {
      // Format phone number if needed
      const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`
      
      setupRecaptcha()
      const appVerifier = (window as any).recaptchaVerifier;
      
      const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, appVerifier)
      setVerificationId(confirmationResult.verificationId)
      setStep("verification")
      setIsLoading(false)
    } catch (error: any) {
      console.error(error)
      setError(error.message || "Failed to send verification code. Please try again.")
      setIsLoading(false)
      
      // Reset reCAPTCHA on error
      if ((window as any).recaptchaVerifier) {
        (window as any).recaptchaVerifier.clear()
        delete (window as any).recaptchaVerifier
      }
    }
  }

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!auth) {
      setError("Authentication not initialized. Please try again.")
      return
    }
    
    setIsLoading(true)
    setError("")

    try {
      if (!verificationId) {
        throw new Error("Verification session expired. Please try again.")
      }

      // Create credential with verification ID and code
      const credential = PhoneAuthProvider.credential(verificationId, verificationCode)
      
      // Sign in with credential
      await signInWithCredential(auth, credential)
      
      // Redirect after successful login
      router.push(callbackUrl)
    } catch (error: any) {
      console.error(error)
      setError(error.message || "Invalid verification code. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex min-h-screen items-center justify-center py-16">
      <div className="grid w-full gap-8 md:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">Welcome back to POOL MATE</h1>
            <p className="text-lg text-muted-foreground">
              Log in to your account to manage your rides, track your savings, and connect with fellow commuters.
            </p>
          </div>
          <div className="hidden space-y-4 md:block">
            <div className="flex items-start gap-2">
              <div className="rounded-full bg-primary/10 p-1">
                <UserRound className="h-5 w-5 text-primary" />
              </div>
              <p>Access your personalized ride dashboard</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="rounded-full bg-primary/10 p-1">
                <KeyRound className="h-5 w-5 text-primary" />
              </div>
              <p>Secure and trusted carpooling network</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="rounded-full bg-primary/10 p-1">
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
              <p>Get on the road in just a few clicks</p>
            </div>
          </div>
          <div className="relative hidden h-64 overflow-hidden rounded-lg md:block">
            <Image src="/api/placeholder/600/400" alt="People carpooling" fill className="object-cover" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <Card>
            <CardHeader>
              <CardTitle>Login with Phone</CardTitle>
              <CardDescription>
                {step === "phone" 
                  ? "Enter your phone number to receive a verification code" 
                  : "Enter the verification code sent to your phone"
                }
              </CardDescription>
            </CardHeader>
            {step === "phone" ? (
              <form onSubmit={handleSendVerification}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 123 456 7890" 
                        className="pl-10"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        disabled={isLoading}
                        required 
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Include country code (e.g., +1 for US, +91 for India)
                    </p>
                  </div>
                  <div id="recaptcha-container"></div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Verification Code"}
                  </Button>
                  <div className="text-center text-sm">
                    Don't have an account?{" "}
                    <Link href="/signup" className="font-medium text-primary hover:underline">
                      Sign up
                    </Link>
                  </div>
                </CardFooter>
              </form>
            ) : (
              <form onSubmit={handleVerifyCode}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="code">Verification Code</Label>
                    <Input 
                      id="code" 
                      type="text" 
                      placeholder="123456" 
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      disabled={isLoading}
                      required 
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Verifying..." : "Verify & Log In"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => {
                      setStep("phone")
                      setVerificationCode("")
                      setVerificationId(null)
                    }}
                    disabled={isLoading}
                  >
                    Back to Phone Entry
                  </Button>
                </CardFooter>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}