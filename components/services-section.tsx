import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Smartphone, Monitor, Globe, Zap, ArrowRight, CheckCircle } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full Stack Development",
      description: "Complete web applications using React, Next.js, Node.js, and modern technologies.",
      features: ["E-commerce Websites", "Business Applications", "API Development", "Database Design"],
      color: "text-blue-600",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly interfaces that provide exceptional user experiences.",
      features: ["Web Design", "Mobile Design", "User Research", "Prototyping"],
      color: "text-purple-600",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS", "Native Android"],
      color: "text-green-600",
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Desktop Applications",
      description: "Powerful desktop applications for Windows, macOS, and Linux.",
      features: ["Electron Apps", "Native Applications", "Cross-Platform", "System Integration"],
      color: "text-orange-600",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Graphics Design",
      description: "Professional branding, logos, and visual identity design services.",
      features: ["Logo Design", "Branding", "Marketing Materials", "Print Design"],
      color: "text-pink-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "General Tech Solutions",
      description: "Custom software solutions and technical consulting for your business needs.",
      features: ["System Integration", "Technical Consulting", "Maintenance", "Support"],
      color: "text-yellow-600",
    },
  ]

  return (
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Available for Hire
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Development Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond premium gadgets, we offer comprehensive technology solutions. From concept to deployment, we're your
            complete tech partner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className={`${service.color} mb-4`}>{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-lg mb-6 opacity-90">
            Get a free consultation and quote for your development needs. We're here to bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://wa.me/2349069178853?text=Hi! I'm interested in hiring Ozee Tech Ventures for a development project.">
                WhatsApp Us
              </Link>
            </Button>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Our Technology Stack</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>React.js & Next.js</div>
                  <div>Vue.js & Nuxt.js</div>
                  <div>TypeScript</div>
                  <div>Tailwind CSS</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>Node.js & Express</div>
                  <div>Python & Django</div>
                  <div>PHP & Laravel</div>
                  <div>REST & GraphQL APIs</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-lg">Mobile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>React Native</div>
                  <div>Flutter</div>
                  <div>Native iOS & Android</div>
                  <div>Progressive Web Apps</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-lg">Database & Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>MongoDB & PostgreSQL</div>
                  <div>AWS & Vercel</div>
                  <div>Firebase</div>
                  <div>Docker & Kubernetes</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
