import { Box, Card, Image, Group, Text, Badge, Button, SimpleGrid, Divider } from "@mantine/core";
import { papers } from "./Constants";

const Research = () => {
    return (
        <Box mt={'60px'} pt={'sm'} ml={'lg'} mr={'660px'}>
            <Text
                sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                p="lg"
                ta="left"
                fz="xl"
                fw={700}
            >
                Research Projects
            </Text>
            <SimpleGrid cols={3} >
                {papers.map((p) =>
                    <Card shadow="sm" p="lg" radius="lg" withBorder>
                        <Card.Section>
                            <Image
                                src={p.img}
                                height={160}
                                alt="Biome Image"
                            />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>{p.heading}</Text>
                            <Badge color="pink" variant="light">
                                {p.status}
                            </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">{p.desc}</Text>

                        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                            Read More About Research
                        </Button>
                    </Card>
                )}
            </SimpleGrid>
        </Box>
    )
}

export default Research;