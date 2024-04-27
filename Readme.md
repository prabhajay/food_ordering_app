# Food ordering App
## Back end using typeScript:

1. First create folders as Back_end
2. make sure in Back_end folder.
3. Install a npm packages.
    ### npm install
4. Install all packeages.
    ### npm express dotenv cors mongodb mongoose
5. Install the devdependencies typescript, nodemon and typescript express,cors,node.   
    ### npm i ts-node typescript nodemon @types/express @types/cors @types/node --save-dev
6. Config the TS 
    ### npx tsc --init

    ---
    
## Front End using snadcn/ui
1. Create project with vite:  

   ### npm create vite@latest Front_end
   React, 
   Typescript.


2. Add Tailwind and its configuration:

    Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and .config.js files:

   ### npm install -D tailwindcss postcss autoprefixer
 
   ### npx tailwindcss init -p

3. Edit tsconfig.json file

      {
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}

4. Update vite.config.ts

    ### npm i -D @types/node

 import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
`
5. Run the CLI
Run the shadcn-ui init command to setup your project:

### npx shadcn-ui@latest init

6. Configure components.json
Would you like to use TypeScript (recommended)? no / yes
Which style would you like to use? › New York
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › src/index.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no / yes (no)

7. That's it
### npx shadcn-ui@latest add button

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}




