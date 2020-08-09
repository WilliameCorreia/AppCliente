import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const ENTRIES1 = [
    {
        nome: 'https://www.gbarbosa.com.br/wp-content/uploads/2018/02/19731-2-CARD-695x410px-1A-SEMANA-DE-MARCO-GB-2018_1.png',
    },
    {
        nome: 'https://www.gbarbosa.com.br/wp-content/uploads/2018/02/19731-2-CARD-695x410px-1A-SEMANA-DE-MARCO-GB-2018_2.png',
    },
    {
        nome: 'https://storage.googleapis.com/wzukusers/user-32085096/images/5d63e93e37dd42zThoPN/dia_d600.png',
    },
    {
        nome: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQidIPSjbHxOuQDcpsEq-zuOi60b2km7xAc0A&usqp=CAU',
    },
    {
        nome: 'https://www.ofertaosupermercado.com.br/gallery/1.png',
    },
    
];

const { width: screenWidth } = Dimensions.get('window');

const CarroselOfetas = ({  }) => {
    
    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);

    useEffect(() => {
        setEntries(ENTRIES1)
    }, [])

    const renderItem = ({ item, index }, parallaxProps) => {
        console.log(item.nome)
        return (
            <TouchableOpacity style={styles.item} onPress={() => mudarState(true)}>
                <ParallaxImage
                    source={{uri: item.nome}}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.1}
                    {...parallaxProps}
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={entries}
                renderItem={renderItem}
                hasParallaxImages={true}
                autoplay={true}
                enableMomentum={false}
            />
        </View>
    )
}

export default CarroselOfetas;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    item: {
        //width: screenWidth - 60,
        //height: screenWidth - 60,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 30,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        resizeMode: 'contain'
    },
    btnNext: {

    }
});
