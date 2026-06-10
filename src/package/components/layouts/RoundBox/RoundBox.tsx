import { bgVariants, paddingVariants } from "@/package/shared/styles/styles"
import type { Color, DivProps, None, SmToLg, XsToXl } from "@/package/shared/types"
import clsx from "clsx"
import { tv } from "tailwind-variants/lite"

const roundBoxVariants = tv({
    variants: {
        padding: paddingVariants,
        color: bgVariants,
        isBordered: {
            true: "border border-iua-fg-dim",
            false: "",
        },
        radius: {
            none: "rounded-none",
            sm: "rounded-iua-sm",
            md: "rounded-iua-md",
            lg: "rounded-iua-lg",
        },
        isShadowed: {
            true: "",
            false: "",
        },
    },
    compoundVariants: [
        {
            radius: "sm",
            isShadowed: true,
            className: "shadow-iua-sm",
        },
        {
            radius: "md",
            isShadowed: true,
            className: "shadow-iua-md",
        },
        {
            radius: "lg",
            isShadowed: true,
            className: "shadow-iua-lg",
        },
    ],
})

interface RoundBoxProps {
    radius?: SmToLg | None
    padding?: XsToXl | None
    color?: Color
    isBordered?: boolean
    isShadowed?: boolean
}

const RoundBox = ({
    radius = "sm",
    padding,
    color = "transparent",
    isBordered,
    isShadowed,
    ...props
}: Omit<DivProps, "color"> & RoundBoxProps) => {
    const { className, children, ...rest } = props
    return (
        <div
            {...rest}
            className={clsx(roundBoxVariants({ radius, padding, color, isBordered, isShadowed }), className)}
        >
            {children}
        </div>
    )
}

export default RoundBox
