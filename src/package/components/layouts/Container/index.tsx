import type { DivProps } from "@/package/shared/types"
import { wideWidthVariants } from "@/package/shared/utils/styles"
import clsx from "clsx"
import { tv } from "tailwind-variants/lite"

const containerVariants = tv({
    base: "mx-auto",
    variants: {
        width: wideWidthVariants,
        isPadded: {
            true: "p-iua-xl",
            false: "",
        },
    },
})

interface WithContainerProps {
    width?: "sm" | "md" | "lg" | "xl"
    isPadded?: boolean
}

const Container = ({ width = "lg", isPadded = false, ...props }: DivProps & WithContainerProps) => {
    const { className, children, ...rest } = props

    return (
        <div {...rest} className={clsx(containerVariants({ width, isPadded }), className, "p-iua-xl")}>
            {children}
        </div>
    )
}

export default Container
