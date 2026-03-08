import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type SafeAreaProps = {
    children: React.ReactNode,
    testID?: string
}

const AppSafeArea: React.FC<SafeAreaProps> = ({ children, testID, ...props }: SafeAreaProps) => {
    return (
        <SafeAreaView style={styles.container} testID={testID} {...props}>
            <View>{children}</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default AppSafeArea
