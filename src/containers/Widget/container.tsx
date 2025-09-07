import React, {FC, memo} from 'react';
import {Text} from 'react-native';

import {Props, styles} from '.';

/**
 * Widget container description.
 *
 * @param {WidgetProps} props - The props for the container.
 * @returns {JSX.Element} The Widget container.
 */
const Widget: FC<Props> = ({}) => {
  return <Text>Widget</Text>;
};

export default memo(Widget);
