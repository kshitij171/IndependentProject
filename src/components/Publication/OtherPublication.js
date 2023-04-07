import React from 'react';
// function just add papers with link and other publication paper list will be created
const publications = [
  {
    year: 2013,
    title: 'Dispersive Fourier transformation for fast continuous single-shot measurements',
    link: 'https://doi.org/10.1038/nphoton.2012.333'
  },
  {
    year: 2009,
    title: 'LIGO: the laser interferometer gravitational-wave observatory',
    link: 'https://doi.org/10.1088/0034-4885/72/7/076901'
  },
  {
    year: 2021,
    title: 'Guidelines for the use of flow cytometry and cell sorting in immunological studies',
    link: 'https://doi.org/10.1002/eji.201970107'
  },
  {
    year: 2020,
    title: 'Guidelines for the use of flow cytometry and cell sorting in immunological studies',
    link: 'https://doi.org/10.1002/eji.201970107'
  },
  {
    year: 2022,
    title: 'Guidelines for the use of flow cytometry and cell sorting in immunological studies',
    link: 'https://doi.org/10.1002/eji.201970107'
  },
  {
    year: 2023,
    title: 'Air pollution’s role in the promotion of lung cancer',
    link: 'https://www.nature.com/articles/d41586-023-00929-x'
  },
  {
    year: 2023,
    title: 'COVID-origins data from Wuhan market published: what scientists think',
    link: 'https://www.nature.com/articles/d41586-023-00998-y'
  },

];

function PublicationList() {
  const years = Array.from(new Set(publications.map((p) => p.year))).sort().reverse();

  return (
    <div style={{paddingTop: '100px', paddingBottom: '50px'}}>
      <table>
        <thead>
          <tr>
            <th style={{backgroundColor: 'teal', color: 'white'}}>Year</th>
            <th style={{backgroundColor: 'teal', color: 'white'}}>Title</th>
          </tr>
        </thead>
        <tbody>
          {years.map((year) => (
            <React.Fragment key={year}>
              <tr>
                <td>{year}</td>
                <td></td>
              </tr>
              {publications
                .filter((p) => p.year === year)
                .map((p) => (
                  <tr key={p.title}>
                    <td></td>
                    <td><a href={p.link} target="_blank" rel="noopener noreferrer">{p.title}</a></td>
                  </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PublicationList;
