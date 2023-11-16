import { ComingSoon } from "@/components/ui/coming-soon"

export default function Page() {
  return (
    <div className="container my-20 flex flex-col items-center justify-center">
      <span className="text-center text-2xl">Em breve...</span>
      <ComingSoon />
    </div>
  )
}
