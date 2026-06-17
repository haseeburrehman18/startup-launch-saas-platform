"use client"
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

export function Signup() {
  return (
    <div className="flex justify-center p-45 h-auto ">
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>
            <div className="text-3xl flex justify-center font-bold">
                Welcome Back
            </div>
        </CardTitle>
        <CardDescription>
            <div className="flex justify-center">
                <p className="text-gray-500 text-[16px]">
                    Sign in to continue building your startup
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
              <div className="flex justify-between">
              <div className='flex items-center'>
                <input id='checkbox' type="checkbox" className='h-4 w-4' />
                <label htmlFor="checkbox" className="pl-2 text-gray-500 text-xs">Remember me</label>
              </div>
              <div>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-[#20836c]"
                >
                  Forgot your password?
                </a>
                </div>
            </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full bg-[#3d98a1] rounded-2xl text-md font-bold">
          Sign in
        </Button>
        <div className="flex gap-1">
            <p className="text-gray-500">Don't have an account?</p>
            <button className="text-[#2b8f77] font-bold">Sign up</button>
        </div>
      </CardFooter>
    </Card>
    </div>
  )
}