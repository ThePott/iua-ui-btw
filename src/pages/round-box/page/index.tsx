import { Hstack, RoundBox, Vstack } from "@/package/components/layouts"
import { Title } from "@/package/components/texts"
import PageContainer from "@/shared/components/PageContainer"

const RoundBoxPage = () => {
    return (
        <PageContainer>
            <Title as="h1">RoundBox</Title>
            <Vstack>
                <Title as="h2" isMuted>
                    bg
                </Title>
                <Hstack className="flex-wrap">
                    <RoundBox padding="lg" color="bgNeg1">
                        bg-neg-1
                    </RoundBox>
                    <RoundBox padding="lg" color="bg0">
                        bg-0
                    </RoundBox>
                    <RoundBox padding="lg" color="bg1">
                        bg-1
                    </RoundBox>
                    <RoundBox padding="lg" color="bg2">
                        bg-2
                    </RoundBox>
                </Hstack>
            </Vstack>
            <Vstack>
                <Title as="h2" isMuted>
                    colors
                </Title>
                <Hstack className="flex-wrap">
                    <RoundBox padding="lg" color="red" className="text-iua-fg-inverted-vivid">
                        red
                    </RoundBox>
                    <RoundBox padding="lg" color="yellow" className="text-iua-fg-inverted-vivid">
                        yellow
                    </RoundBox>
                    <RoundBox padding="lg" color="blue" className="text-iua-fg-inverted-vivid">
                        blue
                    </RoundBox>
                    <RoundBox padding="lg" color="green" className="text-iua-fg-inverted-vivid">
                        green
                    </RoundBox>
                </Hstack>
            </Vstack>
            <Vstack>
                <Title as="h2" isMuted>
                    borders
                </Title>
                <Hstack className="flex-wrap">
                    <RoundBox padding="lg" color="bg2" isBordered>
                        bordered
                    </RoundBox>
                    <RoundBox padding="lg" color="bg2">
                        not bordered
                    </RoundBox>
                </Hstack>
            </Vstack>
            <Vstack>
                <Title as="h2" isMuted>
                    shadowed
                </Title>
                <Hstack className="flex-wrap">
                    <RoundBox padding="lg" color="bg2" isShadowed radius="sm">
                        shadowed with radius sm
                    </RoundBox>
                    <RoundBox padding="lg" color="bg2" isShadowed radius="md">
                        shadowed with radius md
                    </RoundBox>
                    <RoundBox padding="lg" color="bg2" isShadowed radius="lg">
                        shadowed with radius lg
                    </RoundBox>
                </Hstack>
            </Vstack>
        </PageContainer>
    )
}

export default RoundBoxPage
