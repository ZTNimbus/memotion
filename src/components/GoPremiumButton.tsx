"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { ReactNode } from "react";
import { Loader2 } from "lucide-react";

function GoPremiumutton({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending && (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      )}
      {!pending && children}
    </Button>
  );
}

export default GoPremiumutton;
