import type { XsToXl } from "@/package/shared/types"
import clsx from "clsx"
import { tv } from "tailwind-variants/lite"

type LoaderProps = {
    size?: XsToXl
    isDark?: boolean
}

// NOTE: 나중에는 font size가 아니라 button size에 맞춰야 할지도 모르겠다
const loaderVariants = tv({
    base: "iua-loader shrink-0",
    variants: {
        size: {
            xs: "size-[12px] border-2",
            sm: "size-[14px] border-2",
            md: "size-[16px] border-2",
            lg: "size-[18px] border-2",
            xl: "size-[24px] border-2",
        },
        isDark: {
            true: "border-fg-inverted-vivid",
            false: "border-fg-vivid",
        },
    },
})

const Loader = ({ size = "md", isDark }: LoaderProps) => {
    return <div className={clsx(loaderVariants({ size, isDark }))} />
}

export default Loader
