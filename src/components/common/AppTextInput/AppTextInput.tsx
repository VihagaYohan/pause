import React from "react";
import {TextInput,StyleSheet,View,useColorScheme} from "react-native";

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  multiline?: boolean;
}

const AppTextInput: React.FC<Props> = ({
  placeholder,
  value,
  onChangeText,
  multiline = true,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? "#1E1E2E" : "#F5F5F7",
          borderColor: isDark ? "#3A3A55" : "#D6D6E7",
        },
      ]}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={isDark ? "#A1A1B5" : "#8E8EA0"}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        style={[
          styles.input,
          {
            color: isDark ? "#FFFFFF" : "#000000",
          },
        ]}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 15,
    minHeight: 120,
    justifyContent: "flex-start",
  },
  input: {
    fontSize: 16,
    lineHeight: 22,
  },
});