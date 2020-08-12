import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

interface TeacherItemProps {
    title: string,
}

const TeacherItem: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://avatars2.githubusercontent.com/u/23640249?s=460&u=78a611d3b5c8c8bfd3d5810b2210cd9b8230a7df&v=4' }}
                />
                <View style={styles.profileInfo} >
                    <Text style={styles.name}>Nome do Professor</Text>
                    <Text style={styles.subject}>Materia</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço Hora
                    <Text style={styles.priceValue}>
                        R$ 20,00
                    </Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.unfavoriteButton]}>
                        {/*<Image source={heartIcon} style={styles.img}/>*/}
                        <Image source={unfavoriteIcon} style={styles.img}/>
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} style={styles.img}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;