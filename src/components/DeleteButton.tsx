"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

function DeleteButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <Button variant="destructive" size="icon" type="submit" disabled={pending}>
      {pending && <Loader2 className="w-4 h-4 animate-spin" />}
      {!pending && children}
    </Button>
  );
}

export default DeleteButton;
