import {StyleSheet, Text, View, Button, Pressable, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {changeIcon, getIcon} from 'react-native-change-icon';

export default function App() {
  const [activeLogo, setActiveLogo] = useState('logo_1');

  useEffect(() => {
    const getCurrentIcon = async () => {
      const currentIcon = await getIcon();
      console.log(currentIcon);
      setActiveLogo(currentIcon === 'default' ? 'logo_1' : currentIcon);
    };

    getCurrentIcon();
  }, []);

  const onChangeLogo = async (logoName = 'logo_1') => {
    try {
      const response = await changeIcon(logoName);
      console.log(response);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.desc}>Dynamic App Icon</Text>
      <Pressable
        onPress={() => onChangeLogo('logo_1')}
        style={styles.customBtn}>
        <Text style={styles.iconText}>Change app icon-1</Text>
      </Pressable>
      <Pressable
        onPress={() => onChangeLogo('logo_2')}
        style={styles.customBtn}>
        <Text style={styles.iconText}>Change app icon-2</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
  },
  iconText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  customBtn: {
    width: 250,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'purple',
    padding: 10,
    margin: 5,
  },
});
