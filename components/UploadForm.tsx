"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import styles from "@/styles/components.module.css";

export interface UploadFormProps {
  open: boolean;
}

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    title: "",
    desc: "",
    type: "",
  });
  const [loading, setLoading] = useState(false);

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

  return (
    <form onSubmit={handleSubmit} className={styles.upload}>
      <h1
        style={{
          fontFamily: "var(--font-carter)",
          color: "var(--BLUE)",
          fontSize: "2.5rem",
          marginBottom: "10px",
        }}
      >
        Upload An Image!
      </h1>
      <input
        className={styles.imgFile}
        type="file"
        accept="image/*"
        required
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <input
        className={styles.imgTitle}
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        required
        onChange={handleChange}
      />
      <textarea
        className={styles.imgDesc}
        name="desc"
        placeholder="Description (Optional)"
        value={form.desc}
        onChange={handleChange}
      />
      <select
        className={styles.imgType}
        name="type"
        value={form.type}
        onChange={handleChange}
      >
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
