import React from 'react';
import { Text } from 'react-native';
import Mapper from "./Mapper";
import PropTypes from 'prop-types';

export const EmojiText = (props) => {

    //Props
    const emojiStyle = props.emojiStyle;
    const size = props.size;
    const name = props.name;

  return (
    <Text style={[emojiStyle,{fontFamily:'System', fontSize:size}]}>
      {Mapper[name]}
    </Text>
  );
};

EmojiText.propTypes = {
    emojiStyle: PropTypes.object,
    size: PropTypes.number,
    name: PropTypes.string.isRequired
};

EmojiText.defaultProps = {
    size: 20
}