import React from 'react';
import {Dimensions} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import AnimatedTabBar from '@gorhom/animated-tabbar';
import { Ionicons, Feather } from '@expo/vector-icons';
import Home from '../Screen/Home';
import Likes from '../Screen/Likes';
import Settings from '../Screen/Settings';
import Profile from '../Screen/Profile';

const BottomTab = createBottomTabNavigator();
const {width, height } = Dimensions.get('window')
// const tabs = {
//     Home: {
//         labelStyle: {
//           color: '#5B37B7',
        
//         },
//         icon: {
//           component: <Feather  name="home" color='#5B37B7' size={20} />,
//           activeColor: 'rgba(91,55,183,1)',
//           inactiveColor: 'rgba(0,0,0,1)',
//         },
//         background: {
//           activeColor: 'rgba(223,215,243,1)',
//           inactiveColor: 'rgba(223,215,243,0)',
//         } ,
//       },
//       Likes: {
//         labelStyle: {
//           color: '#1194AA',
//         },
//         icon: {
//           component: <Ionicons name="ios-heart" color='#1194AA' size={20} />,
//           activeColor: 'rgba(17,148,170,1)',
//           inactiveColor: 'rgba(0,0,0,1)',
//         },
//         background: {
//             activeColor: 'rgba(207,235,239,1)',
//             inactiveColor: 'rgba(207,235,239,0)',
//         },
//       }
    
// }
export default function BottomTabNavigator(){
    return(
        <BottomTab.Navigator 
        //   tabBar={props => (
        //       <AnimatedTabBar preset='flashy' tabs={tabs} {...props} />
        //   )}
          tabBarOptions={{
              style: {width:width*0.8,  marginHorizontal:width*0.1, marginBottom:40, height:55, borderRadius:10, shadowColor:'black', shadowOffset:{x:0,y:1}, shadowOpacity:0.1, shadowRadius:6},
              showLabel:false,
              tabStyle:{marginTop:25}
          }}
        >
            <BottomTab.Screen 
               name="Home"
               component={Home}
               options={{
                   tabBarIcon:({focused}) => (
                       <Feather style={{position:'absolute'}} name='home' size={24} color={focused ?  '#1194AA':'grey'} />
                   )
               }}
            />
            <BottomTab.Screen 
               name="Likes"
               component={Likes}
               options={{
                   tabBarIcon:({focused}) => (
                       <Ionicons style={{position:'absolute'}} name='ios-heart' size={24} color={focused ? '#1194AA':'grey'} />
                   )
               }}
            />
            <BottomTab.Screen 
               name="Settings"
               component={Settings}
               options={{
                tabBarIcon:({focused}) => (
                    <Feather style={{position:'absolute'}} name='settings' size={24} color={focused ? '#1194AA':'grey'} />
                )
            }}
            />
             <BottomTab.Screen 
               name="Profile"
               component={Profile}
               options={{
                tabBarIcon:({focused}) => (
                    <Feather style={{position:'absolute'}} name='user' size={27} color={focused ? '#1194AA':'grey'} />
                )
            }}
            />
        </BottomTab.Navigator>
    )
}