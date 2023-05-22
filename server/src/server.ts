import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import 'dotenv/config'
import fastify from 'fastify'
import { resolve } from 'node:path'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'
import { uploadRoutes } from './routes/upload'

const app = fastify()

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true, // all URLs of the frontend application, be careful with this in production. In production add only the URL to the frontend application
})
app.register(jwt, {
  secret: 'spacetime', // change this in production
})

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    // host: '::',
    host: '0.0.0.0', // to work in mobile devices, but it's broken in the browser, it must change axios baseURL to http:// to IPv4 address
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
