import { NavigationContainer } from '@react-navigation/native';
import { ToastProvider } from 'react-native-toast-notifications';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screen/Home';
import AlertScreen from './screen/Alert';
import GraphScreen from './screen/Graph';
import { withAppContext } from './provider/AppContext';

const Tab = createBottomTabNavigator();

function Root() {
  return (
    <ToastProvider placement="top">
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Alert">
          <Tab.Screen name="WatchList" component={Home} options={{ title: "Crypto Watch List" }} />
          <Tab.Screen name="Alert" component={AlertScreen} options={{ title: "Crypto Alert" }} />
          <Tab.Screen name="Graph" component={GraphScreen} options={{ title: "Graph Crypto" }} />
        </Tab.Navigator>
      </NavigationContainer>
    </ToastProvider>

  );
}

export default withAppContext(Root)
