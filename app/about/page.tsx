import type { Metadata } from 'next'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Brain,
  Target,
  Code,
  Shield,
  Zap,
  Globe,
  ArrowLeft,
  Github,
  Mail,
  ExternalLink,
  Instagram,
  Twitter,
} from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'

export const metadata: Metadata = {
  title: 'About - Mohammad Tausif',
  description:
    'Learn about Mohammad Tausif, a purpose-driven technologist and product architect focused on building intelligent, scalable, and secure digital platforms.',
}

export default function AboutPage() {
  const focusAreas = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Scalable Architecture',
      description: 'Production-grade, enterprise-ready systems',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Systems',
      description: 'Collaborative platforms and live interactions',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Integrity',
      description: 'Secure authentication and data protection',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Cross-platform Design',
      description: 'Responsive and accessible user experiences',
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI & Automation',
      description: 'Intelligent workflows and automation',
    },
  ]

  const skills = [
    'Full-Stack Development',
    'System Architecture',
    'Real-time Collaboration',
    'Cloud Infrastructure',
    'Security Engineering',
    'UI/UX Design',
    'API Development',
    'Database Design',
    'DevOps & CI/CD',
    'Machine Learning',
    'Product Strategy',
    'Team Leadership',
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            About the Developer
          </h1>
          <p className="text-xl text-muted-foreground">
            Building the future of collaborative technology
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
              <Code className="w-16 h-16 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mohammad Tausif
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Purpose-driven Technologist & Product Architect
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="https://github.com/Tausif-11"
                target="_blank"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
              <Link
                href="https://www.instagram.com/mohammad._.tausif/"
                target="_blank"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
              <Link
                href="https://x.com/Tausif1147"
                target="_blank"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>X (Twitter)</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
              <Link
                href="mailto:tausifmohammad54@gmail.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </Link>
            </div>
          </div>

          {/* Mission Statement */}
          <Card className="mb-12 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Mission Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-center text-muted-foreground">
                As a builder and technologist, I am dedicated to designing
                secure, intelligent, and user-centric digital systems that
                improve collaboration, increase efficiency, and support
                innovation at scale.
              </p>
            </CardContent>
          </Card>

          {/* About Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Vision & Approach</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mohammad Tausif is a purpose-driven technologist and product
                architect with a clear vision: to build intelligent, scalable,
                and secure digital platforms that simplify complexity, enhance
                real-time collaboration, and drive modern productivity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a foundation in full-stack development and a deep
                appreciation for clean, minimal design, Mohammad Tausif focuses
                on creating tools that are not only technically robust but also
                intuitive and user-centric.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Technical Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                His work integrates seamless user experiences with reliable
                backend infrastructure, ensuring that every system he builds is
                responsive, efficient, and ready for real-world impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                He brings a strategic, forward-looking approach to software
                development — combining high-performance engineering with
                thoughtful design, automation, and system security.
              </p>
            </div>
          </div>

          {/* Core Focus Areas */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              🧠 Core Focus Areas
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      {area.icon}
                    </div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Technical Expertise
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm px-3 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Current Project */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">
                Current Project: Typora
              </CardTitle>
              <CardDescription>
                Real-time collaborative code editor for modern development teams
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Typora represents the culmination of years of experience in
                building collaborative platforms. It combines real-time
                synchronization, secure authentication, and an intuitive
                developer experience to create the ultimate coding collaboration
                tool.
              </p>
              <div className="flex gap-4">
                <Link href="/editor">
                  <Badge className="cursor-pointer hover:bg-primary/80 transition-colors">
                    Try Typora
                  </Badge>
                </Link>
                <Link
                  href="https://github.com/Tausif-11/typora"
                  target="_blank"
                >
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-accent transition-colors"
                  >
                    View Source
                  </Badge>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
