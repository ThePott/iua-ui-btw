import { gapVariants } from "@/package/shared/styles/styles"
import type { DivProps, None, XsToXl } from "@/package/shared/types"
import clsx from "clsx"
import { tv } from "tailwind-variants/lite"

const hstackVariants = tv({
    base: "flex",
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
