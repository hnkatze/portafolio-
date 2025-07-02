import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium font-mono transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 border-2",
  {
    variants: {
      variant: {
        default:
          "bg-gray-100 text-gray-900 border-gray-400 hover:bg-gray-200 hover:border-gray-600 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)] hover:translate-y-[-2px] hover:translate-x-[-2px] active:translate-y-0 active:translate-x-0 active:shadow-[2px_2px_0px_rgba(0,0,0,0.1)]",
        destructive:
          "bg-red-100 text-red-900 border-red-400 hover:bg-red-200 hover:border-red-600 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)] hover:translate-y-[-2px] hover:translate-x-[-2px]",
        outline:
          "bg-transparent text-gray-800 border-gray-400 hover:bg-gray-100 hover:border-gray-600 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)] hover:translate-y-[-2px] hover:translate-x-[-2px]",
        secondary:
          "bg-gray-200 text-gray-800 border-gray-500 hover:bg-gray-300 hover:border-gray-700 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)] hover:translate-y-[-2px] hover:translate-x-[-2px]",
        ghost: "bg-transparent border-transparent text-gray-700 hover:bg-gray-100 hover:border-gray-300 hover:text-gray-900",
        link: "bg-transparent border-transparent text-gray-700 hover:text-gray-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
