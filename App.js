import { style } from 'd3-selection'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Chart from './src/components/Chart'

const data = [
    { date: new Date(2018, 9, 1).getTime(), value: 0 },
    { date: new Date(2018, 9, 16).getTime(), value: 0 },
    { date: new Date(2018, 9, 17).getTime(), value: 200 },
    { date: new Date(2018, 10, 1).getTime(), value: 200 },
    { date: new Date(2018, 10, 2).getTime(), value: 300 },
    { date: new Date(2018, 10, 5).getTime(), value: 300 }
  ];

export default function App() {
    return (
        <View style={styles.container}>
            <Chart {...{ data }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})