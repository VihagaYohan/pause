import colors from "./colors";

const palette = {
    lightTheme: {
        // Primary
        primary: colors.primary40,             // #4A4580
        onPrimary: colors.primary100,          // #FFFFFF
        primaryContainer: colors.primary70,    // #C4B7E8
        onPrimaryContainer: colors.primary20,  // #1A1A2E

        // Secondary
        secondary: colors.primary50,           // #6B6880
        onSecondary: colors.primary100,        // #FFFFFF
        secondaryContainer: colors.primary96,  // #F0EEF8
        onSecondaryContainer: colors.primary20,// #1A1A2E

        // Tertiary
        tertiary: colors.tertiary40,           // #C9A84C
        onTertiary: colors.primary100,         // #FFFFFF

        // Error
        error: colors.error40,                 // #E1376B
        onError: colors.primary100,            // #FFFFFF

        // Background
        background: colors.primary99,          // #FAF9F6
        onBackground: colors.primary20,        // #1A1A2E

        // Surface
        surface: colors.primary99,             // #FAF9F6
        onSurface: colors.primary20,           // #1A1A2E
        onSurfaceVariant: colors.primary50,    // #6B6880
        surfaceContainerLowest: colors.primary100, // #FFFFFF
        surfaceContainerLow: colors.primary96, // #F0EEF8
        surfaceContainer: colors.primary96,    // #F0EEF8
        surfaceContainerHigh: colors.primary92,// #E8E4F4
        surfaceContainerHighest: colors.primary90, // #E0DCF0

        // Outline
        outline: colors.primary90,             // #E0DCF0
        outlineVariant: colors.primary70,      // #C4B7E8

        // Inverse
        inverseSurface: colors.primary20,      // #1A1A2E
        inverseOnSurface: colors.primary95,    // #EAE8F5
        inversePrimary: colors.primary80,      // #D4C9F0

        // Scrim
        scrim: colors.neutralOverlay,          // #00000066
    },
    darkTheme: {
        // Primary
        primary: colors.primary40,             // #4A4580
        onPrimary: colors.primary100,          // #FFFFFF
        primaryContainer: colors.primary80,    // #D4C9F0
        onPrimaryContainer: colors.primary10,  // #12111E

        // Secondary
        secondary: colors.primary60,           // #9B97B2
        onSecondary: colors.primary10,         // #12111E
        secondaryContainer: colors.primary25,  // #1E1C2E
        onSecondaryContainer: colors.primary95,// #EAE8F5

        // Tertiary
        tertiary: colors.tertiary40,           // #C9A84C
        onTertiary: colors.primary10,          // #12111E

        // Error
        error: colors.error40,                 // #E1376B
        onError: colors.primary100,            // #FFFFFF

        // Background
        background: colors.primary10,          // #12111E
        onBackground: colors.primary95,        // #EAE8F5

        // Surface
        surface: colors.primary10,             // #12111E
        onSurface: colors.primary95,           // #EAE8F5
        onSurfaceVariant: colors.primary60,    // #9B97B2
        surfaceContainerLowest: colors.primary10, // #12111E
        surfaceContainerLow: colors.primary25, // #1E1C2E
        surfaceContainer: colors.primary25,    // #1E1C2E
        surfaceContainerHigh: colors.primary30,// #2E2B4A
        surfaceContainerHighest: colors.primary35, // #3D3A5C

        // Outline
        outline: colors.primary30,             // #2E2B4A
        outlineVariant: colors.primary35,      // #3D3A5C

        // Inverse
        inverseSurface: colors.primary95,      // #EAE8F5
        inverseOnSurface: colors.primary20,    // #1A1A2E
        inversePrimary: colors.primary40,      // #4A4580

        // Scrim
        scrim: colors.neutralOverlay,          // #00000066
    }
}

export default palette;