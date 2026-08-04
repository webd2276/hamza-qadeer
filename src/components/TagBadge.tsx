import React from 'react';
import { TagVariant } from '../types';

interface TagBadgeProps {
  children: React.ReactNode;
  variant?: TagVariant;
  className?: string;
  size?: 'sm' | 'md';
}

export const TagBadge: React.FC<TagBadgeProps> = ({
  children,
  variant = 'default-green',
  className = '',
  size = 'md',
}) => {
  const getVariantStyles = (v: TagVariant) => {
    switch (v) {
      case 'progress':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30 hover:border-blue-400/60 shadow-[0_0_10px_rgba(59,130,246,0.15)]';
      case 'review':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30 hover:border-amber-400/60 shadow-[0_0_10px_rgba(245,158,11,0.15)]';
      case 'planning':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30 hover:border-purple-400/60 shadow-[0_0_10px_rgba(168,85,247,0.15)]';
      case 'error':
        return 'bg-red-500/10 text-red-400 border-red-500/30 hover:border-red-400/60 shadow-[0_0_10px_rgba(239,68,68,0.15)]';
      case 'default-green':
      default:
        return 'bg-[#00FF41]/10 text-[#00FF41] border-[#00FF41]/30 hover:border-[#00FF41]/60 shadow-[0_0_10px_rgba(0,255,65,0.15)]';
    }
  };

  const sizeStyles = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs sm:text-sm';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-md border transition-all duration-200 ${getVariantStyles(
        variant
      )} ${sizeStyles} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {children}
    </span>
  );
};
