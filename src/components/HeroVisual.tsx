import { motion, useReducedMotion } from "framer-motion";

const lines = [
  ["const", " ritika", " = {"],
  ["  focus", ": ", "['AI/ML', 'Software']"],
  ["  learning", ": ", "true"],
  ["  building", ": ", "'meaningful tech'"],
  ["  community", ": ", "'GDG · Cloud'"],
  ["};"],
];

export function HeroVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
      <div className="grid-lines absolute inset-0 rounded-[2rem] [mask-image:radial-gradient(circle,black,transparent_70%)]" />
      <motion.div
        className="bg-brand absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        animate={reduce ? {} : { scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="glass absolute left-[6%] top-[18%] w-[82%] rounded-2xl p-5 font-mono text-[13px]"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <div className="mb-4 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        </div>
        {lines.map((l, i) => (
          <motion.div key={i} initial={reduce ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.12 }} className="leading-7">
            <span className="text-violet">{l[0]}</span>
            <span className="text-muted-foreground">{l[1]}</span>
            <span className="text-primary">{l[2]}</span>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="glass absolute bottom-[10%] right-[2%] rounded-xl px-4 py-3"
        animate={reduce ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <p className="font-mono text-[11px] text-muted-foreground">model.train()</p>
        <div className="mt-2 flex h-8 items-end gap-1">
          {[30, 55, 40, 70, 60, 85, 75].map((h, i) => (
            <span key={i} className="bg-brand w-2 rounded-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
      </motion.div>
      <motion.div
        className="glass absolute right-[8%] top-[4%] rounded-full px-3 py-1.5 font-mono text-[11px] text-success"
        animate={reduce ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        ● learning in progress
      </motion.div>
    </div>
  );
}
