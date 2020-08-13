import React, { useState } from 'react';
import { View, Text, Image, Linking, AsyncStorage } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { AsyncStorageStatic } from '@react-native-community/async-storage'

import heartIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export interface Teacher {
    id: number
    subject: string,
    cost: number,
    name: string,
    avatar: string,
    whatsapp: string,
    bio: string

}

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    const [isFavorite, setIsFavorite] = useState(favorited);

    function handleLinkWhatsapp() {
        Linking.openURL(`whatsapp://send?phone${teacher.whatsapp}`)
    }


    async function handleToggleFavoriteTeacher() {
        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray = [];
        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if (isFavorite) {
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });
            favoritesArray.splice(favoriteIndex, 1);
            setIsFavorite(false);
        } else {
            favoritesArray.push(teacher);
            setIsFavorite(true);
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />
                <View style={styles.profileInfo} >
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                {teacher.bio}
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço Hora
                    <Text style={styles.priceValue}>
                        {teacher.cost}
                    </Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton
                        onPress={handleToggleFavoriteTeacher}
                        style={[styles.favoriteButton, isFavorite ? styles.unfavoriteButton : {}]}>
                        {
                            isFavorite ?
                                <Image source={unfavoriteIcon} style={styles.img} />
                                :
                                <Image source={heartIcon} style={styles.img} />
                        }
                    </RectButton>
                    <RectButton onPress={handleLinkWhatsapp} style={styles.contactButton}>
                        <Image source={whatsappIcon} style={styles.img} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;