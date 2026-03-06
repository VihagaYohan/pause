import palette from "./colors";

const theme = {
    lightTheme: {
        // Primary
        primary: palette.primary40,             // #4A4580
        onPrimary: palette.primary100,          // #FFFFFF
        primaryContainer: palette.primary70,    // #C4B7E8
        onPrimaryContainer: palette.primary20,  // #1A1A2E

        // Secondary
        secondary: palette.primary50,           // #6B6880
        onSecondary: palette.primary100,        // #FFFFFF
        secondaryContainer: palette.primary96,  // #F0EEF8
        onSecondaryContainer: palette.primary20,// #1A1A2E

        // Tertiary
        tertiary: palette.tertiary40,           // #C9A84C
        onTertiary: palette.primary100,         // #FFFFFF

        // Error
        error: palette.error40,                 // #E1376B
        onError: palette.primary100,            // #FFFFFF

        // Background
        background: palette.primary99,          // #FAF9F6
        onBackground: palette.primary20,        // #1A1A2E

        // Surface
        surface: palette.primary99,             // #FAF9F6
        onSurface: palette.primary20,           // #1A1A2E
        onSurfaceVariant: palette.primary50,    // #6B6880
        surfaceContainerLowest: palette.primary100, // #FFFFFF
        surfaceContainerLow: palette.primary96, // #F0EEF8
        surfaceContainer: palette.primary96,    // #F0EEF8
        surfaceContainerHigh: palette.primary92,// #E8E4F4
        surfaceContainerHighest: palette.primary90, // #E0DCF0

        // Outline
        outline: palette.primary90,             // #E0DCF0
        outlineVariant: palette.primary70,      // #C4B7E8

        // Inverse
        inverseSurface: palette.primary20,      // #1A1A2E
        inverseOnSurface: palette.primary95,    // #EAE8F5
        inversePrimary: palette.primary80,      // #D4C9F0

        // Scrim
        scrim: palette.neutralOverlay,          // #00000066
    },
    darkTheme: {
        // Primary
        primary: palette.primary40,             // #4A4580
        onPrimary: palette.primary100,          // #FFFFFF
        primaryContainer: palette.primary80,    // #D4C9F0
        onPrimaryContainer: palette.primary10,  // #12111E

        // Secondary
        secondary: palette.primary60,           // #9B97B2
        onSecondary: palette.primary10,         // #12111E
        secondaryContainer: palette.primary25,  // #1E1C2E
        onSecondaryContainer: palette.primary95,// #EAE8F5

        // Tertiary
        tertiary: palette.tertiary40,           // #C9A84C
        onTertiary: palette.primary10,          // #12111E

        // Error
        error: palette.error40,                 // #E1376B
        onError: palette.primary100,            // #FFFFFF

        // Background
        background: palette.primary10,          // #12111E
        onBackground: palette.primary95,        // #EAE8F5

        // Surface
        surface: palette.primary10,             // #12111E
        onSurface: palette.primary95,           // #EAE8F5
        onSurfaceVariant: palette.primary60,    // #9B97B2
        surfaceContainerLowest: palette.primary10, // #12111E
        surfaceContainerLow: palette.primary25, // #1E1C2E
        surfaceContainer: palette.primary25,    // #1E1C2E
        surfaceContainerHigh: palette.primary30,// #2E2B4A
        surfaceContainerHighest: palette.primary35, // #3D3A5C

        // Outline
        outline: palette.primary30,             // #2E2B4A
        outlineVariant: palette.primary35,      // #3D3A5C

        // Inverse
        inverseSurface: palette.primary95,      // #EAE8F5
        inverseOnSurface: palette.primary20,    // #1A1A2E
        inversePrimary: palette.primary40,      // #4A4580

        // Scrim
        scrim: palette.neutralOverlay,          // #00000066
    }
}

export default theme;