/// <reference lib="dom" />
import { expect, test } from "bun:test"

import { render, screen } from "@testing-library/react"

import RoundBox from "@/components/layouts/RoundBox"
test("RoundBox renders children", () => {
    render(<RoundBox data-testid="box">Hello</RoundBox>)
    expect(screen.getByTestId("box").textContent).toBe("Hello")
})
