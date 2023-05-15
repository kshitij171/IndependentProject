import { Box, Button, Collapse, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react'

const MyResCard = ({ title, data, ind }) => {
    const [opened, { toggle }] = useDisclosure(false);
    return (
        <Box mx="auto" mb={60}>
            <Box onClick={toggle} bg={"#008080"} w={"70vw"} c={"#000000"}  style={
                { cursor: "pointer", padding: "12px 20px 12px 20px", borderRadius: opened? "0px" : "3px", fontWeight: "bold", display: "flex", justifyContent: "space-between" }}>
                <Text fz={20} color='white'> {ind + ". " + title} </Text>
                <Text> ▼ </Text>
            </Box>
            <Collapse in={opened} bg={"#D9D9D9"} w={"70vw"}>
                <Text fz={16} p={"12px 38px 12px 38px"}>{data}</Text>
            </Collapse>
        </Box>
    );
}

export default MyResCard;