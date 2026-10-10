"use client";

import { useState, useEffect } from "react";
import { LayoutDashboard, Calendar, Columns, List, Clock, CheckCircle2, Circle, MoreHorizontal, ArrowRight, ArrowLeft, Plus, CalendarDays, X, Check, Target, Activity } from "lucide-react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

type ViewMode = 'kanban' | 'calendar' | 'timeline' | 'table';

type TargetTask = {
  id: string;
  title: string;
  status: 'backlog' | 'active' | 'completed';
  priority: 'low' | 'medium' | 'high';
  date: number; // simulated day of month (1-30)
};

export default function TargetsWorkspace() {
  const [isMounted, setIsMounted] = useState(false);
  const [view, setView] = useState<ViewMode>('kanban');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [newTask, setNewTask] = useState({ title: '', priority: 'medium' as TargetTask['priority'], date: 15 });

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const [tasks, setTasks] = useState<TargetTask[]>([
    { id: '1', title: 'Complete Stochastic Calculus Chapter 4', status: 'active', priority: 'high', date: 15 },
    { id: '2', title: 'Implement Black-Scholes in C++', status: 'backlog', priority: 'medium', date: 18 },
    { id: '3', title: 'Review Time Series Analysis', status: 'completed', priority: 'low', date: 10 },
    { id: '4', title: 'Submit Quant Research Paper Draft', status: 'active', priority: 'high', date: 22 },
    { id: '5', title: 'Solve 5 DP LeetCode Problems', status: 'backlog', priority: 'medium', date: 20 },
    { id: '6', title: 'Analyze VIX Historical Data', status: 'backlog', priority: 'low', date: 25 },
  ]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination, draggableId } = result;

    if (source.droppableId !== destination.droppableId) {
      setTasks(prev => prev.map(t => 
        t.id === draggableId ? { ...t, status: destination.droppableId as TargetTask['status'] } : t
      ));
    }
  };

  const moveTask = (id: string, newStatus: TargetTask['status']) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.title.trim()) return;
    
    setTasks(prev => [...prev, {
      id: Date.now().toString(),
      title: newTask.title,
      status: 'backlog',
      priority: newTask.priority,
      date: newTask.date
    }]);
    setIsModalOpen(false);
    setNewTask({ title: '', priority: 'medium', date: 15 });
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
      case 'medium': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'low': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      default: return 'text-zinc-400 bg-zinc-400/10 border-zinc-400/20';
    }
  };

  return (
    <div className="pt-[60px] min-h-screen flex flex-col bg-[#030303] font-sans relative">
      
      {/* ── NEW TARGET MODAL ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded-2xl w-full max-w-md shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-[var(--color-border-1)] bg-[var(--color-bg-2)]">
              <h3 className="text-[13px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-500" /> Create New Target
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleAddTask} className="p-5 flex flex-col gap-4">
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 block mb-1.5">Target Title</label>
                <input 
                  type="text" 
                  autoFocus
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  className="w-full bg-[var(--color-bg-2)] border border-[var(--color-border-2)] rounded-lg px-3 py-2 text-[13px] text-white outline-none focus:border-indigo-500 transition-colors"
                  placeholder="e.g. Backtest Momentum Strategy"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 block mb-1.5">Priority</label>
                  <select 
                    value={newTask.priority}
                    onChange={(e) => setNewTask({...newTask, priority: e.target.value as TargetTask['priority']})}
                    className="w-full bg-[var(--color-bg-2)] border border-[var(--color-border-2)] rounded-lg px-3 py-2 text-[12px] font-medium text-white outline-none focus:border-indigo-500 transition-colors appearance-none"
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 block mb-1.5">Deadline (Day)</label>
                  <input 
                    type="number" 
                    min="1" max="30"
                    value={newTask.date}
                    onChange={(e) => setNewTask({...newTask, date: parseInt(e.target.value)})}
                    className="w-full bg-[var(--color-bg-2)] border border-[var(--color-border-2)] rounded-lg px-3 py-2 text-[13px] text-white outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>
              <button 
                type="submit" 
                disabled={!newTask.title.trim()}
                className="mt-2 w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 disabled:hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-[12px]"
              >
                <Plus className="w-4 h-4" /> Launch Target
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── STANDARD LIBRARY DASHBOARD FILTER BAR ── */}
      <div className="bg-[rgba(5,5,5,0.85)] backdrop-blur-md border-b border-[var(--color-border-1)] sticky top-[60px] z-[90]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10 flex items-center justify-between">
          <div className="flex items-center">
            <div className="font-mono text-[9px] text-[var(--color-text-3)] uppercase tracking-[0.2em] flex items-center gap-2 mr-5 lg:mr-8 border-r border-[var(--color-border-1)] pr-5 lg:pr-8 py-2.5 flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_5px_rgba(99,102,241,0.8)]"></span>
              Mission Control
            </div>
            
            <div className="flex gap-4 lg:gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-center">
              {[
                { id: 'kanban', icon: Columns, label: 'Kanban' },
                { id: 'calendar', icon: Calendar, label: 'Calendar' },
                { id: 'timeline', icon: Clock, label: 'Timeline' },
                { id: 'table', icon: List, label: 'Table' },
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setView(tab.id as ViewMode)}
                  className={`relative py-2.5 flex-shrink-0 font-mono text-[9.5px] lg:text-[10px] tracking-[0.1em] uppercase transition-all duration-300 flex items-center gap-2
                    ${view === tab.id 
                      ? 'text-indigo-400 after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-indigo-500 after:shadow-[0_0_8px_rgba(99,102,241,0.8)]' 
                      : 'text-[var(--color-text-2)] hover:text-[var(--color-text-1)]'}`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 bg-[var(--color-bg-2)] hover:bg-white text-[var(--color-text-2)] hover:text-black border border-[var(--color-border-2)] hover:border-white px-3 py-1 rounded-full text-[9px] uppercase font-mono tracking-widest transition-all"
          >
            <Plus className="w-3.5 h-3.5" /> New Target
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 lg:p-10 max-w-[1440px] mx-auto w-full">
        
        {/* VIEW: KANBAN (Now with Drag & Drop) */}
        {view === 'kanban' && isMounted && (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex gap-6 h-full items-start overflow-x-auto pb-4">
              
              {/* Kanban Column Builder */}
              {[
                { id: 'backlog', title: 'Backlog', icon: Circle, color: 'text-zinc-400' },
                { id: 'active', title: 'Active', icon: Activity, color: 'text-indigo-400', glow: 'bg-indigo-400' },
                { id: 'completed', title: 'Done', icon: CheckCircle2, color: 'text-emerald-400' },
              ].map(col => (
                <div key={col.id} className="flex-1 min-w-[320px] flex flex-col bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded-2xl p-3 lg:p-4 shadow-xl">
                  
                  {/* Column Header */}
                  <div className="flex items-center justify-between mb-4 px-1">
                    <h3 className={`text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 ${col.color}`}>
                      {col.glow ? (
                        <div className={`w-2 h-2 rounded-full ${col.glow} animate-pulse ml-0.5`} />
                      ) : (
                        <col.icon className="w-4 h-4" />
                      )}
                      {col.title}
                    </h3>
                    <span className="text-[10px] font-mono bg-[var(--color-bg-2)] border border-[var(--color-border-2)] text-zinc-400 px-2.5 py-0.5 rounded-full shadow-sm">
                      {tasks.filter(t => t.status === col.id).length}
                    </span>
                  </div>

                  {/* Drop Zone */}
                  <Droppable droppableId={col.id}>
                    {(provided, snapshot) => (
                      <div 
                        ref={provided.innerRef} 
                        {...provided.droppableProps}
                        className={`flex flex-col gap-3 min-h-[150px] transition-colors rounded-xl p-1 -m-1 ${snapshot.isDraggingOver ? 'bg-indigo-500/5' : ''}`}
                      >
                        {tasks.filter(t => t.status === col.id).map((task, index) => (
                          <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`bg-[var(--color-bg-2)] textured-panel border p-4 rounded-xl flex flex-col gap-3 group transition-all duration-200
                                  ${snapshot.isDragging 
                                    ? 'border-indigo-500 shadow-[0_10px_30px_rgba(99,102,241,0.2)] rotate-2 z-50' 
                                    : 'border-[var(--color-border-2)] hover:border-[var(--color-border-1)] hover:shadow-lg'}`}
                                style={provided.draggableProps.style}
                              >
                                <div className="flex items-start justify-between">
                                  <h4 className={`text-[13px] font-medium leading-snug transition-colors ${task.status === 'completed' ? 'text-zinc-500 line-through' : 'text-zinc-200'}`}>
                                    {task.title}
                                  </h4>
                                  <div className="text-zinc-600 hover:text-white transition-colors cursor-grab active:cursor-grabbing">
                                    <MoreHorizontal className="w-4 h-4" />
                                  </div>
                                </div>
                                <div className="flex items-center justify-between mt-auto pt-2">
                                  <span className={`text-[9px] px-2 py-0.5 rounded border uppercase tracking-widest font-bold ${getPriorityColor(task.priority)}`}>
                                    {task.priority}
                                  </span>
                                  <div className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                                    <CalendarDays className="w-3 h-3" /> Day {task.date}
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                  
                  {/* Quick Add Bottom Button */}
                  <button onClick={() => setIsModalOpen(true)} className="mt-4 w-full py-2 border border-dashed border-[var(--color-border-2)] rounded-lg text-[11px] font-bold text-zinc-500 uppercase tracking-widest hover:text-white hover:border-[var(--color-border-1)] transition-colors flex items-center justify-center gap-2">
                    <Plus className="w-3.5 h-3.5" /> Add Task
                  </button>
                </div>
              ))}
            </div>
          </DragDropContext>
        )}

        {/* VIEW: CALENDAR */}
        {view === 'calendar' && (
          <div className="bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-7 border-b border-[var(--color-border-1)] bg-[var(--color-bg-2)] textured-panel">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="py-4 text-center text-[10px] font-bold text-zinc-400 uppercase tracking-widest border-r border-[var(--color-border-2)] last:border-0">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 grid-rows-5 bg-[#030303]">
              {Array.from({ length: 35 }).map((_, i) => {
                const date = i - 2; // Offset for visually pleasing calendar layout
                const isCurrentMonth = date > 0 && date <= 30;
                const isToday = date === 15; // Simulated today
                const dayTasks = isCurrentMonth ? tasks.filter(t => t.date === date) : [];
                
                return (
                  <div key={i} className={`min-h-[140px] p-2 border-r border-b border-[var(--color-border-2)] last:border-r-0 relative group transition-colors
                    ${!isCurrentMonth ? 'bg-[#030303] opacity-20' : 'bg-[var(--color-bg-1)] hover:bg-[var(--color-bg-2)]'}
                  `}>
                    <div className={`text-[11px] font-mono mb-2 w-6 h-6 flex items-center justify-center rounded-full
                      ${isToday ? 'bg-indigo-500 text-white shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                      {isCurrentMonth ? date : ''}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {dayTasks.map(task => (
                        <div key={task.id} className={`text-[9.5px] font-medium truncate px-2 py-1.5 rounded border transition-all hover:scale-[1.02] cursor-pointer shadow-sm
                          ${task.status === 'completed' ? 'opacity-40 line-through' : ''} ${getPriorityColor(task.priority)}`}>
                          {task.title}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW: TIMELINE */}
        {view === 'timeline' && (
          <div className="max-w-[800px] mx-auto py-8">
            <div className="relative ml-6 space-y-10">
              {/* Timeline Track line */}
              <div className="absolute left-[3px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-indigo-500/50 via-emerald-500/50 to-[var(--color-border-2)] rounded-full" />
              
              {[...tasks].sort((a,b) => a.date - b.date).map((task, idx) => (
                <div key={task.id} className="relative pl-10 group">
                  
                  {/* Glowing Node */}
                  <div className={`absolute -left-[2.5px] top-5 w-[14px] h-[14px] rounded-full border-4 border-[#030303] z-10 transition-all duration-300 group-hover:scale-125
                    ${task.status === 'completed' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]' 
                    : task.status === 'active' ? 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]' 
                    : 'bg-zinc-600'}`} 
                  />
                  
                  {/* Premium Timeline Card */}
                  <div className="bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] p-5 rounded-2xl hover:border-zinc-500 transition-all duration-300 shadow-xl group-hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono text-zinc-400 bg-[var(--color-bg-2)] px-2.5 py-1 rounded-md border border-[var(--color-border-2)] flex items-center gap-1.5">
                          <CalendarDays className="w-3.5 h-3.5 text-indigo-400"/> Day {task.date}
                        </span>
                        <span className={`text-[9px] px-2 py-1 rounded-md border uppercase tracking-widest font-bold ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{task.status}</span>
                    </div>
                    <h4 className={`text-[15px] font-medium leading-snug ${task.status === 'completed' ? 'text-zinc-500 line-through' : 'text-zinc-100'}`}>
                      {task.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: TABLE */}
        {view === 'table' && (
          <div className="bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded-2xl overflow-hidden shadow-2xl">
            <div className="px-6 py-4 border-b border-[var(--color-border-1)] flex items-center justify-between bg-[var(--color-bg-2)]">
              <h2 className="text-[12px] font-bold text-zinc-300 uppercase tracking-widest">Active Objectives</h2>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border-2)]">
                  <th className="py-4 px-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Target Name</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Status</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Priority</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-right">Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-2)]">
                {tasks.map(task => (
                  <tr key={task.id} className="hover:bg-[var(--color-bg-2)] transition-colors group cursor-pointer">
                    <td className="py-4 px-6">
                      <div className={`text-[13px] font-medium ${task.status === 'completed' ? 'text-zinc-500 line-through' : 'text-zinc-200 group-hover:text-white transition-colors'}`}>
                        {task.title}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 bg-zinc-800/50 border border-[var(--color-border-2)] px-2 py-1 rounded flex items-center w-fit gap-1.5 shadow-sm">
                        {task.status === 'active' && <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />}
                        {task.status === 'completed' && <Check className="w-3 h-3 text-emerald-400" />}
                        {task.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`text-[9px] px-2 py-1 rounded-md border uppercase tracking-wider font-bold ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right text-[12px] font-mono text-zinc-400 group-hover:text-zinc-300">
                      Day {task.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}
