import { useTheme } from '@react-navigation/native';
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';

// components
import { AppText } from '../../index';

interface AppButtonProps {
    title: string;
    onPress: () => void;
    isPrimary?: boolean;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}

const AppButton: React.FC<AppButtonProps> = ({
    title,
    onPress,
    isPrimary = true,
    disabled = false,
    style }: AppButtonProps) => {
    const { colors } = useTheme();
    return (
        <Pressable
            testID="app-button"
            style={[styles.container, style, {
                borderWidth: isPrimary ? 0 : 1.5,
                borderColor: colors.border,
                backgroundColor: isPrimary ? colors.primary : 'transparent'
            }]}
            onPress={() => onPress()}
            disabled={disabled}>
            <AppText style={styles.buttonLabel}>{title}</AppText>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    buttonLabel: {
        color: 'white'
    }
})

export default AppButton