function Button({ children, type = 'button', disabled = false, onClick }) {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className="bg-primary text-white px-6 py-2 rounded hover:bg-accent disabled:opacity-50"
      >
        {children}
      </button>
    );
  }
  
  export default Button;