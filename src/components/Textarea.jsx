export function Textarea({ label, control, className, ...props }) {
  return (
    <div className={`flex flex-col gap-1  text-neutral-500 ${className}`}>
      <label htmlFor={label}>{label}</label>
      <textarea
        id={label}
        className="mb-2  h-[190px] resize-none rounded-md border border-neutral-500 bg-transparent px-[14px] py-[18.5px] outline-none focus-within:border-2 focus-within:border-sky-500"
        {...props}
        {...control}
      />
    </div>
  );
}
