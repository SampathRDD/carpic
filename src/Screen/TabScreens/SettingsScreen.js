import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const SettingsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      
      <View style={styles.card}>
        {/* Log out button */}
        <TouchableOpacity onPress={ () => {
                    AsyncStorage.clear();
                    props.navigation.replace('Auth');
                  }} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
        
        {/* Divider line */}
        <View style={styles.divider} />
        
        {/* Other settings options */}
        {/* Add more settings options here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  card: {
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  logoutButton: {
    backgroundColor: '#FF5733',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
});

export default SettingsScreen;
