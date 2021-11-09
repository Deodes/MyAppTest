import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, ActivityIndicator, FlatList, View} from 'react-native';
import {Poster} from '../components/poster';
import {getMovies} from '../store/thunks';
import {hs, vs} from '../styles/scaling';
import {ROUTES} from '../constants/routes';
import {selectMovie} from '../store/actionCreators';

export const Movies = ({navigation}) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const {fetching, movies, page, isReached} = useSelector(state => state);

  useEffect(() => {
    setLoading(false);
  }, [movies]);

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(getMovies());
    }
  }, []);

  const onEndReached = () => {
    setLoading(true);
    dispatch(getMovies(page + 1));
  };

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
      <Poster
        path={item.poster_path}
        title={item.title}
        onPress={() => onPressPoster(item)}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.id, []);

  const ListEmptyComponent = () => (
    <View style={styles.empty}>
      <ActivityIndicator size="small" />
    </View>
  );

  const ItemSeparatorComponent = () => <View style={styles.separator} />;

  const ListFooterComponent = () => (
    <View style={styles.footer}>
      <ActivityIndicator size="small" />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        data={movies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={loading ? ListFooterComponent : null}
        onEndReached={isReached || fetching ? null : onEndReached}
        onEndReachedThreshold={0.01}
        removeClippedSubviews={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  separator: {
    height: vs(70),
  },
  footer: {
    paddingVertical: vs(20),
    alignItems: 'center',
  },
});
