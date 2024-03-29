import { Box} from "@mantine/core";
// import { useDisclosure } from '@mantine/hooks';
import { papers } from "./Constants";
import MyResCard from "./MyResCard";

const Research = () => {
    return (
        // pb={50}
        <Box pt={130} mx={'auto'} style={{display:"flex", flexDirection:"column", justifyContent:"center"}} bg={"white"}>
            {papers.map((p, i) => <MyResCard data={p.desc} title={p.heading} ind={i+1}/>)}
        </Box>
    )
}

export default Research;