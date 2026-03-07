import { renderHook, waitFor } from '@testing-library/react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useWindowDimensions } from 'react-native';
import useResponsive from '.';
import { breakpoints } from '../../theme';

// Mock dependencies
jest.mock('react-native', () => ({
    useWindowDimensions: jest.fn(),
}));

jest.mock('expo-screen-orientation', () => ({
    getOrientationAsync: jest.fn(),
    Orientation: {
        PORTRAIT_UP: 1,
        PORTRAIT_DOWN: 2,
        LANDSCAPE_LEFT: 3,
        LANDSCAPE_RIGHT: 4,
        UNKNOWN: 0,
    },
}));

jest.mock('../../theme', () => ({
    breakpoints: {
        tablet: 768,
    },
}));

describe('useResponsive', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('isTablet', () => {
        it('should return true when width is greater than or equal to tablet breakpoint', () => {
            (useWindowDimensions as jest.Mock).mockReturnValue({ width: 800 });
            (ScreenOrientation.getOrientationAsync as jest.Mock).mockResolvedValue(
                ScreenOrientation.Orientation.PORTRAIT_UP
            );

            const { result } = renderHook(() => useResponsive());

            expect(result.current.isTablet).toBe(true);
        });

        it('should return false when width is less than tablet breakpoint', () => {
            (useWindowDimensions as jest.Mock).mockReturnValue({ width: 400 });
            (ScreenOrientation.getOrientationAsync as jest.Mock).mockResolvedValue(
                ScreenOrientation.Orientation.PORTRAIT_UP
            );

            const { result } = renderHook(() => useResponsive());

            expect(result.current.isTablet).toBe(false);
        });

        it('should return true when width equals tablet breakpoint', () => {
            (useWindowDimensions as jest.Mock).mockReturnValue({
                width: breakpoints.tablet,
            });
            (ScreenOrientation.getOrientationAsync as jest.Mock).mockResolvedValue(
                ScreenOrientation.Orientation.PORTRAIT_UP
            );

            const { result } = renderHook(() => useResponsive());

            expect(result.current.isTablet).toBe(true);
        });
    });

    describe('isLandscape', () => {
        it('should return true when orientation is 3', async () => {
            (useWindowDimensions as jest.Mock).mockReturnValue({ width: 400 });
            (ScreenOrientation.getOrientationAsync as jest.Mock).mockResolvedValue(3);

            const { result } = renderHook(() => useResponsive());

            await waitFor(() => expect(result.current.isLandscape).toBe(true));
        });

        it('should return true when orientation is 4', async () => {
            (useWindowDimensions as jest.Mock).mockReturnValue({ width: 400 });
            (ScreenOrientation.getOrientationAsync as jest.Mock).mockResolvedValue(4);

            const { result } = renderHook(() => useResponsive());

            await waitFor(() => expect(result.current.isLandscape).toBe(true));
        });

        it('should return false when orientation is 1', async () => {
            (useWindowDimensions as jest.Mock).mockReturnValue({ width: 400 });
            (ScreenOrientation.getOrientationAsync as jest.Mock).mockResolvedValue(1);

            const { result } = renderHook(() => useResponsive());

            await waitFor(() => expect(result.current.isLandscape).toBe(false));
        });

        it('should return false when orientation is 0', async () => {
            (useWindowDimensions as jest.Mock).mockReturnValue({ width: 400 });
            (ScreenOrientation.getOrientationAsync as jest.Mock).mockResolvedValue(0);

            const { result } = renderHook(() => useResponsive());

            await waitFor(() => expect(result.current.isLandscape).toBe(false));
        });
    });

    describe('getDeviceOrientation', () => {
        it('should call getOrientationAsync on mount', () => {
            const getOrientationAsyncMock = jest.fn().mockResolvedValue(1);
            (ScreenOrientation.getOrientationAsync as jest.Mock) =
                getOrientationAsyncMock;
            (useWindowDimensions as jest.Mock).mockReturnValue({ width: 400 });

            renderHook(() => useResponsive());

            expect(getOrientationAsyncMock).toHaveBeenCalledTimes(1);
        });
    });

    describe('combined scenarios', () => {
        it('should return tablet true and landscape true', async () => {
            (useWindowDimensions as jest.Mock).mockReturnValue({ width: 1024 });
            (ScreenOrientation.getOrientationAsync as jest.Mock).mockResolvedValue(3);

            const { result } = renderHook(() => useResponsive());

            await waitFor(() => {
                expect(result.current.isTablet).toBe(true);
                expect(result.current.isLandscape).toBe(true);
            });
        });

        it('should return tablet false and landscape false', async () => {
            (useWindowDimensions as jest.Mock).mockReturnValue({ width: 320 });
            (ScreenOrientation.getOrientationAsync as jest.Mock).mockResolvedValue(1);

            const { result } = renderHook(() => useResponsive());

            await waitFor(() => {
                expect(result.current.isTablet).toBe(false);
                expect(result.current.isLandscape).toBe(false);
            });
        });

        it('should return tablet true and landscape false', async () => {
            (useWindowDimensions as jest.Mock).mockReturnValue({ width: 800 });
            (ScreenOrientation.getOrientationAsync as jest.Mock).mockResolvedValue(1);

            const { result } = renderHook(() => useResponsive());

            await waitFor(() => {
                expect(result.current.isTablet).toBe(true);
                expect(result.current.isLandscape).toBe(false);
            });
        });
    });
});