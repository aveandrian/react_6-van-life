import { useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { loginUser } from "../api"
import '../styles/LoginPage.css'

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        
        return redirect(pathname)
    } catch(err) {
        return err.message
    }
}

export default function Login(){
    const status = useNavigation()
    const message = useLoaderData()
    const errorMessage = useActionData()

    return (
        <main className="login-container" >
            <h1>Sign in to your account</h1>
            {message && <h3 style={{color: "red"}}>{message}</h3>}
            {errorMessage && <h4 style={{color: "red"}}>{errorMessage}</h4>}
            <Form className="login-form" method="post" replace>
                <input 
                    type="email"
                    placeholder="Email address"
                    name="email" />
                <input 
                 type="password"
                 placeholder="Password"
                 name="password"/>
                 <button className="login-btn" disabled={status.state === "submitting"}>{status.state === "submitting" ? "Logging in..." : "Log In"}</button>
            </Form>
        </main>
    )
}