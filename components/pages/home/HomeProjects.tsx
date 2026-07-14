import { LogoKavalerka } from '@/components/logos/projects/LogoKavalerka'
import { LogoProjectCmsBrew } from '@/components/logos/projects/LogoProjectCmsBrew'
import { LogoProjectExtReviewBot } from '@/components/logos/projects/LogoProjectExtReviewBot'
import { LogoProjectFlightStrike } from '@/components/logos/projects/LogoProjectFlightStrike'
import { LogoProjectMadeiraFlightRisk } from '@/components/logos/projects/LogoProjectMadeiraFlightRisk'
import { LogoProjectTurbulenceMap } from '@/components/logos/projects/LogoProjectTurbulenceMap'
//import { LogoProjectPayTheAgent } from '@/components/logos/projects/LogoProjectPayTheAgent'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeader } from '@/components/SectionHeader'
import { links } from '@/data/links'
import type { ProjectStatusType } from '@/types/ProjectStatusType'

interface Project {
  name: string
  description: string
  status: ProjectStatusType
  icon: React.ReactNode
  link?: string
}

const projects: Array<Project> = [
  {
    name: 'CMS Brew',
    description: 'Clients edit their live site in plain language via chat.',
    status: 'active',
    icon: <LogoProjectCmsBrew className="size-4" />,
    link: links.projects.cmsbrew,
  },
  {
    name: 'Madeira Flight Risk',
    description: 'Live weather disruption risk for FNC airport.',
    status: 'active',
    icon: <LogoProjectMadeiraFlightRisk className="size-4" />,
    link: links.projects.madeiraflightrisk,
  },
  {
    name: 'AirportStrikes.eu',
    description: 'Live map of airport labour strikes across Europe.',
    status: 'active',
    icon: <LogoProjectFlightStrike className="size-4 rounded-sm" />,
    link: links.projects.flightstrike,
  },
  {
    name: 'Turbulence Map',
    description: 'Live turbulence forecast & flight turbulence tracker.',
    status: 'active',
    icon: <LogoProjectTurbulenceMap className="size-4 rounded-sm" />,
    link: links.projects.turbulencemap,
  },
  // {
  //   name: 'PayTheAgent.ai',
  //   description: 'Job board where companies hire AI agents as real team members.',
  //   status: 'active',
  //   icon: <LogoProjectPayTheAgent className="rounded-sm" />,
  //   link: links.projects.paytheagent,
  // },
  {
    name: 'ExtReviewBot',
    description: 'Browser extension review tracking & analytics.',
    status: 'active',
    icon: <LogoProjectExtReviewBot className="-ml-0.5" />,
    link: links.projects.extreviewbot,
  },
  {
    name: 'Kavalerka.pl',
    description: 'Real estate platform for studio apartments.',
    status: 'active',
    icon: <LogoKavalerka />,
    link: links.projects.kavalerka,
  },
  {
    name: 'InGastro.pl',
    description: 'Job board for finding hospitality jobs in Poland.',
    status: 'sold',
    icon: <div className="size-4 bg-[#FDB71C] rounded-sm p-1" />,
    link: links.projects.ingastro,
  },
]

export function HomeProjects() {
  return (
    <section className="@container/projects">
      <SectionHeader
        heading="Personal Projects"
        text="These are my personal projects, both past and ongoing:"
      />

      <ul className="grid gap-3 @lg/projects:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  )
}
