"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

function StripePortal() {
  const { pending } = useFormStatus();
  return (
    <>
      <Button disabled={pending} className="w-fit" type="submit">
        {pending && (
          <>
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            Loading...
          </>
        )}

        {!pending && "View Payment Details"}
      </Button>
    </>
  );
}

export default StripePortal;
