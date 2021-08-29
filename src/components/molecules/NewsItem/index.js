import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyNews1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const NewsItem = ({newsPic, judul, date}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{judul}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={newsPic} style={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: '90%',
  },
  titleWrapper: {flex: 1},
  image: {width: 80, height: 60, borderRadius: 11},
  date: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
