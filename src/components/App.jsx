import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackBtn = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  // this.state[type]: state[type] + 1,

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onFeedbackBtn={this.onFeedbackBtn} />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positiveFeedback={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}
