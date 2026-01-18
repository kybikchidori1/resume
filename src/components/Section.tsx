import React from 'react'

interface SectionProps {
    id: string
    title?: string
    subtitle?: string
    className?: string
    children: React.ReactNode
}

export const Section = ({ id, title, subtitle, className = '', children }: SectionProps) => {
    return (
        <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
            {(title || subtitle) && (
                <div className="mb-16 text-center">
                    {subtitle && (
                        <span className="text-primary font-medium tracking-wider uppercase mb-2 block">
                            {subtitle}
                        </span>
                    )}
                    {title && (
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            {title}
                        </h2>
                    )}
                </div>
            )}
            {children}
        </section>
    )
}
