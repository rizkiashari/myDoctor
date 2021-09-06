import {getAuth, signOut} from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {Gap, Header, List, Profile} from '../../components';
import {colors, getData, showError} from '../../utils';
const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILNullPhoto,
  });
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(res);
    });
  }, []);
  const signOuts = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigation.replace('GetStarted');
      })
      .catch(error => {
        showError(error.message);
      });
  };
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile
          name={profile.fullName}
          desc={profile.profession}
          photo={profile.photo}
        />
      )}
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Languange"
        desc="Last Update Yesterday"
        type="next"
        icon="language"
      />
      <List
        name="Give Us Rate"
        desc="Last Update Yesterday"
        type="next"
        icon="rate"
      />
      <List
        name="Sign Out"
        desc="Last Update Yesterday"
        type="next"
        icon="help"
        onPress={signOuts}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
});
