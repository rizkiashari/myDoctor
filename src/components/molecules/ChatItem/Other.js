import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor2} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor2} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  date: {
    fontFamily: fonts.primary.normal,
    fontSize: 11,
    color: colors.text.secondary,
    marginTop: 8,
  },
  avatar: {height: 30, width: 30, borderRadius: 30 / 2, marginRight: 12},
});
