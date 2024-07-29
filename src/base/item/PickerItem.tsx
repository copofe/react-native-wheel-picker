import { memo } from 'react';
import { type StyleProp, StyleSheet, Text, type TextStyle } from 'react-native';
import { usePickerItemHeight } from '../contexts/PickerItemHeightContext';

type PickerItemProps = {
  value: any;
  label?: string;
  itemTextStyle: StyleProp<TextStyle>;
};

const PickerItem = ({ value, label, itemTextStyle }: PickerItemProps) => {
  const height = usePickerItemHeight();

  return (
    <Text style={[styles.root, { lineHeight: height }, itemTextStyle]}>
      {label ?? value}
    </Text>
  );
};

const styles = StyleSheet.create({
  root: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default memo(PickerItem);
