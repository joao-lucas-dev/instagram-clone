import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import Post from '~/components/Post';
import api from '~/services/api';

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);

  async function loadPage() {
    const response = await api.get(
      `/feed?_expand=author&_limit=4&_page=${page}`
    );

    setFeed([...feed, ...response.data]);
    setPage(page + 1);
  }

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <View>
      <FlatList
        data={feed}
        keyExtractor={(post) => String(post.id)}
        onEndReached={loadPage}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => <Post item={item} />}
      />
    </View>
  );
}
