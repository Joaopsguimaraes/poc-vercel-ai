"use client"

import Link from "next/link"
import { siteConfig } from "@/util/config"
import { useSession } from "next-auth/react"

import { cn } from "@/lib/utils"

import { buttonVariants } from "../ui/button"
import { Icons } from "../ui/icons"
import { MainNav } from "./main-nav"

export function SiteHeader() {
  const { data: session } = useSession()

  return (
    <header className={cn(session ? "bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur" : "hidden")}>
      <div className="container flex h-12 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
