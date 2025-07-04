import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of CRM: AI-Powered Customer Insights",
    excerpt:
      "Discover how artificial intelligence is revolutionizing customer relationship management and what it means for your business.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=800",
  }

  const blogPosts = [
    {
      title: "10 CRM Best Practices for Small Businesses",
      excerpt: "Essential strategies to maximize your CRM investment and drive business growth.",
      author: "Michael Chen",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Best Practices",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "How to Improve Customer Retention with Data Analytics",
      excerpt: "Learn how to use customer data to identify at-risk customers and improve retention rates.",
      author: "Emily Rodriguez",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Analytics",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Integrating Your CRM with Marketing Automation",
      excerpt: "Step-by-step guide to connecting your CRM with marketing tools for better lead nurturing.",
      author: "David Kim",
      date: "November 28, 2024",
      readTime: "6 min read",
      category: "Integration",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "The ROI of CRM: Measuring Success",
      excerpt: "Key metrics and KPIs to track the return on investment of your CRM implementation.",
      author: "Sarah Johnson",
      date: "November 20, 2024",
      readTime: "4 min read",
      category: "Business",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Mobile CRM: Managing Customers on the Go",
      excerpt: "How mobile CRM capabilities can improve productivity and customer service.",
      author: "Michael Chen",
      date: "November 15, 2024",
      readTime: "5 min read",
      category: "Mobile",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Data Security in CRM: Protecting Customer Information",
      excerpt: "Best practices for maintaining data security and compliance in your CRM system.",
      author: "Emily Rodriguez",
      date: "November 8, 2024",
      readTime: "6 min read",
      category: "Security",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const categories = [
    "All",
    "Technology",
    "Best Practices",
    "Analytics",
    "Integration",
    "Business",
    "Mobile",
    "Security",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4">
          Our Blog
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">CRM Insights & Best Practices</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay updated with the latest trends, tips, and strategies in customer relationship management.
        </p>
      </div>

      {/* Featured Post */}
      <Card className="mb-12">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative">
            <Image
              src={featuredPost.image || "/placeholder.svg"}
              alt={featuredPost.title}
              width={800}
              height={400}
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <Badge variant="secondary" className="w-fit mb-4">
              Featured Post
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
            <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>{featuredPost.author}</span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {featuredPost.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {featuredPost.readTime}
              </div>
            </div>
            <Button className="w-fit">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === "All" ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post, index) => (
          <Card key={index} className="h-full flex flex-col">
            <div className="relative">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <Badge className="absolute top-4 left-4">{post.category}</Badge>
            </div>
            <CardHeader className="flex-1">
              <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <span>{post.author}</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </div>
                <Button variant="ghost" size="sm">
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Stay Updated</CardTitle>
          <CardDescription className="text-lg">
            Subscribe to our newsletter for the latest CRM insights and updates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">No spam. Unsubscribe at any time.</p>
        </CardContent>
      </Card>
    </div>
  )
}
