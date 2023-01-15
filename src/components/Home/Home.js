import React from 'react';
import { MyNavbar } from '../Navbar/MyNavbar';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfCard from '../ProfCard/ProfCard';
import { Image, Box, Overlay, Text, Flex } from '@mantine/core';
import PubCards from '../PubCards'

const Home = () => {
	return (
		<div>
			<Router>
				<MyNavbar />
				<Box sx={{ height: '90vh', position: 'relative' }}>
	
				</Box>
				<Overlay component={Image} src={'https://iiitd.ac.in/sites/all/themes/gavias_educar/images/administration-bg.jpg'} alt={'bg-image'} opacity={0.9} zIndex={-1} />

				<ProfCard />
				<PubCards/>
			</Router>
		</div>
	)
}

export default Home;