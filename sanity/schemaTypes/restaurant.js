import {defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Ресторан',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Название ресторана',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Краткое описание',
      validation: (Rule) => Rule.required(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Изображение ресторана',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Широта ресторана',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Долгота ресторана',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Адрес ресторана',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Оценка ресторана (1-5 звёзд)',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Пожалуйста введите значение от 1 до 5'),
    },
    {
      name: 'type',
      title: 'Категории',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Блюда',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
})
