'use client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { useChat } from 'ai/react';
import { ScrollArea } from '../ui/scroll-area';

export function Chat(){
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  });

  return(
    <Card className='w-[500px]'>
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using vercel sdk to create chat bot.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className='h-[500px] w-full space-y-5'>
          {messages.map((message) => {
            return (
              <div key={message.id} className='flex gap-5 my-2 text-slate-600 text-sm'>
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>JG</AvatarFallback>
                    <AvatarImage src='' />
                  </Avatar>
                )}
                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src='https://github.com/Joaopsguimaraes.png' />
                  </Avatar>
                )}
                <p className='leading-relaxed'>
                  <span className='block font-bold text-slate-700'>{message.role === 'user' ? 'Usuário' : 'Joao Guimaraes'}</span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className='items-center gap-2 flex w-full' onSubmit={handleSubmit}>
          <Input 
            placeholder='Como posso lhe ajudar?'
            value={input}
            onChange={handleInputChange}
          />
          <Button type='submit'>Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  );
}