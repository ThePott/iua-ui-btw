import { gapVariants } from "@/package/shared/styles/styles"
import type { DivProps, None, XsToXl } from "@/package/shared/types"
import clsx from "clsx"
import { tv } from "tailwind-variants/lite"

const vstackVariants = tv({
    base: "flex flex-col",
    variants: {
        gap: gapVariants,
    },
})

interface WithVstackProps {
    gap?: XsToXl | None
}

const Vstack = ({ gap = "md", ...props }: DivProps & WithVstackProps) => {
    const { className, children, ...rest } = props

    return (
        <div {...rest} className={clsx(vstackVariants({ gap }), className)}>
            {children}
        </div>
    )
}

export default Vstack
