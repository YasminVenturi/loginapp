import { MD3LightTheme, Provider } from "react-native-paper";
import AppNavigate from "./src/navigation/AppNavigate";

// note que criamos o arquivo src/config/theme.js
import { themeDark, themeLight } from "./src/config/theme";
import { useColorScheme } from "react-native";
import AppNavigator from "./src/navigation/AppNavigate";

export default function App() {
  // pega o tema do dispositivo
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  // criação de tema
  // https://callstack.github.io/react-native-paper/docs/guides/theming/#creating-dynamic-theme-colors
  // usar o tema do dispositivo
  // https://callstack.github.io/react-native-paper/docs/guides/theming/#using-the-devices-theme
  const isDarkMode = colorScheme === "dark";
  let theme;
  if (isDarkMode) {
    theme =themeDark;
  } else {
    theme = themeLight;
  }

  return (
    <Provider theme={theme}>
      {/* aqui usamos o provider do RNP */}
      <AppNavigator />
    </Provider>
  );
}
