import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import imageFiles from "@/data/2025.json";
import { supabase } from "@/lib/supabase";
import ScrollToTop from "@/components/ScrollToTop";
import BackButton from "@/components/BackButton";

export default async function Rankings() {
  const signedUrls = await Promise.all(
    imageFiles.map(async (filename) => {
      const { data, error } = await supabase.storage
        .from("Images")
        .createSignedUrl(`2025/${filename}`, 60 * 60);

      if (error) {
        console.error(`Error for ${filename}:`, error);
        return null;
      }
      return { filename, url: data.signedUrl };
    })
  );

  return (
    <div className={styles.body}>
      <div className={styles.inner}>
        <BackButton />
        {signedUrls.map((img) =>
          img ? (
            <Image
              key={img.filename}
              src={img.url}
              alt={img.filename}
              width={300}
              height={200}
              className={styles.image}
            />
          ) : null
        )}
        <ScrollToTop />
      </div>
    </div>
  );
}
