import React from 'react';
import { MyNavbar } from '../Navbar/MyNavbar';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfCard from '../ProfCard/ProfCard';
import { Image, Box, Overlay, Text, Flex } from '@mantine/core';
import PubCards from '../PubCards'

const Home = () => {
	return (
		<div>
			<MyNavbar />
			<Box sx={{position: 'relative' }}>
			<Image
				fit="cover"
				src="https://iiitd.ac.in/sites/all/themes/gavias_educar/images/administration-bg.jpg"
			/>
			</Box>
			
			<ProfCard />
			<PubCards/>
		</div>
	)
}

export default Home;