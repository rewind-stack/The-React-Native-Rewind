import React, {FC, memo} from 'react';
import {Text} from 'react-native';

import {Props, styles} from '.';

/**
 * Widget component description.
 *
 * @param {WidgetProps} props - The props for the component.
 * @returns {JSX.Element} The Widget component.
 */
const Widget: FC<Props> = ({}) => {
  return <Text>Widget</Text>;
};

export default memo(Widget);
