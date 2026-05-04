import { Link } from 'expo-router';
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Pause App : Digital Wellbeing App</Text>

      <Link href="/OnboardingPage">
        <Text>Go to Onboarding</Text>
      </Link>
    </View>
  );
}
