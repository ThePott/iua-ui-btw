import type { DivProps, None, XsToXl } from "@/package/shared/types"
import { gapVariants } from "@/package/shared/utils/styles"
import { cva } from "class-variance-authority"
import clsx from "clsx"

const vstackVariants = cva("flex flex-col", {
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
