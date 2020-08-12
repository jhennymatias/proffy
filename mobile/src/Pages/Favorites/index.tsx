import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import PageHeader from '../../components/pageHeader';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function Favorite() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos"/>
            <Text>Favorite</Text>
        </View>
    )
}

export default Favorite;