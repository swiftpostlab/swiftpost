import { readFile, writeFile } from 'fs/promises'
import siteConfig from '../../../config/main.json'
import { MAIN_CONFIG_PATH } from './constants'

type Config = typeof siteConfig
const CONFIG_ENCODING: BufferEncoding = 'utf8'

export const saveConfig = async (route: string, value: Config['routes']['index']) => {
  const currentConfig = await loadConfig()

  const updatedConfig = {
    ...currentConfig,
    routes: {
      ...currentConfig.routes,
      [route]: value,
    },
  }
  const updatedConfigString = JSON.stringify(updatedConfig, null, 2)
  writeFile(MAIN_CONFIG_PATH, updatedConfigString, { encoding: CONFIG_ENCODING })
}

export const loadConfig = async () => {
  const currentConfigString = await readFile(MAIN_CONFIG_PATH, { encoding: CONFIG_ENCODING })
  const currentConfig = JSON.parse(currentConfigString)
  return currentConfig as Config
}