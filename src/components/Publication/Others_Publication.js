import React from 'react';
import { Paper, Text } from '@mantine/core';

const Other_Publication = () => {
  return (
    <Paper
      padding={16}
      style={{
        backgroundColor: '#F2F2F2',
      }}
    >
      <Text
        size="xl"
        weight={700}
        style={{
          marginBottom: 20,
        }}
      >
        List of Items with Years
      </Text>
      <ul
        style={{
          paddingLeft: 20,
        }}
      >
        <li>
          <Text>
            2022: Item 1
          </Text>
        </li>
        <li>
          <Text>
            2021: Item 2
          </Text>
        </li>
        <li>
          <Text>
            2020: Item 3
          </Text>
        </li>
        <li>
          <Text>
            2019: Item 4
          </Text>
        </li>
      </ul>
    </Paper>
  );
};

export default Other_Publication;
