import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView, Modal, Image, AsyncStorage } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import Config from '../components/config';

export default class Requirement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['ชื่อ', 'คอร์ส', 'รายละเอียด',],
            tableData: [
                ['พชร', 'เพิ่มกล้าม', '3'],
                ['วิษณุ', 'เพิ่มกล้าม', 'c'],
                ['ภคพงษ์', 'ลดหุ่น', '3'],
                ['สุภาดา', 'ลดหุ่น', 'c']
            ],

            modalVisible: false,
            TID: '',
            listUser: [],
            data: [],
            all_use: [],
            no: ''

        }
        // this.get_id()
        this.get_listUser()
    }

    _alertIndex(index) {
        Alert.alert(`This is row ${index + 1}`);
    }
    get_id = async () => {
        try {
            const account_id = await AsyncStorage.getItem('account_id');
            this.setState({ TID: account_id })
        }
        catch (error) {
            // Error retrieving data
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    goback() {
        Actions.pop()
    }
    get_listUser = async () => {
        try {
            const account_id = await AsyncStorage.getItem('account_id');

            await fetch(Config.url + 'server/api/Cousre/show_engage?seeby=t&TID=' + account_id)
                .then((response) => response.json())
                .then((responseJson) => this.setState({ listUser: responseJson }));
            let i = 0;
            let data = [];
            for (i = 0; i < this.state.listUser.length; i++) {
                data[i] = [this.state.listUser[i].firstname, this.state.listUser[i].CName, '']
            }
            await this.setState({ data: data })
            await this.setState({ all_use: this.state.listUser })
            // console.log(this.state.data)
            // console.log(this.state.tableData)

        }
        catch (error) {
            // Error retrieving data
        }
        // fetch(Config.url + 'server/api/Cousre/get_course')
        //     .then((response) => response.json())
        //     .then((responseJson) => this.setState({ listUser: responseJson }));

    }


    render() {
        const state = this.state;
        const element = (data, index) => (
            <TouchableOpacity onPress={async () => {
                this.setModalVisible(true);
                await this.setState({ no: index })
            }}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>รายละเอียด</Text>
                </View>
            </TouchableOpacity>
        );

        return (
            <View style={styles.container}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: '#ffffff', marginHorizontal: 20, borderRadius: 10 }}>
                            <View style={{ alignItems: "center" }}>
                                <Text style={{
                                    justifyContent: "center",
                                    paddingTop: 10,
                                    textAlign: 'center',
                                    color: '#62757f',
                                    fontSize: 20,
                                    fontWeight: '500',
                                }}>รายละเอียดผู้เรียน</Text>
                            </View>

                            <ScrollView>
                                <View style={{ alignItems: "flex-start", marginLeft: 10 }}>
                                    <View style={{ justifyContent: "flex-start" }}>
                                        {this.state.listUser[this.state.no] ?
                                            <Text style={{ fontSize: 18 }}>

                                                ชื่อ : {this.state.listUser[this.state.no].firstname} {this.state.listUser[this.state.no].lastname}{'\n'}
                                                ชื่อเล่น : {this.state.listUser[this.state.no].nickname} {'\n'}
                                                คอร์สที่เรียน : {this.state.listUser[this.state.no].CName} {'\n'}
                                                น้ำหนัก : {this.state.listUser[this.state.no].weight} {'\n'}
                                                ส่วนสูง : {this.state.listUser[this.state.no].height} {'\n'}
                                                เพศ : {this.state.listUser[this.state.no].gender === 'male' ? 'ชาย' : 'หญิง'} {'\n'}
                                                เบอร์โทรศัพท์ : {this.state.listUser[this.state.no].telephone} {'\n'}
                                                อีเมล : {this.state.listUser[this.state.no].email} {'\n'}
                                            </Text>
                                            :
                                            <Text>
                                            </Text>
                                        }
                                    </View>
                                    <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setModalVisible(false);
                                            }} style={{
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
                                                fontSize: 16,
                                                fontWeight: '300',
                                                textAlign: "center",
                                            }} >ปิด</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>

                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 12 }} >
                    <View style={{ marginTop: 30, marginStart: 10, flex: 1, }}>
                        <TouchableOpacity onPress={() => { this.goback() }}>
                            <FontAwesome name="chevron-left" size={40} color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 5, alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.home}>
                            <Text style={{
                                paddingTop: 40,
                                color: '#eeeeee',
                                fontSize: 30,
                                fontWeight: '500',
                            }}>Find Trainer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 30, marginStart: 10, flex: 1 }}>
                        <TouchableOpacity onPress={this.userprofile}>

                            <FontAwesome name="user" size={40} color='#fff' />

                        </TouchableOpacity>
                    </View>
                </View>
                <Table borderStyle={{ borderColor: 'transparent' }}>
                    <View style={{ alignItems: "center" }}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    </View>
                    {
                        state.data.map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (
                                        <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.textdetail} />
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    head: { height: 50, backgroundColor: '#62757f', },
    text: { margin: 6, alignItems: "center", fontSize: 16, color: "#fff" },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1', alignItems: "center" },
    btn: { width: 71, height: 20, backgroundColor: '#78B7BB', borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff', width: 71 },
    textdetail: { margin: 6, alignItems: "center", fontSize: 16, }
});