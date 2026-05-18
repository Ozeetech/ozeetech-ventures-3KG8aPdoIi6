"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ArrowLeft,
  Mail,
  Phone,
  Shield,
  Lock,
  Building,
  Clock,
  CheckCircle2,
  Edit,
  Save,
  X,
  Eye,
  EyeOff,
  Calendar,
  Smartphone,
  Globe,
  MapPin,
  FileText,
  Laptop,
} from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [userDetails, setUserDetails] = useState({
    name: "Molzen LLC",
    contactName: "Alexander Molzen",
    position: "Chief Executive Officer",
    email: "alex.molzen@molzenllc.com",
    phone: "+1 (212) 555-7890",
    mobile: "+1 (917) 555-1234",
    address: "1250 Broadway, Suite 3700",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "United States",
    website: "www.molzenllc.com",
    taxId: "47-5891234",
    businessType: "Limited Liability Company",
    industry: "Financial Services",
    established: "2018",
  })

  const securityActivities = [
    {
      id: "sa1",
      activity: "Password changed",
      date: "01 Mar 2025 - 10:30 AM",
      device: "Windows PC - Chrome Browser",
      location: "New York, United States",
      ipAddress: "104.28.42.153",
    },
    {
      id: "sa2",
      activity: "Login successful",
      date: "01 Mar 2025 - 10:15 AM",
      device: "Windows PC - Chrome Browser",
      location: "New York, United States",
      ipAddress: "104.28.42.153",
    },
    {
      id: "sa3",
      activity: "Login successful",
      date: "28 Feb 2025 - 09:45 AM",
      device: "iPhone 15 Pro - Safari Browser",
      location: "New York, United States",
      ipAddress: "172.58.221.87",
    },
    {
      id: "sa4",
      activity: "New device authorized",
      date: "28 Feb 2025 - 09:44 AM",
      device: "iPhone 15 Pro - Safari Browser",
      location: "New York, United States",
      ipAddress: "172.58.221.87",
    },
    {
      id: "sa5",
      activity: "Login successful",
      date: "27 Feb 2025 - 02:30 PM",
      device: "Windows PC - Chrome Browser",
      location: "New York, United States",
      ipAddress: "104.28.42.153",
    },
  ]

  const handleSaveChanges = () => {
    setIsEditing(false)
    // In a real app, you would save the changes to the server here
  }

  const handleCancelChanges = () => {
    setIsEditing(false)
    // Reset any changes
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link href="/dashboard" className="flex items-center text-[#280071] hover:underline mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to dashboard
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-[#280071]">User Profile</h1>
              <p className="text-natwest-gray">Manage your account details and security</p>
            </div>
            <div className="mt-4 md:mt-0">
              {isEditing ? (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center" onClick={handleCancelChanges}>
                    <X className="mr-2 h-4 w-4" />
                    Cancel
                  </Button>
                  <Button size="sm" className="flex items-center" onClick={handleSaveChanges}>
                    <Save className="mr-2 h-4 w-4" />
                    Save changes
                  </Button>
                </div>
              ) : (
                <Button variant="outline" size="sm" className="flex items-center" onClick={() => setIsEditing(true)}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit profile
                </Button>
              )}
            </div>
          </div>
        </div>

        <Tabs defaultValue="profile" className="mb-8">
          <TabsList className="grid grid-cols-2 w-full max-w-md mb-6">
            <TabsTrigger value="profile">Profile Details</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Business Information</CardTitle>
                <CardDescription>Your business and contact information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-[#280071]/10 rounded-full flex items-center justify-center mr-4">
                      <Building className="h-8 w-8 text-[#280071]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{userDetails.name}</h3>
                      <div className="flex items-center text-sm text-natwest-gray">
                        <Globe className="h-3 w-3 mr-1" />
                        <a
                          href={`https://${userDetails.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {userDetails.website}
                        </a>
                      </div>
                      <div className="flex items-center text-sm text-natwest-gray mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>Established {userDetails.established}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Business Name</Label>
                      <Input
                        id="name"
                        name="name"
                        className="mt-2"
                        value={userDetails.name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <Label htmlFor="businessType">Business Type</Label>
                      <Input
                        id="businessType"
                        name="businessType"
                        className="mt-2"
                        value={userDetails.businessType}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <Label htmlFor="taxId">Tax ID / EIN</Label>
                      <Input
                        id="taxId"
                        name="taxId"
                        className="mt-2"
                        value={userDetails.taxId}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Input
                        id="industry"
                        name="industry"
                        className="mt-2"
                        value={userDetails.industry}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        name="website"
                        className="mt-2"
                        value={userDetails.website}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <Label htmlFor="established">Year Established</Label>
                      <Input
                        id="established"
                        name="established"
                        className="mt-2"
                        value={userDetails.established}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-medium mb-4">Primary Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="contactName">Contact Name</Label>
                        <Input
                          id="contactName"
                          name="contactName"
                          className="mt-2"
                          value={userDetails.contactName}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>

                      <div>
                        <Label htmlFor="position">Position</Label>
                        <Input
                          id="position"
                          name="position"
                          className="mt-2"
                          value={userDetails.position}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative mt-2">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-natwest-gray" />
                          <Input
                            id="email"
                            name="email"
                            className="pl-10"
                            value={userDetails.email}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone">Office Phone</Label>
                        <div className="relative mt-2">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-natwest-gray" />
                          <Input
                            id="phone"
                            name="phone"
                            className="pl-10"
                            value={userDetails.phone}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="mobile">Mobile Phone</Label>
                        <div className="relative mt-2">
                          <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-natwest-gray" />
                          <Input
                            id="mobile"
                            name="mobile"
                            className="pl-10"
                            value={userDetails.mobile}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-medium mb-4">Business Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="address">Street Address</Label>
                        <div className="relative mt-2">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-natwest-gray" />
                          <Input
                            id="address"
                            name="address"
                            className="pl-10"
                            value={userDetails.address}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          className="mt-2"
                          value={userDetails.city}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>

                      <div>
                        <Label htmlFor="state">State/Province</Label>
                        <Input
                          id="state"
                          name="state"
                          className="mt-2"
                          value={userDetails.state}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>

                      <div>
                        <Label htmlFor="zip">Postal/Zip Code</Label>
                        <Input
                          id="zip"
                          name="zip"
                          className="mt-2"
                          value={userDetails.zip}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>

                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          name="country"
                          className="mt-2"
                          value={userDetails.country}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <p className="text-sm text-natwest-gray">Last updated: 01 Mar 2025</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Business Profile
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Communication Preferences</CardTitle>
                <CardDescription>Manage how we contact you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Account Statements</p>
                      <p className="text-sm text-natwest-gray">Receive monthly account statements</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <input
                          id="statements-email"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                          defaultChecked
                          disabled={!isEditing}
                        />
                        <Label htmlFor="statements-email" className="ml-2">
                          Email
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="statements-post"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                          disabled={!isEditing}
                        />
                        <Label htmlFor="statements-post" className="ml-2">
                          Post
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Transaction Alerts</p>
                      <p className="text-sm text-natwest-gray">Notifications about account activity</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <input
                          id="alerts-email"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                          defaultChecked
                          disabled={!isEditing}
                        />
                        <Label htmlFor="alerts-email" className="ml-2">
                          Email
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="alerts-sms"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                          defaultChecked
                          disabled={!isEditing}
                        />
                        <Label htmlFor="alerts-sms" className="ml-2">
                          SMS
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Security Alerts</p>
                      <p className="text-sm text-natwest-gray">Notifications about security events</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <input
                          id="security-email"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                          defaultChecked
                          disabled={!isEditing}
                        />
                        <Label htmlFor="security-email" className="ml-2">
                          Email
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="security-sms"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                          defaultChecked
                          disabled={!isEditing}
                        />
                        <Label htmlFor="security-sms" className="ml-2">
                          SMS
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Marketing Communications</p>
                      <p className="text-sm text-natwest-gray">Updates about products and services</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <input
                          id="marketing-email"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                          disabled={!isEditing}
                        />
                        <Label htmlFor="marketing-email" className="ml-2">
                          Email
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="marketing-sms"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                          disabled={!isEditing}
                        />
                        <Label htmlFor="marketing-sms" className="ml-2">
                          SMS
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Security Settings</CardTitle>
                <CardDescription>Manage your password and security options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Change Password</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="current-password">Current Password</Label>
                        <div className="relative mt-2">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-natwest-gray" />
                          <Input
                            id="current-password"
                            type={showPassword ? "text" : "password"}
                            className="pl-10 pr-10"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-natwest-gray" />
                            ) : (
                              <Eye className="h-4 w-4 text-natwest-gray" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div />
                      <div>
                        <Label htmlFor="new-password">New Password</Label>
                        <div className="relative mt-2">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-natwest-gray" />
                          <Input
                            id="new-password"
                            type={showPassword ? "text" : "password"}
                            className="pl-10 pr-10"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <div className="relative mt-2">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-natwest-gray" />
                          <Input
                            id="confirm-password"
                            type={showPassword ? "text" : "password"}
                            className="pl-10 pr-10"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <Button>Update Password</Button>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-medium mb-4">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <p className="font-medium">Enable Two-Factor Authentication</p>
                        <p className="text-sm text-natwest-gray">Add an extra layer of security to your account</p>
                      </div>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D81E05]"></div>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-blue-50 rounded-md">
                      <div className="flex items-start">
                        <Shield className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-blue-800 font-medium">Two-factor authentication is enabled</p>
                          <p className="text-sm text-blue-600 mt-1">
                            Your account is protected with an additional layer of security. You will need to enter a
                            verification code sent to your phone when signing in from a new device.
                          </p>
                          <div className="mt-3">
                            <Button variant="outline" size="sm" className="text-xs">
                              <Smartphone className="mr-1 h-3 w-3" />
                              Change Phone Number
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-medium mb-4">Login PIN</h3>
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <p className="font-medium">Change Login PIN</p>
                        <p className="text-sm text-natwest-gray">Your current PIN is set to 908090</p>
                        <p className="text-xs text-natwest-gray mt-1">Last changed: 15 Feb 2025</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Change PIN
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-medium mb-4">Account Recovery Options</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <p className="font-medium">Recovery Email</p>
                          <p className="text-sm text-natwest-gray">a***@molzenllc.com</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <p className="font-medium">Recovery Phone</p>
                          <p className="text-sm text-natwest-gray">+1 (917) ***-**34</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Recent Security Activity</CardTitle>
                <CardDescription>Recent logins and security-related activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {securityActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start p-4 border-b last:border-0">
                      <div className="mr-4 flex-shrink-0 mt-0.5">
                        {activity.activity.includes("successful") ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : (
                          <Clock className="h-5 w-5 text-blue-500" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{activity.activity}</p>
                        <p className="text-sm text-natwest-gray mt-1">{activity.date}</p>
                        <div className="mt-2 text-sm">
                          <p>
                            <span className="text-natwest-gray">Device:</span> {activity.device}
                          </p>
                          <p>
                            <span className="text-natwest-gray">Location:</span> {activity.location}
                          </p>
                          <p>
                            <span className="text-natwest-gray">IP Address:</span> {activity.ipAddress}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button variant="outline">View full activity log</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Device Management</CardTitle>
                <CardDescription>Manage devices that have access to your account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start justify-between p-4 border rounded-md">
                    <div className="flex items-start">
                      <div className="mr-4 flex-shrink-0 mt-0.5">
                        <Building className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">Windows PC - Chrome Browser</p>
                        <p className="text-sm text-natwest-gray mt-1">Current device</p>
                        <p className="text-sm text-natwest-gray">Last active: Just now</p>
                        <p className="text-sm text-natwest-gray">New York, United States</p>
                        <p className="text-sm text-natwest-gray">IP: 104.28.42.153</p>
                      </div>
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Current
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between p-4 border rounded-md">
                    <div className="flex items-start">
                      <div className="mr-4 flex-shrink-0 mt-0.5">
                        <Smartphone className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">iPhone 15 Pro - Safari Browser</p>
                        <p className="text-sm text-natwest-gray mt-1">Mobile device</p>
                        <p className="text-sm text-natwest-gray">Last active: 28 Feb 2025</p>
                        <p className="text-sm text-natwest-gray">New York, United States</p>
                        <p className="text-sm text-natwest-gray">IP: 172.58.221.87</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-red-600 p-0 h-auto">
                      Remove
                    </Button>
                  </div>

                  <div className="flex items-start justify-between p-4 border rounded-md">
                    <div className="flex items-start">
                      <div className="mr-4 flex-shrink-0 mt-0.5">
                        <Laptop className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">MacBook Pro - Firefox Browser</p>
                        <p className="text-sm text-natwest-gray mt-1">Laptop device</p>
                        <p className="text-sm text-natwest-gray">Last active: 20 Feb 2025</p>
                        <p className="text-sm text-natwest-gray">New York, United States</p>
                        <p className="text-sm text-natwest-gray">IP: 98.15.236.42</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-red-600 p-0 h-auto">
                      Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white border-t p-4 text-center text-sm text-natwest-gray">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 National Westminster Bank plc. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="#" className="hover:underline">
                Privacy
              </Link>
              <Link href="#" className="hover:underline">
                Security
              </Link>
              <Link href="#" className="hover:underline">
                Legal
              </Link>
              <Link href="#" className="hover:underline">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
