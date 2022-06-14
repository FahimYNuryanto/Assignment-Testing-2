import { render, screen } from  "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostSection from "./components/PostSection/view"

test("Making sure that user can type the title", async () => {
    const titleText = "Tutorials";
    render(<PostSection />)
    
    const input = screen.getByTestId("input-title");
    userEvent.type(input, titleText)

    const textElement = await screen.getByText(`Title: ${titleText}`);
    expect(textElement).not.toBe(null);
})

test("Making sure that user can type the description", async () => {
    const descriptionText = "All about the tutorials";
    render(<PostSection />)

    const input = screen.getByTestId("input-description");
    userEvent.type(input, descriptionText)

    const textElement = await screen.getByText(`Description: ${descriptionText}`);
    expect(textElement).not.toBe(null);
})