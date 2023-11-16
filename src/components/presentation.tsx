"use client"

import { Icons } from "./ui/icons"

export function AIPresentation() {
  return (
    <div className="bg-muted relative mb-20 hidden h-full flex-col p-20 text-zinc-900 lg:flex">
      <div className="bg-background absolute inset-0" />
      <div className="relative flex h-full flex-col items-center justify-center gap-20 text-lg font-medium">
       <Icons.logo className="h-10 w-10"  />
        <blockquote className="space-y-2">
          <p className="text-lg">
            Conheça a IA que vai lhe ajudar em sua empresa!
          </p>
          <footer className="text-sm">João Guimarães</footer>
        </blockquote>
      </div>
    </div>
  )
}
