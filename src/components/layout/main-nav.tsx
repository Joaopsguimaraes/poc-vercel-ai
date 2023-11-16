"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/util/config"

import { cn } from "@/lib/utils"

import { Icons } from "../ui/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/image-ai"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname === "/image-ai" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Crie imagem
        </Link>
        <Link
          href="/copywriter"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/copywriter")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Gerar copywriter
        </Link>
        <Link
          href="/branding"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/branding")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Branding
        </Link>
        <Link
          href={siteConfig.links.github}
          className={cn(
            "text-foreground/60 hover:text-foreground/80 hidden transition-colors lg:block"
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  )
}
