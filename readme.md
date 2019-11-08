## How to make this project work

- 1. Have Docker installed
- 2. `sh git clone {project}`
- 3. `sh docker-compose up`

## Edit for server

- 1. Have gradle installed(With Intellij skip this step)
- 2. `sh cd backend`
- 3. With Gradle Wrapper from intellij -> `sh ./gradlew fatJar -t`
- 3. Without Gradle Wrapper -> `sh gradle fatJar -t`
- 4. After changes to source code. Find your container id for the 'api' service -> `sh docker ps`
- 5. At last run -> `sh docker restart {CONTAINER_ID}`
