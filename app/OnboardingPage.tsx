import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { useRouter } from 'expo-router'

// components
import { AppButton, AppSafeArea } from '@/src/components'

const Onboarding = () => {

    const router = useRouter();

    return (
        <AppSafeArea>
            <Text>Onboarding screen</Text>
            <AppButton
                title="Let's start"
                onPress={() => console.log("hello, world!")}
                isPrimary={true} />

                 {/* NEW BUTTON 👇 */}
            <AppButton
                title="Go to Input Screen"
                onPress={() => router.push("/textinput")}
            />

        </AppSafeArea>
    )

}

const styles = StyleSheet.create({

})

export default Onboarding