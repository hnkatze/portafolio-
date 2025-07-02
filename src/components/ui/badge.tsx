import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded border-2 px-3 py-1.5 text-xs font-semibold font-mono transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 shadow-[2px_2px_0px_rgba(0,0,0,0.1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,0.2)] hover:scale-105",
  {
    variants: {
      variant: {
        default:
          "border-gray-400 bg-gray-100 text-gray-800 hover:bg-gray-200 hover:border-gray-600",
        secondary:
          "border-gray-500 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:border-gray-700",
        destructive:
          "border-red-400 bg-red-100 text-red-800 hover:bg-red-200 hover:border-red-600",
        outline: "border-gray-400 bg-transparent text-gray-700 hover:bg-gray-100 hover:border-gray-600",
        accent: "border-gray-600 bg-gray-800 text-gray-100 hover:bg-gray-900 hover:border-gray-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
