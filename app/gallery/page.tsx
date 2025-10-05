import { supabase } from "@/lib/supabase";
import styles from "./index.module.css";
import Image from "next/image";

export default async function Gallery() {
  const { data: files, error: listError } = await supabase.storage
    .from("Images")
    .list("Gallery", { limit: 500 });

  if (listError) {
    console.error("Error listing files:", listError);
    return;
  }

  const signedUrls = await Promise.all(
    files.map(async (file) => {
      const { data, error } = await supabase.storage
        .from("Images")
        .createSignedUrl(`${"Gallery"}/${file.name}`, 60 * 60);

      if (error) {
        console.error(`Error for ${file.name}:`, error);
        return null;
      }
      return { filename: file.name, url: data.signedUrl };
    })
  );

  return (
    <div className={styles.body}>
      {signedUrls.map((img) =>
        img ? (
          <Image
            key={img.filename}
            src={img.url}
            alt={img.filename}
            width={300}
            height={300}
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        ) : null
      )}
    </div>
  );
}
