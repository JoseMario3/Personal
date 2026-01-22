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

  return (
    <Dialog
      className={styles.dialog}
      open={open}
      onClose={onClose}
      maxWidth={false}
      slotProps={{
        paper: {
          sx: {
            width: "80vw",
            height: "80vh",
            maxWidth: "800px",
            maxHeight: "800px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "15px",
            backgroundColor: "var(--BLUE);",
          },
        },
      }}
    >
      <div className={styles.arrowLayer}>
        <button
          className={`${styles.dialogButton} ${styles.l}`}
          onClick={prevImage}
        >
          ◀
        </button>
        <button
          className={`${styles.dialogButton} ${styles.r}`}
          onClick={nextImage}
        >
          ▶
        </button>
      </div>
      <DialogContent
        style={{ flex: "1 1 auto", display: "flex", padding: 0 }}
        className={styles.dialogImgWrapper}
      >
        <Image
          src={currImage.URL}
          alt={currImage.Name}
          width={800}
          height={800}
          className={styles.dialogImg}
          priority
        />
      </DialogContent>
    </Dialog>
  );
}
