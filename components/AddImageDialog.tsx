import Dialog from "@mui/material/Dialog";
import styles from "@/styles/components.module.css";
import type { Session } from "@supabase/supabase-js";
import UploadForm from "./UploadForm";
import Authentication from "./Authentication";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export interface AddImageDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function ImageDialog({ open, onClose }: AddImageDialogProps) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  });

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
            maxWidth: "600px",
            maxHeight: "600px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "15px",
            backgroundColor: "var(--SUBTLE-BLUE);",
          },
        },
      }}
    >
      {session ? <UploadForm /> : <Authentication />}
    </Dialog>
  );
}
