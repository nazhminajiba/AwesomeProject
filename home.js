import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Animated, ScrollView, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

const EarlyWarningSystem = () => {
  const fadeAnim = new Animated.Value(0);
  const [expanded, setExpanded] = React.useState(null); // Track which item is expanded
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(''); // Content for the modal

  // Animation when component appears
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  // Function to handle expanding description
  const handleImagePress = (index) => {
    switch(index) {
      case 0:
        setModalContent("Sistem peringatan dini awan panas dirancang untuk memantau aktivitas vulkanik Gunung Merapi, memberikan informasi evakuasi kepada masyarakat di sekitar lereng gunung.");
        break;
      case 1:
        setModalContent("Sistem peringatan dini banjir lahar mendeteksi aliran material vulkanik yang terbawa hujan setelah erupsi, membantu masyarakat menghindari jalur aliran sungai.");
        break;
      case 2:
        setModalContent("Sistem ini mendeteksi potensi tanah longsor akibat curah hujan tinggi dan memberikan peringatan kepada wilayah dengan kemiringan tanah yang rawan.");
        break;
      default:
        setModalContent("");
    }
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>Sleman Guard</Text>
          <Text style={styles.subtitle}>
            Aplikasi ini membantu Anda tetap waspada dengan memberikan informasi terkini terkait sistem peringatan dini di wilayah Sleman.
          </Text>
          <Animated.Image
            source={require('./Merapi.jpg')}
            style={[styles.headerImage, { opacity: fadeAnim }]}
          />
        </View>

        {/* Introductory Section */}
        <View style={styles.card}>
          <Text style={styles.introText}>
            Selamat datang Sleman Guard, aplikasi yang memberikan informasi terkini mengenai sistem peringatan dini untuk berbagai potensi bencana di wilayah Sleman. Aplikasi ini bertujuan untuk meningkatkan kesiapsiagaan masyarakat terhadap ancaman bencana seperti awan panas, banjir lahar, dan tanah longsor.
          </Text>
        </View>

        {/* Early Warning Systems List Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Jenis Sistem Peringatan Dini</Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.listContainer}>
            {/* Item 1 */}
            <View style={styles.listItemContainer}>
              <TouchableOpacity
                onPress={() => handleImagePress(0)} // Pass index to the function
                style={styles.listImageContainer}
              >
                <Image source={require('./2010.jpg')} style={styles.listImage} />
              </TouchableOpacity>
              <Text style={styles.listItem}>1. EWS Awan Panas</Text>
            </View>

            {/* Item 2 */}
            <View style={styles.listItemContainer}>
              <TouchableOpacity
                onPress={() => handleImagePress(1)} // Pass index to the function
                style={styles.listImageContainer}
              >
                <Image source={require('./Banjirlahar.jpg')} style={styles.listImage} />
              </TouchableOpacity>
              <Text style={styles.listItem}>2. EWS Banjir Lahar</Text>
            </View>

            {/* Item 3 */}
            <View style={styles.listItemContainer}>
              <TouchableOpacity
                onPress={() => handleImagePress(2)} // Pass index to the function
                style={styles.listImageContainer}
              >
                <Image source={require('./tanahlongsor.jpg')} style={styles.listImage} />
              </TouchableOpacity>
              <Text style={styles.listItem}>3. EWS Tanah Longsor</Text>
            </View>
          </ScrollView>
        </View>

        {/* Modal for displaying the description */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Informasi Sistem Peringatan Dini</Text>
              <Text style={styles.modalText}>{modalContent}</Text>
              <TouchableHighlight
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Tutup</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF5E1',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#FF7043',
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFE0B2',
    textAlign: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },

  introText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 28,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    width: '100%',
    maxWidth: 380,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF7043',
    marginBottom: 15,
    textAlign: 'center',
  },
  listContainer: {
    marginTop: 10,
  },
  listItemContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  listImageContainer: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#FF7043',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  listImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  listItem: {
    fontSize: 18,
    color: '#FF7043',
    textAlign: 'center',
    lineHeight: 26,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FF7043',
  },
  modalText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
  },
  closeButton: {
    backgroundColor: '#FF7043',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default EarlyWarningSystem;
