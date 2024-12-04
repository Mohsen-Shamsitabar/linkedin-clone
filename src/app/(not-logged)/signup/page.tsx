import { Footer } from "../components";
import classes from "./styles.module.css";

import { SignupForm, SignupHeader } from "./components";

const SignUpPage = () => {
  return (
    <div className={classes["root"]}>
      <div>
        <SignupHeader />

        <h2 className={classes["head-text"]}>Join LinkedIn now — it’s free!</h2>

        <main className={classes["main-container"]}>
          <SignupForm />
        </main>
      </div>

      <Footer className={classes["footer"]} />
    </div>
  );
};

export default SignUpPage;
