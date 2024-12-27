/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

const projectId = "hkgtynx0"
const dataset = "production"
const NEXT_PUBLIC_SANITY_API_VERSION = "2024-12-24"

export default defineCliConfig({ api: { projectId, dataset } })
