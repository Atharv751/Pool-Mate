import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Upload, Car, FileText, Shield } from "lucide-react"

export default function JoinDriverPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-2 text-3xl font-bold md:text-4xl">Join as a Driver</h1>
      <p className="mb-8 text-muted-foreground">Share your ride, earn money, and help reduce traffic congestion</p>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="vehicle">Vehicle Details</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Please provide your personal details to get started</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" placeholder="Enter your address" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="State" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input id="pincode" placeholder="Pincode" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button>Continue to Vehicle Details</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="vehicle">
              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Details</CardTitle>
                  <CardDescription>Tell us about the vehicle you'll be using for carpooling</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="vehicle-make">Vehicle Make</Label>
                      <Input id="vehicle-make" placeholder="e.g., Honda, Toyota" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicle-model">Vehicle Model</Label>
                      <Input id="vehicle-model" placeholder="e.g., Civic, Corolla" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="vehicle-year">Year</Label>
                      <Input id="vehicle-year" placeholder="e.g., 2020" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicle-color">Color</Label>
                      <Input id="vehicle-color" placeholder="e.g., White, Black" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="license-plate">License Plate Number</Label>
                      <Input id="license-plate" placeholder="Enter license plate number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="seating-capacity">Seating Capacity</Label>
                      <Input id="seating-capacity" placeholder="Number of seats available" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-features">Vehicle Features</Label>
                    <Textarea id="vehicle-features" placeholder="AC, Music System, etc." />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <Button variant="outline">Back</Button>
                    <Button>Continue to Documents</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="documents">
              <Card>
                <CardHeader>
                  <CardTitle>Document Verification</CardTitle>
                  <CardDescription>Upload the required documents for verification</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-lg border border-dashed p-6">
                    <div className="flex flex-col items-center justify-center space-y-2 text-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium">Driver's License</h3>
                      <p className="text-sm text-muted-foreground">
                        Upload a clear photo of your driver's license (front and back)
                      </p>
                      <Button variant="outline" className="mt-2">
                        <Upload className="mr-2 h-4 w-4" /> Upload License
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border border-dashed p-6">
                    <div className="flex flex-col items-center justify-center space-y-2 text-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Car className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium">Vehicle Registration</h3>
                      <p className="text-sm text-muted-foreground">Upload your vehicle registration certificate (RC)</p>
                      <Button variant="outline" className="mt-2">
                        <Upload className="mr-2 h-4 w-4" /> Upload RC
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border border-dashed p-6">
                    <div className="flex flex-col items-center justify-center space-y-2 text-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium">Insurance Document</h3>
                      <p className="text-sm text-muted-foreground">Upload your valid vehicle insurance policy</p>
                      <Button variant="outline" className="mt-2">
                        <Upload className="mr-2 h-4 w-4" /> Upload Insurance
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <Button variant="outline">Back</Button>
                    <Button>Submit Application</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Driver Benefits</CardTitle>
              <CardDescription>Why you should join POOL MATE as a driver</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Earn Extra Income</h4>
                  <p className="text-sm text-muted-foreground">Make money on trips you're already taking</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Flexible Schedule</h4>
                  <p className="text-sm text-muted-foreground">Drive whenever it fits your schedule</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Reduce Travel Costs</h4>
                  <p className="text-sm text-muted-foreground">Share fuel and maintenance expenses</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Meet New People</h4>
                  <p className="text-sm text-muted-foreground">Connect with like-minded commuters</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Help the Environment</h4>
                  <p className="text-sm text-muted-foreground">Reduce carbon emissions and traffic congestion</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Approval Timeline</CardTitle>
              <CardDescription>What happens after you submit your application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  1
                </div>
                <div>
                  <h4 className="font-medium">Document Verification</h4>
                  <p className="text-sm text-muted-foreground">We'll verify all your submitted documents</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  2
                </div>
                <div>
                  <h4 className="font-medium">Background Check</h4>
                  <p className="text-sm text-muted-foreground">A quick background verification for safety</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  3
                </div>
                <div>
                  <h4 className="font-medium">Profile Approval</h4>
                  <p className="text-sm text-muted-foreground">Your profile will be approved within 24-48 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  4
                </div>
                <div>
                  <h4 className="font-medium">Start Driving</h4>
                  <p className="text-sm text-muted-foreground">Begin offering rides and earning money</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

