import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfCard from '../ProfCard/ProfCard';
import { Image, Box, Overlay, Text, Flex } from '@mantine/core';
import PubCards from '../PubCards'

const Home = () => {
	return (
		<div>
			<Box sx={{ position: 'relative' }}>
				<Image
					fit="cover"
					src="https://iiitd.ac.in/sites/all/themes/gavias_educar/images/administration-bg.jpg"
					height="620px"
				/>
			</Box>
			<ProfCard />
			<PubCards />
		</div>
	)
}

export default Home;