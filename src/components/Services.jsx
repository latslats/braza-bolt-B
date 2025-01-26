import { BsRobot, BsChat, BsDatabase, BsGear, BsClipboardData, BsPeople } from 'react-icons/bs'
import { motion } from 'framer-motion'

const services = [
  {
    icon: BsRobot,
    title: "Document Process Automation",
    description: "Intelligent document processing and workflow automation solutions that streamline enterprise operations and reduce manual tasks."
  },
  {
    icon: BsChat,
    title: "Enterprise Chatbot Solutions",
    description: "Custom-built conversational AI platforms that enhance customer service and internal communication with natural language processing."
  },
  {
    icon: BsDatabase,
    title: "Data Integration Services",
    description: "Seamless integration of AI systems with existing infrastructure, ensuring smooth data flow and operational efficiency."
  },
  {
    icon: BsGear,
    title: "AI Automation Agents",
    description: "Autonomous AI agents that handle complex tasks, optimize workflows, and drive operational excellence across your organization."
  },
  {
    icon: BsClipboardData,
    title: "AI System Assessment",
    description: "Comprehensive evaluation of AI readiness and implementation strategies tailored to your business objectives."
  },
  {
    icon: BsPeople,
    title: "AI Implementation Training",
    description: "Expert-led training programs ensuring your team masters AI tools and maximizes technology investments."
  }
]

export default function Services() {
  return (
    <div className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Enterprise AI Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Production-Ready AI Solutions designed to scale with your enterprise needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card"
            >
              <service.icon className="w-12 h-12 mb-6 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
