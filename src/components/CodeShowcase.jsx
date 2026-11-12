"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { Code, Terminal, Layers, Sparkles, ArrowUpRight, ShieldCheck, Database } from "lucide-react";

const codePatterns = [
  {
    id: "hook",
    fileName: "useResponsive.ts",
    label: "Frontend Hook",
    project: "Cosmic Bunny",
    repoUrl: "https://github.com/Riss27/cosmic-bunny",
    features: [
      {
        icon: Layers,
        title: "Responsive Viewport Hook",
        desc: "Zero-dependency viewport observer used in Cosmic Bunny to dynamically adapt complex game grid layouts and drawer navigations.",
      },
      {
        icon: Sparkles,
        title: "Passive Event Performance",
        desc: "Uses passive resize listeners and immediate cleanup to maintain a silky 60fps interaction during browser resizes without layout thrashing.",
      },
    ],
    snippet: `// hooks/useResponsive.ts — Cosmic Bunny Architecture
import { useEffect, useState } from "react";

interface ResponsiveState {
  windowWidth: number;
  isDesiredWidth: boolean;
}

export const useResponsive = (minWidth: number): boolean => {
  const [state, setState] = useState<ResponsiveState>({
    windowWidth: 0,
    isDesiredWidth: false,
  });

  useEffect(() => {
    const updateWidth = () => {
      const current = window.innerWidth;
      setState({ windowWidth: current, isDesiredWidth: current > minWidth });
    };

    updateWidth();
    window.addEventListener("resize", updateWidth, { passive: true });
    return () => window.removeEventListener("resize", updateWidth);
  }, [minWidth]);

  return state.isDesiredWidth;
};`,
  },
  {
    id: "repo",
    fileName: "TaskRepository.kt",
    label: "Android Architecture",
    project: "FE MangTodo",
    repoUrl: "https://github.com/Riss27/FE-MangTodo",
    features: [
      {
        icon: Database,
        title: "Offline-First Single Source of Truth",
        desc: "Coordinates Room database caching with background Retrofit API fetches, ensuring the user interface responds with zero network latency.",
      },
      {
        icon: ShieldCheck,
        title: "Coroutines & Dispatchers",
        desc: "Strictly dispatches IO operations off the main thread with Kotlin Coroutines, eliminating frame drops during task list mutations.",
      },
    ],
    snippet: `// repository/TaskRepository.kt — MangTodo Architecture
package com.faris.mangtodo.data.repository

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.withContext

class TaskRepository(
    private val taskDao: TaskDao,
    private val apiService: TaskApiService
) {
    val allTasks: Flow<List<TaskEntity>> = taskDao.observeAllTasks()

    suspend fun syncTasks() = withContext(Dispatchers.IO) {
        val remoteTasks = apiService.fetchTasks()
        taskDao.insertAll(remoteTasks.map { it.toEntity() })
    }

    suspend fun insertTask(task: TaskEntity) = withContext(Dispatchers.IO) {
        taskDao.insertTask(task)
    }
}`,
  },
  {
    id: "schema",
    fileName: "validateSchema.ts",
    label: "Strict Contract",
    project: "Internship Saptaloka",
    repoUrl: "https://github.com/Riss27/internship-learning",
    features: [
      {
        icon: ShieldCheck,
        title: "Compile-to-Runtime Type Guard",
        desc: "Ensures request payloads are strictly parsed and sanitized before reaching controller business logic, avoiding unhandled database exceptions.",
      },
      {
        icon: Layers,
        title: "Standardized API Error Mapping",
        desc: "Converts validation failures into predictable RFC-compliant JSON responses with exact field path references for client toast feedback.",
      },
    ],
    snippet: `// middleware/validateSchema.ts — Saptaloka Architecture
import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

export const validateRequest = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(422).json({
          status: "fail",
          errors: error.issues.map((i) => ({ path: i.path.join("."), message: i.message })),
        });
      }
      return res.status(500).json({ status: "error", message: "Internal validation failure" });
    }
  };
};`,
  },
];

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const current = codePatterns[activeTab];

  return (
    <section id="code" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-forest/15 overflow-hidden transition-colors duration-500">
      <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
        <div className="lg:col-span-12 mb-4 sm:mb-6 min-w-0">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-forest text-cream">
                <Code size={20} aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter uppercase text-forest">Engineering Spotlight</h2>
            </div>
            <p className="text-forest-muted max-w-2xl font-light text-sm sm:text-base">
              Production patterns applied across my work, emphasizing clean abstractions, strict contracts, and performant architectures.
            </p>
          </FadeIn>

          {/* Pattern Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {codePatterns.map((pat, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={pat.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                    isActive
                      ? "bg-forest text-cream border-forest shadow-[0_4px_14px_rgba(22,46,32,0.18)]"
                      : "bg-forest/[0.03] text-forest/80 border-forest/20 hover:border-forest/50 hover:bg-forest/[0.08]"
                  }`}
                >
                  <span className="font-semibold">{pat.label}</span>
                  <span className="opacity-60 ml-1.5 text-[10px]">({pat.fileName})</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 min-w-0">
          <FadeIn delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-forest/20 to-forest-light/30 opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 blur"></div>
              <div className="relative bg-forest-dark rounded-none border border-forest/30 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 border-b border-forest/30 bg-forest/50">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink shadow-[0_0_8px_rgba(244,63,94,0.6)]"></span>
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-cream/80 font-mono font-medium">{current.fileName}</span>
                  </div>
                  <Terminal size={14} className="text-cream/60" aria-hidden="true" />
                </div>
                <div className="p-3 sm:p-6 overflow-x-auto max-h-[350px] sm:max-h-[500px]">
                  <pre className="text-[10px] sm:text-xs font-mono text-cream/90 leading-normal whitespace-pre">
                    <code>{current.snippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center min-w-0">
          <FadeIn delay={0.4} direction="left">
            <div className="space-y-6 sm:space-y-8">
              {current.features.map((feat, fIdx) => {
                const IconComponent = feat.icon;
                return (
                  <div key={fIdx} className="flex gap-4 items-start group">
                    <div className="mt-1 p-2 border border-forest/15 rounded-lg bg-forest/[0.03] group-hover:bg-forest group-hover:text-cream transition-colors duration-300">
                      <IconComponent size={20} className="text-pink group-hover:text-pink transition-colors" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-forest">{feat.title}</h3>
                      <p className="text-forest-muted text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}

              <div className="pt-6 border-t border-forest/10">
                <a
                  href={current.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-forest hover:text-pink hover:translate-x-1.5 transition-all duration-200 group"
                >
                  <span>View {current.project} Repository</span>
                  <div className="w-10 h-px bg-forest group-hover:bg-pink group-hover:w-14 transition-all duration-300"></div>
                  <ArrowUpRight size={15} className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
