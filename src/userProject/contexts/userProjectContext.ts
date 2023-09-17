import { createContext } from 'react'

interface ProjectComponent {
  type: 'p' | 'h1',
  content: string
}

export interface Project {
  title: string,
  content: ProjectComponent[]
}

interface UserProjectContextType {
  project: Project,
  setProject: (project: Project) => void
}

export const defaultProject: Project = {
  title: 'Test',
  content: [
    { type: 'h1', content: 'Test h1' },
    { type: 'p', content: 'This is a test p.' },
  ],
}

const defaultContext: UserProjectContextType = {
  project: defaultProject,
  setProject: () => { console.log('Not within the userProjectContent'); return false },
}

export const userProjectContext = createContext<UserProjectContextType>(defaultContext)