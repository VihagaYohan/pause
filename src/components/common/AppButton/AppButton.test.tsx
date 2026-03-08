import { fireEvent, render } from "../../../../test/TestProviders/NavigationContainer";
import { AppButton } from "../../index";

describe("AppButton", () => {
    test("renders with correct title", () => {
        const { getByText } = render(
            <AppButton
                title="Test button"
                onPress={() => { }}
            />
        );

        const buttonElement = getByText("Test button");
        expect(buttonElement).toBeTruthy();
    });

    test("calls onPress when pressed", () => {
        const mockOnPress = jest.fn();

        const { getByText } = render(
            <AppButton
                title="Test button"
                onPress={mockOnPress} />
        )
        const buttonElement = getByText("Test button");

        fireEvent.press(buttonElement)
        expect(mockOnPress).toHaveBeenCalled();
    })

    test("check if the style applied if the isPrimary prop is true", () => {
        const { getByTestId } = render(
            <AppButton
                title="Test button"
                onPress={() => { return }}
                isPrimary={true} />
        )

        const buttonElement = getByTestId("app-button");
        const styles = Array.isArray(buttonElement.props.style)
            ? buttonElement.props.style
            : [buttonElement.props.style];
        expect(styles).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    borderWidth: 0,
                    backgroundColor: expect.any(String),
                    borderColor: expect.any(String)
                })
            ])
        )

    })

    test("check for app button disability", () => {
        const mockOnPress = jest.fn();
        const { getByText } = render(
            <AppButton
                title="Test button"
                onPress={mockOnPress}
                disabled={true} />
        )
        const buttonElement = getByText("Test button");
        fireEvent.press(buttonElement)
        expect(mockOnPress).not.toHaveBeenCalled();
    })

    test("applies custom styles correctly", () => {
        const mockOnPress = jest.fn();

        const customStyle = {
            backgroundColor: "red",
            borderWidth: 1,
            borderRadius: 10,
        };

        const { getByTestId } = render(
            <AppButton
                title="Test button"
                onPress={mockOnPress}
                disabled={false}
                style={customStyle}
            />
        );

        const buttonElement = getByTestId("app-button");

        expect(buttonElement.props.style).toEqual(
            expect.arrayContaining([
                expect.objectContaining(customStyle)
            ])
        );
    });
});