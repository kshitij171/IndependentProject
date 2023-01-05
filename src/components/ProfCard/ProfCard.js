import { Text, Paper, Image, Flex, Box, NavLink, AspectRatio, Blockquote } from '@mantine/core';
import { ipsum, links } from './Constant';
import img from '../../assets/prof_img.jpg';
import { Icon24Hours, IconChevronRight } from '@tabler/icons';

const ProfCard = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '250px'}} >
            <Paper mx={'xl'} py={'26px'} shadow="lg" p="lg" withBorder sx={{ maxWidth: '80vw' }} style={{ zIndex: 5 }}>
                <Flex
                    pl={28}
                    mih={50}
                    gap="xl"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <AspectRatio ratio={600 / 600} w={'600px'}>
                        <Image src={img} alt={'Prof. image'} />
                    </AspectRatio>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'start' }}>
                        <Blockquote >
                            {ipsum.map((ip) =>
                                <Text sx={{ width: '32vw', paddingBottom: '12px' }}>{ip}</Text>)}
                            {links.map((li) =>
                                <NavLink
                                    label={li}
                                    icon={<Icon24Hours size={16} stroke={1.5} />}
                                    rightSection={<IconChevronRight size={12} stroke={1.5} />}
                                    variant="subtle"
                                    active
                                    color={'cyan'}
                                    mt={'md'}
                                />)}
                        </Blockquote>
                    </Box>
                </Flex>
            </Paper>
        </Box>
    );
};

export default ProfCard;