import React from 'react';

import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Avatar,
  Name,
  PostImage,
  Description,
} from './styles';

export default function Post({ item }) {
  return (
    <Container>
      <Header>
        <Avatar source={{ uri: item.author.avatar }} />
        <Name>{item.author.name}</Name>
      </Header>

      <PostImage ratio={item.aspectRatio} source={{ uri: item.image }} />

      <Description>
        <Name>{item.author.name}</Name> {item.description}
      </Description>
    </Container>
  );
}

Post.propTypes = {
  item: PropTypes.object.isRequired,
};
