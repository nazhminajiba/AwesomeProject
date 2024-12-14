import React from 'react';
import { faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUser, faIdCard, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const App = () => {
  // Animation for logo
  const fadeAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  // Function to open links
  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error('Failed to open URL:', err)
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Animated Profile Image */}
        <Animated.Image
          source={require('./Gambar.png')}
          style={[styles.profileImage, { opacity: fadeAnim }]}
        />

        {/* Title */}
        <Text style={styles.title}>Selamat Datang</Text>

        {/* Introductory Section */}
        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <Text style={styles.cardTitle}>Profil</Text>

          {/* Name */}
          <TouchableOpacity style={styles.profileItem} onPress={() => alert('This is your name!')}>
            <FontAwesomeIcon icon={faUser} size={24} style={styles.icon} />
            <Text style={styles.description}>Nama: M. Nazhmi Najib A.</Text>
          </TouchableOpacity>

          {/* NIM */}
          <TouchableOpacity style={styles.profileItem} onPress={() => alert('This is your NIM!')}>
            <FontAwesomeIcon icon={faIdCard} size={24} style={styles.icon} />
            <Text style={styles.description}>NIM: 22/504674/SV/21678</Text>
          </TouchableOpacity>

          {/* Class */}
          <TouchableOpacity style={styles.profileItem} onPress={() => alert('This is your class!')}>
            <FontAwesomeIcon icon={faChalkboardTeacher} size={24} style={styles.icon} />
            <Text style={styles.description}>Kelas: B</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Links Section */}
        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <Text style={styles.cardTitle}>Kontak</Text>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => openLink('https://wa.me/6281331485604')}
          >
            <FontAwesomeIcon icon={faWhatsapp} size={25} style={styles.icon} />
            <Text style={styles.linkText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => openLink('https://github.com/nazhminajib')}
          >
            <FontAwesomeIcon icon={faGithub} size={25} style={styles.icon} />
            <Text style={styles.linkText}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => openLink('https://www.linkedin.com/in/muhammad-nazhmi-najib-al-akhdhar-7584a0248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}
          >
            <FontAwesomeIcon icon={faLinkedin} size={25} style={styles.icon} />
            <Text style={styles.linkText}>LinkedIn</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#FF5722',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#FF5722',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF5722',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    width: '100%',
    maxWidth: 380,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF5722',
    marginBottom: 15,
    textAlign: 'center',
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#FF5722',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  icon: {
    marginRight: 12, // Space between the icon and text
    color: '#fff',
  },
  description: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'left',
    lineHeight: 28,
    fontFamily: 'Arial',
  },
  linkContainer: {
    flexDirection: 'column', // Stack buttons vertically
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
    maxWidth: 380,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 15, // Add spacing between buttons
    width: '100%',
    maxWidth: 300,
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
