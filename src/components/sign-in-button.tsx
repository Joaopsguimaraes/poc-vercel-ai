"use client"

import { signIn } from "next-auth/react"

import { Button } from "./ui/button"
import { Icons } from "./ui/icons"

export function SignInWithGoogleButton() {
  function signInGoogle() {
    signIn("google", {
      callbackUrl: "/chat",
    })
  }

  return (
    <Button variant="outline" type="button" onClick={signInGoogle}>
      <Icons.google className="mr-2 h-4 w-4" />
      Google
    </Button>
  )
}
