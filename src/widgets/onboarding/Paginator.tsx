import React from 'react'
import { StyleSheet, View } from 'react-native'

// themes
import { colors, spacing } from '../../theme'

const Size = 16

interface PaginatorProps {
    count: number,
    activeIndex: number
}

const Paginator: React.FC<PaginatorProps> = ({ count = 4, activeIndex = 0 }) => {
    return (
        <View style={styles.container}>
            {Array.from({ length: count }).map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.pageItem,
                        { marginRight: index === 3 ? 0 : spacing.sm, }
                    ]} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageItem: {
        width: Size,
        height: Size,
        borderRadius: Size / 2,
        backgroundColor: colors.primary70
    }
})

export default Paginator