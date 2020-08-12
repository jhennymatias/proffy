import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';


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
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{uri:}}
                />
            </View>
        </View>
    )
}

export default PageHeader;