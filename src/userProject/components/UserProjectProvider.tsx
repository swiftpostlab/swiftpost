import React, { useState } from 'react'
import { Project, defaultProject, userProjectContext } from '../contexts/userProjectContext'

const UserProjectProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [project, setProject] = useState<Project>(defaultProject)

  return (
    <userProjectContext.Provider value={{ project, setProject }}>
      {children}
    </userProjectContext.Provider>
  )
}

export default UserProjectProvider