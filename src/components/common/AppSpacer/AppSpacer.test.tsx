import { render } from '../../../../test/TestProviders/NavigationContainer'

// components
import { AppSpacer } from '../../'

// theme
import { spacing } from '../../../theme'

describe('AppSpacer', () => {
    test('renders correctly', () => {
        const { getByTestId } = render(<AppSpacer testID="app-spacer" />)
        const spacerElement = getByTestId('app-spacer')

        expect(spacerElement).toBeTruthy()
    })

    test('applies height when isVertical is true', () => {
        const { getByTestId } = render(<AppSpacer testID="app-spacer" size="md" isVertical={true} />)
        const spacerElement = getByTestId('app-spacer')

        expect(spacerElement.props.style).toEqual({ height: spacing.md })
    })

    test('applies width when isVertical is false', () => {
        const { getByTestId } = render(<AppSpacer testID="app-spacer" size="md" isVertical={false} />)
        const spacerElement = getByTestId('app-spacer')

        expect(spacerElement.props.style).toEqual({ width: spacing.md })
    })

    test('applies width by default when isVertical is not provided', () => {
        const { getByTestId } = render(<AppSpacer testID="app-spacer" size="md" />)
        const spacerElement = getByTestId('app-spacer')

        expect(spacerElement.props.style).toEqual({ width: spacing.md })
    })

    test('uses md size by default', () => {
        const { getByTestId } = render(<AppSpacer testID="app-spacer" isVertical={true} />)
        const spacerElement = getByTestId('app-spacer')

        expect(spacerElement.props.style).toEqual({ height: spacing.md })
    })

    test.each([
        ['xs', spacing.xs],
        ['sm', spacing.sm],
        ['md', spacing.md],
        ['lg', spacing.lg],
        ['xl', spacing.xl],
        ['xxl', spacing.xxl],
    ] as const)('applies correct height for size "%s"', (size, expectedValue) => {
        const { getByTestId } = render(<AppSpacer testID="app-spacer" size={size} isVertical={true} />)
        const spacerElement = getByTestId('app-spacer')

        expect(spacerElement.props.style).toEqual({ height: expectedValue })
    })

    test.each([
        ['xs', spacing.xs],
        ['sm', spacing.sm],
        ['md', spacing.md],
        ['lg', spacing.lg],
        ['xl', spacing.xl],
        ['xxl', spacing.xxl],
    ] as const)('applies correct width for size "%s"', (size, expectedValue) => {
        const { getByTestId } = render(<AppSpacer testID="app-spacer" size={size} isVertical={false} />)
        const spacerElement = getByTestId('app-spacer')

        expect(spacerElement.props.style).toEqual({ width: expectedValue })
    })
})
