import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Monitor,
  Palette,
  Code,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Award,
  Users,
  TrendingUp,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
} from "lucide-react"

export default function AboutPage() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full Stack Development",
      description:
        "Complete web applications using modern technologies like React, Next.js, Node.js, Python, and more. From concept to deployment.",
      technologies: ["React", "Next.js", "Node.js", "Python", "TypeScript"],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description:
        "Beautiful, user-friendly interfaces that provide exceptional user experiences across all devices and platforms.",
      technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Graphics Design",
      description:
        "Professional branding, logos, marketing materials, and visual identity design services for businesses of all sizes.",
      technologies: ["Branding", "Logo Design", "Print Design", "Digital Marketing", "Social Media"],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and native technologies.",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Xamarin"],
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Desktop Applications",
      description:
        "Powerful desktop applications for Windows, macOS, and Linux using Electron, .NET, and native technologies.",
      technologies: ["Electron", ".NET", "Java", "C++", "Python"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "General Tech Solutions",
      description:
        "Custom software solutions, system integration, database design, and technical consulting for your business needs.",
      technologies: ["Database Design", "API Development", "Cloud Solutions", "DevOps", "Consulting"],
    },
  ]

  const achievements = [
    { icon: <Users className="h-6 w-6" />, text: "50,000+ Satisfied Customers", color: "text-ozeetech-blue" },
    {
      icon: <Calendar className="h-6 w-6" />,
      text: "15+ Years in Business (Since 2009)",
      color: "text-ozeetech-orange",
    },
    { icon: <Award className="h-6 w-6" />, text: "100% Original Products Guarantee", color: "text-ozeetech-green" },
    { icon: <TrendingUp className="h-6 w-6" />, text: "99.8% Customer Satisfaction Rate", color: "text-purple-600" },
    { icon: <Zap className="h-6 w-6" />, text: "24/7 Technical Support", color: "text-red-500" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Same Day Delivery Available", color: "text-ozeetech-green" },
  ]

  const companyStats = [
    { number: "15+", label: "Years of Excellence", description: "Serving Nigeria since 2009" },
    { number: "50,000+", label: "Happy Customers", description: "Trusted by thousands nationwide" },
    { number: "1000+", label: "Products Available", description: "Latest tech from top brands" },
    { number: "99.8%", label: "Satisfaction Rate", description: "Consistently high customer ratings" },
  ]

  const teamValues = [
    {
      title: "Innovation",
      description: "We stay ahead of technology trends to bring you the latest and best products and services.",
      icon: <Zap className="h-8 w-8 text-ozeetech-orange" />,
    },
    {
      title: "Quality",
      description: "Every product we sell and every service we provide meets the highest standards of quality.",
      icon: <Award className="h-8 w-8 text-ozeetech-blue" />,
    },
    {
      title: "Trust",
      description: "Built on 15+ years of honest business practices and transparent customer relationships.",
      icon: <CheckCircle className="h-8 w-8 text-ozeetech-green" />,
    },
    {
      title: "Support",
      description: "Our commitment to you doesn't end at purchase - we provide ongoing support and assistance.",
      icon: <MessageCircle className="h-8 w-8 text-purple-600" />,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-ozeetech-blue via-ozeetech-navy to-ozeetech-blue text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-ozeetech-orange rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-ozeetech-green rounded-full animate-float delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-ozeetech-orange text-white px-6 py-3 text-lg font-semibold mb-6">
              🏆 Trusted Since 2009 - 15+ Years of Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">About Ozee Tech Ventures</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in delay-300">
              Nigeria's Premier Technology Partner for Complete Digital Solutions & Premium Gadgets
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-500">
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-white/20 text-white border-white/30">
                Tech Retail Excellence
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-white/20 text-white border-white/30">
                Software Development
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-white/20 text-white border-white/30">
                15+ Years Experience
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center animate-bounce-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-ozeetech-blue mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-ozeetech-blue mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  <strong className="text-ozeetech-orange">Founded in 2009</strong>, Ozee Tech Ventures began as a small
                  technology retail store in the bustling Computer Village, Ikeja. What started as a passion for
                  bringing the latest technology to Nigerians has grown into one of the country's most trusted tech
                  retailers and software development companies.
                </p>
                <p>
                  Over the past <strong className="text-ozeetech-blue">15+ years</strong>, we've evolved from a simple
                  gadget store to a comprehensive technology solutions provider. We've served over 50,000 satisfied
                  customers, established partnerships with major global brands, and built a reputation for excellence
                  that spans across Nigeria.
                </p>
                <p>
                  Today, we combine our expertise in premium gadget retail with cutting-edge software development
                  services. Whether you need the latest iPhone, a custom web application, or complete digital
                  transformation for your business, Ozee Tech Ventures is your trusted partner.
                </p>
                <p className="text-ozeetech-green font-semibold">
                  📱 Contact us on WhatsApp:{" "}
                  <a href="https://wa.me/2349069178853" className="underline">
                    09069178853
                  </a>
                  for instant support and current pricing.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in delay-300">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Ozee Tech Ventures Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-ozeetech-orange text-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ozeetech-blue mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that have guided us for over 15 years and continue to drive our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gray-50 rounded-full w-fit">{value.icon}</div>
                  <CardTitle className="text-xl text-ozeetech-blue">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-ozeetech-blue/5 to-ozeetech-navy/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ozeetech-blue mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that reflect our commitment to excellence and customer satisfaction over 15+ years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-gray-50 ${achievement.color}`}>{achievement.icon}</div>
                  <span className="font-semibold text-gray-800">{achievement.text}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ozeetech-blue mb-4">Our Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond retail, we offer comprehensive technology solutions to help your business thrive in the digital
              age. From concept to deployment, we're your complete tech partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="text-ozeetech-orange mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-ozeetech-blue">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-ozeetech-blue text-ozeetech-blue"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ozeetech-blue mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600">
              We use the latest and most reliable technologies to build your solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-ozeetech-blue">Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="font-medium">React.js & Next.js</div>
                  <div>Vue.js & Nuxt.js</div>
                  <div>TypeScript & JavaScript</div>
                  <div>Tailwind CSS & SCSS</div>
                  <div>Material-UI & Ant Design</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-ozeetech-blue">Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="font-medium">Node.js & Express</div>
                  <div>Python & Django/Flask</div>
                  <div>PHP & Laravel</div>
                  <div>REST & GraphQL APIs</div>
                  <div>Microservices Architecture</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-ozeetech-blue">Mobile Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="font-medium">React Native</div>
                  <div>Flutter & Dart</div>
                  <div>Native iOS (Swift)</div>
                  <div>Native Android (Kotlin)</div>
                  <div>Progressive Web Apps</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-ozeetech-blue">Database & Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="font-medium">MongoDB & PostgreSQL</div>
                  <div>MySQL & Redis</div>
                  <div>AWS & Google Cloud</div>
                  <div>Firebase & Supabase</div>
                  <div>Docker & Kubernetes</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ozeetech-blue mb-4">Visit Our Store & Office</h2>
            <p className="text-xl text-gray-600">
              Experience our products in person and discuss your tech needs with our expert team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-ozeetech-blue">
                  <Smartphone className="h-6 w-6 mr-3" />
                  Gadget Showroom
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 text-lg">
                  Visit our flagship store in Computer Village to experience the latest gadgets, get hands-on
                  demonstrations, and receive expert advice from our knowledgeable team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-ozeetech-orange mt-1" />
                    <div>
                      <div className="font-semibold text-ozeetech-blue">Address</div>
                      <div className="text-gray-600">
                        No 23 Elshadai Plaza Olayeni, Computer Village Ikeja, Lagos State
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-ozeetech-orange mt-1" />
                    <div>
                      <div className="font-semibold text-ozeetech-blue">Phone</div>
                      <div className="text-gray-600">+234 816 608 4870</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="h-5 w-5 text-ozeetech-green mt-1" />
                    <div>
                      <div className="font-semibold text-ozeetech-blue">WhatsApp</div>
                      <div className="text-gray-600">+234 906 917 8853</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-ozeetech-orange mt-1" />
                    <div>
                      <div className="font-semibold text-ozeetech-blue">Business Hours</div>
                      <div className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</div>
                      <div className="text-gray-600">Sunday: 12:00 PM - 5:00 PM</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-ozeetech-blue">
                  <Code className="h-6 w-6 mr-3" />
                  Development Office
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 text-lg">
                  Schedule a consultation to discuss your development project, get a free quote, and learn how we can
                  help transform your business with custom technology solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-ozeetech-orange mt-1" />
                    <div>
                      <div className="font-semibold text-ozeetech-blue">Email</div>
                      <div className="text-gray-600">ozeetechgadgets@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="h-5 w-5 text-ozeetech-green mt-1" />
                    <div>
                      <div className="font-semibold text-ozeetech-blue">WhatsApp Consultation</div>
                      <div className="text-gray-600">Available 24/7 for project discussions</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-ozeetech-orange mt-1" />
                    <div>
                      <div className="font-semibold text-ozeetech-blue">Response Time</div>
                      <div className="text-gray-600">Within 2 hours during business hours</div>
                      <div className="text-gray-600">Within 24 hours on weekends</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <div className="font-semibold text-ozeetech-blue">Free Consultation</div>
                      <div className="text-gray-600">Initial project assessment at no cost</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-ozeetech-orange to-ozeetech-darkOrange text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-orange-100">
              With 15+ years of experience and over 50,000 satisfied customers, let's discuss how we can help bring your
              ideas to life with our comprehensive tech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-ozeetech-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-ozeetech-orange px-8 py-4 text-lg font-semibold bg-transparent"
                asChild
              >
                <a href="https://wa.me/2349069178853" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us Now
                </a>
              </Button>
            </div>
            <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-lg font-semibold mb-2">📱 Contact Information</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-orange-100">
                <span>📞 Phone: +234 816 608 4870</span>
                <span>💬 WhatsApp: +234 906 917 8853</span>
                <span>📧 Email: ozeetechgadgets@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
