"use client";
import * as React from "react";
import { supabase } from "@/lib/supabase";
import styles from "./index.module.css";
import Image from "next/image";
import { ButtonGroup, Button, CircularProgress } from "@mui/material";
import ImageDialog from "@/components/Dialog";
import AddImageDialog from "@/components/AddImageDialog";

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
  const [openUpload, setOpenUpload] = React.useState(false);
  const [currIdx, setCurrIdx] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [images, setImages] = React.useState<ImageType[]>([]);

  const handleOpen = (type: string, value: number) => {
    if (type == "image") {
      setCurrIdx(value);
      setOpen(true);
    } else {
      setOpenUpload(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setOpenUpload(false);
  };

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
          onClick={() => handleOpen("add", 0)}
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
                onClick={() => handleOpen("image", idx)}
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
      <AddImageDialog open={openUpload} onClose={handleClose} />
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
