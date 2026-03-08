import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
// theme
import { breakpoints } from '../../theme';

const useResponsive = () => {
    const { width } = useWindowDimensions()
    const [orientation, setOrientation] = useState<number>(1)

    useEffect(() => {
        getDeviceOrientation()
    }, [])

    const getDeviceOrientation = async () => {
        const result: ScreenOrientation.Orientation = await ScreenOrientation.getOrientationAsync()
        setOrientation(result)
    }

    const isTablet = width >= breakpoints.tablet
    const isLandscape = orientation === 3 || orientation === 4

    return {
        isTablet,
        isLandscape
    }
}

export default useResponsive