import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TeacherList from '../Pages/TeacherList';
import Favorite from '../Pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}
        >
            <Screen
                name="teacherList"
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons
                                size={size}
                                color={color}
                                name="ios-heart"
                            />
                        )
                    }
                }}
                component={TeacherList}
            />
            <Screen
                name="favorite"
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons
                                size={size}
                                color={color}
                                name="ios-easel"
                            />
                        )
                    }
                }}
                component={Favorite}
            />
        </Navigator>
    );
}

export default StudyTabs;