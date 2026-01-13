import { useGlobalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Forum() {
	const { groupId } = useGlobalSearchParams<{ groupId: string }>();

	return (
		<View>
			<View>
				<Text>{groupId}</Text>
				<Text>討論區</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({})