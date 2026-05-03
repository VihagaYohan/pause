import React from 'react'
import { StyleSheet, View } from 'react-native'

// components
import { AppText } from '../../components'

// theme
import { colors, spacing } from '../../theme'

const Logo = () => {

    return (
        <View style={styles.container}>
            <AppText variant='wordmark' style={styles.textStyle}>Pause</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: spacing.xxl
    },
    textStyle: {
        color: colors.primary40
    }
})

export default Logo