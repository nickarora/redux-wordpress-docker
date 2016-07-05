/* eslint-disable global-require */
import { configure } from '@kadira/storybook'
import 'styles/base'

function loadStories() {
  require('../client/components/stories/header')
  require('../client/components/stories/post')
  require('../client/components/stories/post_form')
}

configure(loadStories, module)
