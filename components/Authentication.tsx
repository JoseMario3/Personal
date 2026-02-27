import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { supabase } from "@/lib/supabase";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "@/styles/components.module.css";

export default function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setAuthError(error.message);
  };

  return (
    <form onSubmit={handleLogin} className={styles.login}>
      <h1 style={{ color: "var(--BLUE)", width: "300px" }}>Hello Friends!</h1>
      <h3 style={{ color: "var(--BLUE)", width: "300px" }}>
        Enter your login info to upload pictures! If you dont have login
        credentials yet, reach out to Jose for help! :)
      </h3>
      <TextField
        className={styles.email}
        id="standard-basic"
        label="Email"
        variant="standard"
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        className={styles.password}
        id="standard-basic"
        label="Password"
        variant="standard"
        required
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        className={styles.loginButton}
        variant="outlined"
        type="submit"
        sx={{ color: "var(--BLUE)", border: "1px solid var(--BLUE)" }}
        endIcon={<AccountCircleIcon />}
      >
        Log In!
      </Button>
      {authError && <p style={{ color: "red" }}>{authError}</p>}
    </form>
  );
}
