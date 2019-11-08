## How to make this project work

Have Docker installed and gradle installed on your development machine
- 1. `sh git clone {project}`
- 2. `sh cd backend && gradle fatJar`
- 3. `sh docker-compose up`

## Edit for server

- 1. `sh cd backend && gradle fatJar -t`
- 2. After changes to source code. Find your container id for the 'api' service -> `sh docker ps`
- 3. At last run -> `sh docker restart {CONTAINER_ID}`
