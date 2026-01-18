import { Section } from '../components/Section'
import { Send, Smartphone, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
    const { t } = useTranslation()

    return (
        <footer className="bg-surface/50 border-t border-surface">
            <Section id="contact" title={t('contact.title')} subtitle={t('contact.subtitle')}>
                <div className="max-w-5xl mx-auto space-y-12">

                    <p className="text-xl text-text-muted text-center max-w-2xl mx-auto">
                        {t('contact.desc')}
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <a href="https://t.me/Kybikchidori1" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 text-text-muted hover:text-primary transition-colors p-8 bg-background rounded-2xl border border-surface text-center group">
                            <div className="p-4 bg-surface/50 rounded-full text-primary group-hover:scale-110 transition-transform">
                                <Send size={32} />
                            </div>
                            <div>
                                <div className="text-sm text-text-muted/70 mb-1">Telegram</div>
                                <div className="font-medium text-text-main text-lg">@Kybikchidori1</div>
                            </div>
                        </a>

                        <a href="https://wa.me/+79818899106" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 text-text-muted hover:text-primary transition-colors p-8 bg-background rounded-2xl border border-surface text-center group">
                            <div className="p-4 bg-surface/50 rounded-full text-primary group-hover:scale-110 transition-transform">
                                <Smartphone size={32} />
                            </div>
                            <div>
                                <div className="text-sm text-text-muted/70 mb-1">Phone / WhatsApp</div>
                                <div className="font-medium text-text-main text-lg">8 (981) 889-91-06</div>
                            </div>
                        </a>

                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=roman.yukhlin@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 text-text-muted hover:text-primary transition-colors p-8 bg-background rounded-2xl border border-surface text-center group">
                            <div className="p-4 bg-surface/50 rounded-full text-primary group-hover:scale-110 transition-transform">
                                <Mail size={32} />
                            </div>
                            <div>
                                <div className="text-sm text-text-muted/70 mb-1">Email (Gmail)</div>
                                <div className="font-medium text-text-main text-lg">roman.yukhlin@gmail.com</div>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="mt-20 pt-8 border-t border-surface text-center text-text-muted text-sm">
                    © {new Date().getFullYear()} Piterimov Roman. Built with React, Tailwind & Vite.
                </div>
            </Section>
        </footer>
    )
}
