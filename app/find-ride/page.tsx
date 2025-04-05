'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock, Search, MapPin, Car, UserCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import FeaturedRides from "@/components/featured-rides"

declare global {
  interface Window {
    map?: any;
  }
}

export default function FindRidePage() {
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [pickupLocation, setPickupLocation] = useState("Central Park, New York");
  const [destination, setDestination] = useState("Times Square, New York");
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Dummy nearby vehicles data with real coordinates
  const nearbyVehicles = [
    { id: 1, type: "Sedan", distance: "0.3 miles away", eta: "2 min", driver: "Alex S.", rating: 4.9, lat: 40.773, lng: -73.968 },
    { id: 2, type: "SUV", distance: "0.5 miles away", eta: "4 min", driver: "Jamie T.", rating: 4.8, lat: 40.765, lng: -73.980 },
    { id: 3, type: "Premium", distance: "0.7 miles away", eta: "5 min", driver: "Morgan L.", rating: 4.7, lat: 40.768, lng: -73.990 },
    { id: 4, type: "Economy", distance: "1.1 miles away", eta: "7 min", driver: "Taylor R.", rating: 4.9, lat: 40.779, lng: -73.975 }
  ];

  const handleSearch = () => {
    setSearchPerformed(true);
  };

  // Initialize Leaflet map
  useEffect(() => {
    if (!searchPerformed) return;

    // Import Leaflet dynamically (client-side only)
    import('leaflet').then(L => {
      // Only initialize map if it doesn't exist yet
      if (!mapLoaded) {
        // Set up map container if it doesn't exist
        const map = L.map('mapContainer').setView([40.765, -73.980], 14);
        (window as any).map = map; // Assign map to the window object
        
        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        // Add pickup marker (Central Park)
        const pickupIcon = L.divIcon({
          html: `<div class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                  <div class="h-2 w-2 rounded-full bg-white"></div>
                </div>`,
          className: 'custom-marker'
        });
        L.marker([40.771, -73.974], {icon: pickupIcon}).addTo(map)
          .bindPopup("Pickup: " + pickupLocation);
        
        // Add destination marker (Times Square)
        const destIcon = L.divIcon({
          html: `<div class="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                  <div class="h-2 w-2 rounded-full bg-white"></div>
                </div>`,
          className: 'custom-marker'
        });
        L.marker([40.758, -73.985], {icon: destIcon}).addTo(map)
          .bindPopup("Destination: " + destination);
        
        // Add route path (simplified)
        const routePoints: [number, number][] = [
          [40.771, -73.974], // Central Park
          [40.768, -73.982], // Midpoint
          [40.758, -73.985]  // Times Square
        ];
        L.polyline(routePoints, {color: 'blue', dashArray: '5, 5'}).addTo(map);
        
        // Add vehicle markers
        const carIcon = L.divIcon({
          html: `<div class="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <div class="h-2 w-2 rounded-full bg-white"></div>
                </div>`,
          className: 'custom-marker'
        });
        
        nearbyVehicles.forEach(vehicle => {
          L.marker([vehicle.lat, vehicle.lng], {icon: carIcon}).addTo(map)
            .bindPopup(`${vehicle.type} - ${vehicle.driver} (${vehicle.rating})`);
        });
        
        // Add Leaflet stylesheet
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
        document.head.appendChild(link);
        
        setMapLoaded(true);
      }
    });
    
  }, [searchPerformed, mapLoaded, pickupLocation, destination]);

  return (
    <div className="container py-8">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Find a Ride</h1>

      <Tabs defaultValue="instant" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="instant">Instant Pool</TabsTrigger>
          <TabsTrigger value="scheduled">Schedule a Ride</TabsTrigger>
        </TabsList>
        
        <TabsContent value="instant">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <Label htmlFor="pickup">Pickup Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="pickup" 
                      placeholder="Enter pickup location" 
                      className="pl-9" 
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="destination" 
                      placeholder="Enter destination" 
                      className="pl-9" 
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
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
                  <Button className="w-full" onClick={handleSearch}>
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
                  <Button className="w-full" onClick={handleSearch}>
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

      {searchPerformed && (
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="mb-4 text-xl font-semibold">Available Rides</h2>
            <div className="space-y-4">
              {nearbyVehicles.map((vehicle) => (
                <Card key={vehicle.id} className="cursor-pointer hover:bg-gray-50">
                  <CardContent className="flex items-center p-4">
                    <div className="mr-4 rounded-full bg-blue-100 p-3">
                      <Car className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{vehicle.type}</span>
                        <span className="text-sm text-muted-foreground">{vehicle.distance}</span>
                      </div>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-sm">ETA: {vehicle.eta}</span>
                        <span className="flex items-center text-sm font-medium">
                          <UserCircle2 className="mr-1 h-4 w-4" />
                          {vehicle.driver} ({vehicle.rating})
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="relative h-96 overflow-hidden rounded-lg border">
              {/* Here we add our actual Leaflet map container */}
              <div id="mapContainer" className="h-full w-full"></div>
              
              {/* Route info overlay */}
              <div className="absolute left-4 top-4 z-10 rounded-md bg-white p-2 shadow-md">
                <h3 className="text-sm font-medium">Route</h3>
                {pickupLocation && destination && (
                  <div className="mt-1 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                      {pickupLocation}
                    </div>
                    <div className="my-1 ml-1 h-6 w-0.5 bg-gray-300"></div>
                    <div className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-red-500"></div>
                      {destination}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Legend and Controls */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="mr-1 h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Pickup</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-1 h-3 w-3 rounded-full bg-red-500"></div>
                  <span>Destination</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-1 h-3 w-3 rounded-full bg-green-500"></div>
                  <span>Available Vehicles</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  onClick={() => {
                    if ((window as any).map) (window as any).map.setView([40.765, -73.980], 14);
                    if (window.map) window.map.setView([40.765, -73.980], 14);
                  }}
                >
                  <MapPin className="mr-1 h-4 w-4" /> Recenter
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {!searchPerformed && <FeaturedRides />}
    </div>
  )
}