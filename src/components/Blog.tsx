import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why atACC ERP is the Best Choice for Qatar Businesses",
      excerpt: "Discover how atACC ERP is transforming businesses across Qatar with its comprehensive features and local support.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      author: "Skynet Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "ERP Solutions"
    },
    {
      id: 2,
      title: "Digital Transformation Trends in Qatar 2024",
      excerpt: "Explore the latest digital transformation trends shaping businesses in Qatar and how to stay ahead of the curve.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      author: "Tech Insights",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Technology"
    },
    {
      id: 3,
      title: "Streamlining Retail Operations with Modern POS Systems",
      excerpt: "Learn how modern POS systems are revolutionizing retail operations and improving customer experiences.",
      image: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      author: "Retail Expert",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Retail"
    }
  ]

  return (
    <section id="blog" className='py-20 bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-5xl font-bold text-gray-800 mb-6'>Latest Insights</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Stay updated with the latest trends, tips, and insights from the world of business technology and ERP solutions.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
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

                <Link
                  to={`/blog/${post.id}`}
                  className='inline-flex items-center space-x-2 text-[#0075bb] font-semibold hover:text-[#005a94] transition-colors duration-300'
                >
                  <span>Read More</span>
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#005a94" }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-4 bg-[#0075bb] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
            >
              View All Posts
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog