import { config, fields, singleton, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    testimonials: collection({
      label: 'Testimonials',
      directory: 'src/content/testimonals',
      slugField: 'author',
      schema: {
        author: fields.slug({
          name: {
            label: 'Author',
            description: 'This is the slug for the post',
          },
          slug: {
            label: 'Slug',
          },
        }),
      },
    }),
  },
  singletons: {
    homepage: singleton({
      label: 'Homepage',
      directory: 'src/content/_homepage',
      schema: {
        headline: fields.text({ label: 'Headline' }),
      },
    }),
  },
})
