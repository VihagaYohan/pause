import { Fonts } from '@react-navigation/native';

export type AppTheme = {
    dark: boolean;
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
        // custom colors
        onPrimary: string;
        primaryContainer: string;
        onPrimaryContainer: string;
        secondary: string;
        onSecondary: string;
        secondaryContainer: string;
        onSecondaryContainer: string;
        tertiary: string;
        onTertiary: string;
        error: string;
        onError: string;
        onBackground: string;
        onSurface: string;
        onSurfaceVariant: string;
        surfaceContainerLowest: string;
        surfaceContainerLow: string;
        surfaceContainer: string;
        surfaceContainerHigh: string;
        surfaceContainerHighest: string;
        outline: string;
        outlineVariant: string;
        inverseSurface: string;
        inverseOnSurface: string;
        inversePrimary: string;
        scrim: string;
    };
    fonts: Fonts;
}

declare module '@react-navigation/native' {
    function useTheme(): AppTheme;
}

export default AppTheme;