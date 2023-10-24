import { LineChart } from "react-native-chart-kit";
import { View, Text, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function Line() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [
                    // Starts at 0 index, ends at 99 index
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100],
                color: (opacity = 1) => `rgba(153, 214, 255, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };

    const chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#008ae6",
        backgroundGradientTo: "#66c2ff",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#0099ff'
        }

    }

    return (
        <View>
            <Text>Line Chart</Text>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    )
}