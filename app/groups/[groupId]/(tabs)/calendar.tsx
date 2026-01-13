import { useGlobalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function Calendar(){
	const { groupId } = useGlobalSearchParams<{ groupId: string }>();
	const router = useRouter();
	
	return (
		<View>
			<View>
				<Text>{groupId}</Text>
				<Text>時間表</Text>
			</View>
		</View>
	)
}