# zepto.tapClick

Simple zepto.js plugin, which sets the event to either 'tap' if mobile platform is detected, or 'click' otherwise.

## Requirements

This plugins requires that zepto with touch and detect modules is loaded before.

## Usage

```javascript
$('.selector').tapClick(function() { alert('tapped or clicked!') })
```

## Development

Tests are mocha + sinon, you run them with `make test`.

## Copyright

License is MIT, see LICENSE for details.

