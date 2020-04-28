import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, AsyncStorage, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import Constants from "expo-constants";
import { Actions } from 'react-native-router-flux';
import Config from '../components/config';

export default class EndCourse extends Component {
    constructor() {
        super();
        this.state = {
            modalvisible: false,
            star: 0,
            list_review: [],
            eng_id: ''
        };
        this.get_review();
    }

    goback() {
        Actions.pop()
    }
    userprofile() {
        Actions.userprofile()
    }

    get_review = async () => {
        try {
            const account_id = await AsyncStorage.getItem('account_id');
            // console.log(Config.url + 'api/Cousre/show_end_engage?UID=' + account_id)

            await fetch(Config.url + 'api/Cousre/show_end_engage?UID=' + account_id)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({ list_review: responseJson })
                });
        }
        catch (error) {
            // Error retrieving data
        }
    }

    review = async (id, score) => {
        try {

            // console.log(Config.url + 'api/Cousre/show_end_engage?UID=' + account_id)

            await fetch(Config.url + '/api/Cousre/review_score_engage?ENGID=' + id + '&review_score=' + score)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson.message)
                });
            this.setState({ star: 0 })
            this.get_review();
        }
        catch (error) {
            // Error retrieving data
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 12 }} >
                    <View style={{ marginTop: 25, marginStart: 10, flex: 1, }}>
                        <TouchableOpacity onPress={this.goback}>
                            <FontAwesome name="chevron-left" size={40} color='#fff' />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 5, alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.home}>
                            <Text style={{
                                paddingTop: 25,
                                color: '#eeeeee',
                                fontSize: 25,
                                fontWeight: '500',
                            }}>ให้คะแนนเทรนเนอร์</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 25, marginStart: 10, flex: 1 }}>
                        <TouchableOpacity onPress={this.userprofile}>
                            <FontAwesome name="user" size={40} color='#fff' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    paddingTop: 8,
                    justifyContent: "flex-start",
                }} >
                    <Text style={{
                        color: '#62757f',
                        fontSize: 20,
                        fontWeight: '500',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}>หมายเหตุ : ให้คะแนนเทรนเนอร์ได้ เมื่อคุณเรียนจบคอร์สนั้นแล้ว</Text>
                </View>
                <FlatList
                    data={this.state.list_review}
                    renderItem={({ item }) =>
                        <View>
                            <View style={{
                                flex: 1,
                                padding: 8,
                                borderRadius: 10,
                                margin: 5,
                                backgroundColor: '#eeeeee',
                                shadowColor: 'rgba(0,0,0,0.25)',
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                shadowOffset: { width: 0, height: 2 },
                                elevation: 5,

                            }} >

                                <Text style={{ fontSize: 20, textAlign: "left", color: '#62757f', fontWeight: "bold", margin: 10 }} >
                                    <Text style={{ fontSize: 20 }} >   {item.CName}</Text>
                                </Text>
                                <Text style={{ fontSize: 17, textAlign: "left", color: '#62757f', fontWeight: "bold", margin: 10 }}>โดยเทรนเนอร์ {item.nickname}{'\n'}
                                    {item.firstname} {item.lastname}{'\n'}
                                    {/* <Rating
                                                type='custom'
                                                ratingCount={item.avgscore}
                                                ratingColor='#ebc934'
                                                ratingBackgroundColor='#ebc934'
                                                imageSize={20}
                                                showRating
                                            // onFinishRating={this.}
                                            /> */}
                                    สถานที่: {item.LName}{'\n'}
                                    เบอร์โทรศัพท์: {item.telephone}{'\n'}
                                    อีเมล: {item.email}{'\n'}
                                    facebook: {item.contact}{'\n'}
                                    เพศ: {item.gender === 'male' ? 'ชาย' : 'หญิง'}{'\n'}
                                    {/* สถานะคอร์ส: {item.engage_status === '1' ? 'รอการตอบรับ' : item.engage_status === '2' ? 'ได้รับการตอบรับแล้ว' : 'ไม่ได้ตอบรับ'} */}
                                    สถานะคอร์ส: {
                                        item.engage_status === '1' &&
                                        <Text style={{ color: "red" }}>รอการตอบรับ{'\n'}</Text>
                                    }
                                    {
                                        item.engage_status === '2' &&
                                        <Text style={{ color: "#ffffff" }}>ได้รับการตอบรับแล้ว{'\n'}</Text>
                                    }
                                    {
                                        item.engage_status === '3' &&
                                        <Text style={{ color: "blue" }}>ไม่ได้ตอบรับ{'\n'}</Text>
                                    }
                                    {
                                        item.engage_status === '4' &&
                                        <Text style={{ color: "#3ac204" }}>เรียนจบคอร์สแล้ว{'\n'}</Text>
                                    }
                                    <Text style={{ color: "#ff5722" }}>เมื่อวันที่: {item.EndCourse}{'\n'}</Text>
                                </Text>
                                <TouchableOpacity style={{ backgroundColor: '#ff80ff', padding: 10, borderRadius: 5, margin: 10, height: 50 }} onPress={() => {
                                    this.setState({ modalvisible: true })
                                    this.setState({ eng_id: item.ENGID })
                                }}>
                                    <Text style={{ textAlign: 'center', marginTop: 2, fontSize: 16 }}>
                                        ให้คะแนนเทรนเนอร์
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>}
                    keyExtractor={item => item.ENGID}
                />
                {
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalvisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.4)', flex: 1, justifyContent: 'center' }}>

                            <View style={{ margin: 15, padding: 15, borderRadius: 10, backgroundColor: '#fff', justifyContent: 'center' }}>

                                <View style={{}}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 24, color: '#00396D' }}>ให้คะแนนเทรนเนอร์</Text>
                                        <TouchableOpacity onPress={() => {
                                            this.setState({ modalvisible: false })
                                            this.setState({ star: 0 })
                                        }
                                        }>
                                            <FontAwesome name='times' color='#C4C4C4' size={40} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        <TouchableOpacity
                                            style={{ padding: 5 }}
                                            onPress={() => this.setState({ star: 1 })}
                                        >
                                            {this.state.star === 1 || this.state.star === 2 || this.state.star === 3 || this.state.star === 4 || this.state.star === 5 ?
                                                <FontAwesome name='star' color='#F1C40F' size={40} />
                                                :
                                                <FontAwesome name='star-o' color='#C4C4C4' size={40} />
                                            }
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{ padding: 5 }}
                                            onPress={() => this.setState({ star: 2 })}
                                        >
                                            {this.state.star === 2 || this.state.star === 3 || this.state.star === 4 || this.state.star === 5 ?
                                                <FontAwesome name='star' color='#F1C40F' size={40} />
                                                :
                                                <FontAwesome name='star-o' color='#C4C4C4' size={40} />
                                            }
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{ padding: 5 }}
                                            onPress={() => this.setState({ star: 3 })}
                                        >
                                            {this.state.star === 3 || this.state.star === 4 || this.state.star === 5 ?
                                                <FontAwesome name='star' color='#F1C40F' size={40} />
                                                :
                                                <FontAwesome name='star-o' color='#C4C4C4' size={40} />
                                            }
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{ padding: 5 }}
                                            onPress={() => this.setState({ star: 4 })}
                                        >
                                            {this.state.star === 4 || this.state.star === 5 ?
                                                <FontAwesome name='star' color='#F1C40F' size={40} />
                                                :
                                                <FontAwesome name='star-o' color='#C4C4C4' size={40} />
                                            }
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{ padding: 5 }}
                                            onPress={() => this.setState({ star: 5 })}
                                        >
                                            {this.state.star === 5 ?
                                                <FontAwesome name='star' color='#F1C40F' size={40} />
                                                :
                                                <FontAwesome name='star-o' color='#C4C4C4' size={40} />
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <TouchableOpacity
                                            style={{ margin: 10, padding: 15, borderRadius: 10, backgroundColor: '#ff80ff' }}
                                            onPress={() => {
                                                this.setState({ modalvisible: false })
                                                this.review(this.state.eng_id, this.state.star)
                                            }}
                                        >
                                            <Text style={{ fontSize: 16, color: '#f2f2f2' }}>
                                                ยืนยัน
                                           </Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>
                        </View>
                    </Modal>
                }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    boxTrainer: {
        margin: 10,
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: 'rgba(30,75,165,0.25)',
        shadowOpacity: 0.4,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    }
});
