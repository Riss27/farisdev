"use client";

import { useState, useEffect } from "react";
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
  const [state, setState] = useState({
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

export const validateRequest = (schema) => {
  return async (req, res, next) => {
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
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const current = codePatterns[activeTab];

  // Typing animation effect
  useEffect(() => {
    setIsCodeVisible(false);
    const timer = setTimeout(() => {
      setIsCodeVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section id="code" className="section-base overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
        {/* Left Panel - Tabs & Features */}
        <div className="lg:col-span-5 min-w-0">
          <FadeIn animationType="slide" direction="right">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="icon-badge">
                <Code size={18} aria-hidden="true" />
              </div>
              <h2 className="heading-section">Engineering Spotlight</h2>
            </div>
            <p className="text-forest-muted max-w-2xl text-sm sm:text-base leading-relaxed">
              Production patterns applied across my work, emphasizing clean abstractions, strict contracts, and performant architectures.
            </p>
          </FadeIn>

          {/* Pattern Tabs */}
          <FadeIn delay={0.1} animationType="slide" direction="right">
            <div className="flex flex-wrap gap-2 mt-6" role="tablist" aria-label="Code patterns">
              {codePatterns.map((pat, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={pat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${pat.id}`}
                    id={`tab-${pat.id}`}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
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
          </FadeIn>

          {/* Features List */}
          <FadeIn delay={0.2} animationType="slide" direction="right">
            <div className="mt-8 space-y-6 sm:space-y-8" role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`}>
              {current.features.map((feat) => {
                const IconComponent = feat.icon;
                return (
                  <div key={feat.title} className="flex gap-4 items-start group/feature">
                    <div className="icon-badge group-hover/feature:bg-forest group-hover/feature:border-forest group-hover/feature:text-cream mt-0.5">
                      <IconComponent size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-forest">{feat.title}</h3>
                      <p className="text-forest-muted text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}

              <div className="pt-6 border-t border-forest/10 animate-slide-up-fade">
                <a
                  href={current.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-forest hover:text-pink hover:translate-x-1.5 transition-all duration-200 group py-2 -my-2"
                >
                  <span>View {current.project} Repository</span>
                  <div className="w-10 h-px bg-forest group-hover:bg-pink group-hover:w-14 transition-all duration-300" />
                  <ArrowUpRight size={15} className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Panel - Code Display */}
        <div className="lg:col-span-7 min-w-0">
          <FadeIn delay={0.15} animationType="scale" direction="up">
            <div className="code-block">
              <div className="code-block-header">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink shadow-[0_0_8px_rgba(244,63,94,0.6)] animate-pulse" />
                  <span className="text-[11px] sm:text-xs uppercase tracking-widest text-cream/90 font-mono font-medium">{current.fileName}</span>
                  <span className="w-px h-4 bg-forest/30 mx-2" />
                  <span className="text-[10px] text-cream/50 font-mono">{current.label}</span>
                </div>
                <Terminal size={14} className="text-cream/60" aria-hidden="true" />
              </div>
              <div className="code-block-content">
                <pre className="text-[10px] sm:text-xs font-mono text-cream/90 leading-relaxed whitespace-pre">
                  <code className={isCodeVisible ? "animate-text-reveal" : "opacity-0"}>
                    {current.snippet}
                  </code>
                </pre>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}