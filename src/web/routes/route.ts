import express from 'express'
import CalculateDivisible from '../controllers/calculate_divisible'

const routes = express.Router()

const calculateDivisible = new CalculateDivisible()

routes.get('/:number', calculateDivisible.index)

export default routes; 