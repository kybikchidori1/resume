
import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { Download, Linkedin, Github, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const Hero = () => {
    const { t, i18n } = useTranslation()

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-b from-background via-background to-surface/20">
            {/* Background Glow */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-secondary font-medium tracking-wider mb-4 block">{t('hero.hello')}</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        {t('hero.name_first')} <br />
                        <span className="text-primary">{t('hero.name_last')}</span>
                    </h1>
                    <p className="text-2xl text-text-main/80 mb-6 font-light">
                        {t('hero.role')}
                    </p>
                    <p className="text-text-muted text-lg mb-8 max-w-lg">
                        {t('hero.bio')}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10 print:hidden">
                        <Button
                            variant="outline"
                            className="flex items-center gap-2"
                            onClick={() => {
                                const lng = i18n.language.startsWith('ru') ? 'ru' : 'en';
                                const link = document.createElement('a');
                                link.href = `/cv/resume-${lng}.pdf`;
                                link.download = `Resume-Piterimov-Roman-${lng.toUpperCase()}.pdf`;
                                link.click();
                            }}
                        >
                            <Download size={20} /> {t('hero.download_cv')}
                        </Button>
                    </div>

                    <div className="flex gap-6 print:hidden">
                        <a href="https://github.com/kybikchidori1" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-secondary transition-colors text-2xl">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/roman-piterimov-878008272/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-secondary transition-colors text-2xl">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:roman.yukhlin@gmail.com" className="text-text-muted hover:text-secondary transition-colors text-2xl">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Image/Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Abstract Circle/bg for image */}
                        <div className="absolute inset-0 border-2 border-dashed border-text-main/10 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-4 bg-surface rounded-full overflow-hidden flex items-center justify-center border border-text-main/5">
                            <img
                                src="/profile.jpg"
                                alt="Piterimov Roman"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Icons */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-10 right-0 bg-surface p-4 rounded-2xl shadow-xl border border-text-main/5"
                        >
                            <span className="text-2xl font-bold text-[#61DAFB]">React</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 left-0 bg-surface p-4 rounded-2xl shadow-xl border border-text-main/5"
                        >
                            <span className="text-2xl font-bold text-[#3178C6]">TS</span>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
