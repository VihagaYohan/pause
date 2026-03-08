import { render } from '../../../../test/TestProviders/NavigationContainer';

// components
import { AppText } from '../..';

// theme
import { colors } from '../../../theme';

describe('AppText', () => {
    test("renders children correctly", () => {
        const { getByText } = render(<AppText>Sample</AppText>)
        const textElement = getByText('Sample')

        expect(textElement).toBeTruthy()
    })

    test("applies default variant", () => {
        const { getByTestId } = render(<AppText variant='bodyLarge' testID='app-text'>Sample</AppText>)

        const textElement = getByTestId('app-text')
        expect(textElement).toBeTruthy()
    })

    test('applies custom styles correctly', () => {
        const customStyle = {
            color: colors.primary0,
        }

        const { getByText } = render(<AppText style={customStyle}>Sample</AppText>)
        const textElement = getByText('Sample')

        expect(textElement.props.style).toEqual(expect.arrayContaining([expect.objectContaining(customStyle)]))
    })
})