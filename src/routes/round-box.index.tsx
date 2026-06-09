import RoundBoxPage from "@/pages/round-box/page"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/round-box/")({
    component: RoundBoxPage,
})
