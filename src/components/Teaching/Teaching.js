import { Card,Image,Text ,Box,Title} from "@mantine/core";

export function Teaching(){

    return(
        <Box mt={'80px'} pt={'sm'} ml={'100px'} mr={'100px'}>
            <Title
                      order={1}
                      size="h1"
                      sx={{
                        fontFamily: 'Greycliff CF, sans-serif',
                        fontWeight: 900,
                        textAlign: 'center',
                        color: 'teal'
                      }}
                      weight={900}
                      align="center"
                  >
                  Courses
            </Title>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
               <Card shadow="sm" style={{maxWidth: 300}}>
                  <Image
                    src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG"
                    alt ="BIO548"
                    fit="contain"
                    height={200}
                    style={{marginBottom : 16}}

                  />
                  <Text size="lg" weight={700} style={{ textAlign: 'center' }}>
                     BIO548
                  </Text>
                  <Text size="lg" weight={700} style={{ textAlign: 'center' }}>
                    Human Microbiome Data Science
                  </Text>
                </Card>  
            </div>
            
        </Box>
    
    
    
    
    );
}