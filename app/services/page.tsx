'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Server, Globe, ArrowRight, CheckCircle, Users, Zap, Award, MessageCircle, Mail, Phone, ShoppingCart, Briefcase, Layout, Database, Cloud, Wrench, GitBranch } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom website solutions tailored to your business needs",
      icon: Globe,
      color: "from-blue-500 to-blue-600",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "Performance Optimization",
        "SEO Friendly",
      ],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      price: "Starting from ₦500,000",
      badge: "Popular",
    },
    {
      id: 2,
      title: "Front-End Development",
      description: "Beautiful, interactive user interfaces with modern frameworks",
      icon: Layout,
      color: "from-purple-500 to-purple-600",
      features: [
        "React/Next.js",
        "Vue.js/Nuxt",
        "Tailwind CSS",
        "Responsive UI",
      ],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      price: "Starting from ₦300,000",
      badge: "Expert",
    },
    {
      id: 3,
      title: "Back-End Development",
      description: "Robust server solutions with secure databases and APIs",
      icon: Server,
      color: "from-green-500 to-green-600",
      features: [
        "Node.js/Express",
        "Python/Django",
        "Database Design",
        "API Development",
      ],
      image: "https://images.unsplash.com/photo-1516534775068-bb6c3a580b38?w=400&h=300&fit=crop",
      price: "Starting from ₦400,000",
      badge: "Reliable",
    },
  ]

  const techStack = [
    {
      category: "Front-End",
      technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript", "Vite"],
      icon: Layout,
    },
    {
      category: "Back-End",
      technologies: ["Node.js", "Python", "Express", "Django", "PostgreSQL", "MongoDB"],
      icon: Server,
    },
    {
      category: "Tools & Platforms",
      technologies: ["Git/GitHub", "Docker", "AWS", "Vercel", "Netlify", "Firebase"],
      icon: Cloud,
    },
  ]

  const portfolio = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack solution with payment integration",
      category: "Full-Stack",
      link: "#",
    },
    {
      title: "Real Estate Portal",
      description: "Property listing with advanced filtering",
      category: "Web Development",
      link: "#",
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data",
      category: "Front-End",
      link: "#",
    },
    {
      title: "Mobile App Backend",
      description: "RESTful API with authentication",
      category: "Back-End",
      link: "#",
    },
  ]

  const testimonials = [
    {
      name: "Chisom Ejiofor",
      company: "Tech Startup Lagos",
      comment: "Ozee Tech delivered our e-commerce platform on time and within budget. Professional team!",
      rating: 5,
    },
    {
      name: "Adanna Okafor",
      company: "Fashion Brand Nigeria",
      comment: "The React dashboard they built for us is fast, beautiful, and user-friendly. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emeka Obi",
      company: "Fintech Startup",
      comment: "Their back-end infrastructure is robust and scalable. Perfect for our growing user base.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-500 text-white mx-auto">Professional Tech Solutions</Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Full-Stack Development Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 leading-relaxed">
                From concept to deployment, we build powerful web and mobile applications that drive your business forward.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-lg w-full sm:w-auto"
                asChild
              >
                <a href="#services">Explore Services</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-lg w-full sm:w-auto bg-transparent"
                asChild
              >
                <a href="https://wa.me/2349069178853" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tech solutions for businesses of all sizes. We combine expertise, innovation, and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className={`bg-gradient-to-r ${service.color} h-32 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <service.icon className="w-full h-full" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-white text-gray-900 font-semibold">
                    {service.badge}
                  </Badge>
                </div>

                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Key Features</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6 space-y-4">
                    <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg w-full sm:w-auto" asChild>
                        <Link href="#contact">Get Started</Link>
                      </Button>
                      <Button variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 rounded-lg w-full sm:w-auto">
                        <MessageCircle className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Tech Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading technologies and frameworks to build scalable, secure, and performant solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.map((stack, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <stack.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{stack.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, i) => (
                    <Badge key={i} className="bg-blue-100 text-blue-700 hover:bg-blue-200 font-medium px-3 py-1 rounded-full">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the projects we've built for satisfied clients across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, idx) => (
              <Card key={idx} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
                  <Code className="w-16 h-16 text-white/30 group-hover:scale-125 transition-transform duration-300" />
                </div>
                <CardContent className="p-8">
                  <Badge className="bg-blue-100 text-blue-700 mb-4">{project.category}</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg sm:w-auto" asChild>
                    <Link href={project.link}>
                      View Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about working with our development team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your requirements and create a custom solution that fits your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg w-full sm:w-auto" asChild>
              <Link href="mailto:ozeetechgadgets@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-lg w-full sm:w-auto bg-transparent"
              asChild
            >
              <a href="https://wa.me/2349069178853" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
