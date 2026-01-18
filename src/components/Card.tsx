import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
    children: React.ReactNode
    className?: string
    delay?: number
}

export const Card = ({ children, className = '', delay = 0 }: CardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`bg-surface p-6 rounded-2xl border border-surface hover:border-primary/50 transition-colors duration-300 ${className}`}
        >
            {children}
        </motion.div>
    )
}
