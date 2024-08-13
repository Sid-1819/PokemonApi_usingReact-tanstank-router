import { createFileRoute, Link, redirect, useNavigate, useRouter } from '@tanstack/react-router';
import { isAuthenticated, signIn, signOut } from "../utils/auth";

export const Route = createFileRoute('/login')({
  component: Login,
});

function Login() {
  const router = useRouter();
  const navigate = useNavigate();


  return (
    <>
      <h2>Login</h2>
      {isAuthenticated() ? (
        <>
          <p>Hello user!</p>
          <button
            onClick={async () => {
              try {
                signOut();
                router.invalidate();
                console.log("sign out clicked");
                
              } catch (error) {
                console.error("Sign out failed:", error);
              }
            }}
          >
            Sign out
          </button>
        </>
      ) : (
        <button
          onClick={async () => {
            try {
             signIn();
              router.invalidate();
              console.log("Sign in clicked");
              navigate({
                to: '/profile',
              })
              // throw redirect(
              // to:"/profile"
              // )
              // if(!isAuthenticated()){
              //   throw redirect(
              //   {  to: "/login",
               
              //   }
              //   )
              // }
            } catch (error) {
              console.error("Sign in failed:", error);
            }
          }}
        >
          Sign in
        </button>
      )}
    </>
  );
}
