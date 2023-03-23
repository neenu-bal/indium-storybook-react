import React from "react";
import ParaTwo from "./ParaTwo";

export default {
    title: 'POC/ParaTwoStory',
    Component: ParaTwo
}

const Template = args => <ParaTwo {...args} />

export const ParaTwoStory = Template.bind({})
ParaTwoStory.args = {
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
