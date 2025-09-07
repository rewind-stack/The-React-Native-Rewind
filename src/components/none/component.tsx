import React, {FC, memo} from 'react';
import {Text} from 'react-native';

import {Props, styles} from '.';

/**
 * none component description.
 *
 * @param {noneProps} props - The props for the component.
 * @returns {JSX.Element} The none component.
 */
const none: FC<Props> = ({}) => {
  return <Text>none</Text>;
};

export default memo(none);
