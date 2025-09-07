import React, {FC, memo} from 'react';
import {Text} from 'react-native';

import {Props, styles} from '.';

/**
 * MyComponent component description.
 *
 * @param {MyComponentProps} props - The props for the component.
 * @returns {JSX.Element} The MyComponent component.
 */
const MyComponent: FC<Props> = ({}) => {
  return <Text>MyComponent</Text>;
};

export default memo(MyComponent);
