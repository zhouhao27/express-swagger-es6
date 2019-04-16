import express from 'express'

const router = express.Router()

/**
 * @swagger
 * /hello:
 *    get:
 *      tags:
 *      - "hello"
 *      summary: Say hello
 *      description: ""
 *      operationId: "hello"
 *      produces:
 *      - "application/json"
 *      parameters: []
 *      security:
 *      - jwt: [] 
 *      responses:
 *        200:
 *          description: "successful operation"
 */
router.get('/', (req, res) => {
	console.log('Hello')
	res.status(200).json({data: 'Hello World!'})  
})

export default router