# test-wobiz

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Containerized app

```
docker build -t test-wobiz:dev .
docker run -v ${PWD}:/app -v /app/node_modules -p 8081:8080 --rm test-wobiz:dev
```
