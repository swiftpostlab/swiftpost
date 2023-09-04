import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import siteConfig from '../../config/main.json'
import { SessionContext } from '../auth/contexts/SessionContext'

interface Props {
  children: React.ReactNode
  editConfig?: Record<string, string>
}

const getRouteKey = (route: string) => (route.replace('/', '') || 'index') as keyof typeof siteConfig['routes']


const TextEditor: React.FC<{
  label: string
  value: string, 
  onChange: (value: string) => void, 
  onSave: () => void
}> = ({ label, value, onChange, onSave }) => (
  <Stack>
    <Typography variant="h2">{label}</Typography>
    <TextField 
      fullWidth
      variant="outlined" 
      multiline
      maxRows={50}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        '& .MuiInputBase-input': {
          lineBreak: 'pre',
          fontFamily: 'monospace',
          fontSize: 12,
        },
      }}
    />
    <Button variant="outlined" onClick={onSave}>
      Save
    </Button>
  </Stack>
)

const EditingLayout: React.FC<Props> = ({ children }) => {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [jsonEditorValue, setJsonEditorValue] = useState('')
  const [mdEditorValue, setMdEditorValue] = useState('')
  const router = useRouter()

  const handleLoad = () => {
    const routeKey = getRouteKey(router.pathname)
    const { children: childrenString, ...jsonProperties } = siteConfig.routes[routeKey].content

    setJsonEditorValue(JSON.stringify(jsonProperties, null, 2))
    setMdEditorValue(childrenString)
  }

  // const handleSave = async () => {
  //   const routeKey = getRouteKey(router.pathname)
  //   const routeConfig = siteConfig.routes[routeKey]
   
  //   await saveConfig(
  //     routeKey, 
  //     {
  //       ...routeConfig,
  //       content: {
  //         ...JSON.parse(jsonEditorValue),
  //         children: JSON.stringify(mdEditorValue),

  //       },
  //     }
  //   )
  // }
  const session = useContext(SessionContext)
  

  useEffect(() => {
    handleLoad()
  }, [])

  if (!isEditOpen) {
    return (
      <>
        <Box
          sx={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
          }}
        >
          <Stack 
            direction="row" 
            spacing="0.5rem"
          >
            <Button 
              variant="contained"
              onClick={() => setIsEditOpen(true)}
            >
            Edit
            </Button>
            <Button 
              variant="outlined"
              onClick={() => session.logout()}
            >
            Logout
            </Button>
          </Stack>
        </Box>
        {children}
      </>
    )
  }

  return (
    <Stack direction="row" flex={1}>
      <Box flex={1}>
        {children}
      </Box>
      <Stack 
        width="33vw"
        padding="1rem"
        direction="column"
        spacing="1rem"
        sx={{
          backgroundColor: 'white',
          borderLeft: '1px solid gray',
        }}
      >
        <Button
          variant="contained"
          onClick={() => setIsEditOpen(false)}
        >
          Close Edit
        </Button>
        <TextEditor label="Properties" value={jsonEditorValue} onChange={setJsonEditorValue} onSave={() => console.log('Save clicked!')} />
        <TextEditor label="Markdown" value={mdEditorValue} onChange={setMdEditorValue} onSave={() => console.log('Save clicked!')} />
      </Stack>
    </Stack>
  )
}

export default EditingLayout