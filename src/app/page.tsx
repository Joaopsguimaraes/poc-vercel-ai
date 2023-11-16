import React from 'react';
import { Chat } from '@/components/chat/chat';

export default function Home() {
  return (
    <div className='mt-5 flex items-center justify-center bg-slate-50'>
      <Chat />
    </div>
  );
}
