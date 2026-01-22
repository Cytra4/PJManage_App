import { hp, wp } from '@/scripts/constants';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CalendarList, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['ch'] = {
	monthNames: [
		'一月', '二月', '三月',
		'四月', '五月', '六月',
		'七月', '八月', '九月',
		'十月', '十一月', '十二月'
	],
	dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
	dayNamesShort: ['日', '一', '二', '三', '四', '五', '六']
};

LocaleConfig.defaultLocale = 'ch';

export default function GroupCalendar() {
	const { groupId } = useGlobalSearchParams<{ groupId: string }>();
	const router = useRouter();

	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
	const [selectedYear, setSelectedYear] = useState<number>(currentYear);
	const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth + 1);

	return (
		<View style={styles.container}>
			<CalendarList
				pastScrollRange={12}
				futureScrollRange={12}
				monthFormat={'yyyy年 M月'}
				enableSwipeMonths={true}
				onDayPress={day => {
					console.log('selected day', day);
				}}
				theme={{
					textDayFontSize: 20,
					textMonthFontSize: 18,
					textDayHeaderFontSize: 20,
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	calendar: {
		height: "100%",
		width: "100%"
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