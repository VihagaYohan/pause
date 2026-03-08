import { DefaultTheme } from '@react-navigation/native';
import { AppTheme } from '../types/navigation';
import palette from "./palette";

const lightTheme: AppTheme = {
    dark: false,
    colors: {
        primary: palette.lightTheme.primary,
        background: palette.lightTheme.background,
        card: palette.lightTheme.surface,
        text: palette.lightTheme.onSurface,
        border: palette.lightTheme.outline,
        notification: palette.lightTheme.error,

        // custom colors
        onPrimary: palette.lightTheme.onPrimary,
        primaryContainer: palette.lightTheme.primaryContainer,
        onPrimaryContainer: palette.lightTheme.onPrimaryContainer,
        secondary: palette.lightTheme.secondary,
        onSecondary: palette.lightTheme.onSecondary,
        secondaryContainer: palette.lightTheme.secondaryContainer,
        onSecondaryContainer: palette.lightTheme.onSecondaryContainer,
        tertiary: palette.lightTheme.tertiary,
        onTertiary: palette.lightTheme.onTertiary,
        error: palette.lightTheme.error,
        onError: palette.lightTheme.onError,
        onBackground: palette.lightTheme.onBackground,
        onSurface: palette.lightTheme.onSurface,
        onSurfaceVariant: palette.lightTheme.onSurfaceVariant,
        surfaceContainerLowest: palette.lightTheme.surfaceContainerLowest,
        surfaceContainerLow: palette.lightTheme.surfaceContainerLow,
        surfaceContainer: palette.lightTheme.surfaceContainer,
        surfaceContainerHigh: palette.lightTheme.surfaceContainerHigh,
        surfaceContainerHighest: palette.lightTheme.surfaceContainerHighest,
        outline: palette.lightTheme.outline,
        outlineVariant: palette.lightTheme.outlineVariant,
        inverseSurface: palette.lightTheme.inverseSurface,
        inverseOnSurface: palette.lightTheme.inverseOnSurface,
        inversePrimary: palette.lightTheme.inversePrimary,
        scrim: palette.lightTheme.scrim,
    },
    fonts: DefaultTheme.fonts
}

const darkTheme: AppTheme = {
    dark: true,
    colors: {
        primary: palette.darkTheme.primary,
        background: palette.darkTheme.background,
        card: palette.darkTheme.surface,
        text: palette.darkTheme.onSurface,
        border: palette.darkTheme.outline,
        notification: palette.darkTheme.error,

        // custom colors
        onPrimary: palette.darkTheme.onPrimary,
        primaryContainer: palette.darkTheme.primaryContainer,
        onPrimaryContainer: palette.darkTheme.onPrimaryContainer,
        secondary: palette.darkTheme.secondary,
        onSecondary: palette.darkTheme.onSecondary,
        secondaryContainer: palette.darkTheme.secondaryContainer,
        onSecondaryContainer: palette.darkTheme.onSecondaryContainer,
        tertiary: palette.darkTheme.tertiary,
        onTertiary: palette.darkTheme.onTertiary,
        error: palette.darkTheme.error,
        onError: palette.darkTheme.onError,
        onBackground: palette.darkTheme.onBackground,
        onSurface: palette.darkTheme.onSurface,
        onSurfaceVariant: palette.darkTheme.onSurfaceVariant,
        surfaceContainerLowest: palette.darkTheme.surfaceContainerLowest,
        surfaceContainerLow: palette.darkTheme.surfaceContainerLow,
        surfaceContainer: palette.darkTheme.surfaceContainer,
        surfaceContainerHigh: palette.darkTheme.surfaceContainerHigh,
        surfaceContainerHighest: palette.darkTheme.surfaceContainerHighest,
        outline: palette.darkTheme.outline,
        outlineVariant: palette.darkTheme.outlineVariant,
        inverseSurface: palette.darkTheme.inverseSurface,
        inverseOnSurface: palette.darkTheme.inverseOnSurface,
        inversePrimary: palette.darkTheme.inversePrimary,
        scrim: palette.darkTheme.scrim,
    },
    fonts: DefaultTheme.fonts
}

export default {
    lightTheme,
    darkTheme
};