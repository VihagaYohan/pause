import { render } from '../../../../test/TestProviders/NavigationContainer';

// components
import { AppTextInput } from '../..';

describe("AppTextInput", () => {
    test("renders correctly", () => {
        const { getByTestId } = render(
            <AppTextInput
                placeholder='Enter something here'
                testID='app-text-input' />
        )

        const textInputElement = getByTestId('app-text-input')
        expect(textInputElement).toBeTruthy()
    })
})