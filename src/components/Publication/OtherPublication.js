import React from 'react';
import {Text, Title } from '@mantine/core';

import { List } from '@mantine/core';
import Footer from '../Footer';


// function just add papers with link and other publication paper list will be created
const publications = [
  {
    year: 2023,
    papers:[' O’Toole PW, Ghosh TS, Goswami S, Manghi P, Segata N, Shanahan F. Translating the microbiome - whats the target? Gastroenterology. 2023 Apr 22:S0016-5085(23)00622-4.',
    'Shanahan F, Ghosh TS, O’Toole PW. Human microbiome variance is underestimated. Curr Opin Microbiol. 2023 Mar 6;73:102288.'],
  },
  
  {
    year: 2022,
    papers:['Shanahan F, Ghosh TS, Molloy MG, O’Toole PW. The nonindustrialised microbiome in a modern world. Clin Sci (Lond). 2022 Nov 30;136(22):1683-1690.',
    'Ghosh TS, Shanahan F, O’Toole PW. Toward an improved definition of a healthy microbiome for healthy ageing. Nature Aging. 2022 Oct 2:1054-1069.',
    'Ghosh TS, Shanahan F, O’Toole PW. The gut microbiome as a modulator of healthy ageing. Nature Reviews Gastroenterol Hepatol. 2022 Apr 25:1–20. (Cover Page for the September 2022 Issue of the Journal)',
    'Albrich WC, Ghosh TS*, Ahearn-Ford S, et al. A high-risk gut microbiota configuration associates with fatal hyperinflammatory immune and metabolic responses to SARS-CoV-2. Gut Microbes. 2022. 14(1):2073131.',
    'Cronin P, Murphy CL, Barrett M, Ghosh TS, et al. Colorectal microbiota after removal of colorectal cancer. NAR Cancer. 2022. 4(2):zcac011.'
    ],
  },

  {
    year: 2021,
    papers:['Dutta S, Das B, Ghosh TS, Kumar S, Kaushal RK, Ray P, Suri V, Nair GB. Human Milk Microbiome of Healthy Indian Mothers is Dominated by Genus Pseudomonas. Journal of Human Lactation. 2021. 8903344211048415. doi: 10.1177/08903344211048415.'],
  },


  {
    year :2020,

    papers:[
      'Pellanda P*, Ghosh TS*, O’Tool PW. Understanding the impact of age-related changes in the gut microbiome on chronic diseases and the prospect of elderly-specific dietary interventions. Current Opinions in Biotechnology. 2020. 70:48-55.',

      'Ghosh TS*, Arnoux J*, O’Toole PW. Metagenomic analysis reveals distinct patterns of gut lactobacillus prevalence, abundance, and geographical variation in health and disease. Gut Microbes. 2020. 12(1):1-19.',
      
      ' Ntemiri A, Ghosh TS, Gheller ME, Tran TTT, Blum JE, Pellanda P, Vlckova K,Neto MC, Howell A, Thalacker-Mercer A, O’Toole PW. Whole Blueberry and Isolated Polyphenol-Rich Fractions Modulate Specific Gut Microbes in an In Vitro Colon Model and in a Pilot Study in Human Consumers. Nutrients. 2020. 12(9):2800',

      'Kedia S*, Ghosh TS*, Jain S, et al. Gut microbiome diversity in acute severe colitis is distinct from mild to moderate ulcerative colitis. J Gastroenterol Hepatol. 2020. 10.1111/jgh.15232.',

      'Shanahan F, Ghosh TS, O’Toole PW. What is the definition of a healthy gut microbiome? Gastroenterology. 2020. 60(2):483-494. ',

      'Keohane DM*, Ghosh TS*, Jeffery IB, Molloy MG, O’Toole PW, Shanahan F. Microbiome and health implications for ethnic minorities after enforced lifestyle changes. Nature Medicine. 2020. 26(7):1089-1095. News and Views of the article published in Nature Medicine available at https://www.nature.com/articles/s41591-020-0980-7',

      'Chng KR*, Ghosh TS*, Tan YH*, Nandi T*, Lee IR, Ng AHQ, Li C, Ravikrishnan A, Lim KM, Lye D, Barkham T, Raman K, Chen SL, Chai L, Young B, Gan YH, Nagarajan N. Metagenome-wide association analysis identifies microbial determinants of post-antibiotic ecological recovery in the gut. Nature Ecology and Evolution. 2020. 4(9):1256-1267.Commentary on the article published in Nature Microbiology available at https://www.nature.com/articles/s41564-020-0783-0',



      'Reitmeier S, Kiessling S, Clavel T, List M, Almeida EL, Ghosh TS, Neuhaus K, et al. Arrhythmic Gut Microbiome Signatures Predict Risk of Type 2 Diabetes. Cell Host and Microbe. 2020. S1931-3128(20)30343-7',

      'Das M, Ghosh TS, Jeffery IB. IPCO: Inference of Pathways from Co-variance analysis. BMC Bioinformatics. 2020. 21(1):62.',

      'Mehta O*, Ghosh TS*, Kothidar A, et al. Vaginal Microbiome of Pregnant Indian Women: Insights into the Genome of Dominant Lactobacillus Species. Microbial Ecology. 2020. 80(2):487-499.',

      'Ghosh TS, Das M, Jeffery IB, O’Toole PW. Adjusting for age improves identification of gut microbiome alterations in multiple diseases. Elife. 2020. 9: e50240.',


      '. Ghosh TS*, Rampelli S*, Jeffery IB*, Santoro A, Neto M, Capri M, Giampieri E, Jennings A, et al. Mediterranean diet intervention alters the gut microbiome in older people reducing frailty and improving health status: the NU-AGE 1-year dietary intervention across five European countries. Gut. 2020. 69(7):1218-1228.Currently the fifth most accessed paper from the Gut journal, with an Altmetricrating of 1243. Editor’s choice for the July 2020 issue of Gut and the top paper of the year 2020 in the Gut journal.',
    ],
  },


  {
      year: '2019',

      papers:['Adela R, Reddy PNC, Ghosh TS, et al. Serum protein signature of coronary artery disease in type 2 diabetes mellitus. J Transl Med. 2019. 17(1):17.',
      
      'Verma J, Bag S, Saha B, Kumar P, Ghosh TS, Dayal M, Senapati T, et al. Genomic plasticity associated with antimicrobial resistance in Vibrio cholerae. Proc Natl Acad Sci U S A. 2019. 116(13):6226-6231',
      
      'Bag S*, Ghosh TS*, Banerjee S, Mehta O, Verma J, Dayal M, Desigamani A,Kumar P, Saha B, Kedia S, Ahuja V, Ramamurthy T, Das B. Molecular Insights into Antimicrobial Resistance Traits of Commensal Human Gut Microbiota. Microbial Ecology. 2019. 77(2):546-557'],

  },


  {

    year :'2018',

    papers:['Das B, Ghosh TS, Kedia S, Rampal R, Saxena S, Bag S, Mitra R, et al. Analysis of the Gut Microbiome of Rural and Urban Healthy Indians Living in Sea Level and High Altitude Areas. Sci Rep. 2018. 8(1):10104.'],
  },
  {
    year:'2017',

    papers:[
      
      'Bag S, Ghosh TS, Das B. Complete Genome Sequence of Collinsella aerofaciens Isolated from the Gut of a Healthy Indian Subject. Genome Announc. 2017. 5(47):e01361-17.',
     
      'Bag S, Ghosh TS, Das B. Complete Genome Sequence of Faecalibacterium prausnitzii Isolated from the Gut of a Healthy Indian Adult. Genome Announc. 2017. 5(46):e01286-17.',
      'Das A, Pereira V, Saxena S, Ghosh TS, Anbumani D, Bag S, Das B, Nair GB, Abraham P, Mande SS. Gastric microbiome of Indian patients with Helicobacter pylori infection, and their interaction networks. Sci Rep. 2017. 7(1):15438.',
       
      'Kumar P*, Bag S*, Ghosh TS*, Dey P, Dayal M, Saha B, Verma J, Pant A, Saxena S, Desigamani A, Rana P, Kumar D, Sharma NC, Hanpude P, Maiti TK, Mukhopadhyay AK, Bhadra RK, Nair GB, Ramamurthy T, Das B. Molecular Insights into Antimicrobial Resistance Traits of Multidrug Resistant Enteric Pathogens isolated from India. Sci Rep. 2017. 7(1):14468.',
      
      'Bag S, Ghosh TS, Das B. Whole-Genome Sequence of a Megasphaera elsdenii Strain Isolated from the Gut of a Healthy Indian Adult Subject. Genome Announc. 2017. 5(42):e01033-17.',
      'Bag S, Ghosh TS, Das B. Whole-Genome Sequence of Bifidobacterium longum Strain Indica, Isolated from the Gut of a Healthy Indian Adult. Genome Announc. 2017. 5(41):e01017-17.',
      'Bag S, Ghosh TS, Das B. Draft Genome Sequence of Prevotella copri Isolated from the Gut of a Healthy Indian Adult. Genome Announc. 2017. 5(37):e00834-17.',
      'Jena RC, Agarwal K, Ghosh TS, Chand PK. Population structuring of selected mungbean landraces of the Odisha State of India via DNA marker-based genetic diversity analysis. Agri Gene. 2017. 3:67-86.',


    ],
  },

  {

    year :'2015',

    papers: ['Yadav D, Ghosh TS, Mande SS. Global investigation of composition and interaction networks in gut microbiomes of individuals belonging to diverse geographies and age-groups. Gut Pathogens. 2016. 8:17.',
      
      'Mehra V, Ghosh TS, Mande SS. Insights into horizontal acquisition patterns of dormancy and reactivation regulon genes in mycobacterial species using a partitioning-based framework. J Biosci. 2016. 41(3):475-485',
      'Badhai J, Ghosh TS, Das SK. Composition and Functional Characterization of Microbiome Associated with Mucus of the Coral Fungia echinata Collected from Andaman Sea. Front Microbiol. 2016. 7:936.', 
      'Das C, Ghosh TS, Mande SS. In silico dissection of Type VII Secretion System components across bacteria: New directions towards functional characterization. J Biosci. 2016. 41(1):133-143.',
      'Das A, Srinivasan M, Ghosh TS, Mande SS. Xenobiotic Metabolism and Gut Microbiomes. PLoS One. 2016. 11(10):e0163099.'
      ],
  },
  

  {

    year :'2014',

    papers:['Ghosh TS, Gupta SS, Bhattacharya T, Yadav D, Barik A, Chowdhury A, Das B, Mande SS, Nair GB. Gut microbiomes of Indian children of varying nutritional status. PLoS One. 2014. 9(4):e95547.',
      'Kuntal BK, Ghosh TS, Mande SS. Igloo-Plot: a tool for visualization of multidimensional datasets. Genomics. 2014. 103(1):11-20.'],
  },

  {

    year:'2013',

    papers:['Kuntal BK, Ghosh TS, Mande SS. Community-analyzer: a platform for visualizing and comparing microbial community structure across microbiomes. Genomics. 2013. 102(4):409-18.',
      'Ghosh TS, Gupta SS, Nair GB, Mande SS. In silico analysis of antibiotic resistance genes in the gut microflora of individuals from diverse geographies and age-groups. PLoS One. 2013. 8(12):e83823.'
      ],


  },

  {

    year:' 2012',

    papers:['Mande SS, Mohammed MH, Ghosh TS. Classification of metagenomic sequences: methods and challenges. Brief Bioinform. 2012. 13(6):669-681.',
    'Ghosh TS, Gajjalla P, Mohammed MH, Mande SS. C16S - a Hidden Markov Model based algorithm for taxonomic classification of 16S rRNA gene sequences. Genomics. 2012. 99(4):195-201'],
  },

  {
    year: '2011',
    papers :['1. Mohammed MH, Ghosh TS, Chadaram S, Mande SS. i-rDNA: alignment-free algorithm for rapid in silico detection of ribosomal gene fragments from metagenomic sequence data sets. BMC Genomics. 2011. 12 Suppl 3(Suppl 3):S12.',

    'Mohammed MH, Ghosh TS, Reddy RM, Reddy CV, Singh NK, Mande SS. INDUS - a composition-based approach for rapid and accurate taxonomic classification of metagenomic sequences. BMC Genomics. 2011. 12 Suppl 3(Suppl 3):S4.',
    
    'Ghosh TS, Mohammed MH, Rajasingh H, Chadaram S, Mande SS. HabiSign: a novel approach for comparison of metagenomes and rapid identification of habitatspecific sequences. BMC Bioinformatics. 2011. 12 Suppl 13(Suppl 13):S9.',
    
    'Mohammed MH, Chadaram S, Komanduri D, Ghosh TS, Mande SS. Eu-Detect: an algorithm for detecting eukaryotic sequences in metagenomic data sets. J Biosci. 2011. 36(4):709-717.',
    
    'Gupta SS, Mohammed MH, Ghosh TS, Kanungo S, Nair GB, Mande SS. Metagenome of the gut of a malnourished child. Gut Pathog. 2011. 3:7.',
    'Ghosh TS, Mohammed MH, Komanduri D, Mande SS. ProViDE: A software tool for accurate estimation of viral diversity in metagenomic samples. Bioinformation. 2011. 6(2):91-94.',
    'Das C*, Ghosh TS*, Mande SS. Computational analysis of the ESX-1 region of Mycobacterium tuberculosis: insights into the mechanism of type VII secretion system. PLoS One. 2011. 6(11):e27980.',
    'Mohammed MH, Ghosh TS, Singh NK, Mande SS. SPHINX--an algorithm for taxonomic binning of metagenomic sequences. Bioinformatics. 2011. 27(1):22-30.'],
  },


  { year:'2010',
    papers: ['Ghosh TS*, Monzoorul Haque M*, Mande SS. DiScRIBinATE: a rapid method for accurate taxonomic classification of metagenomic sequences. BMC Bioinformatics. 2010. 11 Suppl 7(Suppl 7):S14.'],
  
  },


  { 
    
    year: '2009',
    
    papers : ['Monzoorul Haque M*, Ghosh TS*, Komanduri D, Mande SS. SOrt-ITEMS:Sequence orthology based approach for improved taxonomic estimation of metagenomic sequences. Bioinformatics. 2009. 25(14):1722-1730.',
    
    '2. Ghosh TS, Chaitanya SK, Sankararamakrishnan R. End-to-end and end-to-middle interhelical interactions: new classes of interacting helix pairs in protein structures. Acta Crystallogr D Biol Crystallogr. 2009. 65(Pt 10):1032-1041.'],
  },

];

