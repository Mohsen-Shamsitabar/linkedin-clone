import { Footer } from "../../components";
import { RegisterHeader } from "../components";
import { SigninForm } from "./components";
import classes from "./styles.module.css";

const SigninPage = () => {
  return (
    <div className={classes["root"]}>
      <div>
        <RegisterHeader />

        <main className={classes["main-container"]}>
          <div className={classes["text-container"]}>
            <h2 className={classes["head-text"]}>Sign in</h2>
            <p>Stay updated on your professional world.</p>
          </div>

          <SigninForm />
        </main>
      </div>

      <Footer className={classes["footer"]} />
    </div>
  );
};

export default SigninPage;
