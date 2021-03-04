import { createPage } from '@mpxjs/core'


createPage({
  async onLoad () {
    // onLoad
    console.log('load');

    const test = THIS_IS_A_KEY ;
    console.log('test',test)
  }
})
