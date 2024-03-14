import { deleteMemo, findMemos } from "@/actions";
import DeleteButton from "@/components/DeleteButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import paths from "@/paths";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Edit, File, Plus, Trash } from "lucide-react";
import Link from "next/link";

async function Life() {
  const { getUser } = getKindeServerSession();
  const data = await getUser();

  const memos = await findMemos(data?.id as string);

  return (
    <div className="grid items-start gap-y-8">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl">Your Memos</h1>

          <p className="text-lg text-muted-foreground">
            All your Memos can be observed here
          </p>
        </div>

        <Button
          asChild
          className="rounded-full w-14 h-14 border border-gray-700 dark:border-gray-400"
        >
          <Link href={paths.newMemo()}>
            <Plus />
          </Link>
        </Button>
      </div>

      {memos.length === 0 && (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <File className="w-10 h-10 text-primary" />
          </div>

          <h2 className="mt-6 text-xl font-semibold">
            Time to note down your life.
          </h2>

          <p className="mb-8 mt-2 text-center text-sm leading-6 text-muted-foreground max-w-sm mx-auto">
            Press the + button above and begin adding new Memos
          </p>
        </div>
      )}

      {memos.length > 0 && (
        <div className="flex flex-col gap-y-4">
          {memos.map((memo) => (
            <Card
              key={memo.id}
              className="flex items-center justify-between p-4"
            >
              <div>
                <h2 className="font-semibold text-xl text-primary">
                  {memo.title}
                </h2>

                <p>
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "full",
                  }).format(new Date(memo.createdAt))}
                </p>
              </div>

              <div className="flex gap-x-4">
                <Link href={paths.editMemo(memo.id)}>
                  <Button variant="outline" size="icon">
                    <Edit className="w-4 h-4" />
                  </Button>
                </Link>

                <form action={deleteMemo.bind(null, memo.id as string)}>
                  <DeleteButton>
                    <Trash />
                  </DeleteButton>
                </form>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default Life;
