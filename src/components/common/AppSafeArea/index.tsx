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
    testID?: string
}

const AppSafeArea: React.FC<SafeAreaProps> = ({ children, testID, ...props }: SafeAreaProps) => {
    const { colors } = useTheme()
    return (
        <SafeAreaView
            testID={testID}
            style={styles(colors).container}
            {...props}>
            <View>{children}</View>
        </SafeAreaView>
    )
}

const styles = (colors: AppTheme['colors']) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.md
    }
})

export default AppSafeArea
