import LocalAutoCompletePage from "@/pages/local-auto-complete/page"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/local-auto-complete/")({
    component: LocalAutoCompletePage,
})
