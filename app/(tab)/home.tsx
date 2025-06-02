import React, { useState } from 'react';
import {
  View, Text, FlatList, ScrollView,
  TouchableOpacity, StyleSheet, Image, RefreshControl
} from 'react-native';
import { useRouter } from 'expo-router';

const DATA = [
  {
    id: '1',
    title: 'Chạm đáy nỗi đau',
    artist: 'ERIK',
    image: 'https://i.scdn.co/image/ab67616d0000b2735a85b345cb9461f3aa400dc1',
    audio: 'https://samplelib.com/lib/preview/mp3/sample-3s.mp3',
  },
  {
    id: '2',
    title: '3107',
    artist: 'Duongg',
    image: 'https://i.scdn.co/image/ab67616d0000b2735a85b345cb9461f3aa400dc1',
    audio: 'https://samplelib.com/lib/preview/mp3/sample-6s.mp3',
  },
  {
    id: '3',
    title: 'Em của ngày hôm qua',
    artist: 'Sơn Tùng MTP',
    image: 'https://i.scdn.co/image/ab67616d0000b2735a85b345cb9461f3aa400dc1',
    audio: 'https://samplelib.com/lib/preview/mp3/sample-9s.mp3',
  },
];

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const goToPlayer = (item) => {
    router.push({
      pathname: '/PlayMusic',
      params: {
        title: item.title,
        artist: item.artist,
        image: item.image,
        audio: item.audio,
      },
    });
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <Text style={styles.title}>🎧 Gợi ý hôm nay</Text>
      <FlatList
        horizontal
        data={DATA}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToPlayer(item)} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text numberOfLines={1} style={styles.songTitle}>{item.title}</Text>
            <Text numberOfLines={1} style={styles.artist}>{item.artist}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.title}>🔥 Bài hát hot</Text>
      {DATA.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => goToPlayer(item)} style={styles.verticalCard}>
          <Image source={{ uri: item.image }} style={styles.verticalImage} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.songTitle}>{item.title}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', margin: 15, marginTop: 30 },
  card: { marginRight: 15, width: 170 },
  image: { width: 170, height: 170, borderRadius: 10 },
  songTitle: { fontSize: 14, fontWeight: '600' },
  artist: { fontSize: 12, color: '#666' },
  verticalCard: {
    flexDirection: 'row', alignItems: 'center',
    marginVertical: 10, marginHorizontal: 10
  },
  verticalImage: { width: 60, height: 60, borderRadius: 8 },
});
