import { View } from 'react-native';
import { render } from '../../../../test/TestProviders/NavigationContainer';

// components
import { AppSafeArea } from '../..';

describe("AppSafeArea", () => {
    test("renders children correctly", () => {
        const { getByTestId } = render(<AppSafeArea testID='safe-area'><View /></AppSafeArea>)
        const safeAreaElement = getByTestId('safe-area')

        expect(safeAreaElement).toBeTruthy()
    })
})
