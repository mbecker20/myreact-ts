import React from 'react';
import CVContainer from './CVContainer'
import CVInnerContainer from './CVInnerContainer'
import Chapter from './Chapter'
import SubChapter from './SubChapter'

function ChapterViewer() {
  return (
    <CVContainer>
      <CVInnerContainer>
        <Chapter chapterName={'Chapter 1'}>
          <SubChapter>SubChapter A</SubChapter>
          <SubChapter>SubChapter B</SubChapter>
          <SubChapter>SubChapter C</SubChapter>
        </Chapter>
        <Chapter chapterName={'Chapter 2'}>
          <SubChapter>SubChapter A</SubChapter>
          <SubChapter>SubChapter B</SubChapter>
          <SubChapter>SubChapter C</SubChapter>
        </Chapter>
        <Chapter chapterName={'Chapter 1'}>
          <SubChapter>SubChapter A</SubChapter>
          <SubChapter>SubChapter B</SubChapter>
          <SubChapter>SubChapter C</SubChapter>
        </Chapter>
        <Chapter chapterName={'Chapter 2'}>
          <SubChapter>SubChapter A</SubChapter>
          <SubChapter>SubChapter B</SubChapter>
          <SubChapter>SubChapter C</SubChapter>
        </Chapter>
        <Chapter chapterName={'Chapter 1'}>
          <SubChapter>SubChapter A</SubChapter>
          <SubChapter>SubChapter B</SubChapter>
          <SubChapter>SubChapter C</SubChapter>
        </Chapter>
        <Chapter chapterName={'Chapter 2'}>
          <SubChapter>SubChapter A</SubChapter>
          <SubChapter>SubChapter B</SubChapter>
          <SubChapter>SubChapter C</SubChapter>
        </Chapter>
        <Chapter chapterName={'Chapter 1'}>
          <SubChapter>SubChapter A</SubChapter>
          <SubChapter>SubChapter B</SubChapter>
          <SubChapter>SubChapter C</SubChapter>
        </Chapter>
        <Chapter chapterName={'Chapter 2'}>
          <SubChapter>SubChapter A</SubChapter>
          <SubChapter>SubChapter B</SubChapter>
          <SubChapter>SubChapter C</SubChapter>
        </Chapter>
        <Chapter chapterName={'Chapter 1'}>
          <SubChapter>SubChapter A</SubChapter>
          <SubChapter>SubChapter B</SubChapter>
          <SubChapter>SubChapter C</SubChapter>
        </Chapter>
        <Chapter chapterName={'Chapter 2'}>
          <SubChapter>SubChapter A</SubChapter>
          <SubChapter>SubChapter B</SubChapter>
          <SubChapter>SubChapter C</SubChapter>
        </Chapter>
        <Chapter chapterName={'Chapter 1'}>
          <SubChapter>SubChapter A</SubChapter>
          <SubChapter>SubChapter B</SubChapter>
          <SubChapter>SubChapter C</SubChapter>
        </Chapter>
        <Chapter chapterName={'Chapter 2'}>
          <SubChapter>SubChapter A</SubChapter>
          <SubChapter>SubChapter B</SubChapter>
          <SubChapter>SubChapter C</SubChapter>
        </Chapter>
      </CVInnerContainer>
    </CVContainer>
  );
}

export default ChapterViewer;