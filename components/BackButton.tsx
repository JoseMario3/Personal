import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Fab } from "@mui/material";

export default function BackButton() {
  return (
    <Fab
      size="large"
      sx={{
        position: "absolute",
        top: "2rem",
        left: "4rem",
        backgroundColor: "var(--BLUE)",
        color: "var(--SUBTLE-BLUE)",
      }}
      href="/vgt"
    >
      <ArrowBackIcon />
    </Fab>
  );
}
