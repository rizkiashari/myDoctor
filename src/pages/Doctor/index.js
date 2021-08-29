import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, fonts} from '../../utils';
import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  DummyNews1,
  DummyNews2,
  DummyNews3,
  JSONCategoryDoctor,
} from '../../assets';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperContent}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {JSONCategoryDoctor.data.map(item => {
                  return (
                    <DoctorCategory
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperContent}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor
              profile={DummyDoctor1}
              name="Alexa Rachel"
              category="Pediatrician"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              profile={DummyDoctor2}
              name="Sunny Frank"
              category="Dentist"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              profile={DummyDoctor3}
              name="Poe Minn"
              category="Podiatrist"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem
            newsPic={DummyNews1}
            judul="Is it safe to stay at home during coronavirus?"
            date="Today"
          />
          <NewsItem
            newsPic={DummyNews2}
            judul="Consume yellow citrus 
            helps you healthier?"
            date="Today"
          />
          <NewsItem
            newsPic={DummyNews3}
            judul="Learn how to make a 
            proper orange juice at home"
            date="Today"
          />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginBottom: 16,
    color: colors.text.primary,
    maxWidth: 209,
  },
  category: {flexDirection: 'row'},
  wrapperScroll: {
    marginHorizontal: -16,
  },
  content: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapperContent: {paddingHorizontal: 16},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginBottom: 16,
    marginTop: 30,
  },
});
