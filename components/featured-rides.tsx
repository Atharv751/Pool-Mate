import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Calendar, Clock, Users } from "lucide-react"

export default function FeaturedRides() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Popular Rides</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Join thousands of commuters who are already saving money and time with POOL MATE
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <RideCard
            from="Connaught Place"
            to="Gurgaon Cyber City"
            date="Daily (Mon-Fri)"
            time="9:00 AM"
            price="₹120"
            seats={3}
            driverName="Rahul S."
            driverRating={4.8}
            driverTrips={342}
            driverImage="/placeholder.svg?height=100&width=100"
            isWomenOnly={false}
          />
          <RideCard
            from="Noida Sector 62"
            to="Delhi South Extension"
            date="Daily (Mon-Fri)"
            time="8:30 AM"
            price="₹150"
            seats={2}
            driverName="Priya M."
            driverRating={4.9}
            driverTrips={215}
            driverImage="/placeholder.svg?height=100&width=100"
            isWomenOnly={true}
          />
          <RideCard
            from="Dwarka"
            to="Nehru Place"
            date="Daily (Mon-Fri)"
            time="9:15 AM"
            price="₹130"
            seats={3}
            driverName="Vikram K."
            driverRating={4.7}
            driverTrips={178}
            driverImage="/placeholder.svg?height=100&width=100"
            isWomenOnly={false}
          />
        </div>
      </div>
    </section>
  )
}

interface RideCardProps {
  from: string
  to: string
  date: string
  time: string
  price: string
  seats: number
  driverName: string
  driverRating: number
  driverTrips: number
  driverImage: string
  isWomenOnly: boolean
}

function RideCard({
  from,
  to,
  date,
  time,
  price,
  seats,
  driverName,
  driverRating,
  driverTrips,
  driverImage,
  isWomenOnly,
}: RideCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-0">
        <div className="relative bg-muted p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{from}</span>
              </div>
              <div className="mt-1 h-6 border-l border-dashed border-muted-foreground/50 ml-2"></div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-medium">{to}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{price}</div>
              <div className="text-sm text-muted-foreground">per person</div>
            </div>
          </div>
          {isWomenOnly && <Badge className="absolute right-4 top-4 bg-pink-500 hover:bg-pink-600">Women Only</Badge>}
        </div>
        <div className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{seats} seats left</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={driverImage} alt={driverName} />
              <AvatarFallback>{driverName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{driverName}</div>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                <span className="text-sm">{driverRating}</span>
                <span className="text-xs text-muted-foreground">• {driverTrips} trips</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

