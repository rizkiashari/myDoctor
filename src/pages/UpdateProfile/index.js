import {getAuth, updatePassword} from 'firebase/auth';
import {getDatabase, ref, update} from 'firebase/database';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {colors, getData, showError, storeData} from '../../utils';
const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    profession: '',
  });
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const updateProfile = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Password kurang dari 6 Karakter');
      } else {
        // Update Password
        updateProfilePassword();
        updateProfileData();
        navigation.replace('MainApp');
      }
    } else {
      updateProfileData();
      navigation.replace('MainApp');
    }
  };

  const updateProfilePassword = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    updatePassword(user, password)
      .then(success => {})
      .catch(error => {
        showError(error.message);
      });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDB;
    const db = getDatabase();
    update(ref(db, `users/${profile.uid}/`), data)
      .then(res => {
        storeData('user', data);
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      response => {
        if (response.didCancel || response.error) {
          showError('Oppss, sepertinya anda tidak memilih fotonya?');
        } else {
          const source = {uri: response.uri};
          setPhotoForDB(`data:${response.type};base64, ${response.data}`);
          setPhoto(source);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove photo={photo} onPress={getImage} />
          <Gap height={26} />
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={value => changeText('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={value => changeText('profession', value)}
          />
          <Gap height={24} />
          <Input label="Email Address" value={profile.email} disable />
          <Gap height={24} />
          <Input
            label="Password"
            value={password}
            secureTextEntry
            onChangeText={value => setPassword(value)}
          />
          <Gap height={40} />
          <Button title="Save Profile" onPress={updateProfile} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
