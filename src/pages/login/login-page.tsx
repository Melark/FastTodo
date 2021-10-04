import React, { useState } from "react";
import { Background } from "../../components/background/background";
import { Icon, Input } from "../../components/input/input";
import styles from "./login.module.scss";
import illustration from "../../images/login_illustration.png";

export const LoginPage = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginForm}>
        <h1>Login</h1>
        <form>
          <div className={styles.form}>
            <Input
              icon={Icon.Username}
              placeholder="Username"
              value={username ?? ""}
              onValueChange={setUsername}
            />
            <Input
              icon={Icon.Password}
              placeholder="Password"
              value={password ?? ""}
              onValueChange={setPassword}
            />
            <div>
              <button>Login</button>
            </div>
          </div>
        </form>
      </div>
      <img
        className={styles.illustration}
        src={illustration}
        alt="login illustration"
      />
    </div>
  );
};
