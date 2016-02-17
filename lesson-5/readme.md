#### Functions Homework

* Добавить к объекту `localesManager`

```javascript
var localesManager = {
    en: 'English',
    ru: 'Russian',
    es: 'Spanish',
    fr: 'French',
    cn: 'Simplified Chinese',
    jp: 'Japanese',
    de: 'German',
    ua: 'Ukrainian',
    pt: 'Portuguese',
};
```
метод 'getLocales' к-й будет принимать объект с параметрами вида:
```javascript
    getLocales({ ignore: ['en', 'ru', 'es'], select: ['ru'], sort: 'ask|desk' })
```
и возвращать объект в соответствии со следующей логикой:
* ignore - задает список локалей, к-е НЕ должны быть возвращены
* select - задает список только тех локалей к-е должны быть возвращены
* sort - возвращет объект с отсортированными полями по "ask" или "desk" 

Пример работы:

```javascript
localesManager.getLocales({ ignore: ['en', 'ru', 'es'] });  
=> fr: 'French',
   cn: 'Simplified Chinese',
   jp: 'Japanese',
   de: 'German',
   ua: 'Ukrainian',
   pt: 'Portuguese'
   
localesManager.getLocales({ select: ['en', 'ru', 'es'] });  
=> en: 'English',
   ru: 'Russian',
   es: 'Spanish'

localesManager.getLocales({ select: ['en', 'ru', 'es'], ignore: ['en'] });
=> ru: 'Russian',
   es: 'Spanish'
   
localesManager.getLocales({ sort: 'ask' });
=> en: 'English'
   fr: 'French'
   de: 'German'
   jp: 'Japanese'
   pt: 'Portuguese'
   ru: 'Russian'
   cn: 'Simplified Chinese'
   es: 'Spanish'
   ua: 'Ukrainian'

localesManager.getLocales({ sort: 'desk' });
=> ua: 'Ukrainian'
   sp: 'Spanish'
   cn: 'Simplified Chinese'
   ru: 'Russian'
   pt: 'Portuguese'
   jp: 'Japanese'
   de: 'German'
   fr: 'French'
   en: 'English'
```   
       
       
       
       
       
       
       
       
       
       
       
      