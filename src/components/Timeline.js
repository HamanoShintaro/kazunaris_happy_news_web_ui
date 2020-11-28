import React, { Component } from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

class BasicTimeline extends Component {
  render() {
    return (
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
      // <footer>
      //   <h1>Fire</h1>
      //   <h2>Sample data.</h2>
      // </footer>);
    );
  }
}

// export default function BasicTimeline() {
//   return (
//     <Timeline>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>Eat</TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>Code</TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot />
//         </TimelineSeparator>
//         <TimelineContent>Sleep</TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }

export default BasicTimeline;
