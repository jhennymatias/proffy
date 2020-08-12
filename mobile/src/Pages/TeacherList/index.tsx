import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import GiveClassesBgImage from '../../assets/images/give-classes-background.png';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/pageHeader';


function TeacherList() {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys Disponiveis"/>
            <TeacherList />
        </View>
    )
}

export default TeacherList;