import { useTheme } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// types
import { AppTheme } from '../../../types'

// theme
import { spacing } from '../../../theme'

type SafeAreaProps = {
    children: React.ReactNode,
    testID?: string,
    paddingHorizontal?: number
}

const AppSafeArea: React.FC<SafeAreaProps> = ({ children, testID, paddingHorizontal, ...props }: SafeAreaProps) => {
    const { colors } = useTheme()
    return (
        <SafeAreaView
            testID={testID}
            style={styles(colors, paddingHorizontal).container}
            {...props}>
            <View style={{ flex: 1 }}>{children}</View>
        </SafeAreaView>
    )
}

const styles = (colors: AppTheme['colors'], paddingHorizontal: number = spacing.md) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: paddingHorizontal,
    }
})

export default AppSafeArea
