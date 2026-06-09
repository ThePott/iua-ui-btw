import { RoundBox, Vstack } from "@/package/components/layouts"
import { type ReactNode } from "react"
import DropdownContent from "../DropdownContent"

type DropdownMenuProps = {
    children: ReactNode
}
const DropdownMenu = ({ children }: DropdownMenuProps) => {
    return (
        <DropdownContent>
            <RoundBox radius="md" color="bg2" padding="md" isShadowed className="text-iua-sm text-fg-vivid">
                <Vstack gap="none">{children}</Vstack>
            </RoundBox>
        </DropdownContent>
    )
}

export default DropdownMenu
