
In order to use static assets, you need to tell storybook to include those when it serves up a storybook. In package.json: 

```sh
  "storybook": "start-storybook -p 6006 -s ./Images"
```

Don't forget to register addons in `.storybook/addons.js`


👉 More info: https://storybook.js.org/