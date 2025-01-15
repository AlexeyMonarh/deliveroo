import {defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Меню категории',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Название категории',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Изображение категории',
    },
  ],
})
