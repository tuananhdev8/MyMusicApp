import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home'); // tự chuyển sang home sau 3 giây
    }, 3000);

    return () => clearTimeout(timer); // clear timer nếu component unmount
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/010/618/648/non_2x/logo-music-illustration-of-musical-notes-vector.jpg' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to My Music App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#aya' },
  logo: { width:250, height:250, marginBottom:20, borderRadius:20 },
  title: { fontSize:24, fontWeight:'bold', marginBottom:20 }
});
