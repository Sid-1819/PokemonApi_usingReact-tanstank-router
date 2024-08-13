import { createFileRoute, redirect } from '@tanstack/react-router'
import { isAuthenticated } from '../utils/auth'

export const Route = createFileRoute('/profile')({

beforeLoad: () =>{
  if(!isAuthenticated()){
    throw redirect(
    {  to: "/login",
   
    }
    )
  }
},
component: () => <div>Welcome to Profile Page</div>
})