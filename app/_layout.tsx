import { Stack, useNavigation } from "expo-router";
import CustomHeader from "@/components/CustomHeader/CustomHeader";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const navigation = useNavigation();
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="(modal)/Filter/index"
          options={{
            presentation: "containedTransparentModal",
            animation: "slide_from_bottom",
            headerShadowVisible: false,
            headerTitle: "Filter",

            headerStyle: {
              backgroundColor: Colors.lightGray,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                  style={{ marginRight: 10 }}
                  name="close-outline"
                  size={30}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            ),
          }}
        />
        {/* <Stack.Screen
          name="(modal)/Details/index"
          options={{
            presentation: "containedTransparentModal",
            animation: "slide_from_bottom",
            // headerTransparent: true,
            headerShadowVisible: false,
            headerTitle: "Details",
            headerStyle: {
              backgroundColor: Colors.lightGray,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                // style={{ zIndex: 1 }}
              >
                <Ionicons
                  style={{ marginRight: 10 }}
                  name="close-outline"
                  size={30}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            ),
          }}
        /> */}
      </Stack>
    </BottomSheetModalProvider>
  );
}
