import React, { Fragment } from 'react';
import { v1 } from 'uuid';
import { ThemeProvider } from 'styled-components';
import { SectionHeader, SectionWrapper, ExpGrid, ExpHeaderGrid, ExpFooter } from './Styled';

const theme = {
  fontColor: '#d8d8e0',
};

const array = [
  {
    companyLogo: '../../assets/images/exp/bcse.jpeg',
    companyName: 'Bronx Charter School for Excellence',
    companyDescription: `The Bronx Charter School for Excellence (BCSE), also known as Bronx Excellence, was established in 2004, in the Parkchester neighborhood of the Bronx, NY. Bronx Excellence is a 2012 National Blue Ribbon School Award honoree – the U.S. Department of Education's highest honor for schools across the country.`,
    jobTitle: 'Computer Science Specialist',
    location: 'Bronx, NY',
    date: 'Jan 2018 - current',
    responsibilities: [
      'Created a structured computer science curriculum for the middle school and delivered lessons via the internet and traditional methods.',
      'Assisted and/or taught advanced algebra and other math topics.',
      'Develop and maintain genuine, positive and consistent communication with parents.',
      'Work alongside ECS staff and instruction team to best meet the needs and learning of students.',
      'Build software programs to assist administration, staff and improve student learning.',
      'Maintained, and developed the school’s websites along with the Computer Science department website.',
    ],
  },
  {
    companyLogo: '../../assets/images/exp/ga.png',
    companyName: 'General Assembly',
    companyDescription:
      'General Assembly is a pioneer in education and career transformation, specializing in today’s most in-demand skills. The leading source for training, staffing, and career transitions, we foster a flourishing community of professionals pursuing careers they love.',
    jobTitle: 'Instructional Associate',
    location: 'New York, NY',
    date: 'Dec 2017 – Jan 2018',
    responsibilities: [
      'Mentor and teach lectures, manage student projects, help plan and develop boot camp curriculum, and support the rest of the instructional team.',
      'Inspire and support students as they identify their passions and drive their own continued learning beyond the curriculum.',
      'Facilitate a safe, supportive, and energetic community that welcomes the various needs and learning styles of your students.',
    ],
  },
  {
    companyLogo: '../../assets/images/exp/ga.png',
    companyName: 'General Assembly',
    companyDescription:
      'General Assembly is a pioneer in education and career transformation, specializing in today’s most in-demand skills. The leading source for training, staffing, and career transitions, we foster a flourishing community of professionals pursuing careers they love.',
    jobTitle: 'Teaching Assistant',
    location: 'New York, NY',
    date: 'Jun 2017 – Dec 2017',
    responsibilities: [
      'Provide assistance on programming concepts and languages such as HTML5, CSS3, JavaScript, jQuery, Node.js, Express.js, React.js, SQL, Ruby (on Rails) and more.',
      'Assist and give feedback to students on their projects and challenges.',
      'Responsible for supporting students of diverse abilities and backgrounds enrolled in the 12-week Web Development Immersive program.',
    ],
  },
  {
    companyLogo: '../../assets/images/exp/ga.png',
    companyName: 'General Assembly',
    companyDescription:
      'General Assembly is a pioneer in education and career transformation, specializing in today’s most in-demand skills. The leading source for training, staffing, and career transitions, we foster a flourishing community of professionals pursuing careers they love.',
    jobTitle: 'Engineering Fellow',
    location: 'New York, NY',
    date: 'Mar 2017 – Jun 2017',
    responsibilities: [
      'Built full-stack web applications from the ground up using various programming languages.',
      'Actively used GIT with GITHUB integration to deploy applications on cloud services such as Heroku.',
      'Implemented back-end Web Development using Node.js, Express.js and Rails to create applications with CRUD functionality.',
    ],
  },
];

const parseExperience = () => {
  const output = array.map(e => (
    <Fragment key={v1()}>
      <ExpGrid>
        <ExpHeaderGrid>
          <img src={e.companyLogo} alt={e.companyName} />
          <div className="exp__companyName">
            {e.companyName}
            <span className="exp__jobTitle">{e.jobTitle}</span>
          </div>
        </ExpHeaderGrid>
        <div className="exp__companyDescription">{e.companyDescription}</div>
        <ol className="exp__responsibilities">
          <span>Responsibilities</span>
          {e.responsibilities.map(r => <li key={v1()}>{r}</li>)}
        </ol>
      </ExpGrid>
      <ExpFooter>
        {e.date} | {e.location}
      </ExpFooter>
    </Fragment>
  ));

  return output;
};

const Experience = () => (
  <Fragment>
    <ThemeProvider theme={theme}>
      <SectionWrapper bg="#2f2f3a">
        <SectionHeader>Experience</SectionHeader>
      </SectionWrapper>
    </ThemeProvider>
    {parseExperience()}
  </Fragment>
);

export default Experience;
