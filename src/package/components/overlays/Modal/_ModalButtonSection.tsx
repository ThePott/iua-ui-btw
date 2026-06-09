import type { ReactNode } from "react"
import { GridContainer } from "../layouts"

const ModalButtonSection = ({ children }: { children: ReactNode }) => {
    return (
        <GridContainer minColWidth="sm" isAutoFill={false}>
            {children}
        </GridContainer>
    )
}

export default ModalButtonSection
