import { Text, createStyles, Image, Flex, Paper, Group, AspectRatio, Blockquote,Stack } from '@mantine/core';
import { ipsum} from './Constant';
import img from '../../assets/tarini.png';

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
            <AspectRatio  ratio={1 / 1} w={3000} mx="auto">
                <Image src={img} alt={'Prof. image'} />
            </AspectRatio>
            <Stack >
            <Text size={30} fw = {700} c="rgb(19, 102, 215)" >Dr. Tarini Shankar Ghosh</Text>
            <Text size={20} fw = {500}>About Me</Text>
            {/* <Blockquote className='bb'> */}
                {ipsum.map((ip) =>
                    <Text fs="italic" sx={{ paddingBottom: '12px',textAlign:'justify',textJustify:'inter-word' }}>{ip}</Text>)
                }
                <Group position="center" spacing="lg">
                    <a href="https://www.linkedin.com/in/dr-tarini-shankar-ghosh-3b211868" target="_blank">
                    <i class="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tarini.ghosh@iiitd.ac.in" target="_blank">
                    <i class="fa-solid fa-envelope fa-2xl"></i>
                    </a>

                </Group>
                
                
            {/* </Blockquote> */}
            </Stack>
        </Flex>
        </Paper>
    );
};

export default ProfCard;