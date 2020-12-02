# Installation and deployment

## Dev

```bash
npm install
npm start
```

### Test
```bash
npm run test
```
Or to watch changes realtime

```bash
npm run test:watch
```

### eslint

```bash
npm run lint
```

## Production

```bash
npm install
npm run clean
npm run build:prod
npm run start:prod
```

To stop

```bash
npm run stop:prod
```

To delete pm2 instance

```bash
npm run delete:prod
```
