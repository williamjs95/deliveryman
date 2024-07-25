>> initialization
yarn init -y

>> tsconfig
yarn tsc --init

>> eslint
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react-hooks eslint-plugin-react eslint-plugin-prettier eslint-config-prettier eslint-plugin-react-refresh --save-dev

>> prettier
yarn add prettier --save-dev

>> create postgre docker image
docker run --name deliveryman-pg -e POSTGRESQL_USERNAME=admin -e POSTGRESQL_PASSWORD=admin -e POSTGRESQL_DATABASE=prisma_deliveries -p 5432:5432 bitnami/postgresql

>> prisma
yarn prisma init
yarn prisma migrate dev
yarn prisma studio




