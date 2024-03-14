import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import paths from "@/paths";
import { XCircle } from "lucide-react";
import Link from "next/link";

function CancelledPage() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center">
      <Card className="w-[350px]">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <XCircle className="w-12 h-12 rounded-full bg-red-500/30 text-red-500 p-2" />
          </div>

          <div className="mt-3 text-center sm:mt-5 w-full">
            <h3 className="text-lg leading-6 font-medium">
              Payment Cancelled.
            </h3>

            <div className="mt-2 items-center justify-center flex">
              <p className="text-sm text-muted-foreground w-[12rem]">
                You have not been charged anything for this action.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 w-full">
              <Button className="w-full" asChild>
                <Link href={paths.life()}>Back to Life</Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CancelledPage;
