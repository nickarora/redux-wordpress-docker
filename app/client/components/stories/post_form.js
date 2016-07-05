import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { PostForm } from 'components'
import { Provider } from 'react-redux'
import configureStore from 'store'

const store = configureStore({})

storiesOf('Post Form', module)
  .addDecorator(getStory => (<Provider store={store}>{getStory()}</Provider>))
  .add('default view', () => <PostForm createPost={action('Create Post')} />)
