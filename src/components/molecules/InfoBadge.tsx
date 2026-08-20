import type { ReactNode } from "react";

interface InfoBadgeProps {
    label: string;
    tone?: "green" | "slate";
}
  
export function InfoBadge({ label, tone = "green" }: InfoBadgeProps) {
    const styles =
      tone === "green"
        ? "bg-emerald-50 text-emerald-700"
        : "bg-slate-100 text-slate-600";
  
    return (
      <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${styles}`}>
        {label}
      </span>
    );
}




interface DetailFieldProps {
  label: string;
  children: ReactNode;
}

export function DetailField({ label, children }: DetailFieldProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
      <div className="mt-1.5 text-base text-slate-900">{children}</div>
    </div>
  );
}