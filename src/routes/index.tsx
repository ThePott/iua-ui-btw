import LandingPage from "@/pages/index/page/LandingPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
    component: LandingPage,
})
