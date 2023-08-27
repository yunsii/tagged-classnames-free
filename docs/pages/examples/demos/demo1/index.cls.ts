import { cls, tw } from 'tagged-classnames-free'

const classes = {
  container: tw`mx-auto max-w-4xl`,
  button: cls`
    px-4 py-2 font-semibold text-sm bg-cyan-500
    // A comment to test
    text-white rounded-full shadow-sm
  `,
}

export default classes
