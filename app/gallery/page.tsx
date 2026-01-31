"use client";
import * as React from "react";
import { supabase } from "@/lib/supabase";
import styles from "./index.module.css";
import Image from "next/image";
import { ButtonGroup, Button, CircularProgress } from "@mui/material";
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
  const [isLoading, setIsLoading] = React.useState(true);

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

      console.log(data);
      if (!error) setImages(data);
      setIsLoading(false);
    };
    getGallery();
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.imageWrapper}>
        <Image
          src={"/Logo/JennyLake.png"}
          alt={"Jenny Lake"}
          width={1008}
          height={500}
          className={styles.hero}
          priority
        ></Image>
        <span className={styles.overlayText}>Gallery</span>
      </div>
      <div className={styles.buttons}>
        <ButtonGroup
          size="large"
          variant="contained"
          aria-label="Basic button group"
          sx={{ border: "solid 1px var(--BLUE)" }}
        >
          <Button
            className={styles.button}
            sx={{ backgroundColor: "var(--SUBTLE-BLUE)", color: "var(--BLUE)" }}
          >
            All
          </Button>
          <Button
            className={styles.button}
            sx={{ backgroundColor: "var(--SUBTLE-BLUE)", color: "var(--BLUE)" }}
          >
            Nature
          </Button>
          <Button
            className={styles.button}
            sx={{ backgroundColor: "var(--SUBTLE-BLUE)", color: "var(--BLUE)" }}
          >
            Friends
          </Button>
        </ButtonGroup>
        <Button
          size="large"
          className={styles.button}
          sx={{
            border: "solid 1px var(--BLUE)",
            backgroundColor: "var(--SUBTLE-BLUE)",
            color: "var(--BLUE)",
          }}
        >
          Add
        </Button>
      </div>
      <div className={styles.row}></div>
      <div className={styles.images}>
        {isLoading ? (
          <CircularProgress size="5rem" sx={{ color: "var(--BLUE)" }} />
        ) : (
          images.map((img, idx) =>
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
          )
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
