// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'hfhutof21k'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'reactjshaffs-dev.auth0.com',            // Auth0 domain
  clientId: 'k6O42sIVevgcIcNLOavGEWMe0luld8yE',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
