import "./styles.css"
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/ResigterForm";

export default function LoginPage() {
    return(

            <div className="loginPage">
                <LoginForm />
                <RegisterForm />
            </div>
            
    )
}