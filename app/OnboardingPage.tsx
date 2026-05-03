import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// components
import { AppButton, AppSafeArea, AppText } from '@/src/components'

// widgets
import Paginator from '@/src/widgets/onboarding/Paginator'
import Logo from '../src/widgets/common/Logo'

// data
import { OnboardingData } from '../src/data/index'
import { Onboarding } from '../src/data/Onboarding'

// theme
import { spacing, typography } from '../src/theme/index'

// hooks
import { useResponsive } from '../src/hooks/index'

const OnboardingPage = () => {
    const insets = useSafeAreaInsets()
    const {screenWidth} = useResponsive()

    const PageWidth = screenWidth
    
    const renderPage = () => {
        return (
            <View>
            <ScrollView
            style={styles.scrollView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}>
                {OnboardingData.map((item: Onboarding, index: number) => {
                    return (
                        <View 
                        key={`onboarding_page_${index}`}
                        style={{
                            width: PageWidth,
                            paddingHorizontal: spacing.md,
                        }}>
                            <AppText
                            style={{...styles.title,...typography.headlineLarge}}>{item.title}</AppText>

                            <AppText style={{...styles.description,...typography.bodyMedium}}>{item.description}</AppText>
                        
                            
                        </View>
                    )
                })}
            </ScrollView>
            </View>
        )
    }

    return (
        <AppSafeArea>
            <Logo />

            <Paginator count={4} activeIndex={0} />

            {renderPage()}
            
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
    scrollView: {
        marginHorizontal: -spacing.md
    },
    title: {
        textAlign: 'center',
        marginTop: spacing.md
    },
    description: {
        textAlign: 'center',
        marginVertical: spacing.md
    }
})

export default OnboardingPage