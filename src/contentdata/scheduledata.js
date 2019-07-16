/**
 * Schedule object shape
 *
 * {
 *   event: '',
 *   time: '',
 *   location: ''
 * }
 *
 * */

const dayOne = {
  title: "Saturday, Oct 5",
  events: [
    {
      event: 'Placeholder A',
      time: '9:00 AM'
    },
    {
      event: 'Placeholder A',
      time: '9:00 AM'
    },
    {
      event: 'Placeholder A Longer Event Name',
      time: '9:00 AM - 2:00 AM'
    },
    {
      event: 'Placeholder A Even Longer Event Name that Overflows Lots',
      time: '12:00 AM - 12:00 PM',
      location: "somewhere mysterious"
    },
  ]
};

const dayTwo = {
  title: "Sunday, Oct 6",
  events: [
    {
      event: 'Placeholder B',
      time: '9:00 AM'
    },
    {
      event: 'Placeholder B',
      time: '9:00 AM'
    },
    {
      event: 'Placeholder B Longer Event Name',
      time: '9:00 AM - 2:00 AM',
      location: "somewhere mysterious"
    },
    {
      event: 'Placeholder B Even Longer Event Name that Overflows Lots',
      time: '12:00 AM - 12:00 PM',
      location: "somewhere mysterious"
    },
  ]
};

export default [dayOne, dayTwo];
