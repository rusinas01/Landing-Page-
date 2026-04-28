interface InputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  placeholder?: string;
}

interface TextareaProps {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

export function Input({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-text-secondary font-heading">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-lg border border-border bg-bg-surface px-4 py-3 text-text-primary placeholder:text-text-muted transition-all duration-200 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent hover:border-border-hover"
      />
    </div>
  );
}

export function Textarea({
  label,
  name,
  required = false,
  placeholder,
  rows = 4,
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-text-secondary font-heading">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="rounded-lg border border-border bg-bg-surface px-4 py-3 text-text-primary placeholder:text-text-muted transition-all duration-200 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent hover:border-border-hover resize-none"
      />
    </div>
  );
}
