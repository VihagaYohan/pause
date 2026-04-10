import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AppTextInput from "./AppTextInput"

//  mock useColorScheme (important!)
jest.mock("react-native/Libraries/Utilities/useColorScheme", () => ({
  __esModule: true,
  default: jest.fn(() => "light"),
}));

describe("AppTextInput", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(
      <AppTextInput placeholder="Enter text" />
    );

    expect(getByPlaceholderText("Enter text")).toBeTruthy();
  });

  it("updates text when typing", () => {
    const mockFn = jest.fn();

    const { getByPlaceholderText } = render(
      <AppTextInput
        placeholder="Type here"
        onChangeText={mockFn}
      />
    );

    const input = getByPlaceholderText("Type here");

    fireEvent.changeText(input, "Hello");

    expect(mockFn).toHaveBeenCalledWith("Hello");
  });

  it("applies custom textStyle", () => {
    const { getByPlaceholderText } = render(
      <AppTextInput
        placeholder="Styled input"
        textStyle={{ fontSize: 20 }}
      />
    );

    const input = getByPlaceholderText("Styled input");

    expect(input.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 20 }),
      ])
    );
  });

  it("handles submit editing", () => {
    const mockSubmit = jest.fn();

    const { getByPlaceholderText } = render(
      <AppTextInput
        placeholder="Submit test"
        onSubmitEditing={mockSubmit}
      />
    );

    const input = getByPlaceholderText("Submit test");

    fireEvent(input, "submitEditing");

    expect(mockSubmit).toHaveBeenCalled();
  });
});