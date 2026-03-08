import { moderateScale } from 'react-native-size-matters'

const fonts = {
    fraunces: {
        semiBold: 'Fraunces-SemiBold',
        bold: 'Fraunces-Bold',
        semiBoldItalic: 'Fraunces-SemiBold-Italic',
        boldItalic: 'Fraunces-Bold-Italic',
    },
    jakarta: {
        regular: 'Jakarta-Regular',
        medium: 'Jakarta-Medium',
        semiBold: 'Jakarta-SemiBold',
        bold: 'Jakarta-Bold',
    },
}

const typography = {
    // headings & display
    displayLarge: {
        fontSize: moderateScale(36),
        fontWeight: 600 as const,
        fontFamily: fonts.fraunces.semiBold,
    },
    displayMedium: {
        fontSize: moderateScale(40),
        fontWeight: 600 as const,
        fontFamily: fonts.fraunces.semiBold
    },
    headlineLarge: {
        fontSize: moderateScale(32),
        fontWeight: 600 as const,
        fontFamily: fonts.fraunces.semiBold
    },
    headlineMedium: {
        fontSize: moderateScale(28),
        fontWeight: 700 as const,
        fontFamily: fonts.fraunces.bold
    },
    headlineSmall: {
        fontSize: moderateScale(24),
        fontWeight: 600 as const,
        fontFamily: fonts.fraunces.semiBold
    },
    titleMedium: {
        fontSize: moderateScale(20),
        fontWeight: 600 as const,
        fontFamily: fonts.fraunces.semiBold
    },
    titleSmall: {
        fontSize: moderateScale(18),
        fontWeight: 600 as const,
        fontFamily: fonts.fraunces.semiBold
    },
    wordmark: {
        fontSize: moderateScale(28),
        fontWeight: 700 as const,
        fontFamily: fonts.fraunces.boldItalic
    },

    // body & UI
    bodyLarge: {
        fontSize: moderateScale(15),
        fontWeight: 500 as const,
        fontFamily: fonts.jakarta.semiBold
    },
    bodyMedium: {
        fontSize: moderateScale(14),
        fontWeight: 400 as const,
        fontFamily: fonts.jakarta.regular
    },
    bodySmall: {
        fontSize: moderateScale(13),
        fontWeight: 500 as const,
        fontFamily: fonts.jakarta.semiBold
    },
    labelLarge: {
        fontSize: moderateScale(11),
        fontWeight: 600 as const,
        letterSpacing: 1.5,
        fontFamily: fonts.jakarta.semiBold
    },
    labelSmall: {
        fontSize: moderateScale(10),
        fontWeight: 600 as const,
        fontFamily: fonts.jakarta.medium
    },
    caption: {
        fontSize: moderateScale(13),
        fontWeight: 700 as const,
        fontFamily: fonts.jakarta.bold
    },
    avatar: {
        fontSize: moderateScale(16),
        fontWeight: 600 as const,
        fontFamily: fonts.jakarta.semiBold
    }
} as const

export default typography