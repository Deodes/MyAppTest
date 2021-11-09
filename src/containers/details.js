import React, {useEffect, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  Linking,
  FlatList,
  View,
  Text,
} from 'react-native';
import {Profile} from '../components/profile';
import {HeaderRight} from '../components/header-right';
import FastImage from 'react-native-fast-image';
import {
  getMoviesDetails,
  getMoviesReviews,
  getMoviesCredits,
} from '../store/thunks';
import {toggleFavoriteMovie} from '../store/actionCreators';
import {getSelectedMovieSelector} from '../store/selectors';
import {vs, hs} from '../styles/scaling';
import {normalize} from '../styles/normalize';

export const Details = ({navigation, route}) => {
  const dispatch = useDispatch();

  const {title, image, overview, id} = route?.params;

  const {favorite, details, credits} = useSelector(getSelectedMovieSelector);

  const {homepage} = details || {};
  const {cast} = credits || {};

  const onToggleFavorite = () => {
    dispatch(toggleFavoriteMovie(id));
  };

  const onPressHomepage = () => {
    Linking.openURL(homepage);
  };

  const renderItem = ({item}) => (
    <Profile
      path={item.profile_path}
      name={item.name}
      character={item.character}
    />
  );

  const keyExtractor = item => item.id;

  const ItemSeparatorComponent = () => <View style={styles.separator} />;

  const ListEmptyComponent = () => (
    <Text style={styles.empty}>Unknown actors</Text>
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerRight: () => (
        <HeaderRight active={favorite} onPress={onToggleFavorite} />
      ),
    });
  }, [favorite]);

  useEffect(() => {
    async function getAllData() {
      await Promise.all([
        dispatch(getMoviesDetails(id)),
        dispatch(getMoviesReviews(id)),
        dispatch(getMoviesCredits(id)),
      ]);
    }

    getAllData();
  }, []);

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={{
          uri: image,
          priority: FastImage.priority.high,
        }}
      />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.overview}>{overview}</Text>
        {homepage ? (
          <Text style={styles.homepage}>
            Homepage:{' '}
            <Text style={styles.link} onPress={onPressHomepage}>
              {homepage}
            </Text>
          </Text>
        ) : null}
        <FlatList
          data={cast}
          style={styles.list}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListEmptyComponent={ListEmptyComponent}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: hs(15),
  },
  image: {
    width: '100%',
    height: vs(350),
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'gray',
    resizeMode: FastImage.resizeMode.cover,
  },
  overview: {
    marginBottom: vs(10),
  },
  homepage: {
    marginBottom: vs(10),
  },
  link: {
    color: 'blue',
  },
  list: {
    marginBottom: vs(10),
  },
  separator: {
    width: hs(10),
  },
  empty: {
    fontSize: normalize(14),
    color: 'gray',
  },
});
