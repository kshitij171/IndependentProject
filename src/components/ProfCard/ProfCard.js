import { Text, createStyles, Image, Flex, Paper, Group, AspectRatio, Blockquote,Stack } from '@mantine/core';
import { ipsum} from './Constant';
import img from '../../assets/prof_img.jpg';
import { Icon24Hours, IconChevronRight } from '@tabler/icons';
const useStyles = createStyles((theme) => ({
    container: {
      [`@media (max-width: 4000px)`]: {
        maxWidth:'90%'
      },
  
     
      '@media (max-width: 800px)': {
        width:'100%'
      },
    },
}));


const ProfCard = () => {
    const { classes } = useStyles();
    return (
        <Paper shadow="xl" radius="lg" p="lg" align="center" width="100vw" mt="50px">
        <Flex
            
            direction={{ base: 'column', sm: 'row' }}
            columnGap={'xl'}
            rowGap={'xl'}
            mt='xl'
            align='start'
            justify={{base:'center', sm: 'center' }}
            className={classes.container}
            >
            <AspectRatio  ratio={1/1} w={'850px'} mt="lg">
                        <Image src={img} alt={'Prof. image'} />
            </AspectRatio>
            <Stack >
            <Text size={30} fw = {700} c="rgb(19, 102, 215)" >Tarini Shankar Ghosh</Text>
            <Text size={20} fw = {500}>Scientist, Engineer & Educator</Text>
            <Blockquote className='bb'>
                {ipsum.map((ip) =>
                    <Text fs="italic" sx={{ paddingBottom: '12px' }}>{ip}</Text>)
                }
                <Group position="center" spacing="lg">
                    <a href="https://www.narendramodi.in/" target="_blank">
                    <i class="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                    <a href="https://www.narendramodi.in/" target="_blank">
                    <i class="fa-brands fa-square-github fa-2xl"></i>
                    </a>

                </Group>
                
                
            </Blockquote>
            </Stack>
        </Flex>
        </Paper>
    );
};

export default ProfCard;