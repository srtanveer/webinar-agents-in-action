import React from 'react';
import PresentationSlider from './components/PresentationSlider';
import {
  TitleSlide,
  IntroductionSlide,
  AboutSlide,
  PlanningSlide,
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
    <TrainingSlide key="slide5" />,
    <EventTimelineSlide key="slide6" />,
    <HackathonDaySlide key="slide7" />,
    <ChallengesSlide key="slide8" />,
    <HighlightsSlide key="slide9" />,
    <OrganizersSlide key="slide10" />,
    <UniversityVisitSlide key="slide11" />,
    <EventMomentsSlide key="slide12" />,
    <FinalSlide key="slide13" />,
  ];

  return <PresentationSlider slides={slides} />;
}

export default App;
