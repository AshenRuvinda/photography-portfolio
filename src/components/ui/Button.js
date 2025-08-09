import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  type = 'button', 
  disabled = false, 
  onClick, 
  variant = 'primary',
  size = 'md',
  icon: Icon,
  loading = false,
  ripple = true,
  className = '',
  ...props 
}, ref) => {
  
  const baseClasses = `
    relative overflow-hidden font-semibold rounded-xl transition-all duration-300 
    transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed 
    disabled:hover:scale-100 disabled:active:scale-100 group inline-flex items-center justify-center
    focus:outline-none focus:ring-4 focus:ring-opacity-20
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-secondary to-accent text-white 
      hover:shadow-2xl hover:shadow-secondary/25 
      focus:ring-secondary
    `,
    secondary: `
      bg-white text-primary border-2 border-primary 
      hover:bg-primary hover:text-white hover:shadow-xl
      focus:ring-primary
    `,
    outline: `
      bg-transparent text-primary border-2 border-primary 
      hover:bg-primary hover:text-white hover:shadow-lg
      focus:ring-primary
    `,
    ghost: `
      bg-transparent text-gray-600 hover:bg-gray-100 
      hover:text-gray-800 hover:shadow-md
      focus:ring-gray-300
    `,
    danger: `
      bg-gradient-to-r from-red-500 to-red-600 text-white 
      hover:shadow-2xl hover:shadow-red-500/25
      focus:ring-red-500
    `,
    success: `
      bg-gradient-to-r from-green-500 to-green-600 text-white 
      hover:shadow-2xl hover:shadow-green-500/25
      focus:ring-green-500
    `
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-4'
  };

  const handleClick = (e) => {
    if (disabled || loading) return;

    // Ripple effect
    if (ripple) {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const rippleElement = document.createElement('div');
      rippleElement.classList.add('ripple');
      rippleElement.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        pointer-events: none;
        z-index: 10;
      `;

      button.appendChild(rippleElement);
      setTimeout(() => {
        rippleElement.remove();
      }, 600);
    }

    if (onClick) onClick(e);
  };

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  return (
    <>
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        onClick={handleClick}
        className={buttonClasses}
        {...props}
      >
        {/* Background animation overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
          transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        
        {/* Loading spinner */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-xl">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-current opacity-75" />
          </div>
        )}

        {/* Content */}
        <div className={`relative z-20 flex items-center justify-center gap-inherit transition-opacity duration-300 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}>
          {Icon && (
            <Icon className={`flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
              size === 'sm' ? 'w-4 h-4' :
              size === 'md' ? 'w-5 h-5' :
              size === 'lg' ? 'w-6 h-6' :
              'w-7 h-7'
            }`} />
          )}
          <span className="font-inherit">{children}</span>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 blur-xl bg-inherit -z-10 scale-110" />
      </button>

      <style jsx>{`
        @keyframes ripple-animation {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
});

Button.displayName = 'Button';

export default Button;