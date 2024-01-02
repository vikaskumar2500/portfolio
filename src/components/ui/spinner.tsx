import { cn } from "@/lib/utils";

interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <svg
      className={cn(
        "border-[4px] rounded-full border-slate-100/30 border-t-white border-r-white",
        className
      )}
    />
  );
};
