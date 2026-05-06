import { Bell, Clock } from 'lucide-react-native'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

// components
import { AppSpacer, AppText } from '@/src/components'

// themes
import { colors, radius, spacing, typography } from '@/src/theme'

// types
import { AppTheme } from '@/src/types'
import { useTheme } from '@react-navigation/native'

const IconSize = 24

type ItemType = {
    title: string,
    description: string,
    icon: React.ReactNode
}

const items: ItemType[] = [
    {
        title: "Usage Access",
        description: "To show you honest screen time stats",
        icon: <Clock size={IconSize} color={colors.primary40}/>
    }, 
    {
        title: "Notification",
        description: "To remind you to reflect each evening",
        icon: <Bell size={IconSize} color={colors.primary40}/>
    }
]

const PageThree = () => {
    const {colors} = useTheme()

    // RENDER UI
    const RenderItem = ({item}: {item: ItemType}) => {
        return (
            <View style={styles(colors).itemContainer}>
                <React.Fragment>
                    {item.icon}
                </React.Fragment>
                <AppSpacer size='md' isVertical={false} />
                <View>
                    <AppText style={{...typography.bodyLarge}}>{item.title}</AppText>
                    <AppSpacer size="sm" isVertical={true}/>
                    <AppText style={{...typography.bodyMedium}}>{item.description}</AppText>
                </View>
            </View>
        )
    }

    return (
        <ScrollView
        bounces={false}>
            {items.map((item: ItemType, index: number) => {
                return (
                    <RenderItem key={`onboarding_page_three_item_${index}`} item={item}/>
                )
            })}
        </ScrollView>
    )
}

const styles = (colors: AppTheme['colors']) => StyleSheet.create({
    itemContainer: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding: spacing.md,
        borderRadius: radius.lg,
        backgroundColor: colors.surfaceContainer,
        marginBottom: spacing.md
    }
})

export default PageThree