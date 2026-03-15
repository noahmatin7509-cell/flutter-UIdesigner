import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import projectRoutes from './routes/projects'
import widgetRoutes from './routes/widgets'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

// Error handler middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message,
  })
})

// Routes
app.use('/api/projects', projectRoutes)
app.use('/api/widgets', widgetRoutes)

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`⚡ Server running on http://localhost:${PORT}`)
})

export default app