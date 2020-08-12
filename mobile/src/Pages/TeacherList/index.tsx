import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import {Feather} from '@expo/vector-icons'
import styles from './styles';
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/teacherItem';


function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFilterVisible(){
        setIsFiltersVisible(!isFiltersVisible);
    }

    return (
        <View style={styles.container}>

            <PageHeader
                title="Proffys Disponiveis"
                headerRight={
                    <BorderlessButton onPress={handleToggleFilterVisible}>
                        <Feather name="filter" size={20} color="#FFF"/>
                    </BorderlessButton>}
            >
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Qual a matérias?" />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    placeholder="Qual a dia?" />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Hora</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o horário?" />
                            </View>
                        </View>
                        <RectButton style={styles.submit}>
                            <Text style={styles.submitText}>
                                Filtrar
                            </Text>

                        </RectButton>

                    </View>
                )}
            </PageHeader>
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

export default TeacherList;