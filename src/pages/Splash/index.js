import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {ILLogo} from '../../assets';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, user => {
        if (user) {
          // User lagi login
          console.log('user: ', user);
          navigation.replace('MainApp');
        } else {
          //  User Logout
          navigation.replace('GetStarted');
        }
      });
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});
