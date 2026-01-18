import { Section } from '../components/Section'
import { Card } from '../components/Card'
import { useTranslation } from 'react-i18next'

const skills = (t: any) => [
    {
        category: t('skills.cat_arch'),
        items: ["Feature Sliced Design (FSD)", "Micro-frontends", "Design Systems", "Architecture Patterns", "SOLID / DRY / KISS"]
    },
    {
        category: t('skills.cat_fe'),
        items: ["React & React Deep Dive", "Next.js (App Router, SSR/SSG)", "TypeScript (Advanced)", "Performance Optimization", "Web Vitals", "Accessibility (WCAG)"]
    },
    {
        category: t('skills.cat_state'),
        items: ["Redux Toolkit", "TanStack Query", "Zustand", "Context API", "State Normalization", "Optimistic Updates"]
    },
    {
        category: t('skills.cat_testing'),
        items: ["Unit Testing (Jest, Vitest)", "RTL (React Testing Library)", "E2E (Playwright, Cypress)", "TDD", "Visual Regression"]
    },
    {
        category: t('skills.cat_tools'),
        items: ["Vite / Webpack", "CI/CD (GitHub Actions)", "Docker (Basics)", "Git (Advanced)", "Turborepo", "Sentry / Monitoring"]
    },
    {
        category: t('skills.cat_methods'),
        items: ["Agile/Scrum", "Code Review", "Mentoring", "System Design", "Technical Documentation"]
    }
]

export const Skills = () => {
    const { t } = useTranslation()
    const skillList = skills(t)

    return (
        <Section id="skills" title={t('skills.title')} subtitle={t('skills.subtitle')}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillList.map((skillGroup, index) => (
                    <Card key={index} delay={index * 0.1} className="h-full">
                        <h3 className="text-xl font-bold mb-4 text-secondary">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-surface rounded-full text-sm text-text-muted border border-surface hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
