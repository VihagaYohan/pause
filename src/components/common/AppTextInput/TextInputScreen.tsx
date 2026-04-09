import React, { useState } from "react";
import { View } from "react-native";

import AppSafeArea from "../AppSafeArea";
import AppTextInput from "../AppTextInput/AppTextInput";
import typograpy from "../../../theme/typograpy"; 

export default function TextInputScreen() {
  const [text, setText] = useState("");

  return (
    <AppSafeArea>
      <View style={{ padding: 20 }}>
        <AppTextInput
          placeholder="What’s pulling you away from what matters?"
          value={text}
          onChangeText={setText}

          // keyboard behavior
          returnKeyType="done"
          blurOnSubmit={true}

          // custom typography
          textStyle={typograpy.bodyMedium}
        />
      </View>
    </AppSafeArea>
  );
}


