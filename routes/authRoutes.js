import express from 'express'
import { login, logout, register } from '../controller/authController.js'

const authRoter = express.Router()

authRoter.post('/register', register)
authRoter.post('/login', login)
authRoter.post('/logout', logout)

export default authRoter