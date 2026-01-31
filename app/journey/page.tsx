import Image from "next/image";
import styles from "./index.module.css";
import UploadForm from "@/components/UploadForm";

export default function Home() {
  const open: boolean = true;
  return (
    <div className={styles.page}>
      <UploadForm open={open} />
    </div>
  );
}
