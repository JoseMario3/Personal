import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Fab } from "@mui/material";

export default function BackButton() {
  return (
    <Fab
      color="primary"
      size="large"
      sx={{
        position: "absolute",
        top: "2rem",
        left: "4rem",
      }}
      href="/vgt"
    >
      <ArrowBackIcon />
    </Fab>
  );
}
