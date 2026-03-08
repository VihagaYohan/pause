import { Fraunces_600SemiBold, Fraunces_700Bold } from '@expo-google-fonts/fraunces';
import { PlusJakartaSans_400Regular, PlusJakartaSans_500Medium, PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

// theme
import { theme } from '../src/theme';

export default function RootLayout() {
  const [fontLoaded, fontError] = useFonts({
    // fraunces
    'Fraunces-SemiBold': Fraunces_600SemiBold,
    'Fraunces-Bold': Fraunces_700Bold,

    // plus jakarta sans
    'Jakarta-Regular': PlusJakartaSans_400Regular,
    'Jakarta-Medium': PlusJakartaSans_500Medium,
    'Jakarta-SemiBold': PlusJakartaSans_600SemiBold,
    'Jakarta-Bold': PlusJakartaSans_700Bold
  })
  const colorScheme = useColorScheme()

  useEffect(() => {
    if (fontLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontLoaded, fontError])

  // Don't render anything until fonts are ready
  if (!fontLoaded && !fontError) {
    return null
  }

  return <ThemeProvider value={colorScheme === 'dark' ? theme.darkTheme : DefaultTheme}>
    <Stack screenOptions={{ headerShown: false }} initialRouteName='OnboardingPage'>
      <Stack.Screen name="/onboarding" />
    </Stack>
  </ThemeProvider>
}
