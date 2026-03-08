import React from 'react'
import { StyleSheet, Text } from 'react-native'

// components
import { AppButton, AppSafeArea } from '@/src/components'

const Onboarding = () => {
    return (
        <AppSafeArea>
            <Text>Onboarding screen</Text>
            <AppButton
                title="Let's start"
                onPress={() => console.log("hello, world!")} />
        </AppSafeArea>
    )
}

const styles = StyleSheet.create({

})

export default Onboarding