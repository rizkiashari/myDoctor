import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Button} from '../..';
import {colors, fonts} from '../../../utils';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis Pesan Untuk Nairobi" />
      <Button title="send" type="btn-icon-send" />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {padding: 16, flexDirection: 'row'},
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    flex: 1,
    borderRadius: 10,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
});
