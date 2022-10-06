import {Background} from "./src/components/background";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import {StatusBar} from "react-native";
import {Home} from "./src/screens/home";
import {Loading} from "./src/components/loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      ></StatusBar>
      {fontsLoaded ? <Home /> : <Loading />}
    </Background>
  );
}
