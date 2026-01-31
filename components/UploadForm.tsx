"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Session } from "@supabase/supabase-js";

export interface UploadFormProps {
  open: boolean;
}

export default function UploadForm({ open }: UploadFormProps) {
  // 🔐 Auth state
  const [session, setSession] = useState<Session | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);

  // 📤 Upload state
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    title: "",
    desc: "",
    type: "",
  });
  const [loading, setLoading] = useState(false);

  // --- AUTH: detect login state ---
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // --- LOGIN ---
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setAuthError(error.message);
  };

  // --- UPLOAD ---
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `Gallery/${crypto.randomUUID()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("Images")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from("Images").getPublicUrl(fileName);

      const imageUrl = data.publicUrl;

      const { error: insertError } = await supabase.from("Images").insert({
        Name: form.title,
        Description: form.desc,
        type: form.type,
        URL: imageUrl,
        Folder: "Gallery",
      });

      if (insertError) throw insertError;
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- RENDER ----------------

  // 🚫 Not logged in → show login
  if (!session) {
    return (
      <form onSubmit={handleLogin}>
        <h2>Authorized Upload</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Log in</button>

        {authError && <p style={{ color: "red" }}>{authError}</p>}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
        Logged in as {session.user.email}
      </p>

      <input
        type="file"
        accept="image/*"
        required
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        required
        onChange={handleChange}
      />

      <textarea
        name="desc"
        placeholder="Description"
        value={form.desc}
        onChange={handleChange}
      />

      <select name="type" value={form.type} onChange={handleChange}>
        <option value="">Select type</option>
        <option value="Nature">Nature</option>
        <option value="Friends">Friends</option>
        <option value="Misc">Misc</option>
      </select>

      <button type="submit" disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </form>
  );
}
