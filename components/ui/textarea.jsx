import * as React from "react"

import { cn } from '../../lib/utils'

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-white bg-white focus:border-[#ea0f0a] px-6 py-4 text-base text-black placeholder:text-[#666666] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
        className
      )}
      {...props} />
  );
}

export { Textarea }
