import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import GiveClassesBgImage from '../../assets/images/give-classes-background.png';
import { useNavigation } from '@react-navigation/native';


function TeacherList() {
    const { goBack } = useNavigation();

    function handleBackToLandingPage() {
        goBack();
    }
    return (
        <View style={styles.container}>
            <Text>Teacher List</Text>
        </View>
    )
}

export default TeacherList;