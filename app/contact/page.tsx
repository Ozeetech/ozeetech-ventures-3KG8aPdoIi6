import Link from "next/link"
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Code,
  Palette,
  Smartphone,
  Monitor,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold mb-4">Contact Ozee Tech Ventures</h1>
          <p className="text-xl mb-6">Your Complete Technology Partner - Available for Hire!</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Full Stack Development</Badge>
            <Badge variant="secondary">UI/UX Design</Badge>
            <Badge variant="secondary">Mobile Apps</Badge>
            <Badge variant="secondary">Desktop Apps</Badge>
            <Badge variant="secondary">Graphics Design</Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Services Banner */}
        <div className="bg-muted/40 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">🚀 Available for Hire - General Tech Solutions</h2>
          <p className="text-center text-muted-foreground mb-6">
            Need a reliable tech partner? We provide comprehensive technology solutions for businesses and individuals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <Code className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold">Web Development</h3>
                <p className="text-sm text-muted-foreground">Full Stack Solutions</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <Palette className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <h3 className="font-semibold">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground">Beautiful Interfaces</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <Smartphone className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <h3 className="font-semibold">Mobile Apps</h3>
                <p className="text-sm text-muted-foreground">iOS & Android</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <Monitor className="h-8 w-8 text-orange-600 mr-3" />
              <div>
                <h3 className="font-semibold">Desktop Apps</h3>
                <p className="text-sm text-muted-foreground">Cross Platform</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <a href="https://v0-rwandan-media-ebon.vercel.app/" target="_blank" rel="noopener noreferrer">
                Hire Us Now - Get Free Quote
              </a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              Whether you need premium gadgets or professional development services, our team is here to help. We
              specialize in complete tech solutions from concept to deployment.
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">
                        No 23 Elshadai Plaza Olayeni, Computer Village Ikeja
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <Link href="tel:+2348166084870" className="text-sm text-muted-foreground hover:text-primary">
                        +234 816 608 4870
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MessageCircle className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="font-medium">Web Development Solutions</p>
                      <a
                        href="https://v0-rwandan-media-ebon.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        OZEE TECH Digital Solutions
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <Link
                        href="mailto:ozeetechgadgets@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        ozeetechgadgets@gmail.com
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Development Services</CardTitle>
                  <CardDescription>What we can build for you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>✅ E-commerce Websites</div>
                    <div>✅ Business Applications</div>
                    <div>✅ Mobile Apps (iOS/Android)</div>
                    <div>✅ Desktop Software</div>
                    <div>✅ UI/UX Design</div>
                    <div>✅ Graphics Design</div>
                    <div>✅ API Development</div>
                    <div>✅ Database Design</div>
                    <div>✅ System Integration</div>
                    <div>✅ Technical Consulting</div>
                    <div>✅ Maintenance & Support</div>
                    <div>✅ Custom Solutions</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Follow Us</CardTitle>
                  <CardDescription>Connect with us on social media</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://www.facebook.com/share/15svvK3LWA/" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link
                        href="https://www.instagram.com/ozee_tech_groups?igsh=Y3EzMDZkNDl1ZGNn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://wa.me/2349069178853" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-5 w-5" />
                        <span className="sr-only">WhatsApp</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Get a free consultation for your development project or gadget needs.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" action="https://formsubmit.co/ozeetechgadgets@gmail.com" method="POST">
                  <input type="hidden" name="_subject" value="New contact form submission from Ozee Tech Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://ozeetech.com/thank-you" />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" name="first-name" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" name="last-name" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service-type">Service Interest</Label>
                    <select
                      id="service-type"
                      name="service-type"
                      className="w-full px-3 py-2 border border-input bg-background rounded-md"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="gadgets">Gadgets & Electronics</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="desktop-app">Desktop Application</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="graphics-design">Graphics Design</option>
                      <option value="general-tech">General Tech Solution</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="What is this regarding?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message & Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="mb-6">For urgent development projects or gadget inquiries, reach out to us directly:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://wa.me/2349069178853?text=Hi! I need immediate assistance with a tech project.">
                WhatsApp Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="tel:+2348166084870">Call Us: +234 816 608 4870</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
