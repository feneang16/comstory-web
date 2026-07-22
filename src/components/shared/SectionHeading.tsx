import React from 'react';
import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('space-y-3', centered && 'text-center max-w-3xl mx-auto', className)}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-[#EA9512] text-xs font-mono tracking-wide">
          <Zap className="w-3.5 h-3.5 text-[#EA9512]" />
          {badge}
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
        {title}
      </h2>
      
      {description && (
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}