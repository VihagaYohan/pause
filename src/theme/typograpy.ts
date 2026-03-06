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
        fontWeight: 600,
    },
    displayMedium: {
        fontSize: moderateScale(40),
        fontWeight: 600
    },
    headlineLarge: {
        fontSize: moderateScale(32),
        fontWeight: 600
    },
    headlineMedium: {
        fontSize: moderateScale(28),
        fontWeight: 700
    },
    headlineSmall: {
        fontSize: moderateScale(24),
        fontWeight: 600
    },
    titleMedium: {
        fontSize: moderateScale(20),
        fontWeight: 600
    },
    titleSmall: {
        fontSize: moderateScale(18),
        fontWeight: 600
    },
    wordmark: {
        fontSize: moderateScale(28),
        fontWeight: 700
    },

    // body & UI
    bodyLarge: {
        fontSize: moderateScale(15),
        fontWeight: 500
    },
    bodyMedium: {
        fontSize: moderateScale(14),
        fontWeight: 400
    },
    bodySmall: {
        fontSize: moderateScale(13),
        fontWeight: 500
    },
    labelLarge: {
        fontSize: moderateScale(11),
        fontWeight: 600,
        letterSpacing: 1.5
    },
    labelSmall: {
        fontSize: moderateScale(10),
        fontWeight: 600,
    },
    caption: {
        fontSize: moderateScale(13),
        fontWeight: 700
    },
    avatar: {
        fontSize: moderateScale(16),
        fontWeight: 600
    }
}

export default typography