import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../Screens/HomePage';
import SearchScreen from '../Screens/SearchScreen';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Details from '../Screens/Details';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MyTabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: styles.bottomTabBarStyle,
          tabBarLabelStyle:{fontSize: 14, fontWeight:'bold'},
        }}
      >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabelStyle:{fontSize: 14, fontWeight:'bold'},
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="home" size={30} color={'white'}/>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesome name="search" size={28} color={'white'} />
              </View>
            );``
          },
        }}
      />
      </Tab.Navigator>
    </>
  );
};

const HomeNavigation = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };
  
  const SearchNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

export {MyTabs, BottomNavigation};

const styles = StyleSheet.create({
  bottomTabBarStyle:{
    backgroundColor: '#0d0d0d',
    borderRadius: 10,
    position: 'absolute',
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
    borderWidth: 1,
    borderColor: 'black'
  }
});