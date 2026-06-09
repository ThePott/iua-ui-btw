import { motionTransition } from "@/package/shared/utils/framerMotionAnimations"
import clsx from "clsx"
import { motion } from "motion/react"
import { useState, type ReactNode } from "react"
import { Hstack } from "../../layouts"

type ToggleProps = {
    defaultIsOn?: boolean
    onChange: (isOn: boolean) => void
    children?: ReactNode
    isBordered?: boolean
}
const ToggleWrapper = ({ defaultIsOn, onChange, children, isBordered }: ToggleProps) => {
    const [isOn, setIsOn] = useState(defaultIsOn)

    const handleClick = () => {
        onChange(!isOn)
        setIsOn(!isOn)
    }

    return (
        <Hstack
            gap="md"
            className={clsx(
                "cursor-pointer items-center rounded-full select-none",
                isBordered && "border-border-dim border px-4 py-2"
            )}
            onClick={handleClick}
        >
            {children}
            <div>
                <div className={clsx("p-iua-xs bg-fg-muted relative h-3.5 w-8.5 rounded-full")}>
                    <motion.div
                        layoutId="toggle"
                        transition={motionTransition}
                        className={clsx(
                            "absolute top-1/2 size-5 -translate-y-1/2 rounded-full",
                            isOn ? "bg-washed-green right-0" : "bg-fg-vivid left-0"
                        )}
                    />
                </div>
            </div>
        </Hstack>
    )
}

const Toggle = (props: ToggleProps) => {
    const { defaultIsOn } = props
    return <ToggleWrapper key={String(defaultIsOn)} {...props} />
}

export default Toggle
