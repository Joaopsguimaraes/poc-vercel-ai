import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ComingSoon } from "@/components/ui/coming-soon"

export default function Page() {
  return (
    <div className="container my-20 flex flex-col items-center justify-center">
      <span className="text-center text-2xl">Em breve...</span>
      <ComingSoon />
      <Button className="mt-5">
        <Link href="/">Voltar</Link>
      </Button>
    </div>
  )
}
