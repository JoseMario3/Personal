import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Image from "next/image";
import styles from "@/styles/components.module.css";
import { ImageType } from "@/app/gallery/page";
import { DialogContent, DialogContentText } from "@mui/material";

export interface ImageDialogProps {
  open: boolean;
  images: ImageType[];
  onClose: () => void;
  currIdx: number;
  setCurrIdx: (idx: number) => void;
}

export default function ImageDialog({
  open,
  onClose,
  images,
  currIdx,
  setCurrIdx,
}: ImageDialogProps) {
  if (!images || images.length === 0) return null;

  const currImage = images[currIdx];

  const prevImage = () => {
    setCurrIdx((currIdx - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrIdx((currIdx + 1) % images.length);
  };

  const title = currImage.Name;

  const getTitleSize = (text: string) => {
    if (text.length > 40) return "1rem";
    if (text.length > 20) return "1.5rem";
    return "2rem";
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg">
      <DialogTitle
        style={{
          textAlign: "center",
          color: "black",
          fontSize: getTitleSize(title),
          fontWeight: "bolder",
          padding: "0px",
          paddingTop: "10px",
        }}
      >
        {currImage.Name}
      </DialogTitle>
      <DialogContent
        style={{ padding: "10px" }}
        className={styles.dialogImgWrapper}
      >
        <button
          onClick={prevImage}
          className={`${styles.dialogButton} ${styles.l}`}
        >
          ◀
        </button>
        <button
          onClick={nextImage}
          className={`${styles.dialogButton} ${styles.r}`}
        >
          ▶
        </button>
        <Image
          src={currImage.URL}
          alt={currImage.Name}
          width={1000}
          height={1000}
          className={styles.dialogImg}
          priority
        />
      </DialogContent>
      <DialogContentText
        style={{
          textAlign: "center",
          color: "black",
          paddingBottom: "10px",
          margin: "0px",
        }}
      >
        {currImage.Description}
      </DialogContentText>
    </Dialog>
  );
}
