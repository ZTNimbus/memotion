"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { ReactNode } from "react";
import { Loader2 } from "lucide-react";

function SubmitButton({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-fit">
      {pending && (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Saving...
        </>
      )}
      {!pending && children}
    </Button>
  );
}

export default SubmitButton;
