import { useState } from "react";

export default function useToast() {
  const [toast, setToast] = useState("");
  const flash = (m) => { setToast(m); setTimeout(() => setToast(""), 1800); };
  return { toast, flash };
}
