import { render, screen } from "@testing-library/react"
import App from "./App"
import PostSection from "./components/PostSection/view"

test("There's React Axios in the page", () => {
    render(< App />)
    const textElement = screen.getAllByText(/React Axios/i);
    expect(textElement).not.toBe(null);
})

test("There's Post Data Button in the page", () => {
    render(< PostSection />)
    const buttonElement = screen.getByTestId("post-data-button")
    expect(buttonElement).not.toBe(null);
})