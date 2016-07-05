/* eslint-disable max-len */
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Post } from 'components'

storiesOf('Post', module)
  .add('default view', () => {
    const post = {
      title: 'Post Title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac nisl sit amet nulla ornare tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed pulvinar imperdiet lorem et viverra. Vestibulum arcu nunc, vestibulum sed rhoncus egestas, consectetur ut orci. Vestibulum eleifend eleifend nisi, sit amet vulputate urna maximus sit amet. Phasellus finibus, velit vel sodales aliquet, libero massa consequat metus, quis lacinia metus sem a diam.',
    }
    return <Post post={post} deletePost={action('Delete Post')} />
  })
