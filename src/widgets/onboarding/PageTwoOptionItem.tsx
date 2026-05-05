import { useEffect } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

// theme
import { radius, spacing, typography } from '@/src/theme/index'

// components
import { AppText } from '@/src/components'

// types
import { AppTheme } from '@/src/types'

interface OptionItemProps {
    item: {id: number, title: string},
    width: number,
    index: number,
    colors: AppTheme['colors'],
    isSelected: boolean,
    onPress: () => void,
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const AnimatedAppText = Animated.createAnimatedComponent(AppText)

const OptionItem: React.FC<OptionItemProps> = ({item, width, index, onPress, colors, isSelected}: OptionItemProps) => {
    const animatedValue = useSharedValue(0)

    useEffect(() => {
        animatedValue.value = withTiming(isSelected ? 1 : 0, {duration: 300})
    },  [isSelected])

    const animatedBackgroundStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(animatedValue.value, [0, 1], [colors.background, colors.primary]),
        width: width
    }))

    const animatedTextStyle = useAnimatedStyle(() => ({
        color: interpolateColor(animatedValue.value, [0, 1], [colors.text, colors.onPrimary])
    }))

    return (
        <AnimatedPressable
        style={[styles(colors, isSelected, index).container, animatedBackgroundStyle]}
        onPress={() => {onPress()}}>
                <AnimatedAppText
                style={[styles(colors, isSelected).itemTitle, animatedTextStyle]}>{item.title}</AnimatedAppText>
        </AnimatedPressable>
    )
}

const styles = (
    color: AppTheme['colors'],
    selected: boolean = false,
index: number = 0) => StyleSheet.create({
    container: {
         borderWidth: 1,
        borderRadius: radius.md,
        borderColor: color.border,
        backgroundColor: color.background,
        height: 80,
        padding: spacing.md,
        marginBottom: spacing.md, 
        marginRight: index % 2 === 0 ? spacing.md : 0
    }, 
    itemTitle: {
        color: selected ? color.onPrimary: color.text,
        textAlign: 'center',
        ...typography.bodyMedium
    }
})

export default OptionItem

