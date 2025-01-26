import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: "Financial Services AI Transformation",
    description: "How we helped a leading bank automate 85% of their document processing",
    metric: "85%",
    metricLabel: "Process Automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Healthcare Intelligence Platform",
    description: "Implementing predictive analytics for patient care optimization",
    metric: "3x",
    metricLabel: "Efficiency Increase",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Manufacturing Process Optimization",
    description: "AI-driven quality control system reducing defects by 95%",
    metric: "95%",
    metricLabel: "Defect Reduction",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
]

export default function CaseStudies() {
  return (
    <div className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world examples of our AI solutions in action
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-3xl font-bold mb-2">{study.metric}</div>
                  <div className="text-sm uppercase tracking-wider">{study.metricLabel}</div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {study.title}
              </h3>
              <p className="text-gray-600">{study.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
