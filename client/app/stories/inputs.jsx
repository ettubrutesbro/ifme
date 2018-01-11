import React from 'react'
import {storiesOf} from '@storybook/react'

import {Switch} from '../bundles/shared/components/Inputs'

storiesOf('Inputs', module)
    .add('Switch', () => (
        <div>
            <Switch on = {true} />
            <br />
            <Switch on = {false} />
        </div>
    ))