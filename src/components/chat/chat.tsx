"use client"

import React from "react"
import { useChat } from "ai/react"
import { useSession } from "next-auth/react"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Input } from "../ui/input"
import { ScrollArea } from "../ui/scroll-area"

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  })

  const { data: session } = useSession()

  return (
    <Card className="sm:w-[250px] md:w-[600px] lg:w-[800px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Usando a sdk da vercel para criar um chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full space-y-5 sm:h-[400px] md:h-[400px] lg:h-[500px]">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="my-2 flex gap-5 text-sm text-slate-600"
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>US</AvatarFallback>
                    <AvatarImage src={session?.user?.image ?? ""} />
                  </Avatar>
                )}
                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="https://github.com/Joaopsguimaraes.png" />
                  </Avatar>
                )}
                <p className="text-justify leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "user"
                      ? session?.user?.name
                      : "Joao Guimaraes"}
                  </span>
                  {message.content}
                </p>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form
          className="flex w-full items-center gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Como posso lhe ajudar?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
