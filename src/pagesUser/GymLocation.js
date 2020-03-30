import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import { SearchBar } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 16.4744744;
const LONGITUDE = 102.8208432;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;


function randomColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}


export default class GymLocation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            markers: [],
        };
    }

    onMapPress(e) {
        this.setState({
            markers: [
                ...this.state.markers,
                {
                    coordinate: e.nativeEvent.coordinate,
                    key: id++,
                    color: randomColor(),
                },
            ],
        });
    }
    goback() {
        Actions.pop()
    }
    coursetype() {
        Actions.coursetype()
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={this.props.provider}
                    style={styles.map}
                    initialRegion={this.state.region}
                    onPress={e => this.onMapPress(e)}
                >
                    {this.state.markers.map(marker => (
                        <Marker
                            key={marker.key}
                            coordinate={marker.coordinate}
                            pinColor={marker.color}
                        />
                    ))}
                </MapView>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => this.setState({ markers: [] })}
                        style={styles.bubble} >
                        <Text>Tap to create a marker of random color</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "flex-end" }}>
                    <TouchableOpacity
                        onPress={this.coursetype} style={{
                            paddingBottom: 13,
                            paddingTop: 7,
                            marginBottom: 15,
                            borderRadius: 10,
                            backgroundColor: "#883997",
                            marginHorizontal: 130,
                            borderWidth: 1,
                            width: 100
                        }}>
                        <Text style={{
                            color: '#eeeeee',
                            fontSize: 20,
                            fontWeight: '400',
                            textAlign: "center",
                        }} >ปิด</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

GymLocation.propTypes = {
    provider: ProviderPropType,
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});