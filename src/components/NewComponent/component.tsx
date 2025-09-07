import React, {FC, memo} from 'react';
import {Text} from 'react-native';

import {Props, styles} from '.';

/**
 * NewComponent component description.
 *
 * @param {NewComponentProps} props - The props for the component.
 * @returns {JSX.Element} The NewComponent component.
 */
const NewComponent: FC<Props> = ({}) => {
  return <Text>NewComponent</Text>;
};

export default memo(NewComponent);
