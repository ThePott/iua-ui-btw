import { createFileRoute } from "@tanstack/react-router"

import ButtonPage from "@/pages/button/page"

export const Route = createFileRoute("/button/")({
    component: ButtonPage,
})
