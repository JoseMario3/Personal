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
  type: string;
};

export default function Gallery() {
  const [open, setOpen] = React.useState(false);
  const [openUpload, setOpenUpload] = React.useState(false);
  const [currIdx, setCurrIdx] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [images, setImages] = React.useState<ImageType[]>([]);
  const [filter, setFilter] = React.useState("All");
  const [totalCount, setTotalCount] = React.useState<number | null>(null);
  const hasMore = totalCount === null || images.length < totalCount;
  const [page, setPage] = React.useState(0);
  const PAGE_SIZE = 20;

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

  const getGallery = React.useCallback(async () => {
    let query = supabase
      .from("Images")
      .select("*", { count: "exact" })
      .eq("Folder", "Gallery");

    if (filter !== "All") {
      query = query.eq("type", filter);
    }

    const { data, error, count } = await query.range(
      page * PAGE_SIZE,
      (page + 1) * PAGE_SIZE - 1,
    );

    if (!error) {
      setImages((prev) => {
        const existingIds = new Set(prev.map((img) => img.id));
        const newImages = data.filter((img) => !existingIds.has(img.id));
        return [...prev, ...newImages];
      });
      if (count !== null) setTotalCount(count);
    }
    setIsLoading(false);
  }, [page, filter]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setImages([]);
    setPage(0);
    setIsLoading(true);
    setTotalCount(null);
  };

  React.useEffect(() => {
    getGallery();
  }, [getGallery]);

  const handleRefresh = () => {
    setImages([]);
    setTotalCount(null);
    if (page === 0) {
      getGallery();
    } else {
      setPage(0);
    }
  };

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
            onClick={() => handleFilterChange("All")}
            className={styles.button}
            sx={{
              backgroundColor:
                filter === "All" ? "var(--BLUE)" : "var(--SUBTLE-BLUE)",
              color: filter === "All" ? "white" : "var(--BLUE)",
            }}
          >
            All
          </Button>
          <Button
            onClick={() => handleFilterChange("Nature")}
            className={styles.button}
            sx={{
              backgroundColor:
                filter === "Nature" ? "var(--BLUE)" : "var(--SUBTLE-BLUE)",
              color: filter === "Nature" ? "white" : "var(--BLUE)",
            }}
          >
            Nature
          </Button>
          <Button
            onClick={() => handleFilterChange("Friends")}
            className={styles.button}
            sx={{
              backgroundColor:
                filter === "Friends" ? "var(--BLUE)" : "var(--SUBTLE-BLUE)",
              color: filter === "Friends" ? "white" : "var(--BLUE)",
            }}
          >
            Friends
          </Button>
          <Button
            onClick={() => handleFilterChange("Misc")}
            className={styles.button}
            sx={{
              backgroundColor:
                filter === "Misc" ? "var(--BLUE)" : "var(--SUBTLE-BLUE)",
              color: filter === "Misc" ? "white" : "var(--BLUE)",
            }}
          >
            Misc
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
                />
              </Button>
            ) : null,
          )
        )}
      </div>
      {isLoading || !hasMore ? (
        ""
      ) : (
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          sx={{ color: "var(--BLUE)", border: "solid 1px var(--BLUE)" }}
        >
          Load More
        </Button>
      )}
      <AddImageDialog
        open={openUpload}
        onClose={handleClose}
        onRefresh={handleRefresh}
      />
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
