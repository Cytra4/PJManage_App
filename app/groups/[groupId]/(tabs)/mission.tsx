import { useGlobalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function Mission(){
	const { groupId } = useGlobalSearchParams<{ groupId: string }>(); 
	
	return (
		<View>
			<View>
				<Text>{groupId}</Text>
				<Text>我的任務</Text>
			</View>
		</View>
	)
}