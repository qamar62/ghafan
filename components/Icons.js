export function Icon({ name, className = "h-7 w-7" }) {
  const props = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
  };
  switch (name) {
    case "beam":
      return (
        <svg {...props}>
          <path d="M3 4h18M3 20h18M7 4v16M17 4v16M7 12h10" />
        </svg>
      );
    case "spark":
      return (
        <svg {...props}>
          <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
        </svg>
      );
    case "gate":
      return (
        <svg {...props}>
          <path d="M3 21V7l4-3 4 3v14M13 21V7l4-3 4 3v14M3 21h18M7 11v6M17 11v6" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...props}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 3 3 6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2.3-.7-.7-2.3z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3 5 6v5c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 4v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...props}>
          <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "check":
      return (
        <svg {...props}>
          <path d="m4 12 5 5L20 6" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...props}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "ruler":
      return (
        <svg {...props}>
          <path d="m4 16 12-12 4 4L8 20z" />
          <path d="M9 7l1 1M12 4l1 1M6 10l1 1" />
        </svg>
      );
    case "fire":
      return (
        <svg {...props}>
          <path d="M12 3c1 3-2 4-2 7a2 2 0 0 0 4 0c2 1 3 3 3 5a5 5 0 0 1-10 0c0-4 5-5 5-12z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M.06 24l1.69-6.16a11.87 11.87 0 0 1-1.6-5.95C.16 5.34 5.5 0 12.07 0a11.82 11.82 0 0 1 8.41 3.49 11.82 11.82 0 0 1 3.48 8.41c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.69-1.45L.06 24zm6.6-3.8c1.68.99 3.28 1.58 5.4 1.58 5.45 0 9.9-4.43 9.9-9.88a9.83 9.83 0 0 0-2.9-7 9.78 9.78 0 0 0-6.99-2.9c-5.46 0-9.9 4.44-9.9 9.89 0 2.22.64 3.89 1.74 5.63l-1 3.65 3.75-.97zm11.39-5.55c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42z" />
        </svg>
      );
    default:
      return null;
  }
}
