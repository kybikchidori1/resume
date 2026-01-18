import { useState } from 'react'
import { Menu, X, Sun, Moon, Languages } from 'lucide-react'
import { Button } from './Button'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { t, i18n } = useTranslation()
    const { theme, toggleTheme } = useTheme()

    const navItems = ['home', 'about', 'experience', 'portfolio', 'contact']

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                        Portfolio.
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="text-text-muted hover:text-primary transition-colors duration-300 capitalize"
                            >
                                {t(`nav.${item}`)}
                            </a>
                        ))}

                        <div className="flex items-center gap-4 border-l border-surface pl-6">
                            <button
                                onClick={toggleTheme}
                                className="p-2 text-text-muted hover:text-primary transition-colors"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button
                                onClick={toggleLanguage}
                                className="p-2 text-text-muted hover:text-primary transition-colors flex items-center gap-1 font-medium"
                            >
                                <Languages size={20} />
                                {i18n.language.toUpperCase()}
                            </button>
                        </div>

                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button onClick={toggleTheme} className="text-text-muted hover:text-primary">
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text-muted hover:text-text-main"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-surface border-t border-surface">
                    <div className="px-4 pt-2 pb-6 space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="block py-2 text-text-muted hover:text-primary capitalize"
                                onClick={() => setIsOpen(false)}
                            >
                                {t(`nav.${item}`)}
                            </a>
                        ))}
                        <button
                            onClick={toggleLanguage}
                            className="w-full text-left py-2 text-text-muted hover:text-primary flex items-center gap-2"
                        >
                            <Languages size={20} />
                            Switch to {i18n.language === 'en' ? 'Russian' : 'English'}
                        </button>
                        <Button className="w-full">{t('nav.hire_me')}</Button>
                    </div>
                </div>
            )}
        </header>
    )
}
