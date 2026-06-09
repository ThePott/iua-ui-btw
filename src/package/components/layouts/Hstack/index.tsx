import type { DivProps, None, XsToXl } from "@/package/shared/types"
import { gapVariants } from "@/package/shared/utils/styles"
import { cva } from "class-variance-authority"
import clsx from "clsx"

const hstackVariants = cva("flex", {
    variants: {
        gap: gapVariants,
    },
})

interface WithHstackProps {
    gap?: XsToXl | None
}

const Hstack = ({ gap = "md", ...props }: DivProps & WithHstackProps) => {
    const { className, children, ...rest } = props

    return (
        <div {...rest} className={clsx(hstackVariants({ gap }), className)}>
            {children}
        </div>
    )
}

export default Hstack
