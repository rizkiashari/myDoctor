import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DummyHospital1, DummyHospital2, DummyHospital3} from '../../assets';
import {ILHospitalsBG} from '../../assets/ilustration';
import {ListHospital} from '../../components';
import {colors, fonts} from '../../utils';
const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalsBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
          pic={DummyHospital2}
        />
        <ListHospital
          type="Rumah Sakit"
          name="Happy Family & Kids"
          address="Jln. Surya Sejahtera 20"
          pic={DummyHospital1}
        />
        <ListHospital
          type="Rumah Sakit"
          name="Tingkatan Paling Atas"
          address="Jln. Surya Sejahtera 20"
          pic={DummyHospital3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  background: {
    paddingTop: 30,
    height: 240,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.white,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
    flex: 1,
  },
});
