import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import backIcon from '../../assets/images/icons/back.png';
import logo from '../../assets/images/logo.png';
import { BorderlessButton } from 'react-native-gesture-handler';

interface PageHeaderProps {
    title: string,
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    const { navigate } = useNavigation();

    function handleBackToLandingPage() {
        navigate('landing');
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleBackToLandingPage}>
                    <Image source={backIcon} resizeMode='contain' style={styles.img} />
                </BorderlessButton>
                <Image source={logo} resizeMode='contain' style={styles.img} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
}

export default PageHeader;