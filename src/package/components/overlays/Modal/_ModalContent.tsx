import type { SmToLg } from "@/shared/types"
import type { ReactNode } from "react"
import { Container, Vstack } from "../layouts"
import RoundBox from "../RoundBox"

export type ModalContentProps = {
    width?: SmToLg
    children: ReactNode
}

const ModalContent = ({ width, children }: ModalContentProps) => {
    return (
        <Container width={width} onClick={(event) => event.stopPropagation()}>
            <RoundBox color="bg0" padding="xl" radius="lg" isShadowed>
                <Vstack gap="lg">{children}</Vstack>
            </RoundBox>
        </Container>
    )
}

export default ModalContent
