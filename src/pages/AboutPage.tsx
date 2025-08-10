import { motion } from 'framer-motion'
import { 
  Building, 
  Users, 
  Award, 
  Globe, 
  Shield, 
  Zap, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  Target
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutPage = () => {
  const stats = [
    { number: '13+', label: 'Years', subtitle: 'Industry Excellence' },
    { number: '1300+', label: '', subtitle: 'Satisfied Clients' },
    { number: '15+', label: '', subtitle: 'Industries Served' },
    { number: '99%', label: '', subtitle: 'Client Satisfaction' },
  ]

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Qatar's Leading atACC ERP Partner",
      description: "Official authorized partner for atACC ERP implementation in Qatar, providing comprehensive business solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Implementation & Development Team",
      description: "Certified consultants with extensive experience in ERP implementations across various industries in Qatar."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Deployment",
      description: "Quick implementation with minimal business disruption using proven methodologies and best practices."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Growth Enabler",
      description: "Scalable solutions that grow with your business, supporting expansion and operational efficiency."
    }
  ]

  const erpFeatures = [
    "ERP Solutions",
    "Web Development",
    "Mobile Applications",
    "E-Commerce Solutions",
    "IT Support Solutions",
    "IT Consulting"
  ]

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Best ERP Implementation Partner",
      description: "Recognized for excellence in atACC ERP implementations across Qatar"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Market Leader in Qatar",
      description: "Leading provider of ERP solutions for SMEs and enterprises in Qatar"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Customer Excellence Award",
      description: "Consistently rated as the top ERP consultant by our clients"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Industry Specialization",
      description: "Deep expertise across 15+ industries including retail, manufacturing, and services"
    }
  ]

  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      
      {/* Hero Section */}
      <section className='pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden'>
        {/* Background Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse'></div>
          <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse'></div>
        </div>

        <div className='container mx-auto px-6 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className='inline-flex items-center px-6 py-3 bg-blue-100 text-blue-800 rounded-full text-lg font-medium mb-8'
            >
              Qatar's #1 ERP Implementation Partner
            </motion.div> */}

            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
             <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>About</span> Us
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8'>
              Skynet Solution is Qatar’s trusted IT partner, delivering ERP systems, IT infrastructure, and web development services that enhance efficiency, boost productivity, and drive business growth.
            </p>
            {/* <div className='flex flex-wrap justify-center gap-4 text-lg font-semibold text-gray-700'>
              <span className='bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20'>atACC ERP Qatar</span>
              <span className='bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20'>Best ERP Software Qatar</span>
              <span className='bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20'>ERP Implementation</span>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center'
              >
                <h3 className='font-extrabold text-4xl text-gray-800 mb-2'>
                  {stat.number} <span className='font-bold text-2xl text-[#0075bb]'>{stat.label}</span>
                </h3>
                <p className='text-lg font-semibold text-gray-600'>{stat.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About atAcc ERP Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                Why <span className='text-[#0075bb]'>Skynet Solution</span>
              </h2>
              <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                Skynet Solution delivers over 13 years of expertise in ERP systems, IT infrastructure, and professional web development services in Qatar. We create customized technology solutions that streamline operations, boost productivity, and strengthen your online presence—helping businesses thrive in today’s competitive market.
              </p>

              <h3 className='text-2xl font-bold text-gray-800 mb-6'>Our Mission & Vision</h3>
              <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                Our mission is to provide reliable, scalable, and future-ready IT and web development solutions that drive business growth across Qatar. Our vision is to be the leading provider of ERP systems, IT infrastructure, and digital transformation services, empowering businesses to innovate and succeed in the digital era.
              </p>
              
              {/* <div className='space-y-4 mb-8'>
                {erpFeatures.slice(0, 5).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='flex items-center space-x-3'
                  >
                    <CheckCircle className='w-6 h-6 text-[#0075bb] flex-shrink-0' />
                    <span className='text-gray-700 font-medium'>{feature}</span>
                  </motion.div>
                ))}
              </div> */}

              <Link
                to="/contact"
                className='inline-flex items-center space-x-2 bg-[#0075bb] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#005a94] transition-colors duration-300'
              >
                <span>Get In Touch</span>
                <ArrowRight className='w-5 h-5' />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='bg-white p-8 rounded-2xl shadow-2xl'
            >
              <h3 className='text-2xl font-bold text-gray-800 mb-6'>Our Services</h3>
              <div className='grid grid-cols-1 gap-4'>
                {erpFeatures.map((feature, index) => (
                  <div key={index} className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'>
                    <div className='w-3 h-3 bg-[#0075bb] rounded-full'></div>
                    <span className='text-gray-700 font-medium text-sm'>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-gray-800 mb-6'>
              Why Choose Skynet Solution
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We provide end-to-end solutions including ERP systems, web development, IT infrastructure setup, software development, and digital transformation consulting—tailored to meet the unique needs of each client.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300'
              >
                <div className='text-[#0075bb] mb-4 flex justify-center'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className='py-20 bg-gradient-to-br from-[#0075bb] to-[#005a94] text-white'>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold mb-6'>Our Achievements & Recognition</h2>
            <p className='text-xl opacity-90 max-w-3xl mx-auto'>
              Recognized as the leading ERP implementation partner in Qatar with a proven track record of excellence.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20'
              >
                <div className='text-white mb-4 flex justify-center'>
                  {achievement.icon}
                </div>
                <h3 className='text-lg font-bold mb-3'>{achievement.title}</h3>
                <p className='text-sm opacity-90'>{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      {/* <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-gray-800 mb-6'>
              Industries We Serve with <span className='text-[#0075bb]'>atACC ERP Qatar</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Our expertise spans across multiple industries, making us the preferred choice for 
              businesses seeking the best ERP software in Qatar.
            </p>
          </motion.div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {[
              'Wholesale & Retail',  'Hypyermarket', 'Grocery',
              'Restaurant', 'Cafe', 'Garage', 'Service Sector',
              'Manufacturing', 'SMEs', 'Gym', 'Laundry','Tailoring'
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className='bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300'
              >
                <span className='font-semibold text-gray-800'>{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12'
          >
            <h2 className='text-4xl font-bold text-gray-800 mb-6'>
              Ready to Transform Your Business with the Best ERP Software in Qatar?
            </h2>
            <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Join 1300+ successful businesses in Qatar who have transformed their operations with atACC ERP. 
              Get started with a free consultation and demo today.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to="/contact"
                className='inline-flex items-center space-x-2 bg-[#0075bb] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#005a94] transition-colors duration-300'
              >
                <Calendar className='w-5 h-5' />
                <span>Book Free Demo</span>
              </Link>
              
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
