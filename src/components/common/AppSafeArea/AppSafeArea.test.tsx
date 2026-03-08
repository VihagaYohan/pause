import { render } from '@testing-library/react-native';
import { View } from 'react-native';

// components
import { AppSafeArea } from '../..';

describe("AppSafeArea", () => {
    test("renders children correctly", () => {
        const { getByTestId } = render(<AppSafeArea testID='safe-area'><View /></AppSafeArea>)
        const safeAreaElement = getByTestId('safe-area')

        expect(safeAreaElement).toBeTruthy()
    })
})
