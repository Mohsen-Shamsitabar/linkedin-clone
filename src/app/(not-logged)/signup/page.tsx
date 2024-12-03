import { Footer } from "../components";
import classes from "./styles.module.css";

import { SigninForm, SigninHeader } from "./components";

const SignUpPage = () => {
  return (
    <div className="container h-screen flex flex-col justify-between">
      <div>
        <SigninHeader />

        <h2 className={classes["head-text"]}>Join LinkedIn now — it’s free!</h2>

        <main className={classes["main-container"]}>
          <SigninForm />
        </main>
      </div>

      <Footer className="hidden md:block" />
    </div>
  );
};

export default SignUpPage;
