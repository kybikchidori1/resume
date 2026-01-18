
import { Section } from '../components/Section'
import { Card } from '../components/Card'
import { Building2, Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const Experience = () => {
    const { t } = useTranslation()

    const experiences = [
        {
            company: 'Sber (Sberbank)',
            role: t('experience.sber_role'),
            period: t('experience.sber_period'),
            description: t('experience.sber_desc'),
            achievements: t('experience.sber_achievements', { returnObjects: true }) as string[]
        },
        {
            company: 'OOO "Omega"',
            role: t('experience.omega_role'),
            period: t('experience.omega_period'),
            description: t('experience.omega_desc'),
            achievements: t('experience.omega_achievements', { returnObjects: true }) as string[]
        },
        {
            company: 'netgroup*',
            role: t('experience.netgroup_role'),
            period: t('experience.netgroup_period'),
            description: t('experience.netgroup_desc'),
            achievements: t('experience.netgroup_achievements', { returnObjects: true }) as string[]
        }
    ]

    return (
        <Section id="experience" title={t('experience.title')} subtitle={t('experience.subtitle')}>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-text-muted/20 before:to-transparent">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        {/* Timeline Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-surface bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <Building2 size={20} className="text-primary" />
                        </div>

                        {/* Content Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
                            <Card delay={index * 0.2}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-main">{exp.role}</h3>
                                        <div className="text-primary font-medium">{exp.company}</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-text-muted text-sm mt-2 md:mt-0">
                                        <Calendar size={16} />
                                        {exp.period}
                                    </div>
                                </div>

                                <p className="text-text-muted mb-4 italic">{exp.description}</p>

                                <ul className="space-y-2">
                                    {exp.achievements.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-text-main/80">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>

                    </div>
                ))}
            </div>
        </Section>
    )
}
