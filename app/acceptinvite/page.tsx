"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

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
      // Success: user is now fully activated
      window.location.href = "/";
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Hello Friend!</h1>
      <p>Please create a password to allow uploading to the Gallery.</p>

      <input
        type="password"
        placeholder="New password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: "1rem" }}
      />

      <button onClick={handleSetPassword} disabled={loading}>
        {loading ? "Setting password…" : "Set password"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
