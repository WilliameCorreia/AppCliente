import React, { useState, useRef, useEffect, useContext } from 'react'
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import storage from '@react-native-firebase/storage';
import CarroselImage from './CarroselImage';
// import AuthContext from '../Contexts/auth';



let ENTRIES1 = [
    {
        nome: 'https://firebasestorage.googleapis.com/v0/b/planetaentregascliente.appspot.com/o/Propagandas%2Fodonto.jpeg?alt=media&token=774c3a11-943e-4c6d-8fc9-3e29d60de819',
    },
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
const reference = storage().ref('/Propagandas');

const CarroselOfetas = ({ }) => {
    // const { stateCliente } = useContext(AuthContext);
    // const { User } = stateCliente;

    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);
    // let teste = listFilesAndDirectories(reference)


    async function listFilesAndDirectories(reference, pageToken) {
        const ImgSlide = await reference.list({ pageToken }).then(result => {
            let listaImg = []
            // Loop over each item
            result.items.forEach(ref => {
                ref.getDownloadURL().then(dados => {
                    listaImg.push(dados)
                })
            });
            return listaImg
        });
        return ImgSlide
    }

    useEffect(() => {
        // console.log(User)
        listFilesAndDirectories(reference).then(dados => {
            setEntries(dados)
        });
        return () => {
            console.log('error DashBoard')
        }
    }, [])

    const renderItem = ({ item, index }, parallaxProps) => {
        return (
            <TouchableOpacity style={styles.item} key={index} /* onPress={() => mudarState(true)} */>
                <ParallaxImage
                    source={{ uri: item.nome }}
                    // containerStyle={{flex:1}}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.1}
                    {...parallaxProps}
                />
            </TouchableOpacity>
        );
    };

    return (
        <CarroselImage images={entries} />
        // <View style={styles.container}>
        //     <Carousel
        //         ref={carouselRef}
        //         sliderWidth={screenWidth}
        //         sliderHeight={screenWidth}
        //         itemWidth={screenWidth - 60}
        //         data={ENTRIES1}
        //         renderItem={renderItem}
        //         hasParallaxImages={true}
        //         autoplay={true}
        //         enableMomentum={false}
        //     />
        // </View>
    )
}

export default CarroselOfetas;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    item: {
        width: screenWidth - 60,
        height: screenWidth - 60,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 30,
    },
    image: {
        // ...StyleSheet.absoluteFillObject,
        width: '100%',
        resizeMode: 'contain'
    },
    btnNext: {

    }
});
