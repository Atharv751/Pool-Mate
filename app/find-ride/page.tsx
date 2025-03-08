import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock, Search, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import FeaturedRides from "@/components/featured-rides"

export default function FindRidePage() {
  return (
    <div className="container py-8">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Find a Ride</h1>

      <Tabs defaultValue="instant" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="instant">Instant Ride</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Ride</TabsTrigger>
        </TabsList>
        <TabsContent value="instant">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <Label htmlFor="pickup">Pickup Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="pickup" placeholder="Enter pickup location" className="pl-9" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="destination" placeholder="Enter destination" className="pl-9" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Departure Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="time" placeholder="Now" className="pl-9" />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">
                    <Search className="mr-2 h-4 w-4" /> Find Rides
                  </Button>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center space-x-2">
                  <Switch id="women-only" />
                  <Label htmlFor="women-only">Women-Only Mode</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="professional" />
                  <Label htmlFor="professional">Professional Mode</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="return-travel" />
                  <Label htmlFor="return-travel">Return Travel</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="scheduled">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                <div className="space-y-2">
                  <Label htmlFor="pickup-scheduled">Pickup Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="pickup-scheduled" placeholder="Enter pickup location" className="pl-9" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination-scheduled">Destination</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="destination-scheduled" placeholder="Enter destination" className="pl-9" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start text-left font-normal")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Pick a date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time-scheduled">Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="time-scheduled" placeholder="Select time" className="pl-9" />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">
                    <Search className="mr-2 h-4 w-4" /> Find Rides
                  </Button>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center space-x-2">
                  <Switch id="women-only-scheduled" />
                  <Label htmlFor="women-only-scheduled">Women-Only Mode</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="professional-scheduled" />
                  <Label htmlFor="professional-scheduled">Professional Mode</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="recurring" />
                  <Label htmlFor="recurring">Recurring Ride</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <FeaturedRides />
    </div>
  )
}

