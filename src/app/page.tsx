import { AIPresentation } from "@/components/presentation"
import { SignInComponent } from "@/components/sign-in-component"

export default function Home() {
  return (
    <>
      <div className="container m-auto flex items-center justify-center sm:mt-10 md:mt-20 md:grid lg:mt-32 lg:max-w-none lg:grid-cols-2 lg:px-0">
        <AIPresentation />
        <SignInComponent />
      </div>
    </>
  )
}
