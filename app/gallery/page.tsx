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
      <div className={styles.imageWrapper}>
        <Image
          src={"/JennyLake.jpg"}
          alt={"Jenny Lake"}
          width={1000}
          height={500}
          className={styles.hero}
        ></Image>
        <span className={styles.overlayText}>Gallery</span>
      </div>
      {/* <div className={styles.row}></div> */}
      <div className={styles.images}>
        {signedUrls.map((img) =>
          img ? (
            <Image
              key={img.filename}
              src={img.url}
              alt={img.filename}
              width={234}
              height={234}
              style={{ objectFit: "cover" }}
              className={styles.image}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
