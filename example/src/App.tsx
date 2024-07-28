import WheelPicker, {
  type PickerItem,
} from '@copofe/react-native-wheel-picker';

const data: PickerItem<number>[] = Array.from({ length: 100 }, (_, i) => ({
  value: i,
  label: `label ${i}`,
}));

export default function App() {
  return <WheelPicker data={data} onValueChanging={console.log} />;
}
