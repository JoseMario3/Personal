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

  const textFieldStyles = {
    "& .MuiInputBase-input": { color: "var(--BLUE)" },
    "& .MuiInputLabel-root": { color: "var(--BLUE)" },
    "& .MuiInput-underline:before": { borderBottomColor: "var(--BLUE)" },
    "& .MuiInput-underline:after": { borderBottomColor: "var(--BLUE)" },
  };

  return (
    <form onSubmit={handleLogin} className={styles.login}>
      <h1
        style={{
          fontFamily: "var(--font-carter)",
          color: "var(--BLUE)",
          fontSize: "2.5rem",
          marginBottom: "10px",
        }}
      >
        Hello Friends!
      </h1>
      <h3 style={{ color: "var(--BLUE)", width: "300px" }}>
        Log in to help me expand the Gallery! Reach out to me if you don&apos;t
        have login credentials yet :)
      </h3>
      <TextField
        sx={{ ...textFieldStyles, mb: 3, width: 250 }}
        id="standard-basic"
        label="Email"
        variant="standard"
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        sx={{ ...textFieldStyles, mb: 5, width: 250 }}
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
