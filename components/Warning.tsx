import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export interface WarningProps {
  label?: string;
  text: string;
}

export default function Warning({ label = "WARNING", text }: WarningProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "#fdecea",
        border: "2px solid #c62828",
        borderRadius: "10px",
        padding: "16px 20px",
        margin: "10px 0px",
        width: "80%",
        maxWidth: "800px",
        boxSizing: "border-box",
      }}
    >
      <WarningAmberIcon
        sx={{ color: "#c62828", fontSize: "4rem", flexShrink: 0 }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            color: "#c62828",
            fontWeight: 900,
            fontSize: "1.3rem",
            letterSpacing: "0.5px",
          }}
        >
          {label}
        </span>
        <p style={{ color: "#c62828", margin: "2px 0 0 0", fontWeight: 500 }}>
          {text}
        </p>
      </div>
    </div>
  );
}
