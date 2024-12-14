import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert, Linking, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faMountain, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Listdata = () => {
    const jsonUrl = 'http://192.168.245.121:3000/mahasiswa';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                setDataUser(json);
                setFilteredData(json);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                setDataUser(json);
                setFilteredData(json);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    function deleteData(id) {
        fetch(`${jsonUrl}/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then(() => {
                alert('Data terhapus');
                refreshPage();
            });
    }

    const openGoogleMaps = (latitude, longitude) => {
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        Linking.openURL(url);
    };

    const handleSearch = (text) => {
        setSearchQuery(text);

        if (text.trim() === '') {
            setFilteredData(dataUser); // Kembali ke data asli jika input kosong
            return;
        }

        const filtered = dataUser.filter(item => {
            const fullName = `${item.first_name} ${item.last_name}`.toLowerCase();
            const disasterName = item.disaster.toLowerCase();
            return (
                fullName.includes(text.toLowerCase()) || 
                disasterName.includes(text.toLowerCase())
            );
        });

        setFilteredData(filtered);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>List EWS</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by name"
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>

            {isLoading ? (
                <View style={styles.loader}>
                    <Text style={styles.cardtitle}>Loading...</Text>
                </View>
            ) : (
                <FlatList
                    style={styles.list}
                    data={filteredData}
                    onRefresh={refreshPage}
                    refreshing={refresh}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            {/* Card Content */}
                            <TouchableOpacity onPress={() => openGoogleMaps(item.latitude, item.longitude)}>
                                <View style={styles.card}>
                                    <View style={styles.avatar}>
                                        <FontAwesomeIcon icon={faMountain} size={50} color={item.color || '#FFD700'} />
                                    </View>
                                    <View style={styles.cardText}>
                                        <Text style={styles.cardtitle}>{item.disaster}</Text>
                                        <Text style={styles.cardInfo}>{item.deskripsi}</Text>
                                        <Text style={styles.cardInfo}>{item.alamat}</Text>
                                    </View>
                                    <View style={styles.arrowContainer}>
                                        <FontAwesomeIcon icon={faChevronRight} size={20} color="#007bff" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            {/* Delete Button inside the Card */}
                            <View style={styles.deleteButtonContainer}>
                                <TouchableOpacity
                                    style={styles.deleteButton}
                                    onPress={() => Alert.alert('Hapus data', 'Yakin akan menghapus data ini?', [
                                        { text: 'Tidak', onPress: () => console.log('button tidak') },
                                        { text: 'Ya', onPress: () => deleteData(item.id) },
                                    ])}
                                >
                                    <FontAwesomeIcon icon={faTrashAlt} size={20} color="white" />
                                    <Text style={styles.buttonText}>Hapus</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            )}
        </SafeAreaView>
    );
}

export default Listdata;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
    },
    header: {
        backgroundColor: '#FF6347',
        padding: 15,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    searchContainer: {
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 16,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    list: {
        marginBottom: 0,
    },
    cardContainer: {
        marginBottom: 15,
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatar: {
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        flex: 1,
        marginLeft: 15,
    },
    cardtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    cardInfo: {
        fontSize: 14,
        color: '#666',
    },
    arrowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteButtonContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    deleteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF6347',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '80%',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
