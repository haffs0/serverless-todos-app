import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors, httpErrorHandler } from 'middy/middlewares'
import { generateUploadUrl } from '../../businessLogic/todos'
import { getUserId } from '../utils'


export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // TODO: Return a presigned URL to upload a file for a TODO item with the provided id
    const userId = getUserId(event)
    const todoId = event.pathParameters.todoId
    // console.log(todoId)
    const uploadUrl = await generateUploadUrl(userId, todoId)

    return {
      statusCode: 200,
      body: JSON.stringify({
        uploadUrl: uploadUrl
      })
    }
  }
)

handler
  .use(httpErrorHandler())
  .use(
    cors({
      credentials: true
    })
  )