import React, { useState, useEffect, useRef } from 'react';
import { Chat } from '@google/genai';
import { createBriefingChat, sendBriefingMessage } from '../services/geminiService';
import { ChatMessage } from '../types';
import { HudButton } from './ui/HudButton';

interface TacticalBriefingProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TacticalBriefing: React.FC<TacticalBriefingProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: 'TacOps-AI Online. Identity Verified. Ready for briefing. Awaiting queries regarding simulation capabilities.',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatInstance, setChatInstance] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatInstance) {
      // Initialize chat only when opened and not already exists
      try {
        const chat = createBriefingChat();
        setChatInstance(chat);
      } catch (e) {
        console.error("Failed to init AI", e);
        setMessages(prev => [...prev, {
          id: 'error',
          role: 'model',
          text: 'SYSTEM ERROR: Unable to establish link with AI Core (Check API Key).',
          timestamp: Date.now()
        }]);
      }
    }
  }, [isOpen, chatInstance]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !chatInstance || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendBriefingMessage(chatInstance, userMsg.text);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      }]);
    } catch (error) {
       console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-black border border-[#3B82F6] shadow-[0_0_50px_rgba(59,130,246,0.2)] flex flex-col h-[600px] relative overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#3B82F6]/30 bg-[#3B82F6]/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#3B82F6] rounded-full animate-pulse"></div>
            <h2 className="font-mono text-[#3B82F6] text-lg font-bold tracking-wider">SECURE_CHANNEL // TACOPS-AI</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-[#3B82F6] hover:text-white font-mono text-xl"
          >
            [X]
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm relative">
           {/* Background Grid */}
           <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 border ${
                  msg.role === 'user' 
                    ? 'border-gray-500 bg-gray-900/80 text-gray-200' 
                    : 'border-[#3B82F6]/50 bg-[#3B82F6]/10 text-[#3B82F6]'
                }`}
              >
                <div className="text-[10px] opacity-50 mb-1 uppercase">
                  {msg.role === 'user' ? 'OPERATOR' : 'AI_CORE'} // {new Date(msg.timestamp).toLocaleTimeString()}
                </div>
                <div>{msg.text}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="p-3 border border-[#3B82F6]/30 bg-[#3B82F6]/5 text-[#3B82F6] font-mono text-xs animate-pulse">
                 PROCESSING_INTEL...
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 border-t border-[#3B82F6]/30 bg-black flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ENTER COMMAND OR QUERY..."
            className="flex-1 bg-[#050505] border border-gray-700 text-[#3B82F6] px-4 py-2 font-mono focus:outline-none focus:border-[#3B82F6] placeholder-gray-700 uppercase"
            autoFocus
          />
          <HudButton type="submit" disabled={isLoading} variant="primary" className="px-6 py-2 text-sm">
            SEND
          </HudButton>
        </form>
      </div>
    </div>
  );
};