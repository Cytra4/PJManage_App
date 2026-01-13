import Feather from "@expo/vector-icons/Feather";
import { Tabs, useRouter } from "expo-router";
import React from 'react';

export default function _layout() {
	const router = useRouter();
	return (
		<Tabs
			screenOptions={{
				headerLeft: () => (
					<Feather
						name="arrow-left"
						size={24}
						style={{ marginLeft: 16 }}
						onPress={() => router.replace('/')}
					/>
				),
			}}
		>
			<Tabs.Screen
				name="calendar"
				options={{
					title: "時間表"
				}}
			/>

			<Tabs.Screen
				name="mission"
				options={{
					title: "我的任務"
				}}
			/>

			<Tabs.Screen
				name="forum"
				options={{
					title: "討論區"
				}}
			/>

			<Tabs.Screen
				name="information"
				options={{
					title: "小組資訊"
				}}
			/>
		</Tabs>
	)
}