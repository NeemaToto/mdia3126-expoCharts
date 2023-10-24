import { StackedBarChart } from "react-native-chart-kit";
import { View, Text, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function Stacked() {
    const data = {
        labels: ["Test1", "Test2"],
        legend: ["L1", "L2", "L3"],
        data: [
            [60, 60, 60],
            [30, 30, 60]
        ],
        barColors: ["#ff6666", "#4dff4d", "#0099ff"]
    };

    const chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#008066",
        backgroundGradientTo: "#00997a",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false
    }

    return (
        <View>
            <Text>Stacked Bar Chart</Text>
            <StackedBarChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    )
}