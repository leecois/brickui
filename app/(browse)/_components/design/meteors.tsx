import { cn } from "@/utils";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:translate-y-[-50%] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: 3,
            left: Math.floor(Math.random() * 3000 - 1000) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * 5 + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
