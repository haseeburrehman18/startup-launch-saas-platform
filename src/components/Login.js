import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RiGoogleFill } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";

export function Login() {
  return (
    <div className="flex justify-center  pb-45 h-auto lg:min-h-screen  drop-shadow-2xl">
    <Card className="sm:w-10/12 md:max-w-sm ">
      <CardHeader>
        <CardTitle>
            <div className="text-3xl flex justify-center font-bold">
                Create Your Account
            </div>
        </CardTitle>
        <CardDescription>
            <div className="flex justify-center">
                <p className="text-gray-500 text-[16px]">
                    Start building your startup today
                </p>
            </div>
        </CardDescription>
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="">
        <Button variant="outline" className="w-full">
          <span className="text-red-600"><RiGoogleFill /></span>Continue with Google
        </Button>
        </div>
        <div className=" py-3">
        <Button variant="outline" className="w-full bg-black text-white">
          <span className=""><VscGithub /></span>Continue with Github
        </Button>
        </div>
        {/* <div className="flex justify-center text-gray-500 p-1.5"> */}
            <hr className="text-gray-600 p-2" placeholder="or"/>
        {/* </div> */}
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder=""
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder=""
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full bg-[#3d98a1] rounded-2xl text-md font-bold">
          Create Account
        </Button>
        <div className="flex gap-1">
            <p className="text-gray-500">Already have an account?</p>
            <button className="text-[#2b8f77] font-bold">Sign in</button>
        </div>
      </CardFooter>
    </Card>
    </div>
  )
}