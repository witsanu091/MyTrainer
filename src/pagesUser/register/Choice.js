import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Keyboard,
    Image,
    TextInput
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Formsignup from '../../components/Formsignup';
import { Actions } from 'react-native-router-flux';

export default class Choice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: ''
        }
    }
    signup() {
        Actions.signup()
    }

    reder() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 20 }} >
                    <View style={{ flex: 5, alignItems: 'center' }}>
                        <Text style={{
                            paddingTop: 40,
                            color: '#eeeeee',
                            fontSize: 30,
                            fontWeight: '500'
                        }}>My Trainer</Text>
                    </View>
                </View>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../../image/logo.jpg')}
                />
                <Text style={styles.textlogo}> Sign Up </Text>
            </View>
        )
    }
}

