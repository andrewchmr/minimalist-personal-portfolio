import { LogoAiSdk } from '@/components/logos/tech/LogoAiSdk'
import { LogoAngular } from '@/components/logos/tech/LogoAngular'
import { LogoBetterAuth } from '@/components/logos/tech/LogoBetterAuth'
import { LogoDocker } from '@/components/logos/tech/LogoDocker'
import { LogoElectron } from '@/components/logos/tech/LogoElectron'
import { LogoFastify } from '@/components/logos/tech/LogoFastify'
import { LogoGraphql } from '@/components/logos/tech/LogoGraphql'
import { LogoJest } from '@/components/logos/tech/LogoJest'
import { LogoMUI } from '@/components/logos/tech/LogoMUI'
import { LogoNest } from '@/components/logos/tech/LogoNest'
import { LogoNextjs } from '@/components/logos/tech/LogoNextjs'
import { LogoNode } from '@/components/logos/tech/LogoNode'
import { LogoPostgres } from '@/components/logos/tech/LogoPostgres'
import { LogoPrisma } from '@/components/logos/tech/LogoPrisma'
import { LogoReact } from '@/components/logos/tech/LogoReact'
import { LogoRedux } from '@/components/logos/tech/LogoRedux'
import { LogoRxjs } from '@/components/logos/tech/LogoRxjs'
import { LogoShadcnUi } from '@/components/logos/tech/LogoShadcnUi'
import { LogoStorybook } from '@/components/logos/tech/LogoStorybook'
import { LogoSupabase } from '@/components/logos/tech/LogoSupabase'
import { LogoTailwind } from '@/components/logos/tech/LogoTailwind'
import { LogoTanstack } from '@/components/logos/tech/LogoTanstack'
import { LogoTanstackQuery } from '@/components/logos/tech/LogoTanstackQuery'
import { LogoTurborepo } from '@/components/logos/tech/LogoTurborepo'
import { LogoTypescript } from '@/components/logos/tech/LogoTypescript'

type TechStackMap = Record<string, React.ComponentType<{ className?: string }> | undefined>

export const techStackIcons: TechStackMap = {
  React: LogoReact,
  'Next.js': LogoNextjs,
  'TanStack Start': LogoTanstack,
  'TanStack Query': LogoTanstackQuery,
  TypeScript: LogoTypescript,
  'Better Auth': LogoBetterAuth,
  Node: LogoNode,
  'Node.js': LogoNode,
  Fastify: LogoFastify,
  Nest: LogoNest,
  Postgres: LogoPostgres,
  PostgreSQL: LogoPostgres,
  Prisma: LogoPrisma,
  Supabase: LogoSupabase,
  Docker: LogoDocker,
  Turborepo: LogoTurborepo,
  'shadcn/ui': LogoShadcnUi,
  Tailwind: LogoTailwind,
  'AI SDK': LogoAiSdk,
  Electron: LogoElectron,
  Redux: LogoRedux,
  Storybook: LogoStorybook,
  Jest: LogoJest,
  MUI: LogoMUI,
  GraphQL: LogoGraphql,
  RxJS: LogoRxjs,
  Angular: LogoAngular,
  'React Native': LogoReact,
  // Technologies without icons
  'Styled Components': undefined,
  Express: undefined,
}
