import { siteConfig } from "@/util/config"

export function SiteFooter() {
  return (
    <footer className="py-2 md:px-1 md:py-0.5">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-12 md:flex-row">
        <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Joao Guimaraes
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
