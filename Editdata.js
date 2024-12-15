import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, TextInput, Button, StyleSheet, Text, FlatList, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare, faMountain, faSync, faSave } from '@fortawesome/free-solid-svg-icons';

const Createdata = () => {
    const jsonUrl = 'http://192.168.245.121:3000/mahasiswa';
    const [disaster, setDisaster] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [alamat, setAlamat] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState([]);
    const [refresh, setRefresh] = useState(false);

    // Fetch data from server
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(jsonUrl);
            if (!response.ok) throw new Error(`Error ${response.status}`);
            const json = await response.json();
            setDataUser(json);
        } catch (error) {
            Alert.alert('Error', 'Failed to fetch data from server. Please check your connection.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refreshPage = async () => {
        setRefresh(true);
        await fetchData();
        setRefresh(false);
    };

    const selectItem = (item) => {
        setSelectedUser(item);
        setDisaster(item.disaster);
        setDeskripsi(item.deskripsi);
        setAlamat(item.alamat);
    };

    const submit = async () => {
        if (!disaster || !deskripsi || !alamat) {
            Alert.alert('Validation Error', 'Please fill in all fields before saving.');
            return;
        }

        const data = {
            disaster,
            deskripsi,
            alamat,
        };

        try {
            const response = await fetch(`${jsonUrl}/${selectedUser?.id}`, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error(`Error ${response.status}`);

            await response.json();
            Alert.alert('Success', 'Data has been successfully updated.');
            setDisaster('');
            setDeskripsi('');
            setAlamat('');
            setSelectedUser(null);
            refreshPage();
        } catch (error) {
            Alert.alert('Error', 'Failed to save data. Please try again.');
        }
    };

    return (
        <SafeAreaView>
            <View>
                {isLoading ? (
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={styles.cardtitle}>Loading...</Text>
                    </View>
                ) : (
                    <ScrollView>
                        <View style={styles.formContainer}>
                            <Text style={styles.title}>Edit Data</Text>
                            <View style={styles.form}>
                                <TextInput
                                    placeholder="Nama EWS"
                                    value={disaster}
                                    onChangeText={setDisaster}
                                    style={styles.input}
                                />
                                <TextInput
                                    placeholder="Deskripsi EWS"
                                    value={deskripsi}
                                    onChangeText={setDeskripsi}
                                    style={styles.input}
                                />
                                <TextInput
                                    placeholder="Alamat"
                                    value={alamat}
                                    onChangeText={setAlamat}
                                    style={styles.input}
                                />
                                <TouchableOpacity style={styles.button} onPress={submit}>
                                    <FontAwesomeIcon icon={faSave} size={18} color="white" />
                                    <Text style={styles.buttonText}> Save Changes</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.divider}></View>

                        <TouchableOpacity style={styles.refreshButton} onPress={refreshPage}>
                            <FontAwesomeIcon icon={faSync} size={18} color="white" />
                            <Text style={styles.refreshButtonText}> Refresh Data</Text>
                        </TouchableOpacity>

                        <FlatList
                            data={dataUser}
                            keyExtractor={(item) => item.id.toString()}
                            onRefresh={refreshPage}
                            refreshing={refresh}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => selectItem(item)}>
                                    <View style={styles.card}>
                                        <View style={styles.avatar}>
                                            <FontAwesomeIcon icon={faMountain} size={50} color={item.color || '#FFD700'} />
                                        </View>
                                        <View style={styles.cardContent}>
                                            <Text style={styles.cardtitle}>{item.disaster}</Text>
                                            <ScrollView style={styles.cardDescription}>
                                                <Text>{item.deskripsi}</Text>
                                            </ScrollView>
                                            <ScrollView style={styles.cardAddress}>
                                                <Text>{item.alamat}</Text>
                                            </ScrollView>
                                        </View>
                                        <View style={styles.editIconContainer}>
                                            <FontAwesomeIcon icon={faPenToSquare} size={20} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </ScrollView>
                )}
            </View>
        </SafeAreaView>
    );
};

export default Createdata;

const styles = StyleSheet.create({
    title: {
        paddingVertical: 15,
        backgroundColor: '#FF6347',
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    formContainer: {
        marginTop: 20,
        marginHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#FF6347',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    form: {
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginVertical: 8,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#FF6347',
        paddingVertical: 12,
        borderRadius: 8,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    refreshButton: {
        flexDirection: 'row',
        backgroundColor: '#FF6347',
        paddingVertical: 12,
        borderRadius: 8,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    refreshButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    card: {
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#ddd',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 10,
        alignItems: 'center',
    },
    cardtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    avatar: {
        borderRadius: 50,
        backgroundColor: '#eee',
        padding: 15,
        marginRight: 15,
    },
    editIconContainer: {
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 10,
    },
    cardContent: {
        flex: 1,
    },
    cardDescription: {
        maxHeight: 100,
    },
    cardAddress: {
        maxHeight: 60,
    },
});
