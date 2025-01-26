import { motion } from 'framer-motion'

const publications = [
  "TechCrunch",
  "Forbes",
  "Wired",
  "VentureBeat",
  "MIT Technology Review"
]

export default function Featured() {
  return (
    <div className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-600 font-medium">Featured In Leading Publications</p>
        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              {pub}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
