export function Input({ label, className, type = "text", control, ...props }) {
  return (
    <div className={`flex flex-col gap-1  text-neutral-500 ${className} `}>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        className="mb-2 h-14 rounded-md border border-neutral-500 px-[14px] py-[18.5px] outline-none focus-within:border-2 focus-within:border-sky-500"
        type={type}
        {...props}
        {...control}
      />
    </div>
  );
}
