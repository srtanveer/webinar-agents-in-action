import React from 'react';
import PresentationSlider from './components/PresentationSlider';
import {
  TitleSlide,
  IntroductionSlide,
  AboutSlide,
  PlanningSlide,
  MeetingsSlide,
  TrainingSlide,
  EventTimelineSlide,
  HackathonDaySlide,
  ChallengesSlide,
  HighlightsSlide,
  OrganizersSlide,
  UniversityVisitSlide,
  EventMomentsSlide,
  FinalSlide,
} from './components/Slides';

function App() {
  const slides = [
    <TitleSlide key="slide1" />,
    <IntroductionSlide key="slide2" />,
    <AboutSlide key="slide3" />,
    <PlanningSlide key="slide4" />,
    <MeetingsSlide key="slide5" />,
    <TrainingSlide key="slide6" />,
    <EventTimelineSlide key="slide7" />,
    <HackathonDaySlide key="slide8" />,
    <ChallengesSlide key="slide9" />,
    <HighlightsSlide key="slide10" />,
    <OrganizersSlide key="slide11" />,
    <UniversityVisitSlide key="slide12" />,
    <EventMomentsSlide key="slide13" />,
    <FinalSlide key="slide14" />,
  ];

  return <PresentationSlider slides={slides} />;
}

export default App;
