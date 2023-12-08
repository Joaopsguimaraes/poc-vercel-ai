"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

import { UserAuthForm } from "./auth-form"

export function SignInComponent() {
  const { data, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (data) {
      router.replace("/chat")
    }
  }, [data, router, status])

  return (
    <div className="lg:p-10">
      <div className="mx-auto flex h-full w-full flex-col justify-center space-y-6 sm:mt-10 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Acesse</h1>
          <p className="text-muted-foreground text-sm">
            Entre com sua conta google
          </p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  )
}
