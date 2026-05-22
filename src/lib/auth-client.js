import { jwtClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:3000"
 
    // these steps are for jwt token generation and verification, you can customize it as per your requirements
    // step-3
   , plugins: [
    jwtClient()
]
// now the token will be automatically included in the Authorization header for all requests made using authClient
})