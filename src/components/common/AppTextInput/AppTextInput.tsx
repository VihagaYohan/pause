import React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  useColorScheme,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextStyle,
} from "react-native";

import typograpy from "../../../theme/typograpy"; 
import palette from "../../../theme/palette";

interface TextInputProps {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  multiline?: boolean;

  // keyboard props
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  autoFocus?: boolean;
  blurOnSubmit?: boolean;
  onSubmitEditing?: () => void;

  // typography override
  textStyle?: TextStyle;
}

const AppTextInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  multiline = true,

  keyboardType = "default",
  returnKeyType = "done",
  autoFocus = false,
  blurOnSubmit = true,
  onSubmitEditing,

  textStyle,
}) => {
  const colorScheme = useColorScheme();
  // const isDark = colorScheme === "dark";
  const theme = colorScheme === "dark" ? palette.darkTheme : palette.lightTheme;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.surfaceContainerLow, //  from palette
          borderColor: theme.outlineVariant,          //  from palette
        },
      ]}
    >
     
<TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.onSurfaceVariant} 
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}

        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        autoFocus={autoFocus}
        blurOnSubmit={blurOnSubmit}
        onSubmitEditing={onSubmitEditing}
        textAlignVertical="top"

        style={[
          styles.input,
          typograpy.bodyMedium,
          textStyle,
          {
            color: theme.onPrimary, //  text color
          },
        ]}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 15,
    minHeight: 120,
    justifyContent: "flex-start",
  },
  input: {},
});

export default AppTextInput;