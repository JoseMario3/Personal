"use client";
import * as React from "react";
import { supabase } from "@/lib/supabase";
import styles from "./index.module.css";
import Image from "next/image";
import { Button } from "@mui/material";
import ImageDialog from "@/components/Dialog";

export type ImageType = {
  id: number;
  Name: string;
  URL: string;
  created_at: string;
  Description: string;
  Folder: string;
};

export default function Gallery() {
  const [open, setOpen] = React.useState(false);
  const [currIdx, setCurrIdx] = React.useState(0);

  const handleClickOpen = (value: number) => {
    setCurrIdx(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [images, setImages] = React.useState<ImageType[]>([]);

  React.useEffect(() => {
    const getGallery = async () => {
      const { data, error } = await supabase
        .from("Images")
        .select("*")
        .eq("Folder", "Gallery");
      if (!error) setImages(data);
    };
    getGallery();
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.imageWrapper}>
        <Image
          src={"/JennyLake.jpg"}
          alt={"Jenny Lake"}
          width={1008}
          height={500}
          className={styles.hero}
          priority
        ></Image>
        <span className={styles.overlayText}>Gallery</span>
      </div>
      <h2 className={styles.desc}>
        I should have just used Instagram but here we are
      </h2>
      <div className={styles.row}></div>
      <div className={styles.images}>
        {images.map((img, idx) =>
          img ? (
            <Button
              style={{ padding: "0px" }}
              key={idx}
              onClick={() => handleClickOpen(idx)}
            >
              <Image
                src={img.URL}
                alt={img.Name}
                width={240}
                height={240}
                style={{ objectFit: "cover" }}
                className={styles.image}
                priority
              />
            </Button>
          ) : null,
        )}
      </div>
      <ImageDialog
        images={images}
        currIdx={currIdx}
        setCurrIdx={setCurrIdx}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
