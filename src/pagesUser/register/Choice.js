import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Image,
    TextInput, TouchableOpacity
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
            select: ''
            // counterItem1: 0,
            // counterItem2: 0,
            // text: ''
        }
    }
    signup() {
        Actions.signup()
    }
    login() {
        Actions.login()
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 12 }} >
                    <View style={{ flex: 5, alignItems: 'center' }}>
                        <Text style={{
                            paddingTop: 40,
                            color: '#eeeeee',
                            fontSize: 30,
                            fontWeight: '500'
                        }}>Find Trainer</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../../image/logoApp.png')}
                    /></View>
                <Text style={styles.textlogo}> Sign Up </Text>
                <View style={{
                    justifyContent: "center", alignItems: "center", marginTop: 30
                }}>
                    <Text style={{
                        justifyContent: "center",
                        textAlign: 'center',
                        color: '#62757f',
                        fontSize: 20,
                        fontWeight: '500',
                        paddingTop: 5
                    }}>
                        เลือกผู้ใช้งานที่ต้องการสมัคร
                    </Text>
                </View>
                <View style={{
                    flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10
                }}>
                    {/* <View style={this.state.select == type ? [styles.coursebutton,
                    { backgroundColor: "#ba68c8", borderWidth: 3 }] : [styles.coursebutton,]} > */}
                    <TouchableOpacity style={this.state.type == 1 ? [styles.coursebutton, { backgroundColor: "#ba68c8", borderWidth: 3 }] : [styles.coursebutton,]} onPress={() => { this.setState({ type: '1' }); }}>
                        <Text style={{ color: "#000000" }}>ผู้ใช้งาน</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={this.state.type == 2 ? [styles.coursebutton, { backgroundColor: "#ba68c8", borderWidth: 3 }] : [styles.coursebutton,]} onPress={() => { this.setState({ type: '2' }); }}>
                        <Text style={{ color: "#000000" }}>เทรนเนอร์</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{
                    margin: 8,
                    height: 60,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 150,
                    borderRadius: 30,
                    backgroundColor: "#ba68c8",
                    borderWidth: 2,
                    borderColor: '#d6d7da',
                }} onPress={() => { (this.state.type != '') ? Actions.signup({ user_type: this.state.type }) : alert('กรุณาเลือกผู้ใช้งานที่ต้องการสมัคร') }}>
                    < Text style={{ color: "#ffffff" }}>ค้นหา</Text>
                </TouchableOpacity>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    paddingVertical: 16,
                    flexDirection: 'row',
                    marginTop: 100
                }}>
                    <Text style={{
                        color: '#12799f',
                        fontSize: 18,
                    }}>มีบัญชีแล้ว กลับไปหน้า</Text>
                    <TouchableOpacity onPress={this.login}><Text style={{
                        color: '#12799f',
                        fontSize: 20,
                        fontWeight: '500',
                        borderWidth: 1,
                        borderRadius: 5,
                    }}>Login</Text></TouchableOpacity>
                </View>
            </View >


        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    textlogo: {
        color: '#12799f',
        fontSize: 24,
        fontWeight: '500',
        marginTop: 10,

    },
    coursebutton: {
        margin: 8,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        borderRadius: 30,
        // backgroundColor: "#d05ce3",
        backgroundColor: "#ffffff",
        borderWidth: 2,
        borderColor: '#d6d7da',
    }
});

// render() {
//     var data = [["C", "Java", "JavaScript", "PHP"], ["Swift", "Objective-C"]];
//     return (
//         <View style={{ flex: 1 }}>
//             <View style={{ height: 64 }} />
//             <DropdownMenu
//                 style={{ flex: 1 }}
//                 bgColor={'white'}
//                 tintColor={'#666666'}
//                 activityTintColor={'green'}
//                 // arrowImg={}      
//                 // checkImage={}   
//                 // optionTextStyle={{color: '#333333'}}
//                 // titleStyle={{color: '#333333'}} 
//                 // maxHeight={300} 
//                 handler={(selection, row) => this.setState({ text: data[selection][row] })}
//                 data={data}
//             >

//                 <View style={{ flex: 1 }}>
//                     <Text>
//                         {this.state.text} is the best language in the world
//             </Text>
//                 </View>

//             </DropdownMenu>
//         </View>
//     );
// }
// }

// AppRegistry.registerComponent('Example', () => Example);


// <View style={{ flex: 1, padding: 25 }}>
// <ReactNativeTooltipMenu
//     buttonComponent={
//         <View style={{ padding: 10, borderRadius: 25 }}>
//             <FontAwesome name="bars" size={40} color='#00BFFF' />
//         </View>
//     }
//     items={[
//         {
//             label: 'Label #1',
//             onPress: () => this.setState({ counterItem1: this.state.counterItem1 + 1 })
//         },
//         {
//             label: 'Label #2',
//             onPress: () => this.setState({ counterItem2: this.state.counterItem2 + 1 }),
//         },
//     ]}
// />
// </View>
