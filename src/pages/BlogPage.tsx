import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowLeft, Search, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why atACC ERP is the Best Choice for Qatar Businesses",
      excerpt: "Discover how atACC ERP is transforming businesses across Qatar with its comprehensive features and local support. Learn about the key benefits and why it's the preferred choice for enterprises.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      author: "Skynet Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "ERP Solutions",
      tags: ["ERP", "Qatar", "Business", "atACC"]
    },
    {
      id: 2,
      title: "Digital Transformation Trends in Qatar 2024",
      excerpt: "Explore the latest digital transformation trends shaping businesses in Qatar and how to stay ahead of the curve. From AI integration to cloud adoption, discover what's driving change.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      author: "Tech Insights",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Technology",
      tags: ["Digital Transformation", "Qatar", "Technology", "Innovation"]
    },
    {
      id: 3,
      title: "Streamlining Retail Operations with Modern POS Systems",
      excerpt: "Learn how modern POS systems are revolutionizing retail operations and improving customer experiences. Discover the features that matter most for retail success.",
      image: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      author: "Retail Expert",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Retail",
      tags: ["POS", "Retail", "Operations", "Technology"]
    },
    {
      id: 4,
      title: "Cloud Migration Strategies for Small Businesses",
      excerpt: "A comprehensive guide to cloud migration for small and medium businesses. Learn about the benefits, challenges, and best practices for a successful transition.",
      image: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      author: "Cloud Specialist",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Cloud Computing",
      tags: ["Cloud", "Migration", "SME", "Strategy"]
    },
    {
      id: 5,
      title: "Cybersecurity Best Practices for Qatar Businesses",
      excerpt: "Essential cybersecurity measures every business in Qatar should implement. Protect your data and maintain customer trust with these proven security strategies.",
      image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      author: "Security Expert",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Cybersecurity",
      tags: ["Security", "Qatar", "Business", "Protection"]
    },
    {
      id: 6,
      title: "The Future of Mobile Apps in Business",
      excerpt: "How mobile applications are reshaping business operations and customer engagement. Explore the latest trends and opportunities in mobile app development.",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      author: "Mobile Developer",
      date: "2023-12-25",
      readTime: "5 min read",
      category: "Mobile Development",
      tags: ["Mobile Apps", "Business", "Development", "Innovation"]
    }
  ]

  const categories = ["All", "ERP Solutions", "Technology", "Retail", "Cloud Computing", "Cybersecurity", "Mobile Development"]

  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      
      {/* Hero Section */}
      <section className='pt-24 pb-16 bg-gradient-to-br from-[#f5f7fb] to-[#e8f2ff]'>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
              Our Blog
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8'>
              Stay informed with the latest insights, trends, and expert advice on business technology, 
              ERP solutions, and digital transformation.
            </p>
            
            {/* Search Bar */}
            <div className='max-w-md mx-auto relative'>
              <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type="text"
                placeholder="Search articles..."
                className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0075bb] focus:border-transparent transition-all duration-300'
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className='py-8 bg-white border-b border-gray-200'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-wrap justify-center gap-4'>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-[#0075bb] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'
              >
                <div className='relative overflow-hidden'>
                  <img
                    src={post.image}
                    alt={post.title}
                    className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute top-4 left-4'>
                    <span className='bg-[#0075bb] text-white px-3 py-1 rounded-full text-sm font-medium'>
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className='p-6'>
                  <div className='flex items-center space-x-4 text-sm text-gray-500 mb-3'>
                    <div className='flex items-center space-x-1'>
                      <User className='w-4 h-4' />
                      <span>{post.author}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <Calendar className='w-4 h-4' />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <Clock className='w-4 h-4' />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-[#0075bb] transition-colors duration-300'>
                    {post.title}
                  </h3>
                  
                  <p className='text-gray-600 mb-4 leading-relaxed'>
                    {post.excerpt}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className='inline-flex items-center space-x-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full'
                      >
                        <Tag className='w-3 h-3' />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className='inline-flex items-center space-x-2 text-[#0075bb] font-semibold hover:text-[#005a94] transition-colors duration-300'
                  >
                    <span>Read More</span>
                    <ArrowLeft className='w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform duration-300' />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='flex justify-center mt-12'
          >
            <div className='flex space-x-2'>
              <button className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300'>
                Previous
              </button>
              <button className='px-4 py-2 bg-[#0075bb] text-white rounded-lg'>1</button>
              <button className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300'>2</button>
              <button className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300'>3</button>
              <button className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300'>
                Next
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPage