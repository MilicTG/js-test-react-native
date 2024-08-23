import { View, Text } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ focused, color, icon, name }) => {
  return (
    <View>
      <Image source={icon} />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                focused={focused}
                color={color}
                icon={icons.home}
                name="Home"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
