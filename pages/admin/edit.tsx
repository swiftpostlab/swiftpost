import { Stack } from '@mui/material'
import React, { useContext } from 'react'
import { userProjectContext } from '../../src/userProject/contexts/userProjectContext'


/**
 * In this file we load the same as index, but in editable mode.
 * We load the config at runtime, no static props.
 */

const Edit: React.FC = () => {
  const { project, setProject } = useContext(userProjectContext)
  const projectTxt = JSON.stringify(project, null, 2)
  return (
    <Stack>
      <Stack>
        <p>Edit</p>

        <input type="text" value={projectTxt} style={{ height: '40vh', wordSpacing: 'pre' }}/>
      </Stack>
      <Stack>
        {project.content.map((component) => {
          switch(component.type) {
          case 'h1':
            return (<h1>{component.content}</h1>)
          case 'p':
          default:
            return (<p>{component.content}</p>)
          }
        })}
      </Stack>
    </Stack>

  )
}
export default Edit
