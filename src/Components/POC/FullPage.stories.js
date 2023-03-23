import React from "react";
import { ParaOneStory } from "./ParaOne.stories";
import { ParaTwoStory } from "./ParaTwo.stories";

export default {
    title: 'POC/FullPage'
}
    
const Template = args => (<><ParaOneStory {...args} /><ParaTwoStory {...args} /></>)

export const FullPage = Template.bind({});
FullPage.args = {
    heading1: 'Overview - Impact Investment Strategies',
    subHeading: 'Based on data available as of 6/30/2021',
    boxVal1: 'Impact',
    boxVal2: '33%',
    boxVal3: '$31. M',
    content: ' The impact investing landscape features strategies that target one or often multiple social and environmental outcomes. To assess client exposures, FTIs research team looks through to the portfolio level to determine the percentage of a managers capital that is committed to each of the following 17 issue areas (See Appendix C: Data Notes for more information about FTIs Issue Area Framework).',
    heading2: 'Impact Strategies - Issue Area Exposures (% of Impact Total)',
    Field1Label: 'Corporate Social Responsibility',
    Field1Value: '16%',
    Field2Label: 'Environment (General)',
    Field2Value: '0%',
    Field3Label: 'Energy & Efficiencyy',
    Field3Value: '33%',
    Field4Label: 'Conservation',
    Field4Value: '0%'
}