import { createMemo } from "@/actions";
import SubmitButton from "@/components/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import paths from "@/paths";
import { Undo2 } from "lucide-react";
import Link from "next/link";

function NewNote() {
  return (
    <Card>
      <form action={createMemo}>
        <CardHeader>
          <CardTitle>
            New{" "}
            <span className="underline underline-offset-2 decoration-primary font-bold">
              Memo
            </span>
          </CardTitle>

          <CardDescription>Write down a piece of your life</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label>Title</Label>

            <Input
              required
              type="text"
              name="title"
              placeholder="Title of your new Memo"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Content</Label>

            <Textarea
              name="description"
              placeholder="What will this Memo contain?"
              required
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between font-medium text-sm items-center">
          <Link href={paths.life()} className="flex items-center">
            <Undo2 size={15} className="mr-2 text-primary" />
            Back to Life
          </Link>

          <SubmitButton>Create Memo</SubmitButton>
        </CardFooter>
      </form>
    </Card>
  );
}

export default NewNote;
