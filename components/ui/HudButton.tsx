import React from 'react';

interface HudButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: React.ReactNode;
}

export const HudButton: React.FC<HudButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative font-mono font-bold uppercase tracking-widest px-8 py-3 transition-all duration-200 clip-path-polygon group border hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#3B82F6]/10 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white",
    secondary: "bg-gray-800/50 border-gray-600 text-gray-300 hover:border-[#EF4444] hover:text-[#EF4444]",
    danger: "bg-red-900/20 border-[#EF4444] text-[#EF4444] hover:bg-[#EF4444] hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {/* Corner decorations */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current opacity-50 group-hover:opacity-100" />
      <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-current opacity-50 group-hover:opacity-100" />
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-current opacity-50 group-hover:opacity-100" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current opacity-50 group-hover:opacity-100" />
      
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
};