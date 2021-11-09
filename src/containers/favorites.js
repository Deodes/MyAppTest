import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Card} from '../components/card';
import {SearchBar} from '../components/search-bar';
import {hs, vs} from '../styles/scaling';
import {normalize} from '../styles/normalize';
import {ROUTES} from '../constants/routes';
import {
  getFavoriteMoviesSelector,
  getMoviesByQuerySelector,
} from '../store/selectors';
import {selectMovie} from '../store/actionCreators';

export const Favorites = ({navigation}) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const movies = value
    ? useSelector(getMoviesByQuerySelector(value))
    : useSelector(getFavoriteMoviesSelector);

  const onPressPoster = item => {
    dispatch(selectMovie(item.id));
    navigation.navigate(ROUTES.DETAILS, {
      id: item.id,
      title: item.title,
      image: item.backdrop_path,
      overview: item.overview,
    });
  };

  const renderItem = useCallback(
    ({item}) => (
      <Card
        path={item.poster_path}
        title={item.title}
        onPress={() => onPressPoster(item)}
        budget={item.details.budget}
        average={item.vote_average}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.id, []);

  const ListEmptyComponent = () => (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>Nothing here...</Text>
    </View>
  );

  const ItemSeparatorComponent = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <SearchBar
        value={value}
        onChange={setValue}
        placeholder="Search..."
        placeholderTextColor="gray"
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        data={movies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
        removeClippedSubviews={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: hs(15),
  },
  content: {
    flexGrow: 1,
    paddingVertical: vs(30),
    paddingHorizontal: hs(15),
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: normalize(20),
    color: 'gray',
    textAlign: 'center',
  },
  separator: {
    height: vs(20),
  },
});
