"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@mui/material";

import styles from "./index.module.css";

export default function AcceptInvite() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSetPassword = async () => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.updateUser({
      password,
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      window.location.href = "/gallery";
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1
        style={{
          fontFamily: "var(--font-carter)",
          color: "var(--BLUE)",
          fontSize: "2.5rem",
          marginBottom: "10px",
        }}
      >
        Hello Friend!
      </h1>
      <p
        style={{
          color: "var(--BLUE)",
          fontWeight: "500",
        }}
      >
        Please create a password to allow uploading to the Gallery.
      </p>
      <input
        type="password"
        placeholder="New password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <Button
        className={styles.loginButton}
        variant="outlined"
        type="submit"
        onClick={handleSetPassword}
        disabled={loading}
        sx={{ color: "var(--BLUE)", border: "1px solid var(--BLUE)" }}
      >
        {loading ? "Setting password…" : "Set password"}
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
