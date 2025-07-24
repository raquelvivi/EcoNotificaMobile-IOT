import React from 'react';
import { View, Dimensions, ScrollView, Text } from 'react-native';
import { StackedBarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  data: [
    [3840],
    [1600],
    [640],
    [3320]
  ],
  barColors: ['#78eb6dff'],
};

export default function DadosLixeira() {
  return (
    <ScrollView>
      <View style={{ padding: 16, marginTop: 100 }}>
        <Text style={{ textAlign: "center", fontSize: 16, marginBottom: 10 }}>Cheia por Semana</Text>
        <StackedBarChart
          data={data}
          width={screenWidth - 34}
          height={220}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={{ borderColor: '#78eb6dff', borderWidth: 1 }} //borderRadius: 20,
        />
      </View>
    </ScrollView>
  );
}



// const styles = StyleSheet.create({



//     conteine: {
//         backgroundColor: "#ffffff",

//     },

// });