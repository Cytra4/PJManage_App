import { useGlobalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function Information(){
	const { groupId } = useGlobalSearchParams<{ groupId: string }>(); 
	
	return (
		<View>
			<View>
				<Text>{groupId}</Text>
				<Text>小組資訊</Text>
			</View>
		</View>
	)
}