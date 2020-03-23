// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, ScrollView, TouchableOpacity, AsyncStorage, Keyboard, StatusBar } from 'react-native';
// import { RadioButton } from 'react-native-paper';
// import { Actions } from 'react-native-router-flux';
// // import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
// import { FontAwesome } from '@expo/vector-icons';


// export default class Form extends Component {



//     home() {
//         Actions.home()
//     }

//     showData = async () => {
//         let loginDetails = await AsyncStorage.getItem('loginDetails');
//         let ld = JSON.parse(loginDetails);
//         alert('email: ' + ld.email + ' ' + 'password: ' + ld.password);
//     }

//     render() {
//         return (
//         //     <View style={styles.container}>
//         //         <StatusBar backgroundColor="#00b2cc" barStyle="light-content" />
//         //         <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 20 }} >
//         //             <View style={{ flex: 5, alignItems: 'center' }}>
//         //                 <TouchableOpacity onPress={this.home}>
//         //                     <Text style={{
//         //                         paddingTop: 40,
//         //                         color: '#eeeeee',
//         //                         fontSize: 30,
//         //                         fontWeight: '500'
//         //                     }}>My Trainer</Text>
//         //                 </TouchableOpacity>
//         //             </View>
//         //         </View>
//         //         <Image
//         //             style={{ width: 100, height: 100 }}
//         //             source={require('../image/logo.jpg')}
//         //         />
//         //         <Text style={styles.textlogo}> Login </Text>

//         //         <TextInput style={styles.inputBox}
//         //             onChangeText={(email) => this.setState({ email })}
//         //             underlineColorAndroid='rgba(0,0,0,0)'
//         //             placeholder="Email"
//         //             placeholderTextColor="#bdbdbd"
//         //             keyboardType="email-address"
//         //             onSubmitEditing={() => this.password.focus()} />

//         //         <TextInput style={styles.inputBox}
//         //             onChangeText={(password) => this.setState({ password })}
//         //             underlineColorAndroid='rgba(0,0,0,0)'
//         //             placeholder="Password"
//         //             secureTextEntry={true}
//         //             placeholderTextColor="#bdbdbd"
//         //             ref={(input) => this.password = input}
//         //         />
//         //         <View style={{ flexDirection: "row", paddingLeft: 15, marginTop: 10 }}>
//         //             <View style={{ flexDirection: "row", marginRight: 15, }}>
//         //                 <View style={{ borderWidth: 1, borderRadius: 10 }}>
//         //                     {/* {console.log(this.state.checked)} */}
//         //                     <RadioButton
//         //                         value="1"
//         //                         status={this.state.checked === '1' ? 'checked' : 'unchecked'}
//         //                         onPress={() => { this.setState({ checked: '1' }) }}
//         //                     ></RadioButton></View>
//         //                 <Text style={{
//         //                     color: '#62757f',
//         //                     fontSize: 20,
//         //                     fontWeight: '300',
//         //                     textAlign: "center",
//         //                     margin: 5
//         //                 }}>User</Text>
//         //             </View>
//         //             <View style={{ borderWidth: 1, borderRadius: 10 }}>
//         //                 <RadioButton
//         //                     value="2"
//         //                     status={this.state.checked === '2' ? 'checked' : 'unchecked'}
//         //                     onPress={() => { this.setState({ checked: '2' }); }}
//         //                 ></RadioButton>
//         //             </View>
//         //             <Text style={{
//         //                 color: '#62757f',
//         //                 fontSize: 20,
//         //                 fontWeight: '300',
//         //                 textAlign: "center",
//         //                 margin: 5
//         //             }}>Trainer</Text>
//         //         </View>
//         //         <TouchableOpacity style={styles.button} onPress={this.home}>
//         //             <Text style={styles.buttonText} >{this.props.type}</Text>
//         //         </TouchableOpacity>
//         //     </View>

//          )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     inputBox: {
//         width: 300,
//         backgroundColor: '#eeeeee',
//         borderRadius: 25,
//         paddingHorizontal: 16,
//         fontSize: 16,
//         color: '#002f6c',
//         marginVertical: 10, paddingVertical: 10
//     },
//     button: {
//         width: 300,
//         backgroundColor: '#883997',
//         borderRadius: 25,
//         marginVertical: 10,
//         paddingVertical: 12
//     },
//     buttonText: {
//         fontSize: 16,
//         fontWeight: '500',
//         color: '#ffffff',
//         textAlign: 'center'
//     },
//     textlogo: {
//         color: '#424242',
//         marginTop: 10,
//         fontSize: 24,
//         fontWeight: '500',
//     }
// });