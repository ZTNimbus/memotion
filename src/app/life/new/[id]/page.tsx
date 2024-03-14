import { findMemo, updateMemo } from "@/actions";
import SubmitButton from "@/components/SubmitButton";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import paths from "@/paths";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Undo2 } from "lucide-react";
import Link from "next/link";

async function editMemo({ params }: { params: { id: string } }) {
  const { getUser } = getKindeServerSession();
  const data = await getUser();
  const memo = await findMemo(params.id as string, data?.id as string);

  const updateMemoAction = updateMemo.bind(null, memo?.id as string);

  return (
    <Card>
      <form action={updateMemoAction}>
        <CardHeader>
          <CardTitle>
            Edit{" "}
            <span className="underline underline-offset-2 decoration-primary font-bold">
              Memo
            </span>
          </CardTitle>

          <CardDescription>Rewrite a piece of your life</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label>Title</Label>

            <Input
              required
              type="text"
              name="title"
              defaultValue={memo?.title}
              placeholder="Title of your Memo"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Content</Label>

            <Textarea
              name="description"
              defaultValue={memo?.description}
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

          <SubmitButton>Edit Memo</SubmitButton>
        </CardFooter>
      </form>
    </Card>
  );
}

export default editMemo;
