import { cls, tw } from 'tagged-classnames-free'
import React, { useState } from 'react'

import classes from './index.cls'

export default function Examples() {
  const [textClassName, setTextClassName] = useState('')

  return (
    <div className={classes.container}>
      <figure className='md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800'>
        <img
          className={cls`
            w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto
            object-cover
          `}
          src='https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg'
          alt=''
          width='384'
          height='512'
        />
        <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
          <blockquote>
            <p className='text-lg font-medium'>
              “Tailwind CSS is the only framework that I{"'"}ve seen scale on
              large teams. It’s easy to customize, adapts to any design, and the
              build size is tiny.”
            </p>
          </blockquote>
          <figcaption className='font-medium'>
            <div className='text-sky-500 dark:text-sky-400'>Sarah Dayan</div>
            <div className='text-slate-700 dark:text-slate-500'>
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
      <hr className='my-3' />
      <div className='flex gap-x-2 mb-2'>
        <button
          className={classes.button}
          onClick={() => {
            setTextClassName(cls`text-2xl`)
          }}
        >
          set text-2xl
        </button>
        <button
          className={classes.button}
          onClick={() => {
            setTextClassName('')
          }}
        >
          reset
        </button>
      </div>
      <div className={tw`text-lg ${textClassName}`}>Hello, world</div>
    </div>
  )
}
