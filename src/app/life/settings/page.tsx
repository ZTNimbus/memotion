import { findUser, updateUser } from "@/actions";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function SettingsPage() {
  const { getUser } = getKindeServerSession();

  const authData = await getUser();

  const userData = await findUser(authData?.id as string);

  return (
    <div className="grid items-start gap-5">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-4">
          <h1 className="text-3xl md:text-4xl">Settings</h1>
          <p className="text-md text-muted-foreground">Profile Settings</p>
        </div>
      </div>

      <Card>
        <form action={updateUser}>
          <CardHeader>
            <CardTitle>General Data</CardTitle>

            <CardDescription>
              General information about yourself.{" "}
              <span className="font-extrabold">Changes require saving.</span>
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-5">
            <div className="space-y-">
              <div className="space-y-1">
                <Label>Your Name</Label>

                <Input
                  name="name"
                  type="text"
                  id="name"
                  defaultValue={userData?.name ?? undefined}
                  placeholder={userData?.name ?? undefined}
                />
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-1">
                <Label>Your Email</Label>

                <Input
                  name="email"
                  type="email"
                  id="email"
                  placeholder={userData?.email}
                  disabled
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label>Color Themes</Label>
              <Select name="color" defaultValue={userData?.colorScheme}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a color theme" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Color Themes</SelectLabel>
                    <SelectItem value="theme-violet">Violet</SelectItem>
                    <SelectItem value="theme-rose">Rose</SelectItem>
                    <SelectItem value="theme-red">Red</SelectItem>
                    <SelectItem value="theme-green">Green</SelectItem>
                    <SelectItem value="theme-blue">Blue</SelectItem>
                    <SelectItem value="theme-yellow">Yellow</SelectItem>
                    <SelectItem value="theme-orange">Orange</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end items-center">
            <SubmitButton>Save Changes</SubmitButton>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default SettingsPage;
