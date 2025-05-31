// import { Tabs } from 'expo-router';

// export default function Layout() {
//   return (
//     <Tabs screenOptions={{ headerShown: false }}>
//       <Tabs.Screen name="home" options={{ title: 'Trang chủ' }} />
//     </Tabs>
//   );
// }
// import { Tabs } from 'expo-router';

// export default function TabLayout() {
//   return (
//     <Tabs screenOptions={{ headerShown: false }}>
//       <Tabs.Screen name="home" options={{ title: 'Home' }} />
//       <Tabs.Screen name="explore" options={{ title: 'Explore' }} />
//     </Tabs>
//   );
// }
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '../hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        {/* <Stack.Screen name="home" /> */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

