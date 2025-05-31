import React from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PlayerScreen() {
  const navigation = useNavigation();
  const { title, artist, image } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        {/* <Ionicons name="chevron-back" size={28} color="#fff" /> */}
      </TouchableOpacity>

      <Image source={{ uri: image }} style={styles.albumArt} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.artist}>{artist}</Text>

      <View style={styles.controls}>
        <Ionicons name="play-skip-back" size={36} color="#fff" />
        <TouchableOpacity style={styles.playBtn}>
          <Ionicons name="play" size={40} color="#000" />
        </TouchableOpacity>
        <Ionicons name="play-skip-forward" size={36} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#121212', flex: 1, alignItems: 'center', justifyContent: 'center' },
  backBtn: { position: 'absolute', top: 50, left: 20 },
  albumArt: { width: 260, height: 260, borderRadius: 20, marginBottom: 30 },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  artist: { fontSize: 16, color: '#aaa', marginBottom: 40 },
  controls: { flexDirection: 'row', width: '80%', justifyContent: 'space-between', alignItems: 'center' },
  playBtn: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
});
