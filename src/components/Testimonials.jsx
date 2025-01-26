import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "The AI solutions provided transformed our business operations completely. We've seen a 300% increase in efficiency.",
    author: "Sarah Chen",
    position: "CTO, TechCorp Global",
    company: "TechCorp Global"
  },
  {
    quote: "Implementing their enterprise AI solutions was the best decision we made this year. The ROI has been exceptional.",
    author: "Michael Rodriguez",
    position: "Director of Innovation",
    company: "Future Systems Inc"
  },
  {
    quote: "Their team's expertise in AI integration is unmatched. They delivered beyond our expectations.",
    author: "Jessica Kim",
    position: "Head of Operations",
    company: "Innovate AI"
  }
]

export default function Testimonials() {
  return (
    <div className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Client Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our AI solutions have transformed businesses across industries
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.position}</p>
                <p className="text-blue-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
