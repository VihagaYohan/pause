import { useTheme } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import Animated from 'react-native-reanimated'

// components

// theme
import { radius, spacing } from '@/src/theme/index'
import { AppTheme } from '@/src/types'

// widgets
import { PageTwoOptionItem } from '@/src/widgets/onboarding'

type Options = {
    id: number,
    title: string
}

const options: Options[] = [
    {
        id: 1,
        title: "Deep work"
    },
    {
        id: 2,
        title: "Exercise"
    },
    {
        id: 3,
        title: "Family time"
    },
    {
        id: 4,
        title: "Creative projects"
    },
    {
        id: 5,
        title: "Learning"
    },
    {
        id: 6,
        title:"Rest"
    },
    {
        id: 7,
        title: "Reading"
    }
]

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const PageTwo = () => {
    const [containerWidth, setContainerWidth] = useState<number>(0)
    const [selectedOptions, setSelectedOptions] = useState<Options[]>([])
    const itemWidth = (containerWidth - spacing.md) / 2
    const {colors} = useTheme()

    const handleOptionPress = (option: Options) => {
        if(selectedOptions.some((selectedOption) => selectedOption.id === option.id)) {
            setSelectedOptions((prevState) => prevState.filter((selectedOptions) => selectedOptions.id !== option.id))
        } else {
            setSelectedOptions((preState) => [...preState, option])
        }
    }

    // RENDER UI
    const renderItem = useCallback(({item, index}: {item: Options, index: number}) => {
        const isSelected = selectedOptions.some((selectedOptions) => selectedOptions.id === item.id)
        return (
            <PageTwoOptionItem 
            item={item} 
            width={itemWidth}
            index={index} 
            colors={colors} 
            isSelected={isSelected} 
            onPress={() => handleOptionPress(item)} />
        ) 
    }, [containerWidth, selectedOptions])

    return (
        <View
        onLayout={(event) => {
            setContainerWidth(event.nativeEvent.layout.width)
        }}>
            <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index:number) => `onboarding_page_two_option_item_${index}`}
            data={options}
            numColumns={2}
            renderItem={renderItem}/>
        </View>
    )
}

const styles = (color: AppTheme['colors'], selected: boolean = false) => StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: radius.md,
        borderColor: color.border,
        backgroundColor: color.background,
        height: 80,
        padding: spacing.md,
        marginBottom: spacing.md
    },
    itemTitle: {
        color: selected ? color.onPrimary : color.text
    }
})

export default PageTwo