function PublicationList() {
  // const years = Array.from(new Set(publications.map((p) => p.year))).sort().reverse();
  publications.sort((a, b) => b.year - a.year);
  return (
    <div style={{ paddingTop: '100px', display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
      <Title order={3} style={{ fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: '20px' }}>
        Full Publication List
      </Title>
      <List size='sm' style={{ marginBottom: '20px' }}>
        <List.Item style={{ marginBottom: '10px', listStyleType: 'disc' }}>Link to Google Scholar: <a href="https://scholar.google.com/citations?user=bAUS2DsAAAAJ&hl=en">https://scholar.google.com/citations?user=bAUS2DsAAAAJ&hl=en</a></List.Item>
        <List.Item style={{ marginBottom: '10px', listStyleType: 'disc' }}>Link to ResearchGate: <a href="https://www.researchgate.net/profile/Tarini-Shankar-Ghosh">https://www.researchgate.net/profile/Tarini-Shankar-Ghosh</a></List.Item>
      </List>
      <Text style={{ alignSelf:'flex-start', marginBottom: '20px' }}>
        The Detailed publication list is provided below:
      </Text>
      <Title order={4} style={{ fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: '10px' }}>
        Peer-reviewed articles (*: Joint First Authors)
      </Title>
      <List size='sm' style={{ marginBottom: '20px' }}>
        {publications.map((publication) => (
          <List.Item key={publication.year} style={{ marginBottom: '10px', listStyleType: 'disc' }}>
            <Text weight={700} size="xl">{publication.year}</Text>
            <List size='sm' style={{ paddingLeft: 20, marginBottom: '20px' }}>
              {publication.papers.map((paper, index) => (
                <List.Item key={index} ordered style={{ marginBottom: '20px', listStyleType: 'numbered',textAlign:'justify'}}>
                  {paper.includes('Ghosh TS') ?
                  <span>
                   {paper.split('Ghosh TS')[0]}<strong>Ghosh TS</strong>{paper.split('Ghosh TS')[1]}
                  </span> :
                  <span>{paper}</span>
              }
                </List.Item>
              ))}
            </List>
          </List.Item>
        ))}
      </List>
      

      <Title order={3} style={{ fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: '10px' }}>
        Invited Book Chapters
      </Title>

      <List size='sm' style={{ marginBottom: '20px' }}>
        
        <List.Item style={{ marginBottom: '20px', listStyleType: 'numbered' }}>Ghosh TS, Das M. Emerging tools for understanding the human microbiome. Progress in 
Molecular Biology and Translational Science. Volume 191. Issue 1. Elsevier Publications.</List.Item>
        
        <List.Item style={{ marginBottom: '20px', listStyleType: 'numbered' }}>Ghosh TS, O’Toole PW. The Microbiome in Aging Impact on Health and Wellbeing. The 
Gut-Brain Axis: Dietary, Probiotic, and Prebiotic Interventions on the Microbiota. Second 
Edition. The Academic Press (in press).</List.Item>
      </List>

      
    </div>
  
  );
}


export default PublicationList;