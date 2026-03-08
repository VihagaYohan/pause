import { useTheme } from '@react-navigation/native'
import React from 'react'
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native'

// types
import { AppTheme } from '../../../types'

// theme
import { typography } from '../../../theme'

type variant = keyof typeof typography
interface AppTextProps extends TextProps {
    children: React.ReactNode,
    variant?: variant,
    style?: StyleProp<TextStyle>
}

const AppText: React.FC<AppTextProps> = ({ children, variant = 'bodyLarge', style, ...props }: AppTextProps) => {
    const { colors } = useTheme()

    return (
        <Text style={[
            typography[variant],
            styles(colors).textStyle,
            style
        ]} {...props}>
            {children}
        </Text>
    )
}

const styles = (colors: AppTheme['colors']) => StyleSheet.create({
    textStyle: {
        color: colors.text,
    }
})

export default AppText;