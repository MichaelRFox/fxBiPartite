# fxBiPartite Change Log

>  **Tags:**
> 
> - :boom:       		[Breaking Change]
> - :eyeglasses: 		[Spec Compliance]
> - :rocket:     		[New Feature]
> - :bug:        		[Bug Fix]
> - :pencil:       		[Documentation]
> - :house:      		[Internal]
> - :hammer_and_wrench:	[Improvement]

# v2.0.0
## date
- :boom: Changed library to expose a singe class object with the required items (data and container) in the constructor. This will require code to be changed from:
```javascript
fxBiPartite.biPartite
	.data(data)
	.container(document.getElementById('myDiv'))
	.show();
```
to:
```javascript
new biPartite(data, document.getElementById('myDiv'))
	.show()
```
- :hammer_and_wrench: Updated dependencies to newest version of d3.js (v7).
- :bug: fixed biPartite.container() default to *undefined*.
- :bug: fixed percentage transition during *mouseover* and *mouseout* events.
- :bug: fixed bug in biPartie.sort('alpha')
- :bug: Fixed undeclared variable in *containerListener*.
- :eyeglasses: Renamed .babelrc to .babelrc.json.
- :pencil: Added jsDoc documentation.
- :house: Converted test harness from tape to jest - better ES module support.

# v1.0.1
## 13 Oct, 2020
-  Added demo

# v1.0.0
## 9 Aug 2020
- Initial commit