"use client";

import { useState, useRef, useEffect } from "react";
import { Send, User, CheckCircle2, Circle, Target, BarChart2, Paperclip, Copy, RefreshCw, Sparkles, MoreHorizontal, Check, Mic, FolderClosed, MessageSquare, Plus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: string;
  action?: { label: string; href: string };
};

type Task = {
  id: string;
  title: string;
  completed: boolean;
  timeframe: "daily" | "monthly" | "yearly";
};

export default function AssistantWorkspace() {
  const [activeTab, setActiveTab] = useState<"daily" | "monthly" | "yearly">("daily");
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "bot",
      content: "System online. I am your Quant Hub Assistant. How can I help you accelerate your research today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [tasks, setTasks] = useState<Task[]>([
    { id: "t1", title: "Review Ito Calculus", completed: true, timeframe: "daily" },
    { id: "t2", title: "LeetCode DP Hard", completed: false, timeframe: "daily" },
    { id: "t3", title: "Options Pricing Model", completed: false, timeframe: "daily" },
    { id: "t4", title: "10 Research Papers", completed: false, timeframe: "monthly" },
    { id: "t5", title: "Quant Internship", completed: false, timeframe: "yearly" },
  ]);

  const projects = [
    { id: "p1", name: "High-Frequency Data Parser" },
    { id: "p2", name: "Black-Scholes Engine" },
  ];

  const history = [
    { id: "h1", name: "Volatility Surface Math" },
    { id: "h2", name: "C++ Optimization Tips" },
  ];

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userText = inputValue;
    setInputValue("");

    const newMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMsg]);
    setIsTyping(true);

    // Simulated network delay
    await new Promise(r => setTimeout(r, 600));

    const isTask = userText.toLowerCase().includes("add task") || userText.toLowerCase().includes("remind me");
    const isProject = userText.toLowerCase().includes("create project") || userText.toLowerCase().includes("new project");
    
    let fullResponse = "Acknowledged. I've updated your workspace context.";
    let actionLink: Message['action'] = undefined;
    
    if (isTask) {
      fullResponse = "Task successfully extracted and logged to your active targets.";
      actionLink = { label: "View in Targets Dashboard", href: "/targets" };
      const taskTitle = userText.replace(/add task:?/i, "").replace(/remind me:?/i, "").trim() || "New Target";
      setTasks(prev => [...prev, {
        id: Date.now().toString() + "_t",
        title: taskTitle,
        completed: false,
        timeframe: activeTab
      }]);
    } else if (isProject) {
      fullResponse = "Initializing new project environment and repository structures.";
      actionLink = { label: "Open Projects Overview", href: "/projects" };
    } else if (userText.toLowerCase().includes("hello") || userText.toLowerCase().includes("hi")) {
      fullResponse = "Hello! Ready to dive into quantitative models or set new targets?";
    }

    const botMsgId = Date.now().toString() + "_bot";
    setMessages(prev => [...prev, {
      id: botMsgId,
      role: "bot",
      content: "",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      action: actionLink
    }]);

    // Simulated Claude-style typing effect
    let currentText = "";
    for (let i = 0; i < fullResponse.length; i++) {
      await new Promise(r => setTimeout(r, 15));
      currentText += fullResponse[i];
      setMessages(prev => prev.map(m => m.id === botMsgId ? { ...m, content: currentText } : m));
    }
    
    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredTasks = tasks.filter(t => t.timeframe === activeTab);
  const completedCount = filteredTasks.filter(t => t.completed).length;
  const progressPercentage = filteredTasks.length === 0 ? 0 : Math.round((completedCount / filteredTasks.length) * 100);

  return (
    <div className="pt-[60px] h-screen flex flex-col bg-black overflow-hidden font-sans">
      <div className="flex-1 flex w-full mx-auto overflow-hidden">
        
        {/* LEFT PANEL: Projects & Targets */}
        <div className="w-[260px] bg-[var(--color-bg-1)] border-r border-[var(--color-border-1)] flex flex-col flex-shrink-0">
          
          <div className="flex-1 overflow-y-auto scrollbar-thin">
            
            {/* New Chat Button */}
            <div className="p-3">
              <button className="w-full flex items-center justify-between bg-[var(--color-bg-2)] hover:bg-[var(--color-bg-3)] border border-[var(--color-border-2)] text-white px-3 py-2 rounded-lg transition-colors group">
                <span className="text-[13px] font-medium">New Chat</span>
                <Plus className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Projects Section */}
            <div className="px-4 py-3">
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 flex items-center justify-between">
                <Link href="/projects" className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                  Projects <ArrowUpRight className="w-3 h-3" />
                </Link>
                <Plus className="w-3 h-3 cursor-pointer hover:text-white" />
              </div>
              <div className="space-y-0.5">
                {projects.map(p => (
                  <Link key={p.id} href="/projects" className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-[var(--color-bg-2)] cursor-pointer text-zinc-400 hover:text-zinc-200 transition-colors group">
                    <FolderClosed className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-[12px] truncate">{p.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Conversations */}
            <div className="px-4 py-2 border-b border-[var(--color-border-1)] pb-4">
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">History</div>
              <div className="space-y-0.5">
                {history.map(h => (
                  <div key={h.id} className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-[var(--color-bg-2)] cursor-pointer text-zinc-400 hover:text-zinc-200 transition-colors">
                    <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-[12px] truncate">{h.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Targets Section */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center justify-between w-full">
                  <Link href="/targets" className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                    <Target className="w-3 h-3" /> Targets <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-1 bg-[var(--color-bg-2)] p-1 rounded-md border border-[var(--color-border-2)] mb-3">
                {['daily', 'monthly', 'yearly'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`flex-1 py-1 text-[10px] font-semibold uppercase tracking-wider rounded transition-all ${activeTab === tab ? 'bg-[#4f46e5] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="mb-3 px-1">
                <div className="flex justify-between items-end mb-1.5">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase flex items-center gap-1">
                    <BarChart2 className="w-3 h-3" /> Progress
                  </div>
                  <div className="text-[11px] font-mono font-bold text-white">{progressPercentage}%</div>
                </div>
                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#4f46e5] rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-0.5 mt-2">
                {filteredTasks.length === 0 ? (
                  <div className="text-center py-4 text-zinc-600 text-[11px]">No active targets.</div>
                ) : (
                  filteredTasks.map(task => (
                    <div 
                      key={task.id} 
                      onClick={() => toggleTask(task.id)}
                      className="flex items-start gap-2.5 p-2 rounded-md hover:bg-[var(--color-bg-2)] transition-all cursor-pointer group"
                    >
                      <button className="mt-[3px] flex-shrink-0 text-zinc-500 group-hover:text-zinc-400 transition-colors">
                        {task.completed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399]" />
                        ) : (
                          <Circle className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <span className={`text-[12px] leading-snug transition-all ${task.completed ? 'text-zinc-600 line-through' : 'text-zinc-300 group-hover:text-white'}`}>
                        {task.title}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Claude-Level Chat Interface */}
        <div className="flex-1 flex flex-col bg-black relative">
          
          {/* Main Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 lg:p-8 scrollbar-thin">
            <div className="max-w-3xl mx-auto space-y-8 pb-10">
              {messages.map((msg) => (
                <div key={msg.id} className="flex gap-4 group">
                  
                  {/* Fixed Avatar - Removed Orange Box */}
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5 bg-zinc-900 border border-zinc-800">
                    {msg.role === 'bot' ? (
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                    ) : (
                      <User className="w-4 h-4 text-zinc-400" />
                    )}
                  </div>
                  
                  {/* Content block */}
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[13px] text-zinc-100 mb-1">
                      {msg.role === 'bot' ? 'Axiom Assistant' : 'You'}
                    </div>
                    <div className={`text-[15px] leading-relaxed whitespace-pre-wrap ${msg.role === 'bot' ? 'text-zinc-300' : 'text-zinc-400'}`}>
                      {msg.content}
                      {isTyping && msg.id === messages[messages.length - 1].id && msg.role === 'bot' && (
                        <span className="inline-block w-2 h-4 bg-zinc-400 ml-1 animate-pulse align-middle" />
                      )}
                    </div>
                    
                    {/* Interactive Action Link (if generated by Bot) */}
                    {msg.action && (!isTyping || msg.id !== messages[messages.length - 1].id || msg.content.length > 10) && (
                      <div className="mt-4">
                        <Link href={msg.action.href} className="inline-flex items-center gap-2 bg-[var(--color-bg-2)] hover:bg-[var(--color-bg-3)] border border-[var(--color-border-2)] text-white text-[12px] font-medium px-4 py-2 rounded-lg transition-colors shadow-sm">
                          {msg.action.label} <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                        </Link>
                      </div>
                    )}

                    {/* Message Actions */}
                    {msg.role === 'bot' && (
                      <div className="flex gap-1.5 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => copyToClipboard(msg.content, msg.id)}
                          className="p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-[var(--color-bg-2)] rounded transition-colors"
                          title="Copy"
                        >
                          {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                        <button className="p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-[var(--color-bg-2)] rounded transition-colors" title="Regenerate">
                          <RefreshCw className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-[var(--color-bg-2)] rounded transition-colors" title="More">
                          <MoreHorizontal className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                  
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Elongated Compact Input Pill */}
          <div className="p-4 lg:p-6 bg-gradient-to-t from-black via-black/90 to-transparent flex-shrink-0">
            <div className="max-w-3xl mx-auto relative">
              <form 
                onSubmit={handleSend} 
                className="relative bg-[#18181b] border border-zinc-800 rounded-full flex items-center px-2 py-1.5 shadow-xl focus-within:border-zinc-500 focus-within:ring-1 focus-within:ring-zinc-500 transition-all"
              >
                <button type="button" className="p-2 text-zinc-400 hover:text-white rounded-full transition-colors flex-shrink-0" title="Attach file">
                  <Paperclip className="w-5 h-5" />
                </button>
                
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Message Assistant or type 'Create project' or 'Add task'"
                  className="flex-1 bg-transparent px-3 h-[44px] text-[15px] text-white outline-none placeholder:text-zinc-500 font-sans"
                />
                
                <button type="button" className="p-2 text-zinc-400 hover:text-white rounded-full transition-colors flex-shrink-0" title="Voice input">
                  <Mic className="w-5 h-5" />
                </button>
                
                <button 
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 ml-1 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 hover:bg-zinc-200 disabled:opacity-50 disabled:hover:bg-white transition-colors"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
              
              <div className="text-center mt-3 text-[11px] text-zinc-500">
                Assistant can make mistakes. Please verify important targets and metrics.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
