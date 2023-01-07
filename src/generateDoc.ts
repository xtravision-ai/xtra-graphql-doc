// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore


import { run } from 'spectaql'
import { resolve } from 'path';


const spectaqlOptions = {
   specFile: resolve('./src/config.yml'),
   resolveWithOutput: true,
   targetDir:  resolve('./generated-doc/'),
   logoFile: resolve("./src/logo/logo.png"),
   faviconFile: resolve("./src/logo/favicon.png"),
}

async function generateDoc(){
   // generate via introspection query
   const { html } = await run(spectaqlOptions)

   // Remove any powered-by line
}

generateDoc()