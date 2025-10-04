// app/gallery/page.tsx
import { supabase } from "@/lib/supabase";
import Image from "next/image";

export default async function Gallery() {
  const imageFiles = [
    "2024/AnimalWell.png",
    "2024/AstroBot.png",
    "2024/Balala.png",
  ];

  const signedUrls = await Promise.all(
    imageFiles.map(async (filename) => {
      const { data, error } = await supabase.storage
        .from("Images")
        .createSignedUrl(filename, 60 * 60);

      if (error) {
        console.error(`Error for ${filename}:`, error);
        return null;
      }

      return { filename, url: data.signedUrl };
    })
  );

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {signedUrls.map((img) =>
        img ? (
          <Image
            key={img.filename}
            src={img.url}
            alt={img.filename}
            width={300}
            height={300}
            style={{ objectFit: "cover" }}
          />
        ) : null
      )}
    </div>
  );
}
