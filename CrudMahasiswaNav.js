import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './App';
import Mahasiswa from './Mahasiswa';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faEdit, faPlusCircle, faList, faMap, faHouse, faNewspaper} from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { WebView } from 'react-native-webview';
import Home from './home';
import Datamahasiswa from './Listdata';
import Editdata from './Editdata';

const webmap = require('./Map.html')

function HomeScreen() {
  return (
    <Home />
  );
}

function DataMahasiswaScreen() {
  return (
    <Datamahasiswa />
  );
}
function EditdataScreen() {
  return (
    <Editdata />
  );
}

function MapsScreen() {
  return (
    <WebView
        source={webmap}
      />
  );
}
function WebScreen() {
  return (
    <WebView
      source={{ uri: 'https://www.youtube.com/watch?v=WOkmg8tlvck' }}
      style={{ flex: 1 }}
    />
  );}

function ProfileScreen() {
  return (
    <Profile />
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} 
      options={{ headerShown: false,
        tabBarIcon: ({ color }) => (
          <FontAwesomeIcon icon={faHouse} color={color} size={20} />
        ),}}/>
        <Tab.Screen name="List Data" component={DataMahasiswaScreen}  options={{ headerShown: false,
        tabBarIcon: ({ color }) => (
          <FontAwesomeIcon icon={faList} color={color} size={20} />
        ),}}/>
        <Tab.Screen name="Edit" component={EditdataScreen} options={{ headerShown: false,
        tabBarIcon: ({ color }) => (
          <FontAwesomeIcon icon={faEdit} color={color} size={20} />
        ),}}/>
        <Tab.Screen name="Peta" component={MapsScreen}  options={{ headerShown: false,
        tabBarIcon: ({ color }) => (
          <FontAwesomeIcon icon={faMap} color={color} size={20} />
        ),}}/>
        <Tab.Screen
          name="Update"
          component={WebScreen}
          options={{headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faNewspaper} color={color} size={20} />,
          }}
        />
      <Tab.Screen name="Profile" component={ProfileScreen}  options={{ headerShown: false,
        tabBarIcon: ({ color }) => (
          <FontAwesomeIcon icon={faUser} color={color} size={20} />
        ),}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}