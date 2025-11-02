import { SectionHeader } from '@/components/SectionHeader'
import { TechBadge } from '@/components/TechBadge'
import { techStackIcons } from '@/data/techStack'

const techStack = [
  'React',
  'Next.js',
  'TanStack Start',
  'TanStack Query',
  'TypeScript',
  'Better Auth',
  'Node',
  'Fastify',
  'Nest',
  'Postgres',
  'Prisma',
  'Supabase',
  'Docker',
  'Turborepo',
  'shadcn/ui',
  'Tailwind',
  'AI SDK',
]

export function HomeTechStack() {
  return (
    <section>
      <SectionHeader
        heading="Tech stack"
        text="The tech stack I use for my personal and client work:"
      />

      <ul className="flex flex-wrap items-center gap-2.5">
        {techStack.map((label) => (
          <li key={label}>
            <TechBadge label={label} icon={techStackIcons[label]} />
          </li>
        ))}
      </ul>
    </section>
  )
}
