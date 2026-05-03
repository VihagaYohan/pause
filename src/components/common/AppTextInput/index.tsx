import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardType, StyleSheet, TextInput, TextInputProps } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

// types
import { AppTheme } from '../../../types';

// theme
import { spacing, typography } from '../../../theme';

interface AppTextInputProps extends TextInputProps {
    placeholder?: string;
    keyboardType?: KeyboardType;
    multiline?: boolean;
}

const AppTextInput: React.FC<AppTextInputProps> = (props: AppTextInputProps) => {
    const [value, setValue] = useState<string>('')
    const { colors } = useTheme()

    const handleTextChange = (text: string) => {
        setValue(text)
    }

    return (
        <TextInput
            testID='app-text-input'
            style={{ ...typography.bodyMedium, ...styles(colors).container }}
            value={value}
            onChangeText={handleTextChange}
            placeholder={props.placeholder}
            placeholderTextColor={colors.secondary}
            keyboardType={props.keyboardType}
            multiline={props.multiline}
        />
    )
}

const styles = (colors: AppTheme['colors']) => StyleSheet.create({
    container: {
        borderWidth: 2.5,
        borderRadius: spacing.md,
        borderColor: colors.border,
        padding: spacing.md,
        backgroundColor: colors.background,
        textAlign: 'left',
        textAlignVertical: 'top',
        height: 200,
        fontSize: moderateScale(15),
        color: colors.text,
    }
})

export default AppTextInput