import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



// Section Props
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch(err => {
      console.error('Failed to open URL:', err);
    });
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.safeArea]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.headerContainer}>
          <Image
            source={require('./Gambar.png')}
            style={styles.profileImage}
          />
          <Text style={styles.headerText}>Selamat Datang</Text>
        </View>

        <View style={styles.bodyContainer}>
          <Section title="Nama">M. Nazhmi Najib A.</Section>
          <Section title="NIM">22/504674/SV/21678</Section>
          <Section title="Kelas">B</Section>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Kontak</Text>
            <TouchableOpacity
              style={styles.socialLink}
              onPress={() => handleLinkPress('https://wa.me/1234567890')}>
              <FontAwesome name="whatsapp" size={24} color="#25D366" />
              <Text style={styles.socialText}>WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialLink}
              onPress={() => handleLinkPress('https://www.linkedin.com/in/username/')}>
              <FontAwesome name="linkedin" size={24} color="#0077B5" />
              <Text style={styles.socialText}>LinkedIn</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialLink}
              onPress={() => handleLinkPress('https://github.com/username')}>
              <FontAwesome name="github" size={24} color="#000" />
              <Text style={styles.socialText}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4A90E2',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  bodyContainer: {
    padding: 20,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  sectionDescription: {
    fontSize: 16,
    fontWeight: '400',
  },
  socialLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  socialText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default App;
