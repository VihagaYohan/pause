import React from 'react'
import { View, ViewProps } from 'react-native'

// theme
import { spacing } from '../../../theme/index'

interface AppSpacerProps extends ViewProps{
    size?: keyof typeof spacing,
    isVertical?: boolean, 
    testID?: string
}

const AppSpacer: React.FC<AppSpacerProps> = ({size = 'md', isVertical, testID}: AppSpacerProps) => {
    return (
        <View
        testID={testID}
        style={
            isVertical ? {height: spacing[size]} : {width: spacing[size]}
        }/>
    )
}

export default AppSpacer;