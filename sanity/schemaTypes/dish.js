import {defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Блюдо',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Название блюда',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Краткое описание',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Цена в рублях',
    },
    {name: 'image', type: 'image', title: 'Изображение блюда'},
  ],
})
