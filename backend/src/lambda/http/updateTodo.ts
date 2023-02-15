import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import { updateTodoItem } from '../../businessLogic/todos'
import { UpdateTodoRequest } from '../../requests/UpdateTodoRequest'
import { getUserId } from '../utils'

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    //fetching the jwttoken
    const userId = getUserId(event)
    const todoId = event.pathParameters.todoId
    const updatedTodoRequest: UpdateTodoRequest = JSON.parse(event.body)

    const todoItem =  await updateTodoItem(updatedTodoRequest, userId, todoId)

    return {
      statusCode: 200,
      body: JSON.stringify({
        "item": todoItem
      })
    }
  }
)

handler.use(
  cors({
    credentials: true
  })
)