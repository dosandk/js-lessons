#### Objects-2 Homework

* Создать функцию-конструктор, к-я на вход будет принимать объект вида: `{ key: value }`, а возвращать -
объект с дополнительными полями и методами:  
- поле `fields` - будет содержать все значения переданного объекта
- метод `getValue` - к-й будет принимать объект с параметрами вида:

```javascript
   getValue({ ignore: ['value1', 'value2', 'value3'], select: ['value5'], sort: 'ask|desk' })
```
и возвращать объект в соответствии со следующей логикой:
- ignore - задает список значений, к-е НЕ должны быть возвращены
- select - задает список только тех значений к-е должны быть возвращены
- sort - возвращет объект с отсортированными значениями полей по "ask" или "desk"

* Создать функцию-конструктор, к-я будет создавать объекты, содержащие информацию о прямоугольниках.
 Ф-ция конструктор должна принимать 2 парамертра - высоту и ширину прямоугольника и возвращать объект,
 содержащий переданные значение, а также 2 метода для получения периметра и площади, созданного
 прямоугольника.