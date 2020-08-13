import React, { useState, useEffect } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../service/api';

import { Feather } from '@expo/vector-icons'
import styles from './styles';
import PageHeader from '../../components/pageHeader';
import TeacherItem, { Teacher } from '../../components/teacherItem';



function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [subject, setSubject] = useState('');
    const [time, setTime] = useState('');
    const [week_day, setWeek_day] = useState('');

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersID = favoritedTeachers.map((teacher: Teacher) =>{
                    return teacher.id
                });
                setFavorites(favoritedTeachersID);
            }
        });
    }

    function handleToggleFilterVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function HandleFiltersSubmit() {
        loadFavorites();
        const response = await api.get('classes', {
            params: {
                week_day,
                subject,
                time
            }
        });
        setIsFiltersVisible(!isFiltersVisible);
        setTeachers(response.data);
    }

    return (
        <View style={styles.container}>

            <PageHeader
                title="Proffys Disponiveis"
                headerRight={
                    <BorderlessButton onPress={handleToggleFilterVisible}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>}
            >
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Qual a matéria?" />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    value={week_day}
                                    onChangeText={text => setWeek_day(text)}
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    placeholder="Qual o dia?" />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Hora</Text>
                                <TextInput
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    style={styles.input}
                                    placeholder="Qual o horário?" />
                            </View>
                        </View>
                        <RectButton
                            onPress={HandleFiltersSubmit}
                            style={styles.submit}>
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
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher}
                            favorited = {favorites.includes(teacher.id) ? true : false} />);
                })}
            </ScrollView>

        </View>
    )
}

export default TeacherList;