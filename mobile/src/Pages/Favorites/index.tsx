import React from 'react';
import { View, ScrollView } from 'react-native';
import PageHeader from '../../components/pageHeader';

import styles from './styles';
import TeacherItem from '../../components/teacherItem';


function Favorite() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos" />
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 24,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>

        </View>

    )
}

export default Favorite;