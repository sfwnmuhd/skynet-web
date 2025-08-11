import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowLeft, Share2, Tag } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BlogPost = () => {
  const { id } = useParams()

  // Sample blog post data - in a real app, this would come from an API
  const blogPost = {
    id: 1,
    title: "Why atACC ERP is the Best Choice for Qatar Businesses",
    content: `
      <p>In today's competitive business landscape, having the right Enterprise Resource Planning (ERP) system can make the difference between thriving and merely surviving. For businesses in Qatar, atACC ERP has emerged as the leading choice, and for good reason.</p>
      
      <h2>Understanding atACC ERP</h2>
      <p>atACC ERP is a comprehensive business management solution designed specifically for the Middle Eastern market. It integrates all core business processes into a single, unified platform, providing real-time visibility and control over your operations.</p>
      
      <h2>Key Benefits for Qatar Businesses</h2>
      <h3>1. Local Compliance and Support</h3>
      <p>One of the biggest advantages of atACC ERP is its deep understanding of Qatar's business environment. The system is built to comply with local regulations, tax requirements, and business practices, ensuring your company stays compliant while operating efficiently.</p>
      
      <h3>2. Multi-Currency and Multi-Language Support</h3>
      <p>Qatar's diverse business environment requires systems that can handle multiple currencies and languages. atACC ERP excels in this area, supporting Arabic and English interfaces while managing transactions in various currencies seamlessly.</p>
      
      <h3>3. Comprehensive Financial Management</h3>
      <p>The financial module of atACC ERP provides complete control over your accounting processes, from general ledger management to advanced financial reporting. This is particularly valuable for businesses operating in Qatar's dynamic economic environment.</p>
      
      <h2>Industry-Specific Solutions</h2>
      <p>atACC ERP offers specialized modules for various industries prevalent in Qatar:</p>
      <ul>
        <li><strong>Retail and Wholesale:</strong> Advanced inventory management and POS integration</li>
        <li><strong>Manufacturing:</strong> Production planning and quality control</li>
        <li><strong>Services:</strong> Project management and resource allocation</li>
        <li><strong>Healthcare:</strong> Patient management and regulatory compliance</li>
      </ul>
      
      <h2>Implementation Success Stories</h2>
      <p>Skynet Solution has successfully implemented atACC ERP for over 1000 businesses across Qatar, ranging from small enterprises to large corporations. Our clients have reported significant improvements in operational efficiency, cost reduction, and business growth.</p>
      
      <h2>Why Choose Skynet Solution for atACC ERP?</h2>
      <p>As Qatar's leading atACC ERP implementation partner, Skynet Solution brings:</p>
      <ul>
        <li>13+ years of experience in the Qatar market</li>
        <li>Certified implementation specialists</li>
        <li>Comprehensive training and support</li>
        <li>Customization capabilities to meet specific business needs</li>
        <li>24/7 technical support</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>If you're considering an ERP solution for your Qatar-based business, atACC ERP should be at the top of your list. Contact Skynet Solution today for a free consultation and demo to see how atACC ERP can transform your business operations.</p>
    `,
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    author: "Skynet Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "ERP Solutions",
    tags: ["ERP", "Qatar", "Business", "atACC", "Implementation"]
  }

  const relatedPosts = [
    {
      id: 2,
      title: "Digital Transformation Trends in Qatar 2024",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
      date: "2024-01-10",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Streamlining Retail Operations with Modern POS Systems",
      image: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
      date: "2024-01-05",
      readTime: "6 min read"
    }
  ]

  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      
      {/* Hero Section */}
      <section className='pt-24 pb-8 bg-gradient-to-br from-[#f5f7fb] to-[#e8f2ff]'>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/blog"
              className='inline-flex items-center space-x-2 text-[#0075bb] font-semibold hover:text-[#005a94] transition-colors duration-300 mb-6'
            >
              <ArrowLeft className='w-4 h-4' />
              <span>Back to Blog</span>
            </Link>
            
            <div className='max-w-4xl mx-auto'>
              <div className='mb-6'>
                <span className='bg-[#0075bb] text-white px-4 py-2 rounded-full text-sm font-medium'>
                  {blogPost.category}
                </span>
              </div>
              
              <h1 className='text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight'>
                {blogPost.title}
              </h1>
              
              <div className='flex flex-wrap items-center gap-6 text-gray-600 mb-8'>
                <div className='flex items-center space-x-2'>
                  <User className='w-5 h-5' />
                  <span>{blogPost.author}</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Calendar className='w-5 h-5' />
                  <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Clock className='w-5 h-5' />
                  <span>{blogPost.readTime}</span>
                </div>
                <button className='flex items-center space-x-2 text-[#0075bb] hover:text-[#005a94] transition-colors duration-300'>
                  <Share2 className='w-5 h-5' />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className='pb-8'>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='max-w-4xl mx-auto'
          >
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className='w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg'
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className='py-8'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
              {/* Main Content */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='lg:col-span-3'
              >
                <div 
                  className='prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#0075bb] prose-a:no-underline hover:prose-a:text-[#005a94] prose-strong:text-gray-800 prose-ul:text-gray-600 prose-li:text-gray-600'
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
                
                {/* Tags */}
                <div className='mt-12 pt-8 border-t border-gray-200'>
                  <h4 className='text-lg font-semibold text-gray-800 mb-4'>Tags</h4>
                  <div className='flex flex-wrap gap-2'>
                    {blogPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className='inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-300 cursor-pointer'
                      >
                        <Tag className='w-3 h-3' />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='lg:col-span-1'
              >
                {/* Related Posts */}
                <div className='bg-gray-50 rounded-2xl p-6'>
                  <h4 className='text-xl font-bold text-gray-800 mb-6'>Related Posts</h4>
                  <div className='space-y-6'>
                    {relatedPosts.map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className='block group'
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className='w-full h-32 object-cover rounded-lg mb-3 group-hover:opacity-90 transition-opacity duration-300'
                        />
                        <h5 className='font-semibold text-gray-800 group-hover:text-[#0075bb] transition-colors duration-300 mb-2'>
                          {post.title}
                        </h5>
                        <div className='flex items-center space-x-3 text-sm text-gray-500'>
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className='bg-gradient-to-r from-[#0075bb] to-[#005a94] rounded-2xl p-6 text-white mt-8'>
                  <h4 className='text-xl font-bold mb-4'>Ready to Get Started?</h4>
                  <p className='mb-6 opacity-90'>
                    Contact us for a free consultation and see how we can help transform your business.
                  </p>
                  <Link
                    to="/contact"
                    className='inline-block bg-white text-[#0075bb] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300'
                  >
                    Get Free Demo
                  </Link>
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPost