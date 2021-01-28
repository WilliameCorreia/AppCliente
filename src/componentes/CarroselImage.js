import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Image, ScrollView, Text } from 'react-native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

const DEVICE_WIDTH = Dimensions.get('window').width

export default class CarroselImage extends Component {

    scrollRef = React.createRef()

    constructor(props) {
        super(props)

        this.state = {
            selectedIndex: 0
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState(prev => ({
                selectedIndex:
                    prev.selectedIndex === this.props.images.length - 1 ? 0 : prev.selectedIndex + 1
            }),
                () => {
                    this.scrollRef.current.scrollTo({
                        animated: true,
                        y: 0,
                        x: DEVICE_WIDTH * this.state.selectedIndex
                    })
                })
        }, 4000)
    }

    setSelectedIndex = event => {
        const viewSize = event.nativeEvent.layoutMeasurement.width
        const contentOffset = event.nativeEvent.contentOffset.x

        const selectedIndex = Math.floor(contentOffset / viewSize)

        this.setState({ selectedIndex })
    }

    render() {
        const { images } = this.props
        const { selectdIndex } = this.state

        return (
            <View style={{ width: '100%', height: '100%' }}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    onMomentumScrollEnd={this.setSelectedIndex}
                    ref={this.scrollRef}
                >
                    <ShimmerPlaceHolder style={styles.img} autoRun={true} visible={images.length != 0}/>
                        {images ?
                            images.map(image => {
                                return (
                                    <Image
                                        key={image}
                                        source={{ uri: image? image: "" }}
                                        style={styles.img}
                                    />
                                )
                            }) : null}
                </ScrollView>
                <View style={styles.circleDiv}>
                    {images.map((image, i) => {
                        return (
                            <View key={image} style={[
                                styles.whiteCircle,
                                { opacity: i == this.state.selectedIndex ? 0.5 : 1 }
                            ]}
                            />
                        )
                    })}
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    img: {
        height: '100%',
        width: DEVICE_WIDTH,
        resizeMode: 'center'
    },
    circleDiv: {
        position: "absolute",
        bottom: 15,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    whiteCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "#fff"
    }
})
