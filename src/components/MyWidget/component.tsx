import React, {FC, memo} from 'react';
import {Text} from 'react-native';

import {Props, styles} from '.';

/**
 * MyWidget component description.
 *
 * @param {MyWidgetProps} props - The props for the component.
 * @returns {JSX.Element} The MyWidget component.
 */
const MyWidget: FC<Props> = ({}) => {
  return <Text>MyWidget</Text>;
};

export default memo(MyWidget);
