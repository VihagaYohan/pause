import React from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// components
import { AppButton, AppSafeArea } from '@/src/components'

// widgets
import Paginator from '@/src/widgets/onboarding/Paginator'
import Logo from '../src/widgets/common/Logo'

const Onboarding = () => {
    const insets = useSafeAreaInsets()


    return (
        <AppSafeArea>
            <Logo />

            <Paginator count={4} activeIndex={0} />



            <AppButton
                title="Let's start"
                onPress={() => console.log("hello, world!")}
                style={{
                    position: 'absolute',
                    bottom: insets.bottom,
                    left: 0,
                    right: 0
                }} />

        </AppSafeArea>
    )
}

const styles = StyleSheet.create({

})

export default Onboarding