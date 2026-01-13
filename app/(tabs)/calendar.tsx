import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Calendar(){
	const { id } = useLocalSearchParams(); 
	const router = useRouter();
	console.log(`Group ${id}`)
	return (
		<View style={styles.page}>
			<View style={styles.container}>
				<Text>{id}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	page: { flex: 1, backgroundColor: '#fff' },
	header: { height: 56, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, borderBottomWidth: 1, borderColor: '#eee' },
	backButton: { padding: 6 },
	headerTitle: { fontSize: 18, fontWeight: '600', marginLeft: 8 },
	container: { flex: 1, padding: 16 }
})