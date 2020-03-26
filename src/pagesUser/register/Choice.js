import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Image,
    TextInput
} from 'react-native';
import ReactNativeTooltipMenu from 'react-native-tooltip-menu';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';
import DropdownMenu from 'react-native-dropdown-menu';

export default class Choice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            counterItem1: 0,
            counterItem2: 0,
            text: ''
        }
    }
    signup() {
        Actions.signup()
    }

    render() {
        var data = [["C", "Java", "JavaScript", "PHP"], ["Swift", "Objective-C"]];
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 64 }} />
                <DropdownMenu
                    style={{ flex: 1 }}
                    bgColor={'white'}
                    tintColor={'#666666'}
                    activityTintColor={'green'}
                    // arrowImg={}      
                    // checkImage={}   
                    // optionTextStyle={{color: '#333333'}}
                    // titleStyle={{color: '#333333'}} 
                    // maxHeight={300} 
                    handler={(selection, row) => this.setState({ text: data[selection][row] })}
                    data={data}
                >

                    <View style={{ flex: 1 }}>
                        <Text>
                            {this.state.text} is the best language in the world
                </Text>
                    </View>

                </DropdownMenu>
            </View>

            //   <View style={{ flex: 1, padding: 25 }}>
            //         <ReactNativeTooltipMenu
            //             buttonComponent={
            //                 <View style={{ padding: 10, borderRadius: 25 }}>
            //                     <FontAwesome name="bars" size={40} color='#00BFFF' />
            //                 </View>
            //             }
            //             items={[
            //                 {
            //                     label: 'Label #1',
            //                     onPress: () => this.setState({ counterItem1: this.state.counterItem1 + 1 })
            //                 },
            //                 {
            //                     label: 'Label #2',
            //                     onPress: () => this.setState({ counterItem2: this.state.counterItem2 + 1 }),
            //                 },
            //             ]}
            //         />
            //     </View>
        );
    }
}

AppRegistry.registerComponent('Example', () => Example);

//     reder() {
//         return (
//             <View style={styles.container}>
//                 <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 20 }} >
//                     <View style={{ flex: 5, alignItems: 'center' }}>
//                         <Text style={{
//                             paddingTop: 40,
//                             color: '#eeeeee',
//                             fontSize: 30,
//                             fontWeight: '500'
//                         }}>My Trainer</Text>
//                     </View>
//                 </View>
//                 <Image
//                     style={{ width: 100, height: 100 }}
//                     source={require('../../image/logo.jpg')}
//                 />
//                 <Text style={styles.textlogo}> Sign Up </Text>
//             </View>

//         )
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // backgroundColor: 'white'
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     textlogo: {
//         color: '#12799f',
//         fontSize: 24,
//         fontWeight: '500',
//     }
// });
