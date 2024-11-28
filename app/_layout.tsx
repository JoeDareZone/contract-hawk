import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import '../global.css';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		...FontAwesome.font,
	});

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		loaded && SplashScreen.hideAsync();
	}, [loaded]);

	!loaded && null;

	return <Slot />;
}

// function RootLayoutNav() {
// 	return (
// 		<Stack>
// 			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
// 			<Stack.Screen name='modal' options={{ presentation: 'modal' }} />
// 		</Stack>
// 	);
// }
