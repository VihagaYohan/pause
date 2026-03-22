import { useTheme } from '@react-navigation/native'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

// components

const PageOne = () => {
    const [reason, setReason] = useState<String>("")
    const { colors } = useTheme()

    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PageOne