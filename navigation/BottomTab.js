import React from 'react';
import {Dimensions} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import { Ionicons, Feather } from '@expo/vector-icons';
import Home from '../Screen/Home';
import Likes from '../Screen/Likes';
import Settings from '../Screen/Settings';
import Profile from '../Screen/Profile';

const BottomTab = createBottomTabNavigator();
const {width, height } = Dimensions.get('window')
const tabs = {
    Home: {
        labelStyle: {
          color: '#5B37B7',
        
        },
        icon: {
          component: <Feather  name="home" color='#5B37B7' size={20} />,
          activeColor: 'rgba(91,55,183,1)',
          inactiveColor: 'rgba(0,0,0,1)',
        },
        background: {
          activeColor: 'rgba(223,215,243,1)',
          inactiveColor: 'rgba(223,215,243,0)',
        } ,
      },
      Likes: {
        labelStyle: {
          color: '#1194AA',
        },
        icon: {
          component: <Ionicons name="ios-heart" color='#1194AA' size={20} />,
          activeColor: 'rgba(17,148,170,1)',
          inactiveColor: 'rgba(0,0,0,1)',
        },
        background: {
            activeColor: 'rgba(207,235,239,1)',
            inactiveColor: 'rgba(207,235,239,0)',
        },
      },
      Settings: {
        labelStyle: {
          color: '#5B37B7',
        
        },
        icon: {
          component: <Feather  name="settings" color='#5B37B7' size={20} />,
          activeColor: 'rgba(91,55,183,1)',
          inactiveColor: 'rgba(0,0,0,1)',
        },
        background: {
          activeColor: 'rgba(223,215,243,1)',
          inactiveColor: 'rgba(223,215,243,0)',
        } ,
      },
      Profile: {
        labelStyle: {
          color: '#1194AA',
        },
        icon: {
          component: <Feather name="user" color='#1194AA' size={20} />,
          activeColor: 'rgba(17,148,170,1)',
          inactiveColor: 'rgba(0,0,0,1)',
        },
        background: {
            activeColor: 'rgba(207,235,239,1)',
            inactiveColor: 'rgba(207,235,239,0)',
        },
      },
    
}
export default function BottomTabNavigator(){
    return(
        <BottomTab.Navigator 
          tabBar={props => (
              <AnimatedTabBar preset='flashy' tabs={tabs} {...props} />
          )}
        //   tabBarOptions={{
        //       style: {  marginHorizontal:width*0.1, marginBottom:40,  borderRadius:10, shadowColor:'black', shadowOffset:{x:0,y:1}, shadowOpacity:0.1, shadowRadius:6},
        //       tabStyle:{marginTop:25}
        //   }}
        >
            <BottomTab.Screen 
               name="Home"
               component={Home}
            />
            <BottomTab.Screen 
               name="Likes"
               component={Likes}
            />
            <BottomTab.Screen 
               name="Settings"
               component={Settings}
            />
             <BottomTab.Screen 
               name="Profile"
               component={Profile}
            />
        </BottomTab.Navigator>
    )
}