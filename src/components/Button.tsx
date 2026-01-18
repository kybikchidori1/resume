import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, Check } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline'
    children: ReactNode
    isLoading?: boolean
    isSuccess?: boolean
}

export const Button = ({
    variant = 'primary',
    children,
    className = '',
    isLoading = false,
    isSuccess = false,
    disabled,
    ...props
}: ButtonProps) => {
    const baseStyles = "relative px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 border border-transparent",
        secondary: "bg-secondary text-surface hover:bg-secondary/90 border border-transparent",
        outline: "bg-transparent border border-surface text-text-muted hover:border-primary hover:text-primary"
    }

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className} ${(isLoading || isSuccess) ? 'cursor-default' : ''}`}
            disabled={disabled || isLoading || isSuccess}
            {...props as any}
        >
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Loader2 className="animate-spin" size={20} />
                    </motion.div>
                ) : isSuccess ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <Check size={20} />
                        <span>Sent!</span>
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    )
}
