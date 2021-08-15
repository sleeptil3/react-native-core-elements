import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

export const Flex = ({ direction, children, justify, align, color, safe, fill, height, width }) => {
	return safe ?
		<SafeAreaView style={{ flex: fill || 1, flexDirection: direction ? direction : "column", height: height || "auto", width: width || "auto", justifyContent: justify, alignItems: align, backgroundColor: color || "transparent" }}>{children}</SafeAreaView>
		: <View style={{ flex: fill || 1, flexDirection: direction ? direction : "column", height: height || "auto", width: width || "auto", justifyContent: justify, alignItems: align, backgroundColor: color || "transparent" }}>{children}</View>
}