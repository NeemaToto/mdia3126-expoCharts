import { ProgressChart } from "react-native-chart-kit";
import { View, Text, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function Progress() {
    const data = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
    };

    const chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#FFFFFF",
        backgroundGradientTo: "#FFFFFF",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(25, 25, 25, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false
    }

    return (
        <View>
            <Text>Progress Chart</Text>
            <ProgressChart
                data={data}
                width={screenWidth}
                height={220}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={false}
            />
        </View>
    )
}