import React, {FC, memo} from 'react';
import {Text} from 'react-native';

import {Props, styles} from '.';

/**
 * NewComponent1 component description.
 *
 * @param {NewComponent1Props} props - The props for the component.
 * @returns {JSX.Element} The NewComponent1 component.
 */
const NewComponent1: FC<Props> = ({}) => {
  return <Text>NewComponent1</Text>;
};

export default memo(NewComponent1);
