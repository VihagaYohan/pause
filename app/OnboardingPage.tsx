import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

// components
import { AppButton, AppSafeArea, AppText } from '@/src/components'

// widgets
import Logo from '../src/widgets/common/Logo'
import { PageOne, PageTwo, Paginator } from '../src/widgets/onboarding/index'

// data
import { OnboardingData } from '../src/data/index'
import { Onboarding } from '../src/data/Onboarding'

// theme
import { spacing, typography } from '../src/theme/index'

// hooks
import { useResponsive } from '../src/hooks/index'

const OnboardingPage = () => {
    const { screenWidth } = useResponsive()
    const [pageIndex, setPageIndex] = useState<number>(0)

    const PageWidth = screenWidth

    const renderPage = () => {
        return (
            <View>
                <ScrollView
                    style={styles.scrollView}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onScroll={(event) => {
                        setPageIndex(Math.round(event.nativeEvent.contentOffset.x / PageWidth))
                    }}>
                    {OnboardingData.map((item: Onboarding, index: number) => {
                        return (
                            <View
                                key={`onboarding_page_${index}`}
                                style={{
                                    width: PageWidth,
                                    paddingHorizontal: spacing.md,
                                }}>
                                <AppText
                                    style={{ ...styles.title, ...typography.headlineLarge }}>{item.title}</AppText>

                                <AppText style={{ ...styles.description, ...typography.bodyMedium }}>{item.description}</AppText>

                                <View style={styles.pageItemContainer}>
                                    {index === 0 ? <PageOne /> : index === 1 ? <PageTwo/> : null}
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }

    return (
        <AppSafeArea>
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled">
                <Logo />
                <Paginator count={4} activeIndex={0} />
                {renderPage()}
            </ScrollView>
            <AppButton
                title={pageIndex === 0 ? "Let's start": "Continue"}
                onPress={() => console.log("hello, world!")} />
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
        marginTop: spacing.md,
        marginBottom: spacing.lg * 2,
    },
    pageItemContainer: {
        paddingHorizontal: spacing.md
    }
})

export default OnboardingPage
