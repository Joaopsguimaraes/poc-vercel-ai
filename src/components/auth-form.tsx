"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

import { SignInWithGoogleButton } from "./sign-in-button"

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <SignInWithGoogleButton />
    </div>
  )
}
