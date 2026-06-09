import { Container, RoundBox, Vstack } from "@/package/components/layouts"
import type { ReactNode } from "react"

type PageContainerProps = {
    children: ReactNode
}

const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <Container isPadded>
            <RoundBox padding="xl" color="bg0" radius="lg" isShadowed>
                <Vstack gap="lg">{children}</Vstack>
            </RoundBox>
        </Container>
    )
}

export default PageContainer
