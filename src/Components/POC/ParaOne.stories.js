import React from "react";
import ParaOne from "./ParaOne";

export default {
    title: 'POC/ParaOneStory',
    componenet: ParaOne
}

const Template = args => <ParaOne {...args} />

export const ParaOneStory = Template.bind({})
ParaOneStory.args = {
    heading1: 'Overview - Impact Investment Strategies',
    subHeading: 'Based on data available as of 6/30/2021',
    boxVal1: 'Impact',
    boxVal2: '33%',
    boxVal3: '$31. M',
    content: ' The impact investing landscape features strategies that target one or often multiple social and environmental outcomes. To assess client exposures, FTIs research team looks through to the portfolio level to determine the percentage of a managers capital that is committed to each of the following 17 issue areas (See Appendix C: Data Notes for more information about FTIs Issue Area Framework).'
}