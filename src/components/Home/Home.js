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
				<Box sx={{ height: '140vh', position: 'relative' }}>
					<Flex pt={250} pl={64} direction={'column'}>
						<Text
							color={'dark'}
							td={'underline'}
							fz={44}
							pl={10}
							fw={700}
							w={'26vw'}
							sx={{ fontFamily: 'Greycliff CF, sans-serif', backgroundColor:'white' }}
						>
							Human Biome Project
						</Text>
						<Text
							color={'gray'}
							fz={22}
							fw={400}
							pl={14}
							pb={'xs'}
							w={'12vw'}
							sx={{ fontFamily: 'Greycliff CF, sans-serif', backgroundColor:'white'}}
						>
							Changin the world
						</Text>
					</Flex>
					<ProfCard />
					<PubCards/>
					<Overlay component={Image} src={'https://iiitd.ac.in/sites/all/themes/gavias_educar/images/administration-bg.jpg'} alt={'bg-image'} opacity={0.9} zIndex={-1} />
				</Box>
			</Router>
		</div>
	)
}

export default Home;