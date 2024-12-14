import React, {useState} from 'react'
import { SafeAreaView, View, ScrollView, TextInput, Text, Button, StyleSheet }
from 'react-native';

const Createdata = () => {
    const jsonUrl = 'http://192.168.245.121:3000/Mahasiswa';
    const [disaster, setDisaster] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [alamat, setAlamat] = useState('');

    const submit = () => {
        const data = {
          disaster: disaster,
          deskripsi: deskripsi,
          alamat: alamat,
        };
        fetch('http://192.168.245.121:3000/mahasiswa', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        .then((response) => response.json())
   .then((json) => {
     console.log(json);
     alert('Data tersimpan');
     setDisaster('');
     setDeskripsi('');
     setAlamat('');
   })
 }



    return (
        <SafeAreaView>
         <View>
                <Text style={styles.title}>Tambah Data Bencana</Text>
                <ScrollView style={styles.form}>
                    <TextInput style={styles.input} placeholder="Nama Depan" value={disaster} onChangeText={(value) => setDisaster(value)} />
                    <TextInput style={styles.input} placeholder="Nama Belakang" value={deskripsi} onChangeText={(value) => setDeskripsi(value)} />
                    <TextInput style={styles.input} placeholder="Kelas" value={alamat} onChangeText={(value) => setAlamat(value)} />
                    <Button title="Simpan" style={styles.button} onPress={submit} />
                </ScrollView>
            </View>
        </SafeAreaView>
       )

       
       
}

export default Createdata

const styles = StyleSheet.create({
    title: {
      paddingVertical: 12,
      backgroundColor: '#333',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    form: {
      padding: 10,
      marginBottom: 100,
    },

    input: {
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 8,
        padding: 8,
        width: '100%',
        marginVertical: 5,
      },
      button: {
        marginVertical: 10,
      }
     })
     