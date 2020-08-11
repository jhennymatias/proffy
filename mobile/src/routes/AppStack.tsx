import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../Pages/Landing';
import GiveClasses from '../Pages/Give-Classes';
import StudyTabs from './StudyTabs';

const {Navigator, Screen}= createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="landing" component={Landing}/>
                <Screen name="give-classes" component={GiveClasses}/>
                <Screen name="studyTabs" component={StudyTabs}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;