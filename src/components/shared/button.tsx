import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/helper";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
  "uppercase px-[25px] py-[18px] text-[15px] font-[500] rounded-[8px] duration-200",
  {
    variants: {
      variant: {
        dark: "bg-white text-DARK_GREY active:bg-LIGHT_PEACH active:text-white",
        light: "bg-PEACH text-white active:bg-LIGHT_PEACH active:text-white",
      },
    },
    defaultVariants: {
      variant: "dark",
    },
  },
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        {...props}
      />
    );
  },
);

export { Button, buttonVariants };
