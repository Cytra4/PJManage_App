import { hp, wp } from '@/scripts/constants';
import { Picker } from '@react-native-picker/picker';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Calendar() {
	const { groupId } = useGlobalSearchParams<{ groupId: string }>();
	const router = useRouter();

	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
	const [selectedYear, setSelectedYear] = useState<number>(currentYear);
	const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth + 1);

	return (
		<View style={styles.container}>
			<Text>{groupId}</Text>
			<Text>時間表</Text>

			<View style={{flexDirection: "row"}}>
				<View style={[styles.pickerContainer, {width: wp(30)}]}>
					<Picker
						style={styles.picker}
						itemStyle={{ color: "blue" }}
						selectedValue={selectedYear}
						onValueChange={(itemValue, itemIndex) =>
							setSelectedYear(itemValue)
						}>
						{Array.from({ length: 10 }, (_, i) => {
							const year = (currentYear - 5 ) + i;
							return (
								<Picker.Item
									key={year}
									label={`${year}年`}
									value={year}
								/>
							);
						})}
					</Picker>
				</View>
				<View style={styles.pickerContainer}>
					<Picker
						style={styles.picker}
						itemStyle={{ color: "blue" }}
						selectedValue={selectedMonth}
						onValueChange={(itemValue, itemIndex) =>
							setSelectedMonth(itemValue)
						}>
						{Array.from({ length: 12 }, (_, i) => {
							const month = i + 1;
							return (
								<Picker.Item
									key={month}
									label={`${month}月`}
									value={month}
								/>
							);
						})}
					</Picker>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	pickerContainer: {
		height: hp(6),
		width: wp(25),
		borderWidth: 2,
		borderRadius: 8,
		marginHorizontal: 10,
	},
	picker: {
		width: "100%",
		marginLeft: wp(1.2)
	}
})