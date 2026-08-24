import FadeIn from "./FadeIn";
import { Code, Terminal, Cpu, Info } from "lucide-react";

const snippet = `// core/hooks/useRealtimeSync.ts
export function useRealtimeSync<T>(table: string, id: string) {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<'idle' | 'syncing' | 'error'>('idle');

  useEffect(() => {
    // 1. Initial Fetch
    fetchData();

    // 2. Real-time Subscription with Optimistic Lock
    const channel = supabase
      .channel('schema-db-changes')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: table,
        filter: \`id=eq.\${id}\`
      }, (payload) => {
        // High-performance diffing before update
        if (shouldUpdate(data, payload.new)) {
          setData(payload.new as T);
          triggerMicroInteraction('updated');
        }
      })
      .subscribe();

    return () => { channel.unsubscribe(); };
  }, [id, table]);

  return { data, status };
}`;

export default function CodeShowcase() {
  return (
    <section id="code" className="py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-black/10 dark:border-white/10 overflow-hidden transition-colors duration-500">
      <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
        <div className="lg:col-span-12 mb-4 sm:mb-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-black dark:bg-white text-white dark:text-black">
                <Code size={20} aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-black dark:text-white">Technical Spotlight</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl font-light italic">A glimpse into the architectural patterns I utilize to ensure system scalability and developer experience.</p>
          </FadeIn>
        </div>

        <div className="lg:col-span-7">
          <FadeIn delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-zinc-800 dark:to-zinc-900 opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 blur"></div>
              <div className="relative bg-[#0d1117] rounded-none border border-white/10 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-3 sm:px-6 py-2 border-b border-white/5 bg-[#161b22]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold font-mono">useRealtimeSync.ts</span>
                  <Terminal size={12} className="text-gray-500" aria-hidden="true" />
                </div>
                <div className="p-3 sm:p-6 overflow-x-auto max-h-[350px] sm:max-h-[500px]">
                  <pre className="text-[11px] sm:text-xs font-mono text-gray-300 leading-normal whitespace-pre">
                    <code>{snippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center">
          <FadeIn delay={0.4} direction="left">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4 items-start group">
                <div className="mt-1 p-2 border border-black/10 dark:border-white/10 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                  <Cpu size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-black dark:text-white">Reactive Architecture</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm md:text-xs leading-relaxed">Implementing real-time data flow with Postgres Change Listeners. My approach reduces redundant API calls by up to 60% using local state diffing.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="mt-1 p-2 border border-black/10 dark:border-white/10 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                  <Info size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-black dark:text-white">Type-Safety First</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm md:text-xs leading-relaxed">
                    Leveraging TypeScript Generics to ensure end-to-end type safety between the database schema and frontend components, preventing runtime regression.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-black/5 dark:border-white/5">
                <a
                  href="https://github.com/riss27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-black dark:text-white hover:translate-x-2 transition-transform duration-300"
                >
                  Explore Documentation on GitHub
                  <div className="w-12 h-px bg-black dark:bg-white"></div>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
