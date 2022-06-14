import { render, screen, act } from "@testing-library/react";
import axios from "axios";
import GetSection from "./components/GetSection/view"
import PostSection from "./components/PostSection/view"

jest.mock("axios");

const titleText = "Tutorials";
const descriptionText = "All about the tutorials"
const errorText = "error occured";

const mockResponse = {
    data: {
        title: titleText,
        description: descriptionText
    }
}

const mockError = {
    data: null,
    message: errorText
}

test("Test for POST API", async () => {
    await act(async () => {
        await axios.get.mockImplementationOnce(() => Promise.resolve(mockResponse));
        render(<GetSection />)
    });
    const textElemet = await screen.getByDataText(`${/data/i}`);
    expect(textElement).not.toBe(null);
